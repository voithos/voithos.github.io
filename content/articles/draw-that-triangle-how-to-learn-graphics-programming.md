---
title: "Draw That Triangle: How to Learn Graphics Programming"
date: 2025-04-07T20:45:54-07:00
description: "A useful mindset, and practical resources."
tags: [graphics, c++, math]
params:
  articleNumber: 14
---

## Backstory

Growing up, video games had always been special. The rich visual experiences
that they offered seemed almost magical, and crafting such experiences seemed
unreachable for a mere mortal like me. But then I discovered an early version of
GameMaker and realized that making games was a learnable skill like anything
else. Over time, this interest expanded to include rich 3D visuals and the
graphics techniques used to build them.

Despite this, there weren't any prospects for a game dev or graphics job in the
small town I grew up in, so in college I focused on studying more "practical"
domains like web dev.[^1] Over the years I was able to progress in my career and
do interesting work in places like Google, and on the side I continued lightly
pursuing my graphics and game dev interests as a hobby.

[^1]:
    And I'd wager this is not an uncommon story -- a strong interest in graphics
    coupled with depressingly limited opportunities.

But I wasn't satisfied, so in 2018 I decided that I wanted to transition fully
to working on graphics, and started to accelerate my learning.

Much of it felt mysterious at first. There were buzzwords galore -- PBR, vertex
and pixel shaders, normal mapping, GI. And many things were challenging, even
though I was an experienced engineer: the various graphics APIs and their
nuances, memory management, shader authoring and debugging, and especially all
the math.

Nowadays I consider myself a proficient graphics engineer (albeit not yet a
master). I've learned a ton over the last few years, and was fortunate to find
opportunities in the industry.[^2] I'm generally very happy with my journey, but
there are a few things I would've done differently if I had to do it again now.

[^2]:
    I worked on some fascinating graphics-related simulation work at Wing
    starting in 2020, and since 2022 I've been working on exciting 3D features
    in Google Maps.

Several articles already give specific suggestions on where to start -- some of
my favorites are:

- [How to start learning graphics programming](https://interplayoflight.wordpress.com/2018/07/08/how-to-start-learn-graphics-programming/)
  by Kostas Anagnostou
- [Graphics Programming - Where To Start?](https://www.stefanpijnacker.nl/article/graphics-programming-where-to-start/)
  by Stefan Pijnacker
- [Finding Your Home in Game Graphics Programming](https://alextardif.com/LearningGraphics.html)
  by Alex Tardif

But with this article, I wanted to cover some higher level suggestions and
mindsets that I wish I had when I was starting to learn. After that, though,
I'll also list some specific resources that I found most helpful.

## A practical approach to graphics

The absolute best way to learn graphics is to **make things**, build projects,
and experiment. Starting with basic tutorials is good, but branching away from
them once you have your footing is even better.

To avoid frustration during the learning process, it does help to focus on some
fundamentals first so that you can tackle any issues that arise, but ultimately
theoretical knowledge will only get you so far; the greatest learning comes from
putting it into practice.

Along this line, in the following sections, I talk about some specific mindsets
I wish I'd had when learning.

### Don't obsess over math

I don't have a deep traditional math education -- the vast majority of my
working math knowledge has been picked up and solidified through self-study and
repeated use.

When I was starting, I thought that if I didn't have a watertight grasp of all
the things I was reading online -- linear algebra, differential and integral
calculus, projective geometry -- then I'd make some grave errors or run into
dead ends.

This is simply not true; math fundamentals are essential, but you don't have to
become a _master_ before you can start applying them.

The important thing is: whatever math you use -- cross products, transform
matrices, quaternions, etc -- try to understand it and "explain to yourself" how
it actually works. Draw diagrams, test out small code samples, and try to
visualize what's happening. By doing this, you'll slowly build more practice and
intuition. Math in graphics is never just about abstract formulas; it's a
_toolset for manipulating space, light, and movement_.

Remember that this will be an ongoing process. Don't expect to understand
everything fully on your first pass, and try not to get stuck on details that
may be fuzzy; often, learning related concepts or just trying your hand at some
implementation can clarify things.

### Keep performance in mind

More so than many other fields in software, graphics programming requires
keeping performance in mind early and often. It's crucial to understand both the
cost of your high level design decisions and the specific details of your
implementation.

Modern CPUs and GPUs are impressively powerful, but with that come more layered
and complex rendering problems.

3D data is heavyweight, and access patterns can greatly affect performance. It's
not just about asymptotic complexity, either: the constant factors can matter,
and the performance differences between techniques can make or break feasibility
of a given visual or feature.

In that sense, I find graphics code to be fairly _"low level"_. The details of
what the actual hardware is doing is important, and performance requirements
dictate that there be fewer abstraction layers, especially when it comes to data
representation. Because of this, performance requirements can drive the choice
of engine and language.

It's useful to stay curious, avoid making assumptions, and profile when
comparing different graphics techniques. But be sure to profile the right
thing![^3]

[^3]:
    Profile on target hardware when possible, and avoid comparing apples to
    oranges! But that's a topic for a separate post.

### There is no perfect way to render something

All rendering techniques are approximations of reality.

As such, they make tradeoffs between performance and accuracy; it's never
strictly better or more correct to do it one way, and what works for one project
may not work for another. A mobile game will have different needs than a AAA
console title or an offline VFX engine.

So be creative, experiment, and don't be afraid to try unique and non-physical
rendering techniques. Being able to know when to "break the rules" and try an
unconventional approach takes experience, and is a skill I'm still working on
mastering. But this is where the real magic happens!

**If it runs well and looks good, it's good!** Don't chase technical purity, and
remember that what may seem like a glaring problem for you may not even be
noticed by your players.

## Where to start

Having a better learning mindset was the main thing I wish I'd had when
embarking on my own journey, but I couldn't write a "how to learn graphics"
article without also offering some specific learning resources, so the following
sections go into some details.

### Learn C++

For the most part, C++ is still the lingua franca of graphics programming. It's
a widespread, mature language with a huge ecosystem of libraries, tools, and
resources. Many renderers and engines are built around the language, including
Unreal, and most graphics APIs have straightforward C++ SDKs.

As a language, C++ offers low-level control and manual memory management, which
is crucial for performance-critical applications while still providing
abstractions to keep software development manageable.

Practically speaking, C++ is a must for industry graphics programming work. So
how should you start learning it?

- If you're new to programming in general, I would recommend learning the basics
  in a different, higher level language like Python first before diving in to
  C++. Once ready, [learncpp.com](https://www.learncpp.com/) offers step by step
  tutorials to guide you through the details of the language.

- If you're a seasoned programmer, I recommend taking a look through
  [Learn X in Y minutes](https://learnxinyminutes.com/c++/) which can give you
  an ultra-fast crash course in the language.

- If you're already a C++ programmer, keep learning! It's a large and complex
  language, and while you won't want to (ab)use the more esoteric parts of it,
  it can be useful to become familiar with its advanced constructs. I'd
  recommend reading (and subscribing to) the tremendously useful
  [C++ Tips of the Week](https://abseil.io/tips/), which cover specific topics
  in detail.

Most importantly, write some actual graphics code! You'll learn the language
better when applying it to problems you care about.

### Real-time vs offline

A good first step is to decide whether you're interested in **real-time** or
**offline** rendering.

Real-time rendering prioritizes speed and interactivity, meaning you only have
_milliseconds_ to generate the next frame. This is the domain of video games,
VR/AR, and other real-time systems.

In contrast, offline rendering prioritizes visual fidelity with detailed
physical simulations. Each frame may take minutes or hours to render! This is
the realm of film VFX, feature animation, and high fidelity visualizations.

While the underlying theory around lighting, rendering, geometry representation,
etc, can have a lot of overlap, in practice the particular techniques that
you'll use will vastly differ between real-time and offline.

If you aren't yet sure where your interests lie, I'd recommend briefly dabbling
in both! Even though I specialize in real-time now, studying offline rendering
gave me a better understanding of how light actually works in the real world and
what my real-time approximations should be targeting. And with modern
ray-tracing hardware, the divide between real-time and offline techniques is
shrinking.

### Real-time rendering

#### Get a lay of the land

To get started with real-time graphics, it pays to begin with concept-focused
learning materials on first principles before diving into more specific modern
topics. There are many resources for this, but here are some of my favorites:

- I wholeheartedly
  recommend [Cem Yuksel's lectures on Interactive Computer Graphics](https://www.youtube.com/playlist?list=PLplnkTzzqsZS3R5DjmCQsqupu43oS9CFN).
  In my opinion, they provide a great balance of theory and practice (leaning
  more on the "practice" side), and can give you a solid whirlwind tour of
  everything from the very basics to things like global illumination, volume
  rendering, and compute shaders. The lectures were recorded in 2021, so the
  material is comparatively recent and up-to-date at the time of writing.

- If you like books, "Real-Time Rendering" by Tomas Möller, Eric Haines, and
  Naty Hoffman is very good. Fair warning, it's dense! It can act as a detailed
  step-by-step introduction for first principles all the way to advanced
  rendering techniques, but it can also work as a reference to look up specific
  details as needed.

- I'd also recommend starting a little
  [personal renderer](https://github.com/voithos/quarkGL) project in order to
  experiment with the things you learn. You can base this off either the
  lectures or chapters above, or other tutorials
  like [learnopengl.com](https://learnopengl.com/) (which is indeed
  OpenGL-specific, but nonetheless goes into many graphics fundamentals). As you
  put your learning into practice, always try to experiment beyond the material.
  Adjust parameters, predict what will happen, observe the effects and compare
  with your predictions to reinforce your understanding.

- At some point, your graphics code will inevitably misbehave, but debugging
  graphics and shaders is not as easy as code running on the CPU. This is where
  graphics debuggers like [RenderDoc](https://renderdoc.org/) are essential.
  Learn how to use them to capture a frame, inspect the draw calls, shader
  inputs/outputs, and texture contents. Compare your mental model of the
  renderer with what the frame capture tells you, and investigate any
  discrepancies to fix potential issues.

Through all of this, there's the practical question of which graphics API to
use, i.e. OpenGL or Vulkan (or even Direct3D if you're feeling brave). Any of
them can work, but OpenGL and ~similar APIs are high-level and much easier to
start with, so my recommendation is to stick with OpenGL at first.

#### Go deeper

Once you've gotten a grasp of the basics of real-time rendering, resources
become more specialized based on what you'd like to learn.

Up until now, I've recommended using an API like OpenGL. A good next step is to
try a more modern API like _Vulkan_ or _Direct3D 12_, which more closely match
how today's GPU hardware actually works and will unlock improved capabilities
and performance (at the cost of complexity). I'd suggest going through
[vkguide.dev](https://vkguide.dev/) covering Vulkan 1.3, which includes new
Vulkan features that greatly simplify how you use the API compared to older
versions.

Beyond that, you can dive into more complex rendering techniques that interest
you. There are books like the "GPU Zen" series that do deep-dives on specific
techniques, and there are hours of recorded GDC and SIGGRAPH talks on new
methods, stories of real-world implementations, and tutorials on the latest GPU
hardware features. Pick a technique -- deferred shading, SSAO, ray traced
shadows -- and implement it from scratch.

At this point, you can also begin to study sample code like the
[Vulkan examples](https://github.com/SaschaWillems/Vulkan) or
[DirectX samples](https://github.com/microsoft/DirectX-Graphics-Samples/), or
browse the code of existing renderers like
[Filament](https://google.github.io/filament/Filament.html) or
[Godot](https://github.com/godotengine/godot) to learn from solid
implementations. You can even go to the primary sources and begin
[reading new research papers on graphics techniques](https://morgan3d.github.io/advanced-ray-tracing-course/reading-research.pdf).

### Offline rendering

I'm not the most well-versed in the latest offline rendering techniques, but the
time I spent studying it definitely gave me valuable insight into how light
propagates. Some specific resources I'd recommend:

- [Peter Shirley's series on raytracing](https://raytracing.github.io/) is the
  perfect introduction and super satisfying to complete, even if you just go
  through the first "Ray Tracing in One Weekend".

- Similar to my real-time recommendation, I'd suggest playing around with a
  [toy path tracer project](https://github.com/voithos/muon) of your own while
  going through any learning materials.

- "Physically Based Rendering: From Theory To Implementation" by Matt Pharr,
  Wenzel Jakob, and Greg Humphreys is a widely recognized work, but it can be a
  bit dense to go through linearly. I've found it more useful as a reference
  resource to compare notes to when trying to understand a concept, think
  through an implementation, or to just get a refresher. Many of the concepts in
  the book can also be reused in real-time rendering!

Once you're beyond the basics here, there will be many specialized learning
materials you can find on various light-transport techniques, etc, but I'm less
familiar with these.

## Summary: build your way to understanding

Graphics is a challenging but rewarding journey, combining math, CS, art, and
creativity in ways few other disciplines do. Experiment and be creative, don't
get stuck in analysis paralysis.

Start with a basic renderer, then slowly implement more techniques and add
features. Each feature will build upon your understanding and unlock new
possibilities. And new ideas are always being explored and shared -- there will
always be more to learn!

Don't let the unknowns hold you back! Embrace the learning process. Go draw that
triangle. :)
