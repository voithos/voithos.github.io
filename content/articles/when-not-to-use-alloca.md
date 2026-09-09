---
title: "When (Not) to Use alloca()"
date: 2026-09-08T21:43:11-07:00
description: "Alternatives to the Siren song of allocation."
tags: [c++, memory]
params:
  articleNumber: 15
---

Recently (or rather, a few months ago) I ran across the use of `alloca()` in
some engine internals. For those unfamiliar like I was,
[`alloca()`](https://man7.org/linux/man-pages/man3/alloca.3.html) is a C
function that allows you to dynamically allocate memory on the stack -- in other
words, what `malloc()` is for the heap, `alloca()` is for the stack.
Unfortunately, there's some nuance in how it works, and a good deal of
plain-old-footguns, so let's take a deeper look.

## Why would you use it?

Conceptually, `alloca(size_t size)` allocates the passed number of bytes in the
stack frame and could be implemented by just bumping the stack pointer (modulo
some bookkeeping). This is faster than `malloc()` and also means you don't have
to explicitly `free()` the resulting memory since it will just get cleaned up
when returning from the function (this is where the naming comes from, the "a"
meaning "automatic").

> [!NOTE]
>
> There is a feature in C99 known as Variable Length Arrays which can
> conceivably be used to similar effect; however, I won't go into detail here,
> as they have similar issues to `alloca()` and are not present in C++ outside
> of compiler extensions.

Common use cases for such a thing would be for transient values, things like
intermediate string concatenation results, index arrays, etc. The instance I ran
across was using `alloca()` for an internal temporary string, akin to:

```c++
void TouchFile(const Str& folder, const Str& file) {
  size_t n = folder.length() + 1 + file.length() + 1;
  char* path = static_cast<char*>(alloca(n));
  // memcpy ...
  // path is only used inside this fn.
}
```

## Problems

While seemingly convenient, it turns out there are several issues with this
function.

First and most pedantic of all, it's not part of any C or C++ standard and is
thus not portable; it only exists as compiler extensions. In fact, because of
its nature, it _has to_ be a compiler extension (cannot be implemented as a
library, which also means you can't override it yourself).

A more serious issue is that it fails catastrophically (stack overflow) if the
allocation fails, and there is no form of error recovery. This can lead to
security exploits, especially if the allocation size is externally supplied.
This also doesn't play nicely if the code is running on a worker thread, which
engines often configure with less stack space (<1 MB) compared to the main
thread. Of course, other approaches can also cause stack overflows, but being
dynamic, `alloca()` has a higher likelihood of allocating large blocks when not
used conservatively.

As a prime example, one of `alloca()`'s gotchas is that the allocated memory is
not "freed" at block scope level but rather when the enclosing function returns.
Calling it in a loop will accumulate allocations -- and it's possible to run
into this unintentionally due to function inlining, although compilers try to
guard against this.

```c++
void TouchAll(const Str& folder, Span<Str> files) {
  for (const Str& f : files) {
    size_t n = folder.length() + 1 + f.length() + 1;
    // OOPS: Every allocation remains until we return from TouchAll.
    char* path = static_cast<char*>(alloca(n));
    // ...
  }
}
```

Despite its at-a-glance convenience, the above downsides are significant enough
to warrant looking for alternatives.

## Better alternatives

The simplest alternative is the boring one: don't allocate dynamically if you
can help it. In many cases you can just use a fixed size array local and check
to make sure your data fits. A fixed array keeps the limit bounded and highly
visible in code, at the cost of a bit less flexibility.

```c++
void TouchFile(const Str& folder, const Str& file) {
  // ...
  char pathBuf[1024];
  if (n > sizeof(pathBuf)) {
    // Handle the overflow case...
  }
  char* path = pathBuf;
  // memcpy ...
}
```

A better solution could be a dedicated container type that combines a fixed
buffer with heap fallback, like `absl::InlinedVector`. This allows you to
optimize for the common case while automatically handling larger edge cases.

```c++
void TouchFile(const Str& folder, const Str& file) {
  absl::InlinedVector<char, 1024> path;
  // ...
}
```

If you want to avoid hitting `malloc()` / the system allocator entirely, you
could use a separate scratch allocator, something like a per-frame
bump-allocated arena that can easily be cleared for the next frame, or a
thread-local scratch to avoid contention.

And so far we've only been discussing "general" memory; if you know the type of
object you want in advance, something like an object pool may be better (no
fragmentation, arbitrary lifetime, but introduces bookkeeping).

Altogether, the alternatives to `alloca()` cover most of its potential use cases
with fewer downsides, leaving for it only the remotest edge cases: logging
during allocation failures, or before custom allocators are set up, etc --
essentially, situations where other approaches are unsuitable due to an
uninitialized or degraded environment.
