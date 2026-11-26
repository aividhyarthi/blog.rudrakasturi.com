---
title: "Higgsfield Launches MAGI-2: A 400B AI Video Model That Creates Video With Sound"
date: 2026-11-26T08:30:00+05:30
description: "Higgsfield says its MAGI-2 model can create up to 30 seconds of 1080p video with sound using image, video and audio references. Here is what creators should know."
tag: "AI Video"
tldr: "Higgsfield announced MAGI-2 on November 25, describing it as a 400-billion-parameter Mixture-of-Experts video model developed by Sand.ai. It can generate clips from 4 to 30 seconds at 1080p, create sound with video and use up to 20 reference files. Its leaderboard position is based on Higgsfield's own Video Arena, not an independent universal test."
categories: ["AI","Technology","Video","Generative AI"]
tags: ["Higgsfield","MAGI-2","AI Video Generation","Sand AI","Video Models","Generative AI"]
type: "article"
sources:
  - title: "Announcing MAGI-2: Open Weights 400B Parameters Multimodal-to-Video Model"
    url: "https://higgsfield.ai/announcing-magi-2"
    publisher: "Higgsfield"
    reviewed: "2026-11-26"
  - title: "Meet MAGI-2: Sand AI's New Video Model With Built-In Sound"
    url: "https://higgsfield.ai/blog/higgsfield-magi-2"
    publisher: "Higgsfield"
    reviewed: "2026-11-26"
---

Higgsfield has announced MAGI-2, a new AI video model developed by Sand.ai. The model is designed to create video and sound together, using written instructions and reference material such as images, video clips and audio.

The company says MAGI-2 can create clips from 4 to 30 seconds at 1080p. It is available through the Higgsfield web app and API, while open weights are expected later.

The announcement adds another competitor to the fast-moving AI video market. The important question for creators is not simply how many parameters a model has. It is whether it can keep characters, scenes, movement and sound consistent enough to produce video that can be used in real work.

![How MAGI-2 combines reference images, video and audio to generate a video clip](/images/editorial/higgsfield-magi-2-400b-ai-video-model-what-it-means.svg)

*Original editorial illustration based on [Higgsfield's MAGI-2 announcement](https://higgsfield.ai/announcing-magi-2).*

## What is MAGI-2?

Higgsfield describes MAGI-2 as a 400-billion-parameter Mixture-of-Experts model. In simple terms, a Mixture-of-Experts model contains several specialised parts, but it activates only a smaller group of them for a particular task.

Higgsfield says about 28 billion parameters are active for each video. The company says this design helps it serve a large model more efficiently.

The model was developed by Sand.ai and is currently available through Higgsfield. The company says open weights are coming soon. Until those weights are actually released, developers should treat MAGI-2 as a hosted service rather than a model they can download and run independently.

## What can MAGI-2 create?

Higgsfield says MAGI-2 supports video clips from 4 to 30 seconds at 1080p, across six aspect ratios. It can generate sound together with the video, so creators do not have to add every sound effect or audio element separately.

The model also accepts multiple reference files. Higgsfield says a single generation can use up to 10 images, five videos and five audio files.

| Feature | What Higgsfield says |
|---|---|
| Video length | 4 to 30 seconds |
| Resolution | 1080p |
| Aspect ratios | 16:9, 21:9, 4:3, 1:1, 3:4 and 9:16 |
| Reference images | Up to 10 |
| Reference videos | Up to 5 |
| Reference audio files | Up to 5 |
| Sound | Can be generated with the video |
| Availability | Higgsfield web app and API |

This is useful because a creator can give the model more than a text prompt. A product image can guide how an object looks, a reference clip can show the movement and an audio file can guide the sound.

## Why does generating sound with video matter?

Many AI video workflows create a silent clip first. The creator then has to find or generate sound effects, voice, background audio and music separately.

Generating sound together with the video could reduce some of that editing work. It may also help the audio match what is happening on screen.

But creators should still inspect the result. A model may generate an incorrect sound, add audio that does not fit the scene or produce a clip that needs editing. For commercial work, teams should also check music, voice and reference-asset rights.

## What do the MAGI-2 ranking numbers mean?

Higgsfield says MAGI-2 ranked second in its Video Arena, with a score of 1,146 and a 60.5% overall win rate in the snapshot it published on November 24.

The company says the arena uses blind comparisons in which professional directors, animators and designers choose between clips made from the same prompt. It says MAGI-2 was behind Seedance 2.5 in that snapshot.

This is useful information about how the model performed in Higgsfield's own comparison system. It is not a universal independent benchmark. Results can change depending on the prompts, people voting, model versions and scoring method.

Higgsfield also reports the average generation cost in its own credits. Those credits should not be directly compared with another provider's prices without converting them into the actual cost of a finished usable clip.

## What should video creators test before using it?

A good model demo is not the same as a reliable production workflow. Before using MAGI-2 for a campaign, newsroom or client project, test it with the same assets and prompts used in your existing workflow.

1. **Character consistency:** Does the same person look consistent across the full clip?
2. **Product accuracy:** Are logos, labels, packaging and product details preserved?
3. **Movement:** Does the model follow the requested camera movement and action?
4. **Sound:** Does generated audio match what is visible on screen?
5. **Editing time:** How many generations and corrections are needed to get one usable clip?
6. **Rights:** Are uploaded reference images, video and audio cleared for the intended use?

For comparison, read our explainers on [Grok Imagine](/xai-grok-imagine-ai-image-and-video-creation-explained/) and [Google Veo 3](/whats-new-in-google-veo-3-ai-video-creation-gets-a-major-upgrade/).

## Frequently asked questions about Higgsfield MAGI-2

### What is MAGI-2?

MAGI-2 is an AI video model developed by Sand.ai and made available through Higgsfield. It generates video and sound using prompts and reference material.

### How long can MAGI-2 videos be?

Higgsfield says MAGI-2 can create clips from 4 to 30 seconds at 1080p.

### Can MAGI-2 create sound?

Yes. Higgsfield says the model can generate sound together with video. Users can switch sound on or off in the generation workflow.

### How many reference files can MAGI-2 use?

Higgsfield says it can accept up to 10 images, five videos and five audio files in one generation.

### Is MAGI-2 open source?

Higgsfield says open weights are coming soon. The company has not yet made the model's weights available for independent download.

### Is MAGI-2 the best AI video model?

Higgsfield's own Video Arena placed it second in the November 24 snapshot. That ranking is based on the company's comparison system and does not prove it is the best model for every type of video.

## What this means for the AI video market

MAGI-2 shows where AI video tools are heading: longer clips, more reference material and sound generated alongside the visuals. The value for creators will depend on consistency, control, price and the amount of editing still required.

The best model is not necessarily the one with the largest parameter count or the highest position on a vendor's leaderboard. It is the one that produces a usable result for the creator's actual job.

*Editorial note: Model specifications, arena scores and win rates in this article are based on Higgsfield's own announcements and evaluation system. They are company-reported claims, not an independent comparison of every AI video model.*
