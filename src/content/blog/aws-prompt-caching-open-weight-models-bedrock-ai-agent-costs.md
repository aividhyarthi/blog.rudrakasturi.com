---
title: "AWS Prompt Caching for Open-Weight Models: How AI Agents Can Reduce Repeated Work and Costs"
date: 2026-11-17T09:15:00+05:30
description: "AWS now supports explicit prompt caching for open-weight models on Amazon Bedrock. Learn how cache reuse can reduce repeated processing, input costs and latency in AI applications."
categories: ["Artificial Intelligence", "Cloud Computing", "Technology"]
tags: ["AWS", "Amazon Bedrock", "prompt caching", "open-weight models", "AI agents", "AI costs"]
type: "article"
tldr: "AWS's November 16 update brings explicit prompt caching to open-weight models on Amazon Bedrock, alongside implicit caching. Reusing stable prompt prefixes can reduce repeated processing, input costs and latency, especially in applications that repeatedly send long instructions, documents or agent histories."
sources:
  - title: "Use prompt caching with open-weight models on Amazon Bedrock"
    url: "https://aws.amazon.com/blogs/machine-learning/use-prompt-caching-with-open-weight-models-on-amazon-bedrock/"
    publisher: "AWS"
    reviewed: "2026-11-17"
  - title: "Prompt caching for faster model inference"
    url: "https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html"
    publisher: "AWS Documentation"
    reviewed: "2026-11-17"
---

## AI agents may be paying to read the same information again and again

An AI assistant working on a business task may receive a long set of instructions, reference documents and tool definitions every time it is called.

The next request may contain a different question, but much of the context remains exactly the same.

Without prompt caching, the model may need to process that repeated information again. This can add cost and time, particularly in applications that make many calls or run long agent workflows.

Amazon Web Services is addressing this problem with an update to prompt caching for open-weight models on Amazon Bedrock.

In a technical article published on November 16, 2026, AWS explains how developers can use both implicit and explicit prompt caching with open-weight models through the Chat Completions API. The article also demonstrates caching in an OpenCode coding agent session.

The idea is straightforward: if an application repeatedly sends the same part of a prompt, it should be able to reuse the work already done on that content rather than processing it from scratch each time.

This is not a new AI model. It is an infrastructure optimisation that can make repeated AI workloads more efficient.

## What is prompt caching?

When a language model receives a prompt, it processes the input before generating a response.

That input may include:

- System instructions.
- Reference documents.
- Tool definitions.
- Conversation history.
- The latest user question.

In many applications, the first four items change less frequently than the final question.

Prompt caching allows a system to save the processed state of a reusable part of the prompt. When a later request begins with the same content, the system can reuse that cached state instead of processing the entire prefix again.

In simple terms, imagine a customer support assistant that receives the same 100 page product manual with every question.

The customer may ask about the warranty in one request and an error code in the next. The manual has not changed. Reprocessing it every time is wasteful.

With prompt caching, the application can reuse the processed manual and focus on the new question.

The result can be lower input processing costs and faster responses. The exact saving depends on the model, cache mode, prompt length, reuse frequency and pricing.

## What has AWS changed on November 16?

AWS says open-weight models on Amazon Bedrock now support explicit prompt caching. The service also supports implicit caching on eligible models.

The two modes solve related problems, but they offer different levels of control.

| Feature | Implicit caching | Explicit caching |
|---|---|---|
| How it works | Bedrock identifies eligible repeated prefixes automatically on a best-effort basis | The developer marks the reusable prefix with cache breakpoints |
| Developer configuration | No cache controls required | Uses prompt cache options and breakpoint markers |
| Best suited for | Stable conversations and growing agent histories | Fixed shared instructions or documents followed by changing questions |
| Control | Less direct | More precise |

### Implicit caching

With implicit caching, the application does not need to mark a cache boundary.

If later requests begin with the same eligible content, Bedrock can reuse the matching prefix automatically.

This is useful for conversations where the history grows over time. The earlier messages become part of the context sent with later requests.

AWS recommends placing stable content first and changing content later. If an early part of the prompt changes, the reusable prefix after that point may no longer match.

### Explicit caching

Explicit caching gives developers more control.

They mark the end of a reusable section with a cache breakpoint. The content up to that point can be saved and reused in later requests.

Developers can also use multiple breakpoints for layers of content that change at different rates.

For example, an application might have:

1. Company wide policies that rarely change.
2. Product documentation that changes occasionally.
3. A customer conversation that changes with every request.

Explicit caching allows the developer to define which sections should be reused.

AWS says the minimum prefix length, number of breakpoints and cache lifetime depend on the model. Developers should check the relevant model card rather than assume the same limits apply everywhere.

## Why does this matter for AI agents?

AI agents often send repeated context to a model.

A coding agent may repeatedly provide repository instructions, tool definitions and conversation history. A customer support agent may repeatedly send product manuals and service policies. A research assistant may repeatedly use the same reference documents.

These are exactly the kinds of workloads where prompt caching can help.

AWS demonstrates implicit caching in an OpenCode coding agent session. The same session asks an agent to review a Python file, propose a fix and then answer a follow up question.

The shared system instructions and tool definitions can be reused across turns. Only the new part of the request needs to be processed normally.

For an agent that makes many calls during a task, reducing repeated processing can improve both cost and response time.

## The AWS example: a customer support assistant

AWS demonstrates the feature using a fictional water filter called AnyCompany AquaPure 500.

The application loads the product owner's manual into a system prompt. The user then asks three different questions:

- What does error code E07 mean and how can it be fixed?
- How often should a particular filter be replaced?
- Is the smart faucet battery covered by the warranty?

The manual remains the same. Only the question changes.

With implicit caching, the first request processes the prompt and writes the eligible prefix to cache. Later requests can read the repeated system instructions and manual from cache.

With explicit caching, the developer can mark the reusable manual and instruction section directly.

This example shows why caching can be valuable for applications that rely on long reference material.

## Does prompt caching reduce AI costs?

It can, but the saving is not automatic.

AWS says cache reads are billed at a lower rate than standard input tokens. Depending on the model, cache writes may be billed at a higher rate than standard input.

The economics depend on how often the cached information is reused.

A long document that is sent once may not create meaningful savings. The same document sent repeatedly across hundreds of requests is a much better candidate.

Consider a support application that sends the same product manual with every customer question. If the manual is eligible for caching and the prefix is reused frequently, the application can avoid paying the full standard input processing rate for that repeated content.

Developers should calculate the complete cost, including cache writes, cache reads, uncached tokens and model output.

There is no single percentage saving that applies to every application. AWS directs developers to the pricing page and model cards for model specific cache rates and limits.

## What should developers do to get the best results?

AWS provides several practical recommendations.

### 1. Put stable content first

Place system instructions, tool definitions and reference documents before the changing user question.

A small change near the beginning can prevent later content from matching the saved prefix.

### 2. Keep reusable content consistent

If the application changes the wording, order or structure of the shared prompt on every request, cache reuse may be reduced.

Keep stable instructions and tool definitions identical wherever possible.

### 3. Choose the right caching mode

Use implicit caching when the context grows naturally across a conversation.

Use explicit caching when the application has a fixed shared prefix and a changing question, or when developers need precise control over reusable sections.

### 4. Check whether caching is actually working

AWS recommends examining usage information returned by the API.

Developers can inspect cached token reads and cache write token counts. AWS also describes runtime metrics that can help teams monitor cache activity in production.

### 5. Keep the cache active

Cached entries have a time to live that varies by model. AWS explains that the lifetime can reset when a cache entry is successfully reused.

Applications with steady traffic may therefore get more reuse than applications that send a prompt once and return much later.

## What does this mean for Indian startups and IT services companies?

Indian software companies increasingly build AI assistants for customer support, document processing, research, coding and enterprise operations.

Many of these applications repeatedly send the same policies, product information, technical documentation or tool definitions to a model.

Prompt caching creates an opportunity to optimise those workloads.

Consider three examples.

**A fintech support assistant:** The same product policies and frequently asked questions are used across thousands of customer queries.

**An IT services coding agent:** The same repository instructions and tool definitions are reused across multiple development tasks.

**A document research assistant:** A set of reference documents is repeatedly used to answer different questions from employees.

In each case, teams should measure whether caching reduces the cost and time required to complete a task without affecting answer quality.

The opportunity is particularly relevant to startups that need to manage inference costs carefully as usage grows.

However, developers must also consider cache isolation and data governance. Shared prompts should not accidentally expose one customer's private information to another customer. Cache keys, tenant boundaries and application architecture need to be designed appropriately.

## A practical AI Context Efficiency Score

The following is a proposed management framework, not an AWS metric.

| Assessment area | Weight |
|---|---:|
| Repeated context volume | 25% |
| Frequency of prefix reuse | 25% |
| Cache hit rate and token savings | 20% |
| Response latency improvement | 15% |
| Data isolation and governance | 15% |
| **Total** | **100%** |

Score each area from zero to five and calculate the weighted total.

A high score suggests that the workload may benefit from a controlled prompt caching pilot.

The most important operational metric is not the number of cached tokens alone. It is the cost per successfully completed task, alongside latency and answer quality.

## The bigger story: AI efficiency is becoming an infrastructure problem

The AI industry has spent considerable attention on making models larger, more capable and better at reasoning.

But as companies deploy AI agents, another challenge is becoming more visible.

An agent may call a model many times to complete one task. Each call can carry instructions, tool definitions, documents and conversation history. Repeating that context can make an otherwise useful application expensive and slow.

Prompt caching addresses one part of that problem.

AWS's November 16 update is important because it extends explicit caching to open-weight models on Amazon Bedrock and demonstrates how implicit and explicit caching can be used in application and coding agent workflows.

It does not eliminate inference costs. It does not guarantee a fixed percentage saving. It gives developers a way to reuse repeated context and measure whether doing so improves their workloads.

For businesses, this is a reminder that AI economics are shaped not only by which model they select, but also by how efficiently they use it.

**The next phase of AI cost optimisation may be less about asking a cheaper model to do the same work and more about ensuring that the model does not have to repeat work it has already completed.**

## Sources and further reading

1. AWS: [Use prompt caching with open-weight models on Amazon Bedrock, November 16, 2026](https://aws.amazon.com/blogs/machine-learning/use-prompt-caching-with-open-weight-models-on-amazon-bedrock/)
2. AWS Documentation: [Prompt caching for faster model inference](https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html)

*Editorial note: Feature descriptions and implementation examples are based on AWS's technical article and documentation. Cost benefits depend on model-specific pricing, prefix length, reuse frequency, cache lifetime and workload design. The AI Context Efficiency Score is an independent proposed framework.*
