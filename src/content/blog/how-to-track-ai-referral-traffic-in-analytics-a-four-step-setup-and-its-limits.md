---
title: "How to track AI referral traffic in analytics: a four-step setup and its limits"
date: 2026-11-01T12:30:00+05:30
description: "A four-step method to find, group and judge visits from ChatGPT, Perplexity, Copilot and other AI assistants in your analytics, with a source pattern list and honest limits on what the numbers can show."
tag: "AEO"
tldr: "Find referral sources that look like AI assistants, group them into one channel, compare their engagement and conversions with other channels, and treat the total as a floor because some visits lose their referrer. This is our own method, written for Google Analytics style tools, and the source names must be checked against your own data."
sources:
  - title: "Optimizing your website for generative AI features on Google Search"
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
    publisher: "Google Search Central"
  - title: "AI traffic drives 83% more revenue per visit for retailers: Adobe"
    url: "https://searchengineland.com/ai-traffic-drives-more-revenue-per-visit-adobe-499713"
    publisher: "Search Engine Land"
categories: ["AEO", "GEO", "Analytics"]
tags: ["AI referrals", "Analytics", "GA4", "ChatGPT", "Perplexity", "Measurement"]
---

Many site owners now ask how much traffic AI assistants send them. The answer depends on your analytics setup, and it is never exact. This is our own method, written in expert mode: it is not an official procedure from any analytics vendor or AI company, and we have not tested it on your site. It uses Google Analytics style reports as the example. Google also points site owners to Search Console's report on generative AI performance for traffic from its own AI features, which is separate from this analytics work.

![Four steps to track AI referrals in analytics: find AI assistant referral sources, group them into one channel, judge their quality, and admit the gaps because the count is a floor](/images/track-ai-referrals-in-analytics/four-steps.svg)

## Step 1: find the sources

Open your traffic acquisition report and view it by session source or referrer. Scan the last 90 days for names that look like AI assistants. Examples to look for, not a complete or verified list:

| Pattern to search | Often means |
|---|---|
| chatgpt, openai | ChatGPT |
| perplexity | Perplexity |
| copilot | Microsoft Copilot |
| gemini | Gemini |
| claude | Claude |

Names change, so check what actually appears in your own data and add new ones as you see them.

## Step 2: group them

Create one custom channel or segment called "AI assistants" using those patterns. A single channel makes the trend visible. Keep the raw source names in a second table so you can see which assistants matter.

## Step 3: judge the quality

Compare the group with organic search and direct traffic on four measures: engaged sessions, pages per session, landing pages and conversions. A third-party study reported by Search Engine Land found that AI-referred shoppers delivered more revenue per visit in September, as we covered in [our Adobe data post](/ai-referred-shoppers-delivered-83-percent-more-revenue-per-visit-in-september-adobe-data-shows/). Do not assume the same for your site. Use your own numbers.

## Step 4: admit the gaps

Treat the total as a floor. Our reasons:

- Some visits arrive without a referrer, so they look like direct traffic.
- Marketers have reported that link tracking tags can be dropped or replaced in AI tools, which would undercount visits. We have not verified this.
- A person may see your brand in an answer, then search for it later. Analytics will credit search or direct traffic.
- Traffic from Google's own AI features is not separated by a referrer name in this report.

So use three signals together: AI referral sessions, branded search growth, and your monthly [20-prompt AI visibility test](/a-20-prompt-ai-visibility-test-template-scoring-rubric-and-monthly-routine/).

## What to do

1. Run Step 1 on your last 90 days of data this week.
2. Build the AI assistants group and save it.
3. Review it monthly beside branded search and your prompt test.
4. Write down which landing pages receive AI visits, then improve those pages first, using our [AEO and GEO playbook](/the-aeo-and-geo-playbook-technology-content-schema-writing-style-and-myths/).
5. For choosing between tools, see [Search Console versus GA4](/google-search-console-vs-ga4-which-one-is-better-for-tracking-seo-data/).
