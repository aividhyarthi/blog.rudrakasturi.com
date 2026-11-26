---
title: "Higgsfield's MAGI-2 Is a 400B AI Video Model. What Makes It Different"
date: 2026-11-27T09:00:00+05:30
description: "Higgsfield says MAGI-2 can generate 30-second 1080p video using multiple image, video and audio references. We separate its specifications from the company's own arena claims."
tag: "AI"
categories: ["AI", "Technology", "AI News"]
tags: ["AI News", "Artificial Intelligence", "Technology", "November 2026"]
type: "article"
image: "/images/editorial/higgsfield-magi-2-400b-ai-video-model-what-it-means.svg"
tldr: "Higgsfield announced MAGI-2 on November 25. It describes the model as a 400-billion-parameter Mixture-of-Experts system with about 28 billion active parameters, up to 30 seconds of 1080p video and 20 reference inputs. Its ranking and win-rate figures come from the Higgsfield Video Arena."
draft: true
sources:
  - title: "Announcing MAGI-2: Open Weights 400B Parameters Multimodal-to-Video Model"
    url: "https://higgsfield.ai/announcing-magi-2"
    publisher: "Higgsfield"
    reviewed: "2026-11-26"
---

Higgsfield has announced MAGI-2, a large multimodal model designed to turn several kinds of reference material into generated video. The company says the model was developed by Sand.ai and is available through Higgsfield, with open weights planned for a later release.

![Original editorial diagram of the MAGI-2 video generation workflow](/images/editorial/higgsfield-magi-2-400b-ai-video-model-what-it-means.svg)

*Original editorial diagram. Product specifications and the official model announcement are available from [Higgsfield](https://higgsfield.ai/announcing-magi-2).*

## What is MAGI-2?

Higgsfield describes MAGI-2 as a 400-billion-parameter Mixture-of-Experts model. In this design, the full model contains specialised parameter groups, but only a smaller subset is active for a particular task. Higgsfield says about 28 billion parameters are active for each piece of video.

The model accepts up to 20 reference inputs in one request: 10 images, five videos and five audio clips. Higgsfield says it can generate video of up to 30 seconds at 1080p and 25 frames per second, in six aspect ratios.

This multi-reference approach is the main product distinction. A creator can provide a visual reference, a movement reference and an audio reference rather than relying only on a text prompt.

## What do the ranking numbers tell us?

Higgsfield reports that MAGI-2 ranked second in its Video Arena with a score of 1,146 and a 60.5% overall win rate. The company says the arena uses blind head-to-head comparisons in which professional directors, animators and designers choose between clips made from the same prompt.

That is useful product evidence, but it is not a universal independent benchmark. The arena is operated by Higgsfield, and results depend on its participant pool, prompts, model versions and scoring method. Higgsfield's own snapshot places Seedance 2.5 above MAGI-2.

Open weights are not available yet. Higgsfield says they are coming soon. Until Sand.ai releases them, developers should treat MAGI-2 as a hosted model rather than a downloadable open-weight model.

For comparison, read our explainers on [Grok Imagine](/xai-grok-imagine-ai-image-and-video-creation-explained/) and [Google Veo 3](/whats-new-in-google-veo-3-ai-video-creation-gets-a-major-upgrade/).

## What creators and media teams should test

1. Use the same prompt and reference assets across competing video models.
2. Check whether faces, product details and on-screen text remain consistent.
3. Measure generation time, credits per second and usable outputs.
4. Test whether the model follows camera, motion and aspect-ratio instructions.
5. Review commercial-use terms, rights to uploaded references and output licensing before production.

## Questions about MAGI-2

### Is MAGI-2 an open-source model?

Higgsfield says open weights are coming soon. The model is currently available through Higgsfield, so it should not yet be treated as a downloadable open-weight release.

### How long can MAGI-2 generate video?

Higgsfield says it can generate up to 30 seconds at 1080p and 25 frames per second in one take.

### Is MAGI-2 the best AI video model?

Higgsfield's own Video Arena ranked it second in its November 24 snapshot. That is one comparison system, not proof that it is best for every production task.