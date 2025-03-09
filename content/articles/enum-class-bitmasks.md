---
title: "Enum Class Bitmasks"
date: 2023-05-13T14:03:57-07:00
description:
  "Combining the convenience of bitmasks with the safety of scoped enums."
tags: [c++, unreal-engine]
params:
  articleNumber: 3
---

> [!IMPORTANT]
>
> This article describes adding bitwise operator support to scoped enums, but a
> better approach is to [use a separate template type to represent
> bitflags]({{< ref "/articles/type-safe-enum-class-bit-flags" >}}).

Enums are a core part of the C and C++ languages, and are used ubiquitously to
model logically distinct states in software systems. However, there may be times
where you want to model a set of **non-mutually-exclusive** states. There are
several other ways you could write this, including defining
[bitfields](https://en.wikipedia.org/wiki/Bit_field), using `std::bitset`, or
even using `std::vector<bool>`, but you can also use enums for this by treating
them as **bitmasks**.

For example, Vulkan defines many enums as part of its API, and these can be
combined naturally via bitwise operators:

```c++
VkPipelineColorBlendAttachmentState colorBlendAttachment = {};
colorBlendAttachment.colorWriteMask =
    VK_COLOR_COMPONENT_R_BIT | VK_COLOR_COMPONENT_G_BIT |
    VK_COLOR_COMPONENT_B_BIT | VK_COLOR_COMPONENT_A_BIT;
```

While the enum names above are a bit verbose, I find this kind of usage to be
very slick and intuitive! But these C-style enums (non-scoped enums) have a
couple issues:

- They pollute the scope they're declared in, leading to verbose naming like
  `VK_COLOR_COMPONENT_R_BIT` to avoid collisions.
- They aren't type safe!

This can lead to easy mistakes that won't get caught by the compiler:

```c++
VkBufferCreateInfo bufferInfo = {};
...
// Oops! We actually meant to set this to the similarly-named VK_BUFFER_USAGE_VERTEX_BUFFER_BIT.
bufferInfo.usage = VK_FORMAT_FEATURE_VERTEX_BUFFER_BIT;
```

In the above example, `bufferInfo.usage` should be set to values from the enum
`VkBufferUsageFlagBits`, but accidentally got set to a value from the
otherwise-unrelated `VkFormatFeatureFlagBits`, and this wasn't caught by the
compiler.

Starting with C++11, the language lets us define scoped enums, aka enum classes,
which avoid these issues. Can we use them to define bitmasks?

## Using enum classes as bitmasks

If we try to declare an `enum class` and use it as a bitmask naively, we get
compilation errors:

```c++
enum class ERenderPass : uint8_t {
    None = 0,
    Geometry = 1 << 0,
    Lighting = 1 << 1,
    Particles = 1 << 2,
};

ERenderPass Primary = ERenderPass::Geometry | ERenderPass::Lighting;
// ^ error: invalid operands to binary expression ('ERenderPass' and 'ERenderPass')
```

This makes sense, since one of the desired features of enum classes is that they
don't implicitly convert to other types (i.e. their underlying integer type)
that support bit operators.

Working around this is simple: we can just define the needed operators ourselves
and cast to integer types. We can use `std::underlying_type_t` to ensure we cast
to the right underlying type:

```c++
enum class ERenderPass : uint8_t {
    None = 0,
    Geometry = 1 << 0,
    Lighting = 1 << 1,
    Particles = 1 << 2,
};
inline constexpr ERenderPass operator|(ERenderPass Lhs, ERenderPass Rhs) {
    return static_cast<ERenderPass>(
        static_cast<std::underlying_type_t<ERenderPass>>(Lhs) |
        static_cast<std::underlying_type_t<ERenderPass>>(Rhs));
}

// Now this works!
ERenderPass Primary = ERenderPass::Geometry | ERenderPass::Lighting;
```

If we need to use more operators, we can define those too:

```c++
inline constexpr ERenderPass operator&(ERenderPass Lhs, ERenderPass Rhs) {
    return static_cast<ERenderPass>(
        static_cast<std::underlying_type_t<ERenderPass>>(Lhs) &
        static_cast<std::underlying_type_t<ERenderPass>>(Rhs));
}

ERenderPass Primary = ...;
// Now we can check bits.
if ((Primary & ERenderPass::Particles) == ERenderPass::Particles) {
    // Render particles.
}
```

And that's basically all we need, quite simple. However, defining individual
operators like this is quite tedious, and if we want our code to be more
flexible and to reduce surprise in the future, we should find a better way to
define a common set of operators for these kinds of bitmask enums.

## Preprocessor macros

Preprocessor macros should be avoided for most C++ code, but the repetition and
self-contained-ness of enum class bitmask operators makes this a reasonable
candidate for their usage.

```c++
#include <type_traits>

// Define bitwise operators for an enum class, allowing usage as bitmasks.
#define DEFINE_ENUM_CLASS_BITWISE_OPERATORS(Enum)                   \
    inline constexpr Enum operator|(Enum Lhs, Enum Rhs) {           \
        return static_cast<Enum>(                                   \
            static_cast<std::underlying_type_t<Enum>>(Lhs) |        \
            static_cast<std::underlying_type_t<Enum>>(Rhs));        \
    }                                                               \
    inline constexpr Enum operator&(Enum Lhs, Enum Rhs) {           \
        return static_cast<Enum>(                                   \
            static_cast<std::underlying_type_t<Enum>>(Lhs) &        \
            static_cast<std::underlying_type_t<Enum>>(Rhs));        \
    }                                                               \
    inline constexpr Enum operator^(Enum Lhs, Enum Rhs) {           \
        return static_cast<Enum>(                                   \
            static_cast<std::underlying_type_t<Enum>>(Lhs) ^        \
            static_cast<std::underlying_type_t<Enum>>(Rhs));        \
    }                                                               \
    inline constexpr Enum operator~(Enum E) {                       \
        return static_cast<Enum>(                                   \
            ~static_cast<std::underlying_type_t<Enum>>(E));         \
    }                                                               \
    inline Enum& operator|=(Enum& Lhs, Enum Rhs) {                  \
        return Lhs = static_cast<Enum>(                             \
                   static_cast<std::underlying_type_t<Enum>>(Lhs) | \
                   static_cast<std::underlying_type_t<Enum>>(Lhs)); \
    }                                                               \
    inline Enum& operator&=(Enum& Lhs, Enum Rhs) {                  \
        return Lhs = static_cast<Enum>(                             \
                   static_cast<std::underlying_type_t<Enum>>(Lhs) & \
                   static_cast<std::underlying_type_t<Enum>>(Lhs)); \
    }                                                               \
    inline Enum& operator^=(Enum& Lhs, Enum Rhs) {                  \
        return Lhs = static_cast<Enum>(                             \
                   static_cast<std::underlying_type_t<Enum>>(Lhs) ^ \
                   static_cast<std::underlying_type_t<Enum>>(Lhs)); \
    }
```

Using it is as simple as:

```c++
enum class ERenderPass : uint8_t {
    None = 0,
    Geometry = 1 << 0,
    Lighting = 1 << 1,
    Particles = 1 << 2,
    All = Geometry | Lighting | Particles,
};
DEFINE_ENUM_CLASS_BITWISE_OPERATORS(ERenderPass);
```

As it turns out, if you're working in **Unreal Engine**, the engine already has
this kind of macro defined for you as `ENUM_CLASS_FLAGS()`.

```c++
#include "Misc/EnumClassFlags.h"

enum class ERenderPass : uint8_t {
    None = 0,
    Geometry = 1 << 0,
    Lighting = 1 << 1,
    Particles = 1 << 2,
    All = Geometry | Lighting | Particles,
};
ENUM_CLASS_FLAGS(ERenderPass);
```

Easy!

But can we do it without a preprocessor macro?

## Template magic

It turns out this is possible via some template magic, namely by using
[`std::enable_if`](https://en.cppreference.com/w/cpp/types/enable_if) to
conditionally generate operator functions. For details, see
[this article by Anthony Williams](https://accu.org/journals/overload/24/132/williams_2228/).

```c++
#include <type_traits>

// Define a templatized struct to contain a bool constexpr that controls
// when the operators get generated.
template <typename E>
struct FEnableBitmaskOperators {
    static constexpr bool enable = false;
};

// This operator is only defined in the candidate set for a given type if the
// std::enable_if_t below evaluates to true, otherwise it is dropped.
template <typename E>
typename std::enable_if_t<FEnableBitmaskOperators<E>::enable, E> operator|(
    E Lhs, E Rhs) {
    return static_cast<E>(static_cast<std::underlying_type_t<E>>(Lhs) |
                          static_cast<std::underlying_type_t<E>>(Rhs));
}
// Rest of the operators...
```

With the following usage:

```c++
enum class ERenderPass : uint8_t {
    ...
};
// Specialize the struct to enable the operators for our enum.
template <>
struct FEnableBitmaskOperators<ERenderPass> {
    static constexpr bool enable = true;
};

// Works!
ERenderPass Primary = ERenderPass::Geometry | ERenderPass::Lighting;
```

This avoids having to rely on a preprocessor macro, but has more moving parts
and is a bit more verbose to use. Unless the team is familiar with this kind of
template specialization manipulation, the preprocessor-based approach is
probably more straightforward.
