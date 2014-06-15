---
layout: post
title:  Obligatory "Hello World!" and Reflections on CS
date:   2014-04-05 19:48:42
tags:   computer-science
---

Hello! Здравствуйте! こんにちは！Unicode test!

If you can read that, then congratulations! Your OS/browser is not broken.

I finally took the plunge and created a blog. Here I hope to be able to
materialize and archive information on topics that I learn about or find
interest in, and perhaps even explore some original ideas of my own. Thus,
without further ado...

## Hello world!

Phew.

Instead of diving into further introductory ceremony, I think it best to begin
with a reflection on what in all likelihood will be the core topic that I will
be writing about.

# [Computer Science](#computer-science) {#computer-science}

Ah, yes. Computer science. The arcane art pursued by many a young and old
alike, and at the same time the most contemporary coolness permeating the world
of tech.

The [beginnings of computer
science](http://en.wikipedia.org/wiki/Computer_science#History), though, had a
slightly shifted focus. The days of startups, enterprise systems, and big data
were in the distant future. At the time, the areas of study were, naturally,
more fundamental. From [Ada
Lovelace](http://en.wikipedia.org/wiki/Ada_Lovelace), who is credited with
writing the first algorithm designed for a computational machine, to [Alan
Turing](http://en.wikipedia.org/wiki/Alan_Turing), a mathematician who defined
a hypothetical [universal
computer](http://en.wikipedia.org/wiki/Universal_Turing_machine) and used it to
prove certain properties about computability, early computer science was
explored largely from a mathematical perspective. As electronic computers began
to be manufactured, the practical applications of computer science became
increasingly relevant, and computer science as a field expanded to a [multitude
of
subdisciplines](http://en.wikipedia.org/wiki/Computer_science#Areas_of_computer_science).

Today, computer technology and software development have become integral parts
of society. Programming, besides conjuring up stereotypical images of
sunlight-deprived individuals sitting in front of a monitor hacking away on a
massive keyboard, has become an important industry profession. This has
naturally led to certain levels of specializations (e.g. web, system, graphics,
etc.) among most aspects of programming, including jobs, languages, and
tooling.

A consequence of this, though, is that it not all fields of programming require
deep knowledge of the classic fundamental aspects of computer science for day
to day work.

*Well, we can't have that, now, can we?*

# [Areas of Interest](#areas-of-interest) {#areas-of-interest}

The disciplines that make up computer science can be broadly classified as
either [theoretical computer
science](http://en.wikipedia.org/wiki/Theoretical_computer_science) or [applied
computer
science](http://en.wikipedia.org/wiki/Computer_science#Applied_computer_science).
As the name suggests, applied computer science includes topics and ideas that
can be directly used in practical contexts. Theoretical computer science, of
course, is often of interest to researchers. However, certain fields of study --
namely, algorithms and data structures -- are highly useful, even considered
essential, for the reason that they define the fundamental primitives that most
industry professionals use on a daily basis.

And, of course, both forms of computer science are *extremely
interesting*.

The following is a listing (in no particular order) of a few of the disciplines
which constitute (in my opinion) the most interesting and useful parts of
computer science and programming.

- [Algorithms](http://en.wikipedia.org/wiki/Algorithm)[ and Data Structures](http://en.wikipedia.org/wiki/Data_structures)

    Algorithms are the building blocks of computations. They are a logical,
    mechanical sequence of actions or evaluations that result in the
    calculation of some desired value. Data structures are the organizational
    blocks of data, designed with efficiency as the goal.

    Although both subjects can be studied independently, they are deeply
    related and are often grouped together. The book by Niklaus Wirth even
    declares:

    > [Algorithms + Data Structures = Programs](http://en.wikipedia.org/wiki/Algorithms_%2B_Data_Structures_%3D_Programs)

    Most, if not all, other computer science disciplines make heavy use of
    complex algorithms and data structures and, thus, a solid understanding
    of algorithms and data structures is vital for deep endeavors into other
    areas of computer science.

- [Cryptography](http://en.wikipedia.org/wiki/Cryptography)

    Cryptography is the study of techniques used for secure communication and
    authentication. In the modern age of the Internet and anonymous peer-to-peer
    networks, cryptographic primitives are (or should be) used in virtually any
    kind of communication.

    A basic, well-rounded understanding of how to *use* known and proven
    cryptographic methods is extremely useful, particularly in any
    network-facing applications. However, the standard counsel on this subject
    is worth repeating: [*unless one is an expert, one should not attempt to
    create one's own security scheme in a production system, as there are far
    too many crippling security mistakes that can be
    made*](http://security.stackexchange.com/questions/18197/why-shouldnt-we-roll-our-own).

    Of course, if the goal is to learn -- or just to have fun -- then
    cryptography offers a myriad of interesting algorithms to explore.

- [Programming Languages](http://en.wikipedia.org/wiki/Programming_language_theory)

    The design of programming languages is a discipline which intimately blends
    theory and practice. The techniques and research of the field affect all
    software developers in the form of the compilers and interpreters that are
    used day to day.

    As programming languages are the primary tools for software developers,
    knowledge of their design and implementation -- concepts like type theory,
    generics, and metaprogramming -- can greatly aid in a developer's ability
    to use their preferred languages skillfully.

- [Artificial Intelligence](http://en.wikipedia.org/wiki/Artificial_intelligence)

    Likely the single broadest subfield in this list, artificial intelligence
    is the study and design of machines and programs which exhibit behaviors
    that akin to those of [intelligent
    agents](http://en.wikipedia.org/wiki/Intelligent_agent). This includes
    topics such as [machine
    learning](http://en.wikipedia.org/wiki/Machine_learning), [natural language
    processing](http://en.wikipedia.org/wiki/Natural_language_processing),
    [computer vision](http://en.wikipedia.org/wiki/Computer_vision), and
    [robotics](http://en.wikipedia.org/wiki/Robotics).

    Many forms of AI are heavily mathematical, but it is far from being just a
    theoretical field. In fact, AI is particularly prominent [in video
    games](http://en.wikipedia.org/wiki/Artificial_intelligence_(video_games))
    where it is used to construct the behaviors of non-player characters, among
    other things.

- [Computer Graphics](http://en.wikipedia.org/wiki/Computer_graphics_(computer_science))

    As it turns out, computer graphics are -- surprise! -- *also* highly
    prominent in video games. In particular,
    [rasterization](http://en.wikipedia.org/wiki/Rasterisation) is currently
    the dominant approach used whenever interactivity is required.  In other
    contexts, different (generally slower) techniques, such as [ray
    tracing](http://en.wikipedia.org/wiki/Ray_tracing_(graphics)), can be used
    to obtain extremely photorealistic images.

    Computer graphics relies on mathematics such as basic [linear
    algebra](http://en.wikipedia.org/wiki/Linear_algebra), which is used to
    represent and transform geometry, as well as models of light propagation
    and diffusion, which is used for shading.

- [Software Engineering](http://en.wikipedia.org/wiki/Software_engineering)

    Although arguably not *quite* a form of engineering yet, a body of
    knowledge, through both research and industry practice, exists on the
    design, construction, and maintenance of computer programs. Collectively,
    these techniques are sometimes known as "software engineering," and are
    *exceptionally* essential to professional programmers. In describing the
    driving goal for software engineering practices, Steve McConnell summarizes
    it as follows:

    > Managing complexity is the most important technical topic in software
    > development. In my view, it’s so important that Software’s Primary
    > Technical Imperative has to be **managing complexity**.
    >
    > <cite>*[Code Complete](http://en.wikipedia.org/wiki/Code_Complete)*</cite>

    The abstract nature of software poses few physical constraints on the size,
    interconnectivity, and locality -- in other words, the complexity -- of
    software system.  Due to this, and [a variety of other
    factors](http://programmers.stackexchange.com/questions/158640/why-cant-the-it-industry-deliver-large-faultless-projects-quickly-as-in-other),
    software development is still difficult and many software engineering
    practices, although not a panacea, can help impose the limitations on
    complexity that are needed.

# [What Is Programming, Then?](#what-is-programming-then) {#what-is-programming-then}

As with any form of logical or creative work, computer science is not easy --
certainly, that is part of what makes it interesting. The wide variety of
subfields offer many avenues of exploration, and collectively have the
potential to provide value to virtually all industries and fields of study. On
the practical end sits the humble programmer, whose job it is to create this
value. So, *what is programming*, then?

**Programming is the act of, and the discipline associated with, taking an
abstract task or idea and materializing it in the form of useful software.**

The possibilities are limitless.

*Let the learning commence!*
