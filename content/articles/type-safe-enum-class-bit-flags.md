---
title: "Type-safe Enum Class Bit Flags"
date: 2024-12-21T14:59:55-08:00
description: "Improved bit flags for scoped enums."
tags: [c++]
---

I previously wrote an article about [defining bitwise operators on scoped
enums]({{< ref "/articles/enum-class-bitmasks" >}}) in order to use them as bit
flags. While the original approach (using either macros, or
[SFINAE](https://en.wikipedia.org/wiki/Substitution_failure_is_not_an_error))
works, there's a different approach that avoids some of the downsides and is
just as (if not more) convenient.

## Type safety

C++ scoped enumerations (`enum class`) have several benefits over traditional
C-style enums, with one of the most important being **type safety**. Scoped
enums provide safety not only between enum and integer types, but also between
discrete enum types.

Previously, to use scoped enums as bit flags, we defined bitwise operators
directly on the enum types. While convenient, this approach _breaks some of the
type safety_. Consider the following:

```c++
enum class RenderPass : uint8_t {
    None = 0,
    Geometry = 1 << 0,
    Lighting = 1 << 1,
    Particles = 1 << 2,
    PostProcess = 1 << 3,
};

void Renderer::ConfigurePass(RenderPass pass) {
    // Is `pass` a single pass or a set of passes?
}
```

When using a `RenderPass` enum value, it's unclear whether it represents a
single enumeration or a set of them, since we can easily mix the two with
bitwise operators. We could opt to always assume it's a set, but that
complicates code that would otherwise just need to care about a single value at
a time.

## Using a separate `BitFlags` type

Instead of changing how the scoped enum itself works, we can define a new
template type that "wraps" the scoped enum and allows us to treat it as a set of
flags. This has several benefits:

- **Clear distinction** in the type system between a single enum value and a set
  of flags.
- **No setup required** - it "just works" with any scoped enum out of the box.
- **Convenience methods** like `IsSet()` can be added to make common operations
  easier.

### Creating `BitFlags` instances

We can initialize `BitFlags` with zero, one, or more enum values using
initializer lists.

```c++
BitFlags<RenderPass> flags1;
BitFlags<RenderPass> flags2(RenderPass::Lighting);
BitFlags<RenderPass> flags3 = {RenderPass::Particles,
                               RenderPass::PostProcess};
```

You can even define sets of enums as `constexprs`:

```c++
constexpr BitFlags<RenderPass> kDeferredPasses = {RenderPass::Geometry,
                                                  RenderPass::Lighting};
```

### Manipulating `BitFlags`

We can define convenience methods for common operations:

```c++
if (flags1.IsSet(RenderPass::Geometry)) {
    std::cout << "Geometry pass is enabled." << std::endl;
}

flags2.Set(RenderPass::Lighting);
flags3.Clear();
```

And of course we can define common bitwise operators:

```c++
// Combine with OR.
BitFlags<RenderPass> flags4 = flags2 | RenderPass::Particles;

// Toggle with XOR.
flags4 ^= RenderPass::Lighting;

// Clear a set of flags with AND NOT.
flags4 &= ~flags3;
```

### Accessing raw values

If necessary, we can define accessors and constructors of the raw underlying
integer values, in case we need to interact with third-party or lower level APIs
(e.g. serialization). We naturally lose some safety here, so we make sure that
these methods are hard to accidentally use.

```c++
uint8_t raw_flags = flags4.ToRaw();
BitFlags<RenderPass> flags_from_raw = BitFlags<RenderPass>::FromRaw(raw_flags);
```

## The code

The full code is below, under the MIT license.

```c++
#include <bitset>
#include <ostream>
#include <type_traits>
#include <utility>

// Helper class for bitwise flag-like operations on scoped enums.
//
// This class provides a way to represent combinations of enum values without
// directly overloading operators on the enum type itself. This approach
// avoids ambiguity in the type system and allows the enum type to continue
// representing a single value, while the BitFlags can hold a combination
// of enum values.
//
// Example usage:
//
// enum class MyEnum { FlagA = 1 << 0, FlagB = 1 << 1, FlagC = 1 << 2 };
//
// BitFlags<MyEnum> flags = { MyEnum::FlagA, MyEnum::FlagC };
// flags.Unset(MyEnum::FlagA);
// if (flags.IsSet(MyEnum::FlagC)) {
//   // ...
// }
//
// flags |= MyEnum::FlagB;
// BitFlags<MyEnum> new_flags = ~flags;
template <typename T>
class BitFlags {
    using UnderlyingT = std::underlying_type_t<T>;

   public:
    constexpr BitFlags() : flags_(static_cast<UnderlyingT>(0)) {}
    constexpr explicit BitFlags(T v) : flags_(ToUnderlying(v)) {}
    constexpr BitFlags(std::initializer_list<T> vs) : BitFlags() {
        for (T v : vs) {
            flags_ |= ToUnderlying(v);
        }
    }

    // Checks if a specific flag is set.
    constexpr bool IsSet(T v) const {
        return (flags_ & ToUnderlying(v)) == ToUnderlying(v);
    }
    // Sets a single flag value.
    constexpr void Set(T v) { flags_ |= ToUnderlying(v); }
    // Unsets a single flag value.
    constexpr void Unset(T v) { flags_ &= ~ToUnderlying(v); }
    // Clears all flag values.
    constexpr void Clear() { flags_ = static_cast<UnderlyingT>(0); }

    constexpr operator bool() const {
        return flags_ != static_cast<UnderlyingT>(0);
    }

    friend constexpr BitFlags operator|(BitFlags lhs, T rhs) {
        return BitFlags(lhs.flags_ | ToUnderlying(rhs));
    }
    friend constexpr BitFlags operator|(BitFlags lhs, BitFlags rhs) {
        return BitFlags(lhs.flags_ | rhs.flags_);
    }
    friend constexpr BitFlags operator&(BitFlags lhs, T rhs) {
        return BitFlags(lhs.flags_ & ToUnderlying(rhs));
    }
    friend constexpr BitFlags operator&(BitFlags lhs, BitFlags rhs) {
        return BitFlags(lhs.flags_ & rhs.flags_);
    }
    friend constexpr BitFlags operator^(BitFlags lhs, T rhs) {
        return BitFlags(lhs.flags_ ^ ToUnderlying(rhs));
    }
    friend constexpr BitFlags operator^(BitFlags lhs, BitFlags rhs) {
        return BitFlags(lhs.flags_ ^ rhs.flags_);
    }

    friend constexpr BitFlags& operator|=(BitFlags& lhs, T rhs) {
        lhs.flags_ |= ToUnderlying(rhs);
        return lhs;
    }
    friend constexpr BitFlags& operator|=(BitFlags& lhs, BitFlags rhs) {
        lhs.flags_ |= rhs.flags_;
        return lhs;
    }
    friend constexpr BitFlags& operator&=(BitFlags& lhs, T rhs) {
        lhs.flags_ &= ToUnderlying(rhs);
        return lhs;
    }
    friend constexpr BitFlags& operator&=(BitFlags& lhs, BitFlags rhs) {
        lhs.flags_ &= rhs.flags_;
        return lhs;
    }
    friend constexpr BitFlags& operator^=(BitFlags& lhs, T rhs) {
        lhs.flags_ ^= ToUnderlying(rhs);
        return lhs;
    }
    friend constexpr BitFlags& operator^=(BitFlags& lhs, BitFlags rhs) {
        lhs.flags_ ^= rhs.flags_;
        return lhs;
    }

    friend constexpr BitFlags operator~(const BitFlags& bf) {
        return BitFlags(~bf.flags_);
    }

    friend constexpr bool operator==(const BitFlags& lhs, const BitFlags& rhs) {
        return lhs.flags_ == rhs.flags_;
    }
    friend constexpr bool operator!=(const BitFlags& lhs, const BitFlags& rhs) {
        return lhs.flags_ != rhs.flags_;
    }

    // Stream output operator for debugging.
    friend std::ostream& operator<<(std::ostream& os, const BitFlags& bf) {
        // Write out a bitset representation.
        os << std::bitset<sizeof(UnderlyingT) * 8>(bf.flags_);
        return os;
    }

    // Construct BitFlags from raw values.
    static constexpr BitFlags FromRaw(UnderlyingT flags) {
        return BitFlags(flags);
    }
    // Retrieve the raw underlying flags.
    constexpr UnderlyingT ToRaw() const { return flags_; }

   private:
    constexpr explicit BitFlags(UnderlyingT flags) : flags_(flags) {}
    static constexpr UnderlyingT ToUnderlying(T v) { return static_cast<UnderlyingT>(v); }
    UnderlyingT flags_;
};
```
