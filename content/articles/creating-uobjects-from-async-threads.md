---
title: "Creating UObjects From Async Threads"
date: 2023-05-06T16:58:57-07:00
description: "Managing the gotchas around Unreal's object system."
tags: [c++, unreal-engine]
---

When developing a project in Unreal, for performance reasons you may find
yourself needing to do work on background threads. This could be an
`FRunnableThread`, an `AsyncTask()`, or even UE5's fancy new
[Tasks System](https://docs.unrealengine.com/5.0/en-US/tasks-systems-in-unreal-engine/)
-- any code that isn't executing on the game thread.

As a motivating example, perhaps you need to dynamically load and process some
mesh / texture data at runtime. Most of the processing work is thread-agnostic,
but what if you need to create **UObjects** to represent the data?

## Approach 1: Don't do it

The common adage is to only work with UObjects on the game thread, and this may
ultimately be the simplest and most reliable approach, and perhaps the _only_
approach in older versions of Unreal.

You can still do most non-UObject related processing in the background, and only
send data over to the game thread when ready.

```c++
AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [] {
    // ... Do work ...

    // Send to the game thread.
    AsyncTask(ENamedThreads::GameThread, [Data = MoveTemp(Data)] {
        // Create UObjects, use the data, etc
    });
});
```

## Approach 2: Do it, but carefully

It turns out that recent versions of Unreal _do_ allow you to create UObjects
from async threads. Here's an example that creates a transient `UTexture2D`.

```c++
AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [] {
    UTexture2D* Texture = NewObject<UTexture2D>(GetTransientPackage(),
            MakeUniqueObjectName(GetTransientPackage(), UTexture2D::StaticClass(), TEXT("MyTexture")),
            RF_Transient | RF_TextExportTransient | RF_DuplicateTransient);
    // ...
});
```

However, there are several caveats to doing this, and they generally revolve
around the garbage collector.

### Caveat #1: Clear the async flag

When UObjects are created outside the game thread, Unreal will detect this and
automatically add a special "async" flag to the object to prevent it from
getting prematurely garbage collected. This flag needs to be cleared after the
UObject is moved to the game thread and attached to other objects, or else it
will never get garbage collected.

```c++
AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [] {
    UTexture2D* Texture = NewObject<UTexture2D>(...);

    AsyncTask(ENamedThreads::GameThread, [Texture]() mutable {
        Texture->ClearInternalFlags(EInternalObjectFlags::Async);
    });
});
```

### Caveat #2: Guard against GC interference

If you try to create a UObject from a background thread while a GC is currently
running, you'll hit an assertion. You must instead use an `FGCScopeGuard` to
lock the new object creation. Ideally, this scope should be as small as possible
to not block GC for too long.

```c++
AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [] {
    UTexture2D* Texture;
    {
        FGCScopeGuard GCGuard;
        Texture = NewObject<UTexture2D>(...);
    }
    // ...
});
```

### Aside: Beware GC bugs (UE4)

In Unreal 4.27 (and perhaps in earlier versions of UE4), the garbage collector
will try to schedule some collection tasks on the TaskGraph (it schedules on
both the "background" and "normal" thread priority groups). This has an
unfortunate consequence for users of the engine: if you're launching multiple
concurrent tasks of your own that each potentially use `FGCScopeGuard`, it's
possible to get into a deadlock state:

- The game thread will be blocked while doing garbage collection, as the garbage
  collector has queued tasks on the "background" and "normal" priority thread
  groups and is now waiting for them to start and run to completion.
- Meanwhile, your own tasks are already running on those same thread groups and
  are waiting for the GC to unlock so they can create UObjects.

Neither can make progress; the GC tasks can't start because the threads are
already in use, but your own tasks can't finish because they're waiting for the
GC. Thus, deadlock.

To avoid this, you can either launch your tasks with
`ENamedThreads::AnyHiPriThreadNormalTask` (as it's the only priority group that
does not conflict with the GC's work), or just go with approach #1 and don't
create UObjects on async threads to begin with.

Thankfully, this has been fixed in UE5 and no longer causes a deadlock. The fix
may be easy to backport to 4.27 if desired -- it largely consists of an
[updated `CollectReferences()` method](https://github.com/EpicGames/UnrealEngine/blob/cdaec5b33ea5d332e51eee4e4866495c90442122/Engine/Source/Runtime/CoreUObject/Public/UObject/FastReferenceCollector.h#L554).
