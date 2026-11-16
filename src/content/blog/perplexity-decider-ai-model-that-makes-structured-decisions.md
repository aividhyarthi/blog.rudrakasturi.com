---
title: "Perplexity Decider: The AI Model Built for Classification and Structured Decisions"
date: 2026-11-16T20:00:00+05:30
description: "Perplexity Decider v1.3 is a decision model for classification, routing, scoring and extraction. It is not a general chatbot that autonomously makes life decisions."
tag: "AI"
tldr: "Perplexity released Decider v1.3 and Decider Flash v1.3 on November 12, 2026. These models classify, score, route and rerank information by returning probabilities across defined options. The key idea is to use a specialised decision model when an application needs structured judgement rather than open-ended text generation."
draft: true
sources:
  - title: "Perplexity Decider v1.3: Training, eval, and use cases"
    url: "https://www.perplexity.ai/hub/blog/perplexity-decider"
    publisher: "Perplexity"
    reviewed: "2026-11-16"
  - title: "Hugging Face Decision Index"
    url: "https://huggingface.co/"
    publisher: "Hugging Face"
    reviewed: "2026-11-16"
categories: ["AI","AI Models","Developers"]
tags: ["Perplexity","Decider","AI classification","Decision models"]
---

The phrase “AI that makes decisions” can sound like a machine that independently chooses what people should do. Perplexity Decider is more specific.

In a November 12, 2026 announcement, Perplexity introduced Decider v1.3 and Decider Flash v1.3. They are decision models designed for classification, scoring, routing, ranking and information extraction.

Instead of writing a long answer, a decision model receives an input and a set of possible answers. It returns probabilities that an application can use to make a structured choice.

That distinction is important for anyone building AI products.

## What is Perplexity Decider?

Perplexity describes Decider as a general-purpose classifier. A developer provides a piece of information and one or more questions, each with a set of possible answers.

The model can handle three broad types of decision:

- **Yes or no:** estimate whether a defined condition is true.
- **Multiple choice:** select among a set of labels or options.
- **Score:** assign a value on an ordered scale.

The v1.3 release also adds a feature called Locate, which can extract specific text spans from an input, such as names, personal information or answers to extractive questions.

This makes Decider useful for workflows where software needs to inspect information and return structured outputs.

## Why build a decision model instead of using a chatbot?

A general-purpose language model is designed to generate text. That is useful when a user needs an explanation, a draft or an open-ended conversation.

But many software tasks do not need paragraphs. They need a label, a score or a routing decision.

Consider a customer support system. It may need to decide whether a message belongs to billing, technical support or account access. A generative model can explain its reasoning, but an application may only need a structured classification and confidence values.

A specialised decision model can make that task more direct and can evaluate several questions about the same input in one pass.

## What can developers use it for?

### 1. Query routing

A search product can estimate whether a question needs web search, deeper research or a simple direct answer. This can help allocate resources more efficiently.

### 2. Quality evaluation

A model can score whether a generated answer is relevant, supported by the supplied evidence or aligned with a defined rubric.

### 3. Safety and moderation

Applications can classify content for policy review, identify suspicious inputs or flag possible prompt injection in retrieved material. High-risk cases should still have appropriate safeguards and human escalation.

### 4. Search result ranking

Decider can score the relevance of a document to a query. Perplexity says it evaluates the models for reranking across retrieval tasks.

### 5. Information extraction

The Locate feature can identify text spans such as names, locations or other requested fields. This can support document processing and structured data extraction.

## What changed in v1.3?

Perplexity says both Decider v1.3 and the smaller Decider Flash v1.3 are available through the Perplexity Decisions API, OpenRouter and downloadable model weights under an Apache licence.

The company describes improvements to training and evaluation, including the use of bidirectional attention and a more refined training process. It also introduced Locate for span extraction.

Perplexity reports that Decider v1.3 achieved 91.6% mean accuracy across 63 classification tasks in its evaluation, exceeding its production classifiers by 6.54 percentage points. It also reports results across retrieval, multilingual and vision tasks.

These are Perplexity's own reported evaluations. They should not be treated as a guarantee that the model will achieve the same results on a different company's data or task.

## Decider versus a general-purpose model

| Requirement | Decision model | Generative model |
|---|---|---|
| Classify a support ticket | Strong fit | Can do it, but may be more than needed |
| Score a document against a rubric | Strong fit | Useful when an explanation is required |
| Draft a customer email | Not its main purpose | Strong fit |
| Explain a complex topic | Not its main purpose | Strong fit |
| Route a query to a tool | Strong fit | Can also perform this task |
| Extract a defined text span | Locate supports this | Possible with structured prompting |

The two types of models can work together. A decision model can classify a request, while a generative model can prepare the explanation or response.

## How should a business evaluate it?

Do not choose a decision model based only on a leaderboard score. Test it on the actual workflow.

Build a labelled sample of real cases. Measure accuracy by category, false positives, false negatives, latency and cost. Check how stable the result is when the input wording changes. Decide which cases require human review.

Perplexity recommends Decider v1.3 for nuanced judgements and detailed rubrics, while Decider Flash is aimed at higher-volume workflows where latency and cost matter. The best choice depends on the task and should be tested against representative examples.

## Why decision models matter

AI applications are moving beyond the question-and-answer interface. Many products need a system that can classify, filter, rank and route information before another model or a human takes action.

Perplexity Decider is part of that shift. It is not an autonomous decision-maker for every human problem. It is a specialised model that helps software make defined, measurable decisions.

That may sound less dramatic than an AI that “thinks for itself”. For developers building real products, it may be far more useful.
