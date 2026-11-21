---
title: "Inkling 2 Mini: A 26 Billion Parameter Open Model With a One Million Token Context"
date: 2026-11-21T08:32:00+05:30
description: "Thinking Machines Lab has released Inkling 2 Mini under Apache 2.0. We explain its looped transformer design, active parameters, multimodal inputs and what developers should test before deployment."
tag: "ai"
categories: ["AI","Technology","SEO","AEO"]
tags: ["AI","Artificial Intelligence","Rudra Kasturi"]
type: "article"
tldr: "Thinking Machines Lab released Inkling 2 Mini on November 20, 2026, with open weights under Apache 2.0. Its model card lists 26.4 billion total parameters, 3.4 billion active parameters before accounting for repeated loop passes, text and image inputs, and a context window of up to one million tokens. The release makes experimentation easier, but the phrase laptop-sized should not be read as a guarantee that every laptop can run it comfortably."
sources:
  - title: "Inkling 2 Mini Model Card"
    url: "https://thinkingmachines.ai/model-card/inkling-2-mini/"
    publisher: "Thinking Machines Lab"
    reviewed: "2026-11-21"
---

Thinking Machines Lab released Inkling 2 Mini on November 20, 2026, describing it as a fast model small enough to run on a laptop. The release stands out because it combines open weights, a permissive Apache 2.0 licence, image input and a context window of up to one million tokens.

For developers, the interesting part is not only the model size. It is the architecture. Inkling 2 Mini uses a looped transformer design that runs a set of middle layers multiple times for each token. The company says this gives the model additional computation for reasoning without simply increasing the number of distinct weight layers.

## What has been released

The model card identifies Inkling 2 Mini as a multimodal autoregressive looped transformer. It accepts text and image inputs and produces text. The intended use cases include coding assistants, chatbots, retrieval-augmented generation and agentic systems.

The published model details list 26.4 billion total parameters and 3.4 billion active parameters. The model card also explains that repeated passes through the looped layers add effective active computation, bringing the figure to about 5.4 billion active parameters per token under its accounting.

It supports a context window of up to one million tokens. That is a large amount of input context, but it should not be confused with a guarantee that every long prompt will be processed cheaply or with perfect recall.

## Why the looped transformer matters

A conventional transformer has a fixed sequence of layers. A looped model reuses some layers more than once. The idea is to let the network perform additional processing while sharing weights, rather than making every additional computation require a new set of parameters.

Thinking Machines says this approach is particularly useful for tasks such as agentic coding, where a model may need to reason through a sequence of actions rather than produce a short answer.

The company also reports benchmark results in which Inkling 2 Mini leads open-weight models below 100 billion total parameters on selected coding and agentic coding evaluations. Those are company-reported results. Benchmark comparisons depend on the evaluation setup, prompts, hardware and scoring rules, so they should not be treated as a universal ranking.

## Does this mean it can run on any laptop

No. The phrase laptop-sized is a useful signal about the model's design, not a hardware compatibility promise. Real performance depends on memory, quantisation, inference software, context length and the amount of work being done at once.

A developer should check the model's official deployment instructions and test it on the machine they intend to use. A model that loads successfully may still be too slow for an interactive application.

## Why Apache 2.0 matters

The model card lists an Apache 2.0 licence. That gives developers broad rights to use, modify and distribute the released software and weights, subject to the licence terms. This is materially different from a closed hosted model where the provider controls access and usage.

Open weights can help teams experiment locally, fine-tune for a narrow task, inspect deployment trade-offs and reduce dependence on a single API provider. But open weights do not automatically make a deployment private, secure or free. Teams still pay for compute, storage, engineering and monitoring.

## What Indian developers could test

There are several practical experiments worth running.

1. A coding assistant for a specific internal codebase, measured against the team's current tool.
2. A document assistant that uses image inputs to interpret screenshots, diagrams or scanned pages.
3. A multilingual support prototype, tested on the actual mix of Indian languages and English used by customers.
4. A retrieval system that needs to process long technical manuals or policy documents.
5. An agent that performs a controlled sequence of tool calls, with every action logged and reversible.

For each test, measure task success, latency, memory use, cost per completed task and the number of times a human has to intervene. Do not select a model based on parameter count alone.

## The bigger question

Inkling 2 Mini adds to the growing choice of open-weight models that developers can evaluate outside a proprietary API. The interesting question is whether architecture and efficient inference can make capable models practical for smaller teams.

The answer will depend on real deployments, not a headline about a model fitting on a laptop.

**Source and reporting note:** This article reports the release information and model specifications published by Thinking Machines Lab. We were not involved in training or evaluating the model. Check the original model card and release page for updated hardware guidance, licence terms and benchmark methodology.
