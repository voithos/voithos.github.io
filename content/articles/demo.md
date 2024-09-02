---
title: "Demo"
date: 2023-01-31
description: "Example markdown formatting and styling."
tags: [markdown, demo]
math: true
draft: true
---

## Headings

The following HTML `<h1>`—`<h6>` elements represent six levels of section
headings. `<h1>` is the highest section level while `<h6>` is the lowest.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum,
voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma
dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as
cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin
porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur?
Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit
ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda
veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore
eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata
tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne
sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Blockquotes

The blockquote element represents content that is quoted from another source,
optionally with a citation which must be within a `footer` or `cite` element,
and optionally with in-line changes such as annotations and abbreviations.

#### Blockquote without attribution

> Tiam, ad mint andaepu dandae nostion secatur sequo quae. **Note** that you can
> use _Markdown syntax_ within a blockquote.

#### Blockquote with attribution

> Don't communicate by sharing memory, share memory by communicating.<cite>Rob
> Pike[^1]</cite>

[^1]:
    The above quote is excerpted from Rob Pike's
    [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest,
    November 18, 2015.

## Tables

Tables aren't part of the core Markdown spec[^2], but Hugo supports them
out-of-the-box.

[^2]: Which is a travesty.

| Name  | Age |
| ----- | --- |
| Bob   | 27  |
| Alice | 23  |

#### Inline Markdown within tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

You can have `inline` code `function() {}`.

Or just pre:

<pre>This is only pre text</pre>

#### Code block with backticks

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

```c++
#version 460 core
#pragma qrk_include < transforms.glsl>
#pragma qrk_include < window.frag>

in vec2 texCoords;

out float fragColor;

uniform sampler2D qrk_ssao;
uniform int qrk_ssaoNoiseTextureSideLength;

void main() {
  vec2 texelSize = 1.0 / vec2(textureSize(qrk_ssao, 0));

  float result = 0.0;
  // We compute a blur based on the original noise texture size used to generate
  // the SSAO.
  int sideOffset = qrk_ssaoNoiseTextureSideLength / 2;
  for (int x = -sideOffset; x < sideOffset; ++x) {
    for (int y = -sideOffset; y < sideOffset; ++y) {
      // Calculate the UV offset based on texel size.
      vec2 texOffset = vec2(float(x), float(y)) * texelSize;
      result += texture(qrk_ssao, texCoords + texOffset).r;
    }
  }
  // Normalize.
  result /= qrk_ssaoNoiseTextureSideLength * qrk_ssaoNoiseTextureSideLength;
  fragColor = result;
}
```

#### Code block indented with four spaces

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

#### Code block with Hugo's internal highlight shortcode

```glsl {linenos=true,hl_lines=[5, "7-9"]}
#version 460 core
#pragma qrk_include < transforms.glsl>
#pragma qrk_include < window.frag>

in vec2 texCoords;

out float fragColor;

uniform sampler2D qrk_ssao;
uniform int qrk_ssaoNoiseTextureSideLength;

void main() {
  vec2 texelSize = 1.0 / vec2(textureSize(qrk_ssao, 0));

  float result = 0.0;
  // We compute a blur based on the original noise texture size used to generate
  // the SSAO.
  int sideOffset = qrk_ssaoNoiseTextureSideLength / 2;
  for (int x = -sideOffset; x < sideOffset; ++x) {
    for (int y = -sideOffset; y < sideOffset; ++y) {
      // Calculate the UV offset based on texel size.
      vec2 texOffset = vec2(float(x), float(y)) * texelSize;
      result += texture(qrk_ssao, texCoords + texOffset).r;
    }
  }
  // Normalize.
  result /= qrk_ssaoNoiseTextureSideLength * qrk_ssaoNoiseTextureSideLength;
  fragColor = result;
}
```

Quite a feat!

## List Types

#### Ordered List

1. First item
2. Second item
   - Hi
   - Bye
   - HiBye
3. Third item

#### Unordered List

- List item
- Another item
- And another item

#### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements

~~Just kidding~~

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the
session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and
other small creatures.

## Images

Direct image inclusion:

<img src="https://mdg.imgix.net/assets/images/san-juan-mountains.jpg?auto=format&fit=clip&q=40&w=1080" style="max-width: 800px;" loading="lazy">

Figure with a caption:

{{< figure src="https://mdg.imgix.net/assets/images/san-juan-mountains.jpg?auto=format&fit=clip&q=40&w=1080" title="Would you look at that nice mountain" style="max-width: 500px;" loading="lazy" >}}

---

## Math typesetting

Implemented via KaTeX.

<p>
Inline math: $\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…$
</p>

```latex
Not rendered because it's in a code block
Inline math: $\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…$
```

<p>
Inline math: \(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
</p>

Block math:

$$
\varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$

\\[ x = y + z \\]

---

## YouTube Privacy Enhanced Shortcode

{{< youtube rbC2D_ayePI >}}

<br>

---

## Twitter Shortcode

{{< twitter user="voithoz" id="1615974667063554049" >}}

<br>

---

## Emojis

:thumbs_up:
