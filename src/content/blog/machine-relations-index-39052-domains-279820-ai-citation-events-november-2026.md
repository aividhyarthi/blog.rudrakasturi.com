---
title: "Machine Relations Index Tracks 39,052 Domains and 279,820 AI Citation Events. How to Read the New Dataset"
date: 2026-11-23T14:30:00+05:30
description: "The November 21 release of the Machine Relations Index reports citation observations across six AI answer engines. Its methodology explains why category, question type and sample thresholds matter."
tag: "geo"
categories: ["AEO","GEO","SEO","Research","Data"]
tags: ["Machine Relations Index","AI Citations","AI Search Measurement","Google AI Mode","Google AI Overviews","Perplexity"]
type: "article"
draft: true
tldr: "The Machine Relations Index release published November 21, 2026 reports 39,052 cited domains, 279,820 source events and 41,954 answer runs across six AI answer engines, covering May 10 to November 21, 2026. It publishes citation rates by category and question type when minimum evidence thresholds are met. Its authors caution that a segment rank describes the sampled questions, not an entire market."
sources:
  - title: "Machine Relations Index"
    url: "https://machinerelations.ai/index"
    publisher: "Machine Relations Research"
    reviewed: "2026-11-23"
  - title: "Machine Relations Index method"
    url: "https://machinerelations.ai/index/method"
    publisher: "Machine Relations Research"
    reviewed: "2026-11-23"
---
# Machine Relations Index Tracks 39,052 Domains and 279,820 AI Citation Events. How to Read the New Dataset

The Machine Relations Index (MRI) published a new dataset release on November 21, 2026, measuring which web domains are cited by AI answer engines.

The release reports 39,052 cited domains, 279,820 source events and 41,954 answer runs across six engines. Its measurement window runs from May 10 to November 21, 2026.

The index is designed to measure citation frequency across a fixed set of questions and categories. Its own methodology makes an important point: a domain's position in one category is not a universal measure of authority or visibility.

## The November 21 release

| Dataset field | Reported value |
|---|---:|
| Cited domains | 39,052 |
| Source events | 279,820 |
| Answer runs | 41,954 |
| Answer engines | 6 |
| Measurement window | May 10 to November 21, 2026 |
| Methodology version | 2.1 |
| Measurable segments validated | 151 of 151 |

The six engines listed by the index are ChatGPT, Claude, Gemini, Google AI Mode, Google AI Overviews and Perplexity.

## What does the index measure?

The index records root-domain citations observed in AI answers. It groups results by subject category and question type, rather than publishing one undifferentiated ranking.

A segment is a combination of a category and a question shape. For example, a category may include comparison questions, recommendation questions or research questions.

This structure matters because the sources cited for a product comparison may differ from those cited for a technical explanation.

## Why does the evidence threshold matter?

The index says a segment publishes a citation rate only after it has at least ten observed runs across at least seven distinct dates.

| Rule | Threshold or treatment |
|---|---|
| Minimum observed runs | 10 |
| Minimum distinct observation dates | 7 |
| Below threshold | Segment remains in collection, without a published rate |
| Missing collection evidence | Not automatically treated as zero |
| Segment coverage in release | 151 of 151 measurable segments validated |

This is an important safeguard against presenting thin samples as stable rankings.

## Which engines are included?

| Engine | Included in the November 21 release |
|---|---|
| ChatGPT | Yes |
| Claude | Yes |
| Gemini | Yes |
| Google AI Mode | Yes |
| Google AI Overviews | Yes |
| Perplexity | Yes |

The methodology also documents changes in collection routes. In particular, it warns that Google AI Overviews observations collected before and after September 25, 2026 should not be treated as one continuous trend because the collection path changed. It also describes a separate change in Google AI Mode observations in August.

This is a crucial caveat for anyone using the index to report month-on-month gains or declines.

## What changed in the weekly report?

The index's November 16 weekly report, comparing the November 16 release with November 9, listed some of the largest movements among graded domains.

| Domain | Citation rate movement reported |
|---|---:|
| HubSpot | +0.06 percentage points |
| Rankite | +0.05 percentage points |
| CDP.com | +0.04 percentage points |
| Reddit | -0.30 percentage points |
| YouTube | -0.21 percentage points |
| LinkedIn | -0.16 percentage points |

These are movements in the index's cumulative citation rates for its measured question set. They do not establish why the rates changed or indicate a broad decline in the platforms' overall authority.

## How publishers should use the index

The index can help identify which domains appear in a defined set of AI answers. It should not be used as a standalone measure of all AI search visibility.

A publisher using the data should record:

1. The exact category and question type.
2. The engine and collection route.
3. The observation window.
4. The number of answer runs and distinct dates.
5. Whether the segment met the evidence threshold.
6. Any methodology or collection changes affecting comparisons.

A domain's citation rate in a narrow segment should not be reported as its overall share of AI search.

## A practical dashboard structure

| Dashboard field | Why it belongs |
|---|---|
| Engine | Citation patterns differ across systems |
| Category | Different topics have different source ecosystems |
| Question type | Comparison and explanatory queries can cite different sources |
| Domain | Shows which publishers are cited |
| Citation rate | Normalises observed citations against the index denominator |
| Sample size | Shows how much evidence supports the rate |
| Observation dates | Helps detect time and collection effects |
| Method version | Protects against invalid comparisons after methodology changes |

## What the dataset cannot tell us by itself

The index measures citations in its fixed basket of prompts. It does not directly measure brand mentions, user clicks, referral traffic, conversions or the full set of queries made by real users.

Its public release also excludes raw cited URLs and some internal query identifiers. That limits page-level analysis from the public summary alone.

The dataset is published under a Creative Commons Attribution 4.0 licence, according to the index's citation information.

## The takeaway

The Machine Relations Index is useful because it makes its sample size, category structure and evidence thresholds visible. Its strongest contribution is not a single leaderboard. It is a repeatable way to examine which domains appear in defined AI answer samples.

For publishers, the lesson is to treat AI citation rankings as question-specific observations and to retain the denominator, dates and method version every time a result is reported.

**Source and research note:** This article is based on the Machine Relations Index release published November 21, 2026 and its methodology documentation. The index is produced by Machine Relations Research. Findings are attributed to the dataset publisher and have not been independently replicated here. Read the release notes and method before making comparisons.
