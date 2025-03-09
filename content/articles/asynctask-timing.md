---
title: "AsyncTask Timing"
date: 2024-08-14T22:46:32-07:00
description: "A performance consideration for async work."
tags: [unreal-engine, ue5, c++, performance]
params:
  articleNumber: 8
---

Unreal's `AsyncTask` API is great when you want to do some heavier processing
without blocking the game thread, or in general when you need to specifically
control execution on other threads (such as for RHI work).[^1] Often, you'll
need to switch between different threads while performing the work (like
[switching to the game thread to create
UObjects]({{< ref "/articles/creating-uobjects-from-async-threads" >}})).

[^1]:
    Unreal's newer
    [Tasks system](https://dev.epicgames.com/documentation/en-us/unreal-engine/tasks-systems-in-unreal-engine?application_version=5.0)
    is a bit of a higher-level API with similar capabilities -- it's much better
    at letting you define task dependencies and data flow, but is a bit less
    flexible when controlling exactly which threads you want to run on.

The ability to schedule async tasks begs the question: when do these tasks
actually begin executing?

Firstly, why would we care? Usually it doesn't matter much, since async work is
typically going to be more heavyweight but less time-sensitive. However, for
latency-sensitive use cases, async tasks can potentially introduce _frame
delays_, which can be non-ideal.

For background threads, the answer to "when does it execute" seems conceptually
straightforward: as soon as a background worker is available, the task will
begin executing on that worker.

What about when scheduling work on the game thread? Here, it's a little less
obvious. The simplest thing Unreal could do would be to have a single step
during each world tick where it would process scheduled game thread tasks, but
this would result in a worst-case delay of almost 1 frame, depending on when
exactly a task gets scheduled. Thankfully, Unreal seems to do something a bit
more sophisticated than that, and is able to trigger game thread tasks more
readily, as long as there are cycles available. The details of how this actually
works seem to be a bit opaque, so if anyone knows more about it, I'd love to
hear.

For a slightly more concrete example, consider the following scenario: I was
working on a system that involved loading runtime-fetched glTF payloads from a
cache, and processing them asynchronously into renderable UObjects (essentially
implementing a custom glTF loader). Since the results were to be rendered in
response to user input, I wanted to minimize the latency as much as possible.

It turned out that the loading code would make several round-trips between
background and game threads, something like the following (except not so
egregious, as it was written across multiple functions):

```c++
void UGltfSubsystem::Process()
{
  AsyncTask(ENamedThreads::GameThread, [] {
    // ... Gather some info from game thread ...

    AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [] {
      // ... Load glTF, part 1 ...

      AsyncTask(ENamedThreads::GameThread, [] {
        // ... Create some UObjects ...

        AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [] {
          // ... More processing ...

          AsyncTask(ENamedThreads::GameThread, [] {
            // Finally done, finalize.
          });
        });
      });
    });
  });
}
```

We can consider an analogous bit of code that simulates the work (badly) with
some sleeps on the background threads:

```c++
void LogWithLabel(const FString& Label)
{
  UE_LOG(LogTemp, Log, TEXT("%s, frame %d"), *Label, GFrameNumber);
}

void SleepHalfFrame()
{
  // My system happened to run at 120 FPS.
  FPlatformProcess::Sleep(0.5f / 120.f);
}

void UGltfSubsystem::Process()
{
  LogWithLabel(TEXT("1. AnyThread"));

  AsyncTask(ENamedThreads::GameThread, [] {
    LogWithLabel(TEXT("3. GameThread"));

    AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [] {
      LogWithLabel(TEXT("4. AnyBackgroundThreadNormalTask"));
      SleepHalfFrame();

      AsyncTask(ENamedThreads::GameThread, [] {
        LogWithLabel(TEXT("5. GameThread"));

        AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [] {
          LogWithLabel(TEXT("6. AnyBackgroundThreadNormalTask"));
          SleepHalfFrame();

          AsyncTask(ENamedThreads::GameThread,
                    [] { LogWithLabel(TEXT("7. GameThread")); });
        });
      });
    });
  });

  LogWithLabel(TEXT("2. After AsyncTask"));
}
```

Resulting in the following log output on my machine:

```
[2024.08.24-20.00.18:801][152]LogTemp: 1. AnyThread, frame 153
[2024.08.24-20.00.18:801][152]LogTemp: 2. After AsyncTask, frame 153
[2024.08.24-20.00.18:817][152]LogTemp: 3. GameThread, frame 153
[2024.08.24-20.00.18:817][152]LogTemp: 4. AnyBackgroundThreadNormalTask, frame 153
[2024.08.24-20.00.18:836][152]LogTemp: 5. GameThread, frame 154
[2024.08.24-20.00.18:836][152]LogTemp: 6. AnyBackgroundThreadNormalTask, frame 154
[2024.08.24-20.00.18:847][153]LogTemp: 7. GameThread, frame 155
```

While the specifics of the timings are going to be very incidental to my machine
and on exactly how long `FPlatformProcess::Sleep()` decided to sleep for, the
main thing this illustrates is that _switching task threads isn't free_, as
there is overhead and extra delay even with lots of computing headroom.

In my case, I decided to refactor the glTF load process to front-load everything
it needs from the game thread and pass it to the background task, avoiding
multiple round-trips.

```c++
void UGltfSubsystem::Process()
{
  LogWithLabel(TEXT("1. GameThread"));

  // ... Front-load everything we need from the game thread ...
  FGltfProcessInfo GltfProcessInfo = ...;

  AsyncTask(ENamedThreads::AnyBackgroundThreadNormalTask, [GltfProcessInfo = MoveTemp(GltfProcessInfo)] {
    LogWithLabel(TEXT("3. AnyBackgroundThreadNormalTask"));
    // ... Refactor background processing to happen in one go ...

    AsyncTask(ENamedThreads::GameThread, [] {
      LogWithLabel(TEXT("7. GameThread"));
    });
  });

  LogWithLabel(TEXT("2. After AsyncTask"));
}
```

This won't always be doable depending on your architecture or requirements, but
in my case it helped avoid a bit of extra delay!
