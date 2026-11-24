---
title: "How to Calculate AI Citation Share, Brand Mention Rate and AI Share of Voice"
date: 2026-11-24T14:00:00+05:30
description: "Learn how to calculate AI citation share, brand mention rate and AI share of voice across ChatGPT, Gemini and Perplexity, with formulas, worked examples and reporting rules."
tag: "AEO"
categories: ["AEO", "GEO", "AI Search", "Measurement"]
tags: ["AI Citation Share", "Brand Mention Rate", "AI Share of Voice", "AEO Metrics", "LLM Visibility"]
type: "article"
tldr: "AI citation share, brand mention rate and AI share of voice measure different things. Citation share compares a source's citations with all citations in a defined dataset. Mention rate measures the proportion of tested answers that name a brand. AI share of voice compares a brand's mentions with mentions of all tracked brands. Every report must state its prompt set, platforms, time period, counting unit and denominator."
sources:
  - title: "AI Search & LinkedIn: 5 insights from 9.5 million citations"
    url: "https://www.linkedin.com/business/marketing/blog/ai-search/new-meltwater-research-shares-5-insights-from-9-million-citations"
    publisher: "Meltwater and LinkedIn"
    reviewed: "2026-11-24"
  - title: "The attribution crisis in LLM search results: Estimating ecosystem exploitation"
    url: "https://www.cambridge.org/core/journals/data-and-policy/article/attribution-crisis-in-llm-search-results-estimating-ecosystem-exploitation/170DD0B88E5F5AEA8F69F2E9AF1328E3"
    publisher: "Data & Policy, Cambridge University Press"
    reviewed: "2026-11-24"
  - title: "Ranking on Google Is No Longer the Whole Story. How Should Businesses Measure Their Visibility in AI Search?"
    url: "https://blog.rudrakasturi.com/ranking-on-google-is-no-longer-the-whole-story-how-businesses-should-measure-ai-search-visibility/"
    publisher: "RudraKasturi.com"
    reviewed: "2026-11-24"
playbook: false
---

A dashboard says your brand has a 12% AI visibility score. Another tool reports 4% citation share. A monthly report shows 30% mention rate. These numbers may all be correct, but they do not measure the same thing.

The problem is often not the data. It is the denominator.

**AI citation share, brand mention rate and AI share of voice need separate definitions.** Before comparing brands or reporting growth, decide what counts as a citation, what counts as a mention, which prompts are included and whether the unit is an answer, a citation occurrence or a unique URL.

## What is AI citation share?

AI citation share is the proportion of citations attributed to a particular brand, website or source within a defined collection of AI answers.

A practical formula is:

[
	ext{Citation Share} =
rac{	ext{Citations attributed to your source}}
{	ext{All counted citations in the dataset}}	imes100
]

For example, assume a research team records 1,000 citation occurrences across a fixed prompt set. A company's website receives 80 of those citations.

Its citation share is 8% within that dataset.

This does not mean the company owns 8% of all AI citations on the internet. It means that it received 8% of the citations counted under the report's specific test conditions.

### Citation share can use different counting units

A report must explain whether it counts:

- Every citation occurrence in every answer.
- Unique cited URLs.
- Unique cited domains.
- Answers that cite at least one page from a domain.

These produce different results. If one URL appears in 20 answers, it contributes 20 occurrences but only one unique URL.

## What is AI brand mention rate?

Brand mention rate measures how often a brand appears in a set of tested AI answers.

[
	ext{Mention Rate} =
rac{	ext{Answers that mention your brand}}
{	ext{Valid answers tested}}	imes100
]

Suppose a company tests 100 relevant prompts across one platform. Its brand appears in 28 answers. Its mention rate is 28% for that test.

Count an answer once for a brand even if the brand name appears five times in the same answer. If you want to measure repeated name occurrences, create a separate metric called mention frequency.

Also decide whether a mention must be an exact brand name, an accepted product name or a clearly identifiable entity reference. Record misspellings and ambiguous names for manual review.

## What is AI share of voice?

AI share of voice compares a brand's mentions with the total mentions of all brands being tracked for a defined category or prompt set.

[
	ext{AI Share of Voice} =
rac{	ext{Your brand mentions}}
{	ext{Mentions of all tracked brands}}	imes100
]

For example, a prompt set produces 200 brand mentions across five competing accounting products. Brand A appears 60 times. Its share of voice is 30%.

This is a share of tracked brand mentions, not a share of all AI answers or all citations. One answer can mention multiple brands, so the total brand mention count may be higher than the number of answers.

## The three metrics compared

| Metric | Numerator | Denominator | Main question |
|---|---|---|---|
| Citation share | Citations to your source | All counted citations | Which sources receive the citations? |
| Brand mention rate | Answers naming your brand | Valid answers tested | How often does AI name us? |
| AI share of voice | Mentions of your brand | Mentions of all tracked brands | How visible are we against competitors? |

Do not label all three as "AI visibility". The label should tell a reader what has actually been counted.

## A worked example using one consistent dataset

Imagine a team tests 100 prompts across ChatGPT Search. Each answer may contain more than one brand and more than one citation.

The team records:

- 100 valid answers.
- 40 answers mentioning Brand A.
- 30 answers mentioning Brand B.
- 20 answers mentioning Brand C.
- 10 answers mentioning other tracked brands.
- 500 total citation occurrences.
- 75 citations to Brand A's own domain.

The resulting metrics are:

| Metric | Calculation | Result |
|---|---|---:|
| Brand A mention rate | 40 / 100 | 40% |
| Brand B mention rate | 30 / 100 | 30% |
| Brand C mention rate | 20 / 100 | 20% |
| Brand A citation share | 75 / 500 | 15% |
| Brand A AI share of voice | 40 / 100 total brand mentions | 40% |

These figures are illustrative. They demonstrate the arithmetic, not a real platform benchmark.

Notice that Brand A has a 40% mention rate and 40% share of voice, but only 15% citation share. It is frequently named, yet its own website receives a smaller share of the source links. That gap deserves investigation.

## Five reporting mistakes that distort AI visibility metrics

### 1. Changing the prompt set every month

If the November test contains easy branded questions and the December test contains difficult category comparisons, the rates are not directly comparable.

Keep a fixed core prompt set. Add new prompts in a separate discovery group.

### 2. Mixing platforms into one number

ChatGPT, Gemini, Perplexity and Google AI features can show different sources and answer formats. Report each platform separately before creating a combined view.

### 3. Mixing answers and citation occurrences

An answer may contain several citations. An answer-level citation rate and a citation-occurrence share are different calculations.

### 4. Counting repeated URLs as unique sources

Keep separate columns for citation occurrences, unique URLs and unique domains. Do not silently deduplicate one metric using the rules of another.

### 5. Treating a small sample as a market benchmark

A 20-prompt test can help a company identify patterns. It cannot establish the entire market's AI share of voice. State the sample size and limitations clearly.

A 2026 peer-reviewed article in Data & Policy examined approximately 14,000 real-world LMArena conversation logs and defined an attribution gap between relevant pages visited and pages cited. Its findings show why a visible citation count is not the same as the full set of sources a system may have consulted. The study uses 2025 logs and specific model versions, so its percentages should not be presented as current platform-wide benchmarks.

## How to build a reliable monthly AI visibility report

1. Define the business category and competitors.
2. Create a fixed prompt set with informational, comparison, brand and problem-solving questions.
3. Select the platforms and search modes to test.
4. Run the same prompts under consistent conditions.
5. Save complete answers and visible citations.
6. Label mentions, recommendations and citations separately.
7. Calculate the three metrics with their denominators visible.
8. Report unique URLs, unique domains and citation occurrences as separate fields.
9. Repeat the test and flag variation between runs.
10. Connect visibility changes to referrals, leads and revenue where data is available.

For a wider framework that includes accuracy, traffic and business outcomes, see [how businesses should measure their visibility in AI search](/ranking-on-google-is-no-longer-the-whole-story-how-businesses-should-measure-ai-search-visibility/).

## Frequently asked questions

### Is AI citation share the same as AI share of voice?

No. Citation share measures the share of counted source citations. AI share of voice measures a brand's share of tracked brand mentions. Their numerators and denominators are different.

### How do I calculate AI mention rate?

Divide the number of valid tested answers that mention the brand by the total number of valid answers, then multiply by 100.

### Can citation share be higher than mention rate?

Yes. They use different units and denominators. A source can receive multiple citations in answers where the brand is not named.

### Should ChatGPT, Gemini and Perplexity be combined?

Report each platform separately first. A combined figure can be useful as a secondary roll-up only when the prompt set, counting rules and weighting method are disclosed.

### What is a good AI citation share?

There is no universal target. Citation share depends on the category, prompt mix, platform, competitors and how citations are counted. Establish a baseline and compare like with like.

### How many prompts are enough?

There is no single number that works for every business. Use a sample large enough to cover the important customer questions, repeat it consistently and disclose the sample size. A small, stable test is more useful than a large but changing one.
