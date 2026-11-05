---
title: "Myth: SEO is dead because of AI answers. What the evidence supports and what it does not"
date: 2026-11-05T16:00:00+05:30
description: "Studies agree people click less when an AI answer appears, but they disagree on how much. Google says its AI features rest on core ranking systems. A claim-by-claim check of 'SEO is dead'."
tag: "AEO"
tldr: "The evidence supports a narrower claim than 'SEO is dead': clicks fall when an AI answer shows, by amounts that vary from study to study. Google says its generative AI features are rooted in its core ranking and quality systems. We sort the common claims into supported, partly supported, not supported and unknown."
sources:
  - title: "Optimizing your website for generative AI features on Google Search"
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
    publisher: "Google Search Central"
  - title: "Study Confirms Google AI Overviews Cut Organic Clicks 38%"
    url: "https://www.searchenginejournal.com/ai-overviews-cut-organic-clicks-38-field-study-finds/573145/"
    publisher: "Search Engine Journal"
  - title: "AI Overview CTR Fell 61%, But Clicks Didn't Collapse"
    url: "https://www.searchenginejournal.com/ai-overview-ctr-fell-61-but-clicks-didnt-collapse/572993/"
    publisher: "Search Engine Journal"
  - title: "Google zero-click searches reach 68% in early 2026: Study"
    url: "https://searchengineland.com/google-zero-click-searches-2026-study-479717"
    publisher: "Search Engine Land"
categories: ["AEO", "SEO", "Google Search"]
tags: ["SEO is dead", "AI Overviews", "Zero-click", "Myths", "AEO"]
---

"SEO is dead" is a slogan, not a finding. To test it, split it into claims and check each against a source. We read Google's guide to generative AI search (updated 10 July 2026 as we read it). The study figures come from Search Engine Land and Search Engine Journal as summarised in [our earlier post on AI Overviews and clicks](/are-ai-overviews-really-killing-clicks-what-the-studies-say/); we did not reopen the studies for this post, and the vendor studies use different methods.

![Four claims about SEO and AI answers sorted into supported, partly supported, not supported and unknown](/images/seo-is-dead-myth-check/claim-vs-evidence.svg)

## Claim by claim

| Claim | Verdict | What supports it |
|---|---|---|
| People click less when an AI answer appears | Supported in direction | A field experiment reported by Search Engine Journal found organic clicks fell 38% where AI Overviews appeared, and the authors call it exploratory. Seer Interactive reported a 61% fall in click-through rate on informational queries. Pew Research Center found 8% of visits with a click when a summary showed, versus 15% without. |
| The drop is as large for every site | Partly supported | The figures above differ by method and query set. Seer's follow-up found click-through fell for cited pages but clicks barely moved, because impressions grew. |
| More searches end without a click | Supported | SparkToro, using Similarweb data, reported 68.01% of US Google searches in early 2026 ended without a click, but does not isolate AI answers as the cause. |
| AI search replaces SEO fundamentals | Not supported by Google | Google says generative AI features rely on its core ranking systems, that SEO best practices stay relevant, and that optimizing for these features is still SEO. |
| Your site is losing traffic to AI answers | Unknown | Only your own data can show this. |

## What "dead" gets wrong

Google's guide says pages must be indexed and eligible for a snippet to appear in its AI features, and that crawlability, technical clarity and non-commodity content matter. Those are SEO tasks. Google is a party with an interest here, so we do not treat its view as neutral; but it is the only primary description of how its own features work.

## What it gets right

Clicks and impressions are not moving together. A page can be seen more and visited less. Reporting only on sessions now misses part of the picture, and referrals from AI tools are small but can be valuable: Adobe reported AI-referred shoppers delivered more revenue per visit, as we covered in [this post](/ai-referred-shoppers-delivered-83-percent-more-revenue-per-visit-in-september-adobe-data-shows/).

## What we could not confirm

We could not verify any claim about total site traffic across the web, and no study here separates AI answers from other causes of falling clicks, such as changing user habits.

## What to do

1. Pull 12 months of Search Console data for your top 20 informational queries. Compare impressions, clicks and click-through rate.
2. Mark when AI features began to appear for those queries.
3. Use the Generative AI report in Search Console, as explained in [what it shows and leaves out](/search-console-generative-ai-report-what-it-shows-and-what-it-leaves-out/).
4. Track AI referrals with our [analytics setup](/how-to-track-ai-referral-traffic-in-analytics-a-four-step-setup-and-its-limits/).
5. Judge your own site from its own data, then see the [AEO and GEO playbook](/the-aeo-and-geo-playbook-technology-content-schema-writing-style-and-myths/).
