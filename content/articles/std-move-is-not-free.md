---
title: "std::move() Is (Not) Free"
date: 2025-03-27T21:04:55-07:00
description: "Understanding move semantics at runtime."
tags: [c++]
params:
  articleNumber: 12
---

When I first learned of `std::move()`, it felt magical. We can just move objects
around efficiently without dealing with pointers? Wow! So, like every C++11
newcomer, I got to work using it wherever I could, and didn't think much more of
it. Move all the things, right?

_But wait_, are moves really free? I don't know if I was the only one to have
that misconception, but it took me a bit to fully internalize not just how they
work at the language level (this is the first thing you typically learn) but
what the code is actually doing at runtime and how I should conceptualize it
(spoiler: "move" isn't really accurate).

## How does `std::move()` work?

There are many [articles](https://abseil.io/tips/77) and
[StackOverflow posts](https://stackoverflow.com/a/27026280) already that explain
how `std::move()` works and why you should use it, along with its nuances[^1],
so I won't go into detail here.

[^1]:
    Nuances like move construction vs assignment, rules around `const`, and the
    valid-but-unspecified state of moved-from objects.

But as a quick refresher: you likely know that `std::move()` doesn't actually
move anything by itself, it just casts its argument to an rvalue (specifically
an [xvalue](https://en.cppreference.com/w/cpp/language/value_category),
"eXpiring" value). A simplified implementation could be something like:

```c++
template<typename T>
constexpr std::remove_reference_t<T>&& move(T&& t) noexcept
{
    return static_cast<std::remove_reference_t<T>&&>(t);
}
```

So it's essentially just a glorified `static_cast`, but it allows the compiler
to reuse the object's internal resources and avoid a copy. `std::move()` is a
way to tell the compiler, "I'm done with this object, so feel free to
cannibalize its resources efficiently." The object itself isn't really ever
"moved" at all; it remains at the same address and will soon be destroyed, but
its resources can be efficiently reused by the new moved-to object.

## Moves can be efficient

This "cannibalizing" of internal resources is what makes moves usually more
efficient than copies, specifically for objects that have heavy and dynamic
internal resources, like many of the common STL data structures.

The classic example is `std::vector`, which of course can represent an
arbitrarily large set of data, but the _vector object itself_ (not the data it
owns) is internally made up of just 3 pointers (vector start, vector end, and
the end of the allocated region). Copying the vector is expensive since all the
allocated data also needs to be copied, but when moving the only things that
need to be copied into the new vector object are the 3 pointers -- no deep
copying, no new allocations.

If you're curious, you can even
[see this in action by looking at the generated assembly instructions](https://godbolt.org/z/vqroo3Pj6)!

The story is similar for things like `std::string`, `std::unordered_map`, and
likely many of the other data structures you work with.

## Moves are sometimes just copies

But what if the object doesn't have such internal resources? Consider a `struct`
that just has a bunch of primitive and aggregate members:

```c++
struct Pose {
    struct Quat {
        float a, b, c, d;
    };

    float x, y, z;
    Quat q;
};
```

Unlike in the previous examples, there isn't an internal pointer to some
far-away allocated data that can be easily copied into the new object; all the
data is packed into the struct itself, and can't be magically moved. In this
case the move isn't faster than a copy -- in fact, it's
[basically identical at the assembly level](https://godbolt.org/z/Y1xs5v7xc).

So for types with no dynamic resources, moving them is equivalent to copying
them[^2]. I like to think about move semantics as being closer to a
"**destructive shallow copy**" -- they're only more efficient when there's
_depth_ to reuse, typically in the form of separate allocations that can have
ownership transferred cheaply.

[^2]: Hence why "move" is a bit of a misnomer.

But what if you don't want to think about it? Using `std::move()` on
plain-old-data types usually isn't any worse than letting the copy happen,
except for one important case: copy elision.

## Don't std::move() your return values

The
[details of copy elision](https://stackoverflow.com/questions/12953127/what-are-copy-elision-and-return-value-optimization)
are described elsewhere, but essentially the C++ standard allows compilers to
perform copy elision under certain circumstances, some of the most common being
when returning values (<abbr title="Return Value Optimization">RVO</abbr> and
<abbr title="Named Return Value Optimization">NRVO</abbr>). Instead of
constructing temporaries and copying them around, the object can be constructed
directly at the final return memory location in the caller's stack space! Notice
that this _entirely avoids copying or moving_, so it's strictly better than a
move. And starting with C++17, RVO in particular is "guaranteed".

However, adding an `std::move()` when returning forces a move and _breaks the
requirements for copy elision_, so it's strictly a performance hindrance when
returning a local:

```c++
Geofront FindNERV() {
  Geofront geo = GetTokyo3();
  // Don't do this!
  // return std::move(geo);
  // Do this instead.
  return geo;
}
```

Removing the `std::move()` here will allow NRVO elision, but even if the
compiler can't elide it for some reason it will fall back to a move (not a
copy), so you should almost always omit the explicit `std::move()`.

> [!NOTE]
>
> One exception is if you're moving-from a _member field_ instead of a local, in
> which case an explicit `std::move()` at time of return is required to avoid a
> copy.
>
> ```c++
> class Eva {
>   public:
>     ATField Consume() {
>         // std::move is required here to avoid a copy.
>         return std::move(field_);
>     }
>
>   private:
>     ATField field_;
> };
> ```
