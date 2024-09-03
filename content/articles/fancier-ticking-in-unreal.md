---
title: "Fancier Ticking in Unreal"
date: 2024-09-02T16:46:05-07:00
description: "Controlled updates during the game loop."
tags: [unreal-engine, ue5, c++]
---

Unreal's ticking system is a core part of the engine, fulfilling the role of the
classic _game loop_. Despite being so central, though, I've found it to be a bit
complex, with lots of flags and knobs that aren't always very well documented.
And while there are several resources that explain how to do basic ticking,
there are a few fancier techniques that don't have as much coverage, which this
page aims to help explain.

I'll primarily be focusing on usage in C++, but many of these options are also
available in Blueprint (albeit not all). At the time of writing, the latest
version of Unreal is 5.4, so that's what this will be based on.

The [official documentation on Actor ticking][1] is a good introduction to the
core concepts.

## Tick configuration

If you've used Unreal for any length of time, you've probably run across C++
code that enables and configures ticking for an Actor or ActorComponent. This is
typically done inside the constructor so that it applies to the
<abbr title="Class Default Object">CDO</abbr> and is set correctly before
`BeginPlay`. It'll look something like this:

```c++
AMyActor::AMyActor()
{
    PrimaryActorTick.bCanEverTick = true;
    PrimaryActorTick.bStartWithTickEnabled = true;
    PrimaryActorTick.TickInterval = 1.0f;  // Only tick every second.
}
```

This `PrimaryActorTick` field is an instance of an `FTickFunction` struct, which
is the core API for configuring ticking in Unreal. Actors and ActorComponents
define a default member struct (`PrimaryActorTick` and `PrimaryComponentTick`,
respectively, which are slightly specialized subclasses of `FTickFunction`) and
register it with the engine during `BeginPlay`.[^1]

[^1]:
    You can also [define your own `FTickFunction`][1] and register it yourself,
    or even have more than one, but in most cases the default primary tick
    function should suffice.

You might see several other functions present on Actors and ActorComponents that
refer to ticking (such as `AActor::SetActorTickEnabled` or
`AActor::CanEverTick`), but most of these are just convenience methods that
operate on the respective `FTickFunction`, which is the source of truth.

The following are some of the most common or interesting fields you can set on
an `FTickFunction` (but this list is not exhaustive). The defaults are the same
for both Actors and ActorComponents, unless otherwise specified.

| Field                   | Default (Actor / ActorComponent)     | Usage                                                                                                                                      |
| ----------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `bCanEverTick`          | _false_                              | Whether ticking is ever possible. If this is false, the other flags are ignored. Think of this as a setup flag rather than a runtime flag. |
| `bStartWithTickEnabled` | _true_                               | Whether ticking begins upon creation.                                                                                                      |
| `TickInterval`          | _0.0f_                               | The interval, in seconds, between ticks. If <= 0, or less than frame time, will tick every frame.                                          |
| `TickGroup`             | _TG_PrePhysics_ / _TG_DuringPhysics_ | The coarse tick group during which to tick. Semantically important.[^2]                                                                    |
| `bHighPriority`         | _false_                              | Whether to run this tick first inside the tick group (see section below on controlling tick order).                                        |
| `bRunOnAnyThread`       | _false_                              | Whether to parallelize this tick with other "async ticks" (see section bellow on parallelization).                                         |

[^2]:
    The [Unreal docs][1] give some examples of how you might choose which tick
    group to run in, depending on what you need. For example, tick logic that
    moves Actors with colliders should run in _TG_PrePhysics_ so that they
    affect the physics simulation.

Some of these are fairly self-explanatory, others less so (which we'll cover in
later sections).

## Tick methods

The actual methods that get called on Actors and ActorComponents look something
like this. For whatever reason, the names and signatures are different.

```c++
// For Actors
void AMyActor::Tick(float DeltaTime)
{
    Super::Tick(DeltaTime);
    // ...
}

// For ActorComponents
void UMyComponent::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
    Super::TickComponent(DeltaTime, TickType, ThisTickFunction);
    // ...
}
```

In either case, `DeltaTime` is the time in seconds since the last tick (and this
will be affected by your `TickInterval`, if it isn't 0).

## Toggling tick at runtime

There are cases where your tick function will only _sometimes_ need to do useful
work. For example, perhaps you have an ActorComponent that does a visual
animation by repeatedly modifying a material parameter, but it only needs to do
this when the animation is active.

For performance reasons, instead of just early-exiting when the animation isn't
active, you can dynamically enable and disable ticking using
`SetActorTickEnabled` and `SetComponentTickEnabled`.[^3]

[^3]:
    You might be tempted to try using `bCanEverTick` to turn ticking on/off
    dynamically at runtime, but this doesn't work, as there's a bit of extra
    bookkeeping that needs to be updated.

```c++ {hl_lines=[10, 23]}
UMyAnimationComponent::UMyAnimationComponent()
{
    PrimaryComponentTick.bCanEverTick = true;
    // Start with ticking off.
    PrimaryComponentTick.bStartWithTickEnabled = false;
}

void UMyAnimationComponent::BeginAnimation()
{
    SetComponentTickEnabled(true);
    ResetAnimationParams();
}

void UMyAnimationComponent::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
    Super::TickComponent(DeltaTime, TickType, ThisTickFunction);
    // Do the animation ...
    AnimationMaterial->SetScalarParameterValue(FName("Color"), GetLerpedColor());

    // Disable tick once done.
    if (IsAnimationDone(DeltaTime))
    {
        SetComponentTickEnabled(false);
    }
}
```

## Controlling tick order

Sometimes you'll want to control the order that Actors and ActorComponents tick
relative to each other because there's some dependency between them (either
explicit or implicit).

### Tick groups

The most common way to control tick timing is via _tick groups_, which let you
assign the "phase" of the frame you want to tick in. While a bit coarse, this
gives you a simple way to control when ticks occur. The different available tick
groups have important consequences around how up-to-date physics and camera
state are, among other things, so controlling order isn't the only reason you
might want to change tick groups. The [Unreal docs][1] give more details on the
available tick groups and when you might want to use them.

The default tick group is different for Actors and ActorComponents:

- Actors: `TG_PrePhysics`
- ActorComponents: `TG_DuringPhysics`

### Prerequisites

Sometimes you might need more precise control of tick order, even within the
same group. For this, both Actors and ActorComponents have the ability to add
_prerequisite Actors and ActorComponents_ via the `AddTickPrerequisiteActor` and
`AddTickPrerequisiteComponent` methods.

These take an actual `AActor*` or `UActorComponent*` pointer respectively, and
configure the ticking system so that the prerequisite Actor/Component gets
ticked first. This can usually be done in `BeginPlay` or even later at runtime,
as new Actors or ActorComponents are created. For example, here's how you'd make
an ActorComponent tick after its owner Actor.

```c++
void UMyComponent::BeginPlay()
{
    Super::BeginPlay();
    AddTickPrerequisiteActor(GetOwner());
}
```

### High priority

The last way you can control ordering is by setting certain tick functions as
_high priority_.

There are two ways to do this: either set `bHighPriority`, or call
`SetPriorityIncludingPrerequisites`. If your Actor/Component has prerequisites,
it's usually best to set priority using `SetPriorityIncludingPrerequisites`
after configuring said prerequisites.

```c++
UMyComponent::UMyComponent()
{
    PrimaryComponentTick.bCanEverTick = true;
    // Set high priority on the tick function.
    PrimaryComponentTick.bHighPriority = true;
}

void UMyComponent::BeginPlay()
{
    Super::BeginPlay();
    AddTickPrerequisiteActor(GetOwner());
    // Or set high priority after configuring prerequisites.
    PrimaryComponentTick.SetPriorityIncludingPrerequisites(true);
}
```

The result is very simple: for each tick group, tick functions are separated
into two sets, normal priority or high priority, and the high priority ones are
executed first.

### Actor/Component tick order

At a high level, there's a precedence between the different ways of controlling
tick order:

- Actor/Component prerequisites are most important, and _can even override tick
  groups_.
- Next, `TickGroup` controls the tick group a tick function runs in.
- Finally, `bHighPriority` controls when ticks run within a tick group (either
  in the "high priority" set, or normal set).

It's important to note that generally **there is no inherent tick ordering
between Actors and their ActorComponents**! If you need guaranteed ordering, you
should use one of the techniques above to configure it.

The main exception to this are _SceneComponents_, which automatically add their
parent attachments as prerequisites, causing parent SceneComponents to tick
before children.

## Parallel tick

Normally, tick functions are called synchronously on the game thread, one at a
time. Naturally, this can limit performance when there's a lot of work to do.

Unreal lets you configure some of your tick functions so that they execute
_asynchronously_ and _in parallel_. You can opt into this by setting
`bRunOnAnyThread` to `true`, which will cause Unreal to run your tick functions
inside parallel async tasks. As with any kind of multithreading, this requires
care to not run into synchronization issues, so you should only use it when
necessary.

Note that Unreal will still **wait for your tick to finish** before moving on to
the next tick group if it runs out of other non-async tick functions to run (so,
your async tick still can't take longer than a frame without causing hitching).
There's an additional field you can use, `EndTickGroup`, to control when Unreal
will block on your tick function's completion (by default, this is the same as
whatever you set `TickGroup` to).

Here's a simple example:

```c++
UMyComponent::UMyComponent()
{
    PrimaryComponentTick.bCanEverTick = true;
    // This component's tick will be called asynchronously and in parallel.
    // It will be started during TG_PrePhysics and will have until TG_PostUpdateWork to complete its work.
    PrimaryComponentTick.TickGroup = TG_PrePhysics;
    PrimaryComponentTick.EndTickGroup = TG_PostUpdateWork;
    PrimaryComponentTick.bRunOnAnyThread = true;
}
```

## FTickableGameObject

At times you may be working with a class that isn't an Actor or ActorComponent
(for example, a plain old C++ class) but which you want to tick. Unreal lets you
enable ticking for any C++ class using `FTickableGameObject`.[^4] Simply inherit
from it and implement the two required methods `Tick` (the important one) and
`GetStatId` (used for performance monitoring), and voila.

[^4]:
    Incidentally, this is used internally by the engine to implement ticking for
    some common UObject classes like `UTickableWorldSubsystem`.

Here is a basic example:

```c++
#include "Tickable.h"

class FMyTickableObject : public FTickableGameObject
{
public:
    virtual void Tick(float DeltaTime) override
    {
        // ...
    }

    virtual TStatId GetStatId() const override
    {
        RETURN_QUICK_DECLARE_CYCLE_STAT(FMyTickableObject, STATGROUP_Tickables);
    }
}
```

A few important notes and limitations to keep in mind:

- `FTickableGameObject` doesn't use a typical `FTickFunction` under the hood,
  which means you'll need to implement some tick features yourself (for example,
  since there is no `TickInterval` you'll need to throttle yourself by taking
  into account `DeltaTime`, if you need that feature).
- Tick groups aren't supported; instead, all `FTickableGameObject` objects are
  ticked together _after_ the normal tick groups at the end of the frame. This
  means, for example, that you can't affect the current frame's physics from an
  `FTickableGameObject`.
- By default, UObjects that inherit from `FTickableGameObject` will run their
  tick functions even in the CDO. To avoid this, you can override `IsTickable`
  or `GetTickableTickType` and check the object's flags to filter out CDOs.

[1]:
  https://dev.epicgames.com/documentation/en-us/unreal-engine/actor-ticking-in-unreal-engine
