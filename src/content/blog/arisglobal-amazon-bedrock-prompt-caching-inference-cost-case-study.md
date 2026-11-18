---
title: "How ArisGlobal Cut AI Inference Spend by Around 40% With Prompt Caching"
date: 2026-11-18T07:15:00+05:30
description: "An AWS case study shows why caching a repeated prompt prefix can matter more than caching the largest document in an AI workflow."
categories: ["Artificial Intelligence", "Technology", "Business"]
tags: ["AI", "Google", "OpenAI", "Microsoft", "AWS"]
type: "article"
tldr: "An AWS case study shows why caching a repeated prompt prefix can matter more than caching the largest document in an AI workflow."
sources:
  - title: "How ArisGlobal Cut AI Inference Spend by Around 40% With Prompt Caching"
    url: "https://aws.amazon.com/blogs/machine-learning/how-arisglobal-scaled-generative-ai-inference-on-amazon-bedrock/"
    publisher: "AWS Machine Learning Blog"
    reviewed: "2026-11-18"
---

## The expensive part of an AI request may be the part you keep repeating

ArisGlobal builds life sciences software and uses its NavaX AI engine to process adverse-event reports for pharmaceutical customers. Its workflow sends repeated requests to a model, each carrying system instructions, customer-specific rules, extraction schemas, examples and a source document.

As customers were added, the shared prompt prefix grew. AWS says it expanded by about 150% over six months, while per-case inference costs increased by more than 200%.

The company changed what it cached.

## The first design cached the wrong thing

Initially, ArisGlobal placed the source document first and cached it. That helped later requests for the same case reuse the document, but the shared prompt instructions came after the cache checkpoint.

Those instructions were therefore processed repeatedly at full input cost.

The revised design moved the stable shared prompt prefix to the beginning, placed the cache checkpoint after it and sent the case-specific document later.

That allowed the same prefix to be reused across requests, cases and tenants using the same agent.

## What changed in production

AWS reports that about 65% of input tokens in a typical request were served from the shared prompt cache. The case study reports approximately 50% lower effective input cost, up to 25% lower end-to-end latency on cached requests and around 40% lower overall monthly inference spend.

AWS also says the design supported around 15% more enterprise tenants without proportional cost increases.

These are figures reported by AWS and ArisGlobal, not an independent benchmark. Results will vary with prompt structure, traffic, cache hit rate, model and pricing.

## The lesson for AI developers

The largest part of a request is not always the best part to cache. The best candidate is often the content that repeats most frequently.

For an AI agent, that may include system instructions, tool definitions, output schemas, examples and stable business rules. Dynamic user input and documents can be placed after the cache boundary.

The order matters because prompt caching generally works on a reusable prefix. If changing content appears before the checkpoint, it can prevent later content from matching.

## A practical optimisation exercise

Take 100 representative requests from your application. Separate each prompt into stable instructions, reusable schemas, customer-specific rules and changing user data.

Measure which sections repeat exactly. Move the stable sections before the cache checkpoint where the model provider supports it. Keep dynamic information after the checkpoint.

Then compare cache reads, cache writes, input tokens, latency and cost per completed task.

Do not optimise only for token savings. Check whether the change affects answer quality, tenant isolation or data handling.

## Why this matters as agent usage scales

Agent workflows often make multiple model calls for one user request. Repeated instructions can quietly become a large part of total spend.

ArisGlobal's case illustrates a useful principle: design prompts around reuse, not just readability or document size. A small architectural change in request ordering can have a measurable effect at production scale.

*Source note: All performance and cost figures are from the AWS case study and reflect ArisGlobal's reported production metrics.*
