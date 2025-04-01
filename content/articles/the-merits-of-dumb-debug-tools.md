---
title: "The Merits of Dumb Debug Tools"
date: 2025-03-31T19:33:02-07:00
description: "Getting the best value out of the simplest viable tooling."
tags: [unreal-engine, debugging, tooling]
params:
  articleNumber: 13
---

I work a lot with [3D Tiles](https://github.com/CesiumGS/3d-tiles) and, like any
complex rendering system, issues can arise that are state-specific and very
temporal, making them difficult to debug. This was especially true when working
on the initial implementation of a custom 3D Tiles renderer, which required
handling some very specific edge cases.

Now, I'm no stranger to `printf` debugging -- it's fast, ubiquitous, and
sometimes the only real option. But occasionally the state space is so large
that `printf` debugging becomes untenable, and this is where specialized
debugging tools can shine.

## The quest for editor tooling

The best game engines, in my opinion, go beyond just providing excellent runtime
features -- equally or more important is having a flexible and robust editor
experience, and Unreal is no exception here. A great editor is not only useful
for content creation, but for debugging and system understanding. Even something
as basic as having the scene visualized in the Outliner can provide a ton of
insight into what's happening at runtime. And this kind of runtime insight was
exactly what I needed for 3D Tiles.

Briefly, 3D Tiles are essentially a Hierarchical Level of Detail system, so
meshes are represented in a tree structure with progressive refinement. At a
high level, for each frame a tile renderer has to:

1. Traverse the (partial) tree it has in memory
1. Determine which tiles it should render and which ones it needs to load, and
   queue them up in the respective rendering / network subsystems
1. Process outstanding tile network responses, decode meshes, etc (most of this
   can happen in background tasks)

Rinse and repeat for the next frame.

The data that drives these decisions is either inherent to the tileset (e.g. the
particular tileset's tree structure, tile bounding boxes, geometric error) or
temporal -- that is, specific to the current frame (e.g. screen space error,
tile network priority, current rendering candidacy). Altogether, it's a lot of
information and operations for even just a single frame, and the behavior
changes over time (the renderer may decide one thing on one frame, but decide
something else altogether on the next because it received a few important tiles
from the network).

The rendering system was implemented as a custom Unreal Actor (with various
internal Components), and while that meant that I could easily expose basic
configuration settings, there still wasn't anything out of the box that would
let me inspect the runtime state.

What I really wanted was a **tree visualizer**, a UI that could show the
inherent 3D Tiles tree structure and per-node information, and would allow me to
pause and step through the frame-by-frame traversal to see the temporal state.
The Unreal Editor is flexible, and you can certainly define many kinds of custom
editor UI ranging from basic details widgets all the way to completely custom
editor panels!

Unfortunately, this is where the _dilemma_ set in. I'm a big proponent of
building custom tooling to fit one's needs, but Unreal's Slate system is complex
and I wasn't the most experienced with it. I looked for existing UI that I could
take inspiration from, and the closest thing I could find was Unreal's _Behavior
Tree_ visualizer.

{{< figure src="/img/articles/unreal_behavior_tree_editor.png" title="Can I has tree UI?" style="max-width: 800px;" loading="lazy" >}}

This UI had some of the elements I was looking for, but it was far more
complicated than what I needed and the code was nontrivial to navigate and learn
from. In addition, it was missing a very important feature: automatic node
layout. Editing a tree structure manually makes sense for a hand-crafted
behavior tree, but not so much for a generated tile dataset with potentially
~thousands of nodes.

Building this kind of dynamic, interactive UI from scratch would be a tall task,
and would take away a lot of time from the actual goal at hand. Importantly, if
such a UI would be very frequently used by a lot of people (say, a team of
designers creating content for the game) then _it might still be worth building
it_. In this case, however, this tool would only be infrequently used by a
handful of engineers, so the investment wouldn't be worth it.

## Simpler is better

So building a custom visualizer UI was way too complex, and `printf` debugging
couldn't handle the state space. What to do?

Look outside of Unreal!

The Unreal Editor's strength lies in integration and efficiency, but there are
many easily accessible tools outside that space. One such system is _Graphviz_,
which is a general purpose graph visualization software. Graphs can be described
in a simple text language and the visualizer takes care of laying out nodes.
It's simple and easy to generate, and there are tools like
[Edotor](https://edotor.net/) that allow interactive editing and inspection.

Graphviz wasn't designed to be a complete metadata visualization UI, but I
realized that I could map many aspects of the 3D Tiles' tree information into
various attributes of the Graphviz nodes -- things like shape, color, line
style, and edge style representing various states that a tile could be in. This
led to a simple "grammar" of tile visual representations which I quickly got
used to reading.

{{< figure src="/img/articles/tiles_graphviz.png" title="Colors and shapes galore!" style="max-width: 800px;" loading="lazy" >}}

I also added a lot of auxiliary information (numeric things like screen space
error or network priority) into the mouseover label text, which let me inspect
detailed info for specific nodes without overwhelming the visualization.

{{< figure src="/img/articles/tiles_graphviz_mouseover.png" title="Details as needed." style="max-width: 800px;" loading="lazy" >}}

Finally, to be able to compare the tree between runs, I devised a deterministic
ID scheme for the tiles based on traversal order (3D Tiles don't have first
class IDs themselves).

Prior to this, I'd been stuck debugging the tile renderer issues for several
days, but after implementing this tooling (which only took a couple hours to
build) I was able to root-cause and fix the issues in a single debugging
session. Huge success!

## Make more dumb tools

So what's the lesson? Custom debug tooling can help solve problems that would be
nigh impossible without it, and well-designed tools will pay back dividends over
time. But often the most suitable tool is the _simplest one that does the job_
(but no simpler).
