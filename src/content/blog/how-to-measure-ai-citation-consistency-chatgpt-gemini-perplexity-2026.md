---
title: "How Consistently Do ChatGPT, Gemini and Perplexity Cite the Same Websites?"
date: 2026-11-24T10:00:00+05:30
description: "AI citations can change between prompts and repeated runs. Learn how to measure citation consistency across ChatGPT, Gemini and Perplexity without confusing normal variation with a lasting visibility change."
tag: "AEO"
categories: ["AEO", "GEO", "AI Search", "Research"]
tags: ["AI Citation Consistency", "ChatGPT Citations", "Gemini Citations", "Perplexity", "AI Measurement"]
type: "article"
tldr: "AI citation consistency measures how often the same source appears when the same or comparable prompts are tested repeatedly under documented conditions. It is not enough to compare one screenshot from this month with one from last month. Keep prompts, platform modes, location and counting rules stable, repeat tests, record unique URLs and domains, and report variation. A change in one answer is an observation, not proof of a trend."
sources:
  - title: "Prompt Selection, Denominators and Repeat Noise in AI Citation Tracking"
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7699899"
    publisher: "SSRN preprint"
    reviewed: "2026-11-24"
  - title: "What Drives AI Citations? Content, Retrieval and Model Knowledge in Generative Engine Optimization"
    url: "https://www.alphaxiv.org/abs/2610.15033"
    publisher: "University of Toronto research preprint"
    reviewed: "2026-11-24"
  - title: "AI features and your website"
    url: "https://developers.google.com/search/docs/appearance/ai-features"
    publisher: "Google Search Central"
    reviewed: "2026-11-24"
draft: true
playbook: false
---

An AI platform cites your website for a question today. The same prompt produces a different set of sources tomorrow. A competitor appears. Your page disappears. The answer is slightly different.

Does this mean your AI visibility has fallen?

Not necessarily. **AI citation consistency is the degree to which the same source, domain or URL appears across repeated tests under comparable conditions.** It helps separate a repeatable pattern from the variation that can occur in generated answers.

For businesses measuring AEO, this is essential. Without repeat testing, a report can turn one changing answer into a misleading trend.

## Why do AI citations change between repeated answers?

AI search experiences are not always static result pages. The wording of the prompt, search mode, model version, available web results, location context and time of testing can all affect the visible answer.

Google explains that AI Overviews and AI Mode may use query fan-out to explore related searches and supporting pages. It also notes that AI Overviews and AI Mode may use different models and techniques, so their responses and links can vary.

Other platforms have their own search and source-display behaviours. A visible citation list should be treated as an observation from that particular run, not a permanent ranking position.

## What does citation consistency mean?

There are several useful ways to measure it.

### 1. URL repeat rate

The percentage of repeated runs in which a specific URL appears.

[
	ext{URL Repeat Rate} =
rac{	ext{Runs containing the URL}}
{	ext{Total valid runs}}	imes100
]

If a page appears in 6 of 10 runs, its observed URL repeat rate is 60%.

### 2. Domain repeat rate

The same calculation at domain level. This tells you whether a website is repeatedly present even when different pages from that domain appear.

### 3. Citation overlap

The proportion of sources shared between two runs or two platforms. For a simple URL-level comparison, the Jaccard similarity is:

[
J(A,B)=rac{|Acap B|}{|Acup B|}
]

Here, A and B are the sets of cited URLs in two runs. A score of 1 means the sets are identical. A score of 0 means they have no URLs in common.

### 4. Platform overlap

Compare the URLs cited by ChatGPT, Gemini and Perplexity for the same prompt group. Shared URLs may indicate common source visibility. Platform-specific URLs reveal different source patterns.

Do not assume that high overlap means the platforms use the same internal retrieval system. It only means the visible citations overlap in the dataset.

## How to design a repeatable AI citation test

### Step 1: Freeze the prompt set

Use a fixed group of prompts covering category questions, comparisons, brand queries and problem-solving questions. Keep a separate list for newly discovered prompts so that the core measurement does not change every month.

### Step 2: Record the testing conditions

For every run, capture:

- Exact prompt text.
- AI platform and visible model label.
- Search mode or browsing status.
- Date and time.
- Language and location context.
- Account or personalisation state, where relevant and safe to record.
- Full answer and visible source links.

Do not compare a web-enabled answer with a non-search answer as if they were the same test.

### Step 3: Repeat the same prompt

Run the prompt more than once. If possible, space the runs and record the conditions. Avoid treating rapid repeated clicks as independent observations if the platform may reuse the same context or cached results.

### Step 4: Capture exact URLs and normalise them

Save original URLs, then create a normalised version for deduplication. Keep URL-level and domain-level consistency separate.

### Step 5: Report the spread

Show how many runs cited each URL, how many cited the domain and how much the source set changed. Include the sample size.

## A worked example: ten repeated runs

Suppose a team runs the same category prompt ten times on the same platform and records the visible sources.

| Source | Runs with at least one citation | Observed repeat rate |
|---|---:|---:|
| Brand website A | 6 | 60% |
| Publisher B | 8 | 80% |
| Competitor C | 4 | 40% |
| Industry report D | 3 | 30% |

These are illustrative figures. They do not represent the actual behaviour of ChatGPT, Gemini or Perplexity.

The result suggests that Publisher B was the most consistently visible source in this small test. It does not prove that Publisher B has a permanent citation advantage. More prompts, more runs and a longer observation period would be needed to make a stronger claim.

## Why measurement rules can change the result

A November 2026 SSRN preprint on prompt selection and repeat noise recounts saved runs from one project involving 48 prompts and repeated ChatGPT and Gemini tests. It shows that apparent citation rates can change substantially when the prompt population or denominator changes. The authors explicitly describe the work as a methods demonstration, not a population estimate.

The practical lesson is important: do not calculate a repeat rate only on prompts that cited a domain in the first run and then compare it with a rate across all prompts. Those are different populations.

Use a fixed denominator and show the prompt selection rule.

## A monthly AI citation consistency dashboard

| Metric | What to report |
|---|---|
| Prompts tested | Number of fixed prompts |
| Runs per prompt | Number of repetitions |
| Valid runs | Runs included after quality checks |
| URL repeat rate | Runs containing each URL |
| Domain repeat rate | Runs containing each domain |
| Unique cited URLs | Distinct page sources |
| Unique cited domains | Distinct website sources |
| URL overlap | Shared URLs between runs |
| Platform overlap | Shared URLs across AI platforms |
| Conditions changed | Model, mode, date or location differences |

A useful dashboard should show the distribution, not only an average. A domain with a 50% average repeat rate may be cited consistently for one topic and never cited for another.

## What can businesses do with consistency data?

Use it to prioritise investigation.

- A page cited consistently for a high-value prompt may deserve content maintenance and conversion optimisation.
- A page cited once and never again may need more observation before action.
- A competitor cited consistently for a key question may be a candidate for citation gap analysis.
- A source that appears across multiple platforms may deserve a closer review for accuracy and audience relevance.

Do not change good content simply because one run omitted it. First check whether the pattern persists.

For a practical way to capture the source pages themselves, read [how to track cited URLs in AI search](/what-are-cited-urls-ai-search-track-chatgpt-gemini-perplexity-2026/).

## Frequently asked questions

### Why does ChatGPT show different citations for the same prompt?

Search results, prompt interpretation, model behaviour and available sources can change. The visible citations from one run are not a permanent list.

### How many times should I repeat an AI prompt?

There is no universal number. Start with a manageable, disclosed sample such as five to ten runs for high-priority prompts, then expand where the results are unstable. Treat this as an operational starting point, not a statistical guarantee.

### Is citation consistency the same as citation share?

No. Consistency measures repeat appearances under repeated tests. Citation share measures a source's proportion of citations in a defined dataset.

### Should I compare ChatGPT and Gemini directly?

Yes, if the same prompt intent and documented conditions are used. Report each platform separately because their answer and source-selection behaviour can differ.

### Does a high repeat rate mean a website is authoritative?

Not by itself. It means the source appeared repeatedly in that test. Authority, factual quality and relevance require separate evaluation.

### Can AI citation tracking tools measure consistency accurately?

They can help automate collection, but review their prompt sampling, repetition rules, platform coverage and URL deduplication. A dashboard number is only as reliable as the method behind it.
