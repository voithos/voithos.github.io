---
title: "Slack Shenanigans"
date: 2023-03-09T21:40:37-08:00
description: "The subtleties of memory safety, and how syntax can mask bugs."
tags: [c++, unreal-engine]
---

A while back, I encountered a subtle bug (which of course feels obvious in
hindsight) involving a tree traversal and a hash map used for intermediate
information. At the time, I had lost the better part of the day to the issue,
but it actually led me to some interesting conclusions and so I thought it'd be
fun to try to present it here in a somewhat generalized and simplified way.

Note that this example uses Unreal Engine's custom hash map (`TMap`) and
pointer (`TUniquePtr`) types, but the same mechanism and considerations can
also apply to any similar hash map API, including the STL's
`std::unordered_map`.

## Setting the stage

To motivate the example, imagine you're processing some kind of tree data
structure, and you need to gather and cache intermediate information as you
traverse the tree. Suppose that you have the following constraints:

- The intermediate data is transient, while the tree is not, so instead of
  storing it in the tree nodes, you decide to create a `TMap` to store it.
- Your tree nodes are `TUniquePtrs`, so you can use their underlying address as
  a map key directly since they won't change.
- When traversing the tree, you'll need to do some processing both _before_ and
  _after_ you recurse.

Your initial code might look something like the following. However, it turns
out there's a problem with it. Can you see the issue?

```c++
void Traverse(TUniquePtr<FNode>& Root)
{
  TMap<FNode*, FTraversalStruct> StructMap;
  TraverseNode(Root.Get(), StructMap);
  ...
}

FIntermediateResults TraverseNode(FNode* Node, TMap<FNode*, FTraversalStruct>& StructMap)
{
  FTraversalStruct& Struct = StructMap.FindOrAdd(Node);

  // ... Do some initial work ...
  Struct.SomeField = ...;
  Struct.OtherField = ...;

  // Recurse down the tree.
  FIntermediateResults Results;
  for (auto& Child : Node->Children)
  {
    auto ChildResults = TraverseNode(Child.Get(), StructMap);
    AggregateResults(Results, ChildResults);
  }

  // ... Do some more work with the intermediate results ...
  Struct.AnotherField = Results.GetAnotherField();
  Struct.YetAnotherField = ...;

  return ...;
}
```

The above code **can result in a corrupted `TMap`**, leading to crashes.

But what's going on? Here's a hint: adding the following line works around the issue.

```c++ {hl_lines=[4]}
void Traverse(TUniquePtr<FNode>& Root)
{
  TMap<FNode*, FTraversalStruct> StructMap;
  StructMap.Reserve(GetTotalNumberOfNodes(Root.Get()));
  TraverseNode(Root.Get(), StructMap);
  ...
}
```

## The answer

It turns out that these lines were problematic.

```c++ {hl_lines=[15,16]}
FIntermediateResults TraverseNode(FNode* Node, TMap<FNode*, FTraversalStruct>& StructMap)
{
  FTraversalStruct& Struct = StructMap.FindOrAdd(Node);

  // ...

  // Recurse down the tree.
  for (auto& Child : Node->Children)
  {
    auto ChildResults = TraverseNode(Child.Get(), StructMap);
    ...
  }

  // ... Do some more work ...
  Struct.AnotherField = ...;
  Struct.YetAnotherField = ...;

  return ...;
}
```

Do you see the issue? It's because after the recursive calls, **`Struct` might
be pointing to invalid memory**. Since each recursive call invokes `FindOrAdd`,
which will create a new struct if the node hasn't been visited yet, the map
will quickly (and repeatedly) need to reallocate memory and copy over its
contents as it fills up its reserved "slack" (this is what Unreal calls
reserved-but-unused memory). This means that any previously-returned struct
references or pointers are now invalid!

So, can we fix this by simply re-fetching the location of the struct after the
recursive calls, in case it has moved?

```c++ {hl_lines=["13-15"]}
FIntermediateResults TraverseNode(FNode* Node, TMap<FNode*, FTraversalStruct>& StructMap)
{
  // ...

  // Recurse down the tree.
  for (auto& Child : Node->Children)
  {
    auto ChildResults = TraverseNode(Child.Get(), StructMap);
    ...
  }

  // Re-fetch the struct.
  FTraversalStruct* StructPtr = StructMap.Find(Node);
  check(StructPtr != nullptr);
  Struct = *StructPtr;

  // ... Do some more work ...
  Struct.AnotherField = ...;
  Struct.YetAnotherField = ...;

  return ...;
}
```

Oops! This line doesn't actually do what we would've hoped: `Struct = *StructPtr;`.

That's right, it's actually **copying** the newly-retrieved struct to the
memory location of the old reference, but as we said earlier, this reference is
potentially no longer referring to valid memory, so we'll still be getting
crashes.

So how do we avoid this? We could of course reserve memory up front like we
showed earlier, but that may not be ideal if the size cannot be easily
determined up front (for example, if we don't always traverse the entire tree).
One alternative approach is to simply use a pointer throughout:

```c++ {hl_lines=[4]}
FIntermediateResults TraverseNode(FNode* Node, TMap<FNode*, FTraversalStruct>& StructMap)
{
  FTraversalStruct& StructRef = StructMap.FindOrAdd(Node);
  FTraversalStruct* Struct = &StructRef;

  // ... Do some initial work ...
  Struct->SomeField = ...;
  Struct->OtherField = ...;

  // Recurse down the tree.
  for (auto& Child : Node->Children)
  {
    auto ChildResults = TraverseNode(Child.Get(), StructMap);
    ...
  }

  // Re-fetch the struct.
  Struct = StructMap.Find(Node);
  check(Struct != nullptr);

  // ... Do some more work with the intermediate results ...
  Struct->AnotherField = ...;
  Struct->YetAnotherField = ...;

  return ...;
}
```

## Takeaways

While this example ultimately boils down to a standard C++ memory safety bug,
there were a few interesting takeaways for me as I debugged this:

- Be aware of where pointers _and references_ are pointing to. Just because
  you're working with a reference _doesn't mean that the underlying memory
  can't change_, and reallocations can often happen automatically under the
  hood of simple-looking APIs.
- When you're aware of the possibility of such reallocations, it may be simpler
  to **stick to pointers** in your code to make the indirection explicit and
  decrease the chance of accidentally overwriting memory through reference
  semantics.
- Tip: Unreal has a special memory allocator that tries to help detect these
  kinds of issues! To use it, pass `-stompmalloc` when launching the editor.
  This was ultimately what helped me narrow down the issue.

Finally, it turns out that this particular problem (keeping around a reference
returned by `FindOrAdd`) is explicitly [called out in Unreal's `TMap`
documentation](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/ProgrammingWithCPP/UnrealArchitecture/TMap/),
although in my defense the note is a bit hidden below the normal usage text, so
was easy to miss.

Read the docs (carefully)!
