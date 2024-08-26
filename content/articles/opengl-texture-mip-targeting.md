---
title: "OpenGL Texture Mip Targeting"
date: 2024-08-05T14:46:38-08:00
description:
  "Avoiding feedback loops when reading and writing to the same texture."
tags: [opengl, textures]
---

A while back, I was implementing a
[bloom post process effect](https://learnopengl.com/Guest-Articles/2022/Phys.-Based-Bloom)
for my personal renderer project, and I ran into an interesting hurdle involving
how texture samplers and framebuffers work in OpenGL.

A pretty common technique used by several engines involves repeated downsamples
of the final (HDR) frame using a specialized blur kernel, and then a series of
upsamples in reverse that accumulate the blurred textures, resulting in a nice
and natural-looking bloom effect after tone mapping.

Nowadays, you'd probably want to just use _compute shaders_ to generate your
bloom texture, but if your target API was older than OpenGL 4.3, compute shaders
wouldn't be available. So, I wanted to try building it with just standard
framebuffers and direct dispatch.

## The problem

Commonly, bloom implementations like this would use multiple textures (at
least 2) and ping-pong the downsampling and upsampling between the two to make
the calls easier.

However, since the downsamples/upsamples are sequential, all you really need
conceptually is a single texture with a mipmap chain, so this is what I opted
for.

I initially tried using `textureLod()` in the fragment shader to sample from a
specific mip level (for both downsampling and upsampling) but it turns out that
if the texture filtering mode doesn't use mipmaps (i.e. if the filtering mode is
`GL_NEAREST` or `GL_LINEAR`, instead of something like
`GL_LINEAR_MIPMAP_LINEAR`) then `textureLod()` will always sample from _mip 0_.
Since I was _also_ writing to the same texture I was sampling from (just at a
different mip level), I was a bit hesitant to use the other filtering modes, but
the biggest reason to avoid this came from something I found in the OpenGL spec.

Whenever a texture is sampled from while also being rendered to, you can run the
risk of hitting **undefined behavior (the value of rendered fragments is
undefined)**. This is referred to as a _feedback loop_. The specifics of the
OpenGL spec are fairly conservative about what can trigger this, even if the
shader has logic that wouldn't actually ever sample from the same texel that
it's writing to. See the spec for details:
https://registry.khronos.org/OpenGL/specs/gl/glspec40.core.pdf#page=299

## The solution

The requirements in the spec also point towards a solution: if you explicitly
set the `GL_TEXTURE_BASE_LEVEL` and `GL_TEXTURE_MAX_LEVEL` texture params
appropriately during each step of the bloom, it will be impossible for the
shader to sample from the same mip level that it's writing to, thus avoiding the
undefined behavior. The details are as follows:

First, to select the mip level to render to, you can use
`glFramebufferTexture2D`, along with `glViewport` to set the width/height of the
mip you are rendering to.

```c++
glBindFramebuffer(GL_FRAMEBUFFER, framebufferID);
glFramebufferTexture2D(GL_FRAMEBUFFER, GL_COLOR_ATTACHMENT0, GL_TEXTURE_2D, textureID, mipmaplevelToRenderTo);
glViewport(0, 0, mipWidth, mipHeight);
```

Then, to limit the mip level that you're sampling from, the safest way is to use
the `GL_TEXTURE_BASE_LEVEL` and `GL_TEXTURE_MAX_LEVEL` texture parameters.

```c++
glBindTexture(GL_TEXTURE_2D, textureID);
int mipToSampleFrom = mipmaplevelToRenderTo - 1;
glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_BASE_LEVEL, mipToSampleFrom);
glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAX_LEVEL, mipToSampleFrom);
```

In the shader, this will allow you to use a simple `texture(sampler, uv)` (or
similar) as normal, and it will only sample from the one mip level you
specified. Note that `GL_TEXTURE_BASE_LEVEL` also changes the meaning of GLSL
functions like `textureSize()`, which take a LOD parameter: if you've modified
`GL_TEXTURE_BASE_LEVEL`, then the LOD will be _relative to the base level_,
meaning that `textureSize(sampler, 0)` will conveniently return the size of the
currently configured base mip level.

To reset, just set those params to their default OpenGL values:

```c++
glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_BASE_LEVEL, 0);
glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAX_LEVEL, 1000);
```

This allows us to read from and write to different mip levels of a single
texture with only a single framebuffer object.

{{< figure src="/img/articles/mip_chain_bloom.png" title="One downsample step, with a single texture" loading="lazy" >}}
