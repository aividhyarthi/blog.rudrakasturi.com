---
title: "OpenAI Rolls Out GPT-6.2 to ChatGPT's Chat Tab. What Has Actually Improved?"
date: 2026-11-24T08:10:00+05:30
description: "OpenAI says GPT-6.2 improves image understanding, complex instruction following and web research in ChatGPT's Chat tab. Here are the published benchmark changes, rollout details and what users should not assume from the announcement."
tag: "LLMs"
tldr: "OpenAI began rolling out GPT-6.2 to the Chat tab on November 23 for Plus, Pro, Business and Enterprise users. The company reports gains in image understanding, instruction following and its internal web research evaluation. These are OpenAI's own test results, not independent proof of performance across every real-world task. The update is specific to the Chat experience; Work and Codex models are not changing as part of this release."
categories: ["LLMs", "AI", "ChatGPT", "OpenAI", "AI Tools"]
tags: ["GPT-6.2", "ChatGPT", "OpenAI", "AI Models", "Image Understanding", "AI Research"]
type: "article"
sources:
  - title: "ChatGPT release notes: GPT-6.2, now in the chat tab"
    url: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
    publisher: "OpenAI"
    reviewed: "2026-11-24"
  - title: "Introducing GPT-6.2 Astra and Sol"
    url: "https://openai.com/index/introducing-gpt-6-2/"
    publisher: "OpenAI"
    reviewed: "2026-11-24"
draft: true
---

OpenAI has started rolling out GPT-6.2 to the Chat tab in ChatGPT, with a focus on everyday tasks that involve more detailed instructions, image understanding and finding information online.

The November 23 update is relevant because it changes the model experience people use for general conversations and practical work. OpenAI says the new version is better at handling complex requests, understanding images and deciding when a follow-up question or action may be useful.

The benchmark numbers show sizeable gains over GPT-6 in the company's tests. But there is an important distinction between a model release and independent evidence of how well it performs across real-world work.

## What is new in GPT-6.2 for ChatGPT?

OpenAI says GPT-6.2 is being rolled out globally to ChatGPT Plus, Pro, Business and Enterprise plans in the Chat tab. Enterprise availability depends on workspace administrator settings.

The ChatGPT version is powered by a version of GPT-6.2 Sol tuned for everyday conversation. This is not a change to every OpenAI model or product. OpenAI says the models powering Work and Codex are not changing as part of this release.

The update is aimed at requests that require several steps, careful instruction following or online research. OpenAI also highlights improved image understanding and a better ability to recognise when it should follow up.

## The benchmark numbers OpenAI has published

The release notes compare GPT-6.2 with GPT-6 across several internal evaluations.

| Evaluation | GPT-6 | GPT-6.2 | Reported change |
|---|---:|---:|---:|
| Image understanding | 47.4% | 71.7% | +24.3 percentage points |
| Complex instruction following | 62.5% | 78.1% | +15.6 percentage points |
| Expert-level tasks, lowest reasoning setting | 52% | 65% | +13 percentage points |
| BrowseComp, Extra High | 54.4% | 64.5% | +10.1 percentage points |

These are results reported by OpenAI. The company describes the BrowseComp result as coming from an internal version of the evaluation. The release notes do not make these figures a guarantee that every user will see the same improvement on every task.

It is also worth distinguishing percentage points from percentage growth. Image understanding moved from 47.4% to 71.7%, an increase of 24.3 percentage points. It is not a 24.3% relative improvement.

## Why image understanding matters

Image understanding is useful when a user needs to interpret a chart, read a screenshot, examine a document image or understand a visual problem.

A stronger score can make the assistant more useful in workflows where the image is part of the question rather than an attachment with no context.

For example, a marketing team may share a campaign dashboard and ask the model to identify unusual movements. A journalist may share a screenshot of a public document and ask for a structured explanation. A student may share a diagram and ask how its parts relate.

However, image understanding benchmarks do not establish that the model can verify the authenticity of every image, identify every visual detail correctly or replace expert review. Important numbers, legal information and factual claims still need to be checked against the original source.

## Better instruction following could change everyday workflows

OpenAI reports that GPT-6.2 followed complex instructions 78.1% of the time in its test, compared with 62.5% for GPT-6.

This matters because many useful tasks are not single questions. They involve a sequence of constraints: review a document, compare it with a set of requirements, preserve a format, identify gaps and produce a final output.

If a model follows those instructions more reliably, users may spend less time correcting missed requirements. But the remaining failure rate is still material. A score of 78.1% is not 100% compliance.

Teams should continue to use checklists and human review for work involving money, legal obligations, health, public communication or confidential information.

## Web research and the importance of source quality

OpenAI also reports better results on an internal version of BrowseComp, an evaluation focused on finding answers to difficult questions on the web.

At the Extra High reasoning setting, GPT-6.2 scored 64.5%, compared with 54.4% for GPT-6.

A higher research score is useful, but it does not remove the need to inspect sources. A model can locate a relevant page and still misunderstand its date, context or methodology. It can also combine claims from sources that are not equally reliable.

For research-heavy workflows, a good operating process remains simple:

1. Ask the model to identify primary sources before relying on secondary coverage.
2. Open the original study, release note, filing or dataset.
3. Check publication dates and whether the source supports the exact claim.
4. Separate reported facts from the model's interpretation.
5. Verify important numbers and quotations before publication.

The quality of an AI-assisted research task depends on both the model and the evidence it uses.

## What changes for businesses and content teams?

The most useful way to evaluate GPT-6.2 is through repeatable work tests, not a few impressive demonstrations.

A newsroom can compare how the model extracts facts from a source document, checks a timeline and identifies unsupported claims. An ecommerce team can test product attribute extraction from images and catalogues. A marketing team can compare how well it follows a multi-part brief and preserves mandatory messaging.

Use the same prompts, documents and scoring rubric before and after the update. Record factual accuracy, missed instructions, source quality, correction time and the amount of human editing required.

A model that produces a longer answer is not automatically better. A model that makes fewer factual errors and requires less correction may deliver more value even if the output looks less impressive.

## What has not changed

The November 23 release is a Chat tab update. It does not mean every ChatGPT feature has moved to GPT-6.2. OpenAI explicitly says the models powering Work and Codex are unchanged as part of this rollout.

The release also does not mean that every plan receives the update at exactly the same moment. It is a rollout, and Enterprise access may depend on administrator settings.

Finally, the benchmark improvements are published by OpenAI. Independent evaluation across different languages, industries and task types will be useful before making broad claims about the model's real-world advantage.

## The takeaway

GPT-6.2's ChatGPT rollout focuses on three practical areas: understanding images, following detailed instructions and finding information online. OpenAI's published tests show improvements over GPT-6 in each of these areas.

For users, the right question is not whether the new model is better in every situation. It is whether it reduces errors and saves time in the tasks they actually perform.

For businesses, the sensible next step is to test it on real workflows with the same documents, prompts and quality checks used before the update. Keep a human review step wherever an incorrect answer can create material consequences.

Model benchmarks tell us where a company says it has made progress. Repeated workflow tests tell us whether that progress matters to the work.
