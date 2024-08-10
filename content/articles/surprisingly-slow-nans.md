---
title: "Surprisingly Slow NaNs"
date: 2024-08-08T21:22:54-07:00
description: "A case of unexpected performance regression."
tags: [c++, floating-point, performance, in-house-engine]
---

A while ago, I had to debug a strange performance issue in an in-house engine I
was using, and I was quite surprised when I discovered the cause. The tl;dr is
that it involved some unexpected but innocuous-seeming NaNs that ended up
tanking the performance, and not just from the fact that
[operations involving NaNs are much slower than finite floats](https://randomascii.wordpress.com/2012/05/20/thats-not-normalthe-performance-of-odd-floats/)
on some architectures.

Story time!

The code in question was part of the movement / interaction system, and involved
performing a few raycasts against the collision system to find a reference point
for movement. There would be some noticable hitches / frame hiccups when this
system was active, but it was relatively new code (in a relatively new codebase)
so bugs and unoptimized code paths were not unexpected. In particular, I thought
that this may have just been due to the raycast collision code itself -- at the
time, raycast acceleration had not been implemented yet, meaning we'd have to do
a naive per-triangle intersection.

However, the hitching remained even after we implemented raycast acceleration
(with a tile-based bounding box tree -- essentially a simple BVH). After
profiling it, I noticed a consistent pattern: it would hitch during the _first
frame after an input event_, but was fine during subsequent frames while the
input was still active (even though this code ran every frame). Then, if the
input was released and re-activated, it'd hitch again! And the raycast was
taking upwards of _24ms_ when it hitched, which was clearly unacceptable if we
wanted to hit 60 fps.

The suspect function seemed fairly reasonable at first glance: it just traced a
ray in the direction of a 3D translation, and took the shortest distance of
allowable travel (a bit of a makeshift collision check). Can you spot the
potential issue?

```c++
float RaycastDistance(const float3& origin, const float3& translation) {
    const auto hit = TraceRay(Ray(origin, normalize(translation)));
    return hit ? std::min(length(translation), hit.distance) : length(translation);
}
```

Hint: there's a potential NaN in there! The `translation` param comes from a
position delta, but that delta is 0 for the first frame of an input (the
position doesn't change when there's no movement), and `normalize(translation)`
divides by the length of the vector, which -- you guessed it -- is 0. Boom, NaN.

But why did this cause a _performance issue_ instead of just giving bad output?

Looking down the control flow of the raycast code led me down to the bounding
box (AABB) intersection routine, which just tests the ray against each box face
/ slab. It turned out that
[NaN's comparison rules](https://en.wikipedia.org/wiki/NaN#Comparison_with_NaN)
meant that all the early-exit tests would fail, and thus **every ray-box
intersection test would return a hit**, resulting in a raycast **intersecting
with every node in the BVH**. Oof!

The fix was extremely simple: just don't attempt to raycast when the
`translation` distance is zero.

```c++
float translation_dist = length(translation);
if (translation_dist > 0) {
    float clamped_dist = RaycastDistance(origin, translation);
    // Rest of the code...
}
```

I also added explicit NaN checks to the bounding box test code (for example,
using [Abseil's DCHECK](https://abseil.io/docs/cpp/guides/logging#CHECK)).

```c++
bool HasNaN(const float3& vec) {
    return std::isnan(vec.x) || std::isnan(vec.y) || std::isnan(vec.z);
}

std::optional<Hit> BoundingBox::Intersect(const Ray& ray) {
    DCHECK(!HasNaN(ray.origin));
    DCHECK(!HasNaN(ray.direction));

    // ... Rest of intersection code ...
}
```

Of course, this would only catch NaNs in this specific code path. It's possible
to get wider signaling when floating point operations result in NaNs or
infinities using APIs like
[`feenableexcept`](https://linux.die.net/man/3/feenableexcept) or
[`_controlfp_s`](https://learn.microsoft.com/en-us/cpp/c-runtime-library/reference/controlfp-s?view=msvc-170)
if you're on Windows, but this can often result in false positives, especially
if you use third party libraries that may generate NaNs in internal calls, so
using these wider techniques may require a bit more finesse.
