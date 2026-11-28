---
title: "Three Open Model Releases Put Tencent, Ant Group and Sakana AI in Focus"
date: 2026-11-28
description: "Tencent's WeMM-Ecom, Ant's LingBot-Map 2.0 and Sakana AI's Namazu Small show how open model development is spreading across commerce, spatial computing and research workflows."
draft: true
tag: "Open Models"
tldr: "Recent releases from Tencent, Ant Group's Robbyant team and Sakana AI point to a more specialised open model ecosystem. WeMM-Ecom targets ecommerce and visual language tasks, LingBot-Map 2.0 focuses on streaming 3D reconstruction, and Sakana Namazu Small is a 30-billion-parameter reasoning model for research and long-document work. These are different model types, not three competing general-purpose chatbots."
categories: ["Open Source AI", "LLMs", "Multimodal AI", "AI Models", "Asia"]
tags: ["Tencent WeMM-Ecom", "LingBot-Map 2.0", "Sakana Namazu Small", "Open Models", "Multimodal AI"]
type: "article"
sources:
  - title: "WeMM-Ecom: Multimodal Foundation Models for E-Commerce and General Visual-Language Understanding"
    url: "https://github.com/Tencent/WeMM-Ecom"
    publisher: "Tencent / WeChat Vision"
    reviewed: "2026-11-28"
  - title: "LingBot-Map 2.0: Geometric Streaming Base Model"
    url: "https://github.com/Robbyant/lingbot-map-v2"
    publisher: "Robbyant"
    reviewed: "2026-11-28"
  - title: "Sakana Namazu Small"
    url: "https://sakana.ai/namazu-small/"
    publisher: "Sakana AI"
    reviewed: "2026-11-28"
  - title: "AI Model Releases"
    url: "https://blog.jiufeng.ai/releases"
    publisher: "Jiufeng release tracker"
    reviewed: "2026-11-28"
---

The open model ecosystem is expanding beyond general-purpose chatbots. Recent releases from Tencent, Ant Group's Robbyant team and Japan's Sakana AI show three different directions: ecommerce understanding, real-time 3D reconstruction and practical reasoning over documents and web research.

The releases are not interchangeable. WeMM-Ecom is a multimodal language model family for ecommerce and visual-language understanding. LingBot-Map 2.0 is a spatial reconstruction model, not a conventional large language model. Sakana Namazu Small is a reasoning LLM built on NVIDIA's Nemotron 3 Nano base model.

That distinction matters when comparing model announcements. The next phase of open AI may be shaped as much by specialised systems as by general chat models.

## Tencent WeMM-Ecom: multimodal models built for ecommerce

Tencent's WeChat Vision team describes WeMM-Ecom as a Chinese-English multimodal model family for ecommerce and general visual-language understanding.

The family includes dense models at 0.8B, 2B, 4B and 9B parameters, alongside a 35B-A3B mixture-of-experts model with 3B active parameters.

Tencent says the models are used for product understanding, multimodal search, compliance auditing and livestream commerce. The repository provides model weights and examples for common inference frameworks, with several quantisation formats listed.

The technical report and repository also describe both instruction and thinking modes. This is relevant for retailers because product discovery increasingly depends on understanding images, attributes and user intent together.

For ecommerce platforms, the practical question is whether a smaller specialised model can handle product classification, visual search and catalogue enrichment at lower cost than a larger general-purpose model.

## Ant Group's LingBot-Map 2.0: a different kind of open model

LingBot-Map 2.0, released by the Robbyant team associated with Ant Group, is a geometric streaming base model for 3D reconstruction.

It processes incoming RGB image sequences to estimate camera poses, camera intrinsics, depth and confidence. The project is designed for causal online streaming rather than a language conversation.

The public repository describes streaming inference code, evaluation instructions and a model checkpoint. It also states that the model weights are currently hosted in private repositories and require authorised access.

This is not an LLM and should not be compared with chat models on language benchmarks. Its importance is in spatial perception and the possibility of building systems that understand a changing physical scene from visual input.

Potential applications include robotics, spatial mapping, scene reconstruction and other workflows that need an evolving 3D representation. Those are application areas suggested by the model's capabilities, not proof of deployment in each sector.

## Sakana Namazu Small: a compact reasoning model

Sakana AI announced Namazu Small on November 25, 2026. The company describes it as a 30-billion-parameter model built on NVIDIA Nemotron 3 Nano, with continued pretraining and post-training carried out by Sakana.

The company says it focused on everyday conversation, research using web search and long-document understanding with evidence-based answers.

Sakana reports that Namazu Small outperformed both the same-sized Nemotron 3 Nano and the roughly four-times-larger Nemotron 3 Super on the average score across 25 benchmarks. The company also notes that the model's strongest areas were web research and long-document understanding. Its internal-knowledge-only performance did not improve as much.

Sakana says it plans to share details about on-premises availability in early to mid December 2026. That could interest organisations that want to run models in their own infrastructure, although actual hardware requirements, licensing and deployment economics need to be assessed.

## Three different problems, three different model strategies

| Model | Main purpose | What makes it distinct |
|---|---|---|
| Tencent WeMM-Ecom | Ecommerce and visual-language understanding | Multiple model sizes and commerce-oriented multimodal tasks |
| Ant / Robbyant LingBot-Map 2.0 | Streaming 3D reconstruction | Spatial understanding from incoming camera images |
| Sakana Namazu Small | Reasoning, web research and long documents | 30B parameters with a focus on evidence-based work |

The comparison shows why model counts alone are not useful. A 30B reasoning model, a multimodal ecommerce model and a spatial reconstruction system are built for different jobs.

## Why specialised open models matter

**For businesses:** A specialised model may be easier to adapt to a narrow workflow than a general chatbot, particularly when the task has clear inputs and measurable outputs.

**For developers:** Open repositories and model weights can make experimentation and deployment more flexible, subject to each model's licence and access conditions.

**For retailers:** Multimodal ecommerce models may support product tagging, catalogue quality, visual search and livestream moderation.

**For robotics and spatial computing:** Streaming reconstruction models address a different requirement from text generation: understanding geometry as visual information arrives over time.

**For enterprises:** On-premises options may help with data control, but organisations still need to evaluate compute, maintenance, security and model performance.

A useful adoption metric is *workflow success per unit cost*: the percentage of real tasks completed to an agreed quality standard, divided by total inference and operating cost. This allows a specialised model to be compared with a general model on the job it is actually meant to do.

## What is open and what still needs checking?

Tencent's WeMM-Ecom repository describes model sizes, intended tasks, inference examples and available weight formats. The exact licence can vary by weight repository, so developers should inspect the licence attached to the specific checkpoint they download.

Robbyant's LingBot-Map 2.0 repository provides code and technical details, but says the model repositories are private and require an account with access. The project lists a CC BY-NC 4.0 licence for its original code and weights, which is not the same as unrestricted commercial use.

Sakana AI's announcement describes the Namazu Small model and its benchmark results. The company says on-premises availability details are expected in early to mid December. That is a planned update, not a confirmation that on-premises deployment is already generally available.

## Frequently asked questions

### Is Tencent WeMM-Ecom an open source LLM?

Tencent describes WeMM-Ecom as a multimodal foundation model family for ecommerce and general visual-language understanding. Its repository provides code and model-weight links, but users should check the licence for the specific checkpoint they intend to use.

### What is LingBot-Map 2.0?

LingBot-Map 2.0 is a geometric streaming model for 3D reconstruction from incoming RGB images. It predicts camera poses, depth and related geometry. It is not a general-purpose conversational LLM.

### What is Sakana Namazu Small?

It is a 30-billion-parameter reasoning model developed by Sakana AI on top of NVIDIA Nemotron 3 Nano, with additional continued pretraining and post-training by Sakana.

### Which of the three is designed for ecommerce?

Tencent's WeMM-Ecom is specifically developed for ecommerce workloads, including product understanding, multimodal search, compliance auditing and livestream commerce.

### Can companies run Sakana Namazu Small on their own infrastructure?

Sakana AI says it plans to offer on-premises availability and expects to share details in early to mid December 2026. Organisations should wait for those details before making deployment assumptions.

### Are these three models direct competitors?

No. They address different tasks. WeMM-Ecom focuses on ecommerce and visual-language understanding, LingBot-Map 2.0 on spatial reconstruction, and Namazu Small on reasoning, web research and long-document tasks.

## The open model race is becoming more specialised

These releases show that the open model ecosystem is not moving in one direction. Some teams are building models for commerce, others for spatial understanding, and others for research and document-heavy work.

For organisations, the opportunity is to stop asking which model is best in general and start asking which model performs a specific job reliably, affordably and under the right licence.
