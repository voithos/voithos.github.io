---
title: "Fast Chaos Collision Toggling"
date: 2023-05-22T23:21:17-07:00
description: "The classic exchange of memory usage for CPU time."
tags: [c++, unreal-engine, ue5, physics, performance]
params:
  articleNumber: 4
---

A few weeks ago I investigated an interesting physics-related performance issue,
specific to UE5's new Chaos physics engine.

The code I was working on managed a large number of `UStaticMeshComponents`
(essentially, it's a custom hierarchical level-of-detail system) and would
frequently need to toggle visibility and collision shapes per tick. There were
some cases where we seemed to be going over our frame budget, so I took a
profile via Unreal Insights:

{{< figure src="/img/articles/physics_toggle_before.png" title="Toggling a single primitive's collision shape" loading="lazy" >}}

Each time collision shapes were toggled, physics state needed to be re-created
which took around ~150 μs on the hardware I profiled on. This may not seem too
bad at first glance, but depending on how the camera moved on that particular
frame, there could be ~hundreds of meshes that need switching and the cost would
very quickly add up and overrun the frame budget. One workaround would be to
split up the cost across multiple frames, but this would have downsides
(potential inconsistencies between collisions and rendered meshes).

This would not do!

## Investigation

I began by seeing if there were other parts of the physics API that might not
have this issue. Initially, I was using
`UPrimitiveComponent::SetCollisionEnabled` to toggle collisions, but I also
tried a couple other methods to accomplish the same thing:

- Switching collision profiles (`UPrimitiveComponent::SetCollisionProfileName`)
- Changing collision channel responses

It turned out that while some of the constant-time overhead differed between
these methods, they all ended up re-creating physics state in one way or another
and were similarly slow.

Why was it necessary for these methods to re-create physics state? Shouldn't
that essentially be a boolean toggle? After reading up on it more, and finding a
[really nice deep-dive article on how the Chaos framework is designed](https://itscai.us/blog/post/ue-physics-framework/),
it made more sense: when collision is disabled, the engine doesn't know when it
will be re-enabled, if ever, so it does the conservative thing and resets the
active physics state to avoid leaving many dormant objects with inactive physics
representations, all taking up memory.

For my usage, however, these collision shapes were very likely to be re-enabled
at a moment's notice, so I wanted to keep the physics state in place even at the
cost of a little memory.

## Fast Collision Toggling

After a good amount of code spelunking, I found a (somewhat niche) API that does
exactly what I wanted. It turns out that the Chaos physics state _does_ keep
track of per-shape collision enabled status, but this just isn't exposed
directly from a higher-level `UObject` API like e.g. `UPrimitiveComponent`.

The following is an example of quickly toggling collision on a primitive:

```c++
#include "Chaos/ParticleHandle.h"
#include "PhysicsProxy/SingleParticlePhysicsProxy.h"

void FastSetCollisionEnabled(UPrimitiveComponent* Primitive, bool bCollisionEnabled)
{
    if (!Primitive->BodyInstance.IsValidBodyInstance())
    {
        return;
    }

    FPhysicsCommand::ExecuteWrite(
        Primitive->BodyInstance.GetActorReferenceWithWelding(),
        [bCollisionEnabled](const FPhysicsActorHandle& ActorHandle)
        {
            Chaos::FRigidBodyHandle_External& Body_External = ActorHandle->GetGameThreadAPI();
            const int32 NumShapes = Body_External.ShapesArray().Num();

            for (int32 ShapeIndex = 0; ShapeIndex < NumShapes; ++ShapeIndex)
            {
                Body_External.SetShapeSimCollisionEnabled(ShapeIndex, bCollisionEnabled);
                Body_External.SetShapeQueryCollisionEnabled(ShapeIndex, bCollisionEnabled);
            }
        });
}
```

After switch to this and re-profiling, I got the following trace:

{{< figure src="/img/articles/physics_toggle_after.png" title="Wow!" loading="lazy" >}}

At its slowest, the new method was around ~3μs, which was a 50x speedup! With
that, even toggling many hundreds of meshes is doable in a single frame.
Success!
