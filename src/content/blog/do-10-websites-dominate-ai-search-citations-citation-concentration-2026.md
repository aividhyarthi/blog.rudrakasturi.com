---
title: "Do 10 Websites Dominate AI Search Citations? Understanding Citation Concentration"
date: 2026-11-24T10:45:00+05:30
description: "Learn how to measure AI search citation concentration, calculate the share captured by the top 10 domains and identify whether a small group of websites dominates your category's AI answers."
tag: "AEO"
categories: ["AEO", "GEO", "AI Search", "Research"]
tags: ["Citation Concentration", "Top Cited Domains", "AI Search Sources", "Citation Share", "AEO Research"]
type: "research"
tldr: "Citation concentration measures how much of a defined set of AI citations goes to a small group of sources. To test whether the top 10 domains dominate a category, collect a representative prompt set, record every visible citation, deduplicate domains consistently and calculate the top 10 share. There is no universal top 10 list across AI platforms or industries. Without a measured dataset, claims about concentration should remain questions, not findings."
sources:
  - title: "Answer Bubbles: Information Exposure in AI-Mediated Search"
    url: "https://eshwarchandrasekharan.com/files/emnlp2026-answer-bubbles.pdf"
    publisher: "EMNLP 2026 research paper"
    reviewed: "2026-11-24"
  - title: "AI citations to social media and UGC grew 52% on Google's AI platforms, fell 44% on ChatGPT"
    url: "https://www.semrush.com/blog/ai-citations-social-media-ugc/"
    publisher: "Semrush"
    reviewed: "2026-11-24"
  - title: "How Large Language Models Source Brand Reputation Across Languages and Markets"
    url: "https://arxiv.org/abs/2606.25787"
    publisher: "Dmitrij Zatuchin, arXiv preprint"
    reviewed: "2026-11-24"
  - title: "The 2026 AI Search Visibility Benchmarks, Edition 1"
    url: "https://www.searchintel.tech/downloads/SearchIntel-AI-Search-Visibility-Benchmarks-2026-Ed1.pdf"
    publisher: "SearchIntel"
    reviewed: "2026-11-24"
draft: true
playbook: false
---

A small group of websites may receive a large share of citations for some AI search topics. But does the same group dominate every platform, industry and question?

That is a research question, not something that should be assumed.

**AI citation concentration measures how much of a defined citation dataset is attributed to a small number of domains or URLs.** The top 10 domain share is one way to describe it. It can reveal whether AI answers repeatedly rely on a narrow group of publishers, platforms or specialist sources.

To make a credible claim, the prompt set, platforms, date range and counting rules must be visible.

## What is AI citation concentration?

Citation concentration describes how citations are distributed across sources.

If 1,000 citation occurrences are recorded and 10 domains receive 700 of them, the top 10 domain share is 70%. If the same 1,000 citations are spread across 300 domains, the source landscape is less concentrated.

The number alone does not explain whether the concentration is good or bad. A medical query may reasonably rely on a small set of authoritative public health sources. A broad product discovery query may benefit from a wider range of independent sources.

The interpretation depends on the topic and the quality of the cited sources.

## How to calculate the top 10 cited domain share

Use this formula:

[
	ext{Top 10 Domain Share} =
rac{	ext{Citation occurrences attributed to the top 10 domains}}
{	ext{All citation occurrences in the dataset}}	imes100
]

For example, if the top 10 domains receive 650 of 1,000 citation occurrences, the top 10 share is 65%.

This is an illustrative calculation, not a measured AI search benchmark.

Also calculate the top 3, top 5 and top 20 shares. That helps show whether concentration is driven by a few very large sources or a broader group.

![Two independent 2026 datasets report different citation concentration patterns. The samples and metrics are not directly comparable](/images/editorial/ai-citation-concentration-top-10-domains-2026.svg)

## Why should businesses measure citation concentration?

### 1. To understand the source landscape

A category where a handful of official documentation sites dominate citations behaves differently from a category where news publishers, forums, video platforms and brand websites all appear.

### 2. To identify over-reliance on a few publishers

If the same domains appear across most prompts, businesses should understand why those sources are useful. They may offer original data, authoritative explanations, broad coverage or simply have pages that match the tested questions.

### 3. To find opportunities for original reporting

A concentrated source landscape may reveal unanswered questions or missing perspectives. That is an opportunity to create genuinely useful material, not to copy the top-cited pages.

### 4. To compare AI platforms

ChatGPT, Gemini, Perplexity and Google's AI features may cite different sources. A top 10 list for one platform should not be presented as a universal AI search ranking.

## How to run a citation concentration study

### Step 1: Define the category

Choose one topic with a clear boundary, such as Indian personal finance software, enterprise cybersecurity or beauty product comparisons. Avoid mixing unrelated industries in one dataset.

### Step 2: Build a balanced prompt set

Include informational, comparison, problem-solving, product and brand questions. Document how prompts were selected. Do not choose only prompts that produce the source pattern you expect.

### Step 3: Select platforms and testing conditions

Record the platform, search mode, date, location context, language and visible model label. Test platforms separately before combining results.

### Step 4: Capture all visible citations

Save the exact URLs, titles and domains. Keep citation occurrences separate from unique URLs and unique domains.

### Step 5: Normalise domains consistently

Decide how subdomains are handled. For example, whether support.example.com and www.example.com are grouped under example.com. State the rule and apply it to every source.

### Step 6: Rank domains by citation occurrences

Count how many citation occurrences each domain receives. Sort from highest to lowest and calculate the cumulative share for the top 3, 5, 10 and 20 domains.

### Step 7: Repeat the study

Run the same prompt set again. If the top 10 changes significantly between runs, report that instability rather than presenting a fixed ranking.

## The data table we should publish

| Rank | Domain | Citation occurrences | Share of citations | Cumulative share | Source category |
|---:|---|---:|---:|---:|---|
| 1 | Domain A | To measure | To calculate | To calculate | Publisher |
| 2 | Domain B | To measure | To calculate | To calculate | Official source |
| 3 | Domain C | To measure | To calculate | To calculate | Social platform |
| 4 | Domain D | To measure | To calculate | To calculate | Specialist site |
| 5 | Domain E | To measure | To calculate | To calculate | Brand website |
| 6 to 10 | Domains F to J | To measure | To calculate | To calculate | Classify individually |

The labels above are placeholders for the research design. They are not real domains or observed results. We should not publish a ranked list until the dataset has been collected and checked.

## What existing research tells us about source diversity

A 2026 study by Dmitrij Zatuchin analysed 167,551 URL-grounded citations across 128 brands, 12 markets and 13 languages. It reported that 80% of citations came from about 18% of domains in its dataset, and that 85.7% of citations pointed to third-party rather than brand-owned sites. Separately, SearchIntel reported that the top 10 domains accounted for 21.9% of 6,119 citations in its own June 2026 benchmark. These are different datasets and concentration measures, so they should not be treated as a direct comparison or universal result.

Separate industry reports also show that source patterns differ by platform and industry. Semrush's 2026 social and UGC analysis found different leading social sources across Google's AI products and ChatGPT. Tinuiti's Q1 2026 report similarly describes industry and platform differences in social citation share.

These studies support the need to measure source diversity and concentration separately. They do not establish one universal top 10 domain list.

## Citation concentration is not the same as source quality

A domain can receive many citations because it covers a large number of topics. That does not mean every page is accurate or suitable for every question.

A useful research report should include a quality review:

- Does the cited page support the answer?
- Is the source primary, independent or promotional?
- Is the information current?
- Does the source disclose its methodology?
- Are important viewpoints missing?
- Does the answer rely on a single source for a disputed claim?

This makes the study more useful than a simple ranking of domains.

## Frequently asked questions

### What is citation concentration in AI search?

It is the degree to which visible AI citations are concentrated among a small number of websites or pages within a defined dataset.

### How do I calculate the top 10 cited websites?

Count citation occurrences by domain, rank domains, add the citations received by the top 10 and divide by all citation occurrences. State how subdomains and duplicate URLs were handled.

### Do the same 10 websites dominate ChatGPT and Gemini?

That should not be assumed. Different platforms and prompt categories can produce different citation sets. Measure each platform separately.

### Is a high top 10 share necessarily bad?

No. Some topics have a legitimate need for authoritative sources. The result should be interpreted alongside source quality, topic risk and diversity.

### Should unique URLs or citation occurrences be used?

Both are useful. Citation occurrences measure frequency. Unique URLs measure page diversity. Unique domains measure website diversity. Report them separately.

### Can citation concentration help with AEO strategy?

Yes. It can identify the source types that appear frequently, show competitor citation patterns and reveal gaps where original evidence or useful explanations are missing.
