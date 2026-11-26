---
title: "ChatGPT Ads Reach and Frequency Explained: Definitions, Formula, Examples and Optimisation"
date: 2026-11-26
description: "OpenAI has added Reach and Frequency to ChatGPT Ads reporting. Learn what each metric means, how frequency is calculated and how to use the numbers without confusing people with impressions."
tag: "ChatGPT Ads"
tldr: "Reach estimates the number of unique people who saw an ad at least once during the selected period. Frequency is total impressions divided by Reach. OpenAI has not publicly explained the full methodology used to estimate unique reach, so advertisers should treat it as an estimate rather than an exact count of individuals."
categories: ["ChatGPT Ads", "Advertising", "Analytics"]
tags: ["ChatGPT Ads Reach", "Frequency", "Ad Measurement", "Impressions"]
type: "guide"
draft: true
sources:
  - title: "ChatGPT Ads New Call-To-Actions, Business Agents Expand, More Audience Metrics & More"
    url: "https://www.seroundtable.com/chatgpt-ads-updates-42623.html"
    publisher: "Search Engine Roundtable"
    reviewed: "2026-11-26"
  - title: "Reporting"
    url: "https://learn.chatgpt.com/ads/reporting"
    publisher: "OpenAI Developers"
    reviewed: "2026-11-26"
  - title: "Ads in ChatGPT: The Basics"
    url: "https://help.openai.com/en/articles/20001207-ads-in-chatgpt-the-basics"
    publisher: "OpenAI Help Center"
    reviewed: "2026-11-26"
---

ChatGPT Ads reporting is moving beyond impressions and clicks. OpenAI has added Reach and Frequency, two audience metrics that help advertisers understand how many people saw an advertisement and how often it appeared to them.

These metrics are familiar to television, social media and digital video advertisers. Their arrival in ChatGPT Ads gives marketers a better way to discuss campaign coverage and repetition.

But Reach is an estimate, not a simple count of browser sessions. OpenAI's public update defines what it represents but does not explain the complete identity, deduplication or estimation methodology. Advertisers should preserve that distinction when reporting results.

## What is Reach?

**Reach is the estimated number of unique people who saw an ad at least once during the selected reporting period.**

If the same person sees an ad five times, that person contributes one to Reach, while the five exposures contribute five impressions.

Reach answers: how many different people did the campaign reach?

It does not answer how many times the ad appeared or how many people clicked.

## What is Frequency?

**Frequency is the average number of impressions per reached person.**

OpenAI's stated formula is:

**Frequency = Total impressions ÷ Reach**

Example:

- Impressions: 120,000
- Reach: 40,000
- Frequency: 120,000 ÷ 40,000 = 3

The average reached person saw the ad three times during the selected period. Some may have seen it once, others more often.

## Reach versus impressions

| Metric | What it counts | Example |
|---|---|---:|
| Impressions | Total ad exposures | 120,000 |
| Reach | Estimated distinct people exposed | 40,000 |
| Frequency | Average exposures per reached person | 3 |

A campaign can have high impressions but limited Reach if the same audience sees the ad repeatedly.

## How to read the numbers

**High Reach, low Frequency:** The campaign is reaching many people with relatively few repeated exposures. This can be useful for awareness, but it may not provide enough repetition for a complex decision.

**Low Reach, high Frequency:** The campaign is showing repeatedly to a smaller audience. That may be deliberate for a narrow audience, or it may signal limited scale or excessive repetition.

**Reach rising faster than impressions:** The campaign is expanding to new people rather than relying only on repeated exposure.

**Impressions rising while Reach stays flat:** Frequency is increasing. Check whether additional repetition is still producing engagement or conversions.

There is no universal ideal frequency. The right level depends on campaign objective, buying cycle, creative, audience size and budget.

## How to see Reach and Frequency in Ads Manager

1. Sign in to ChatGPT Ads Manager.
2. Open the campaign reporting view.
3. Select **Edit columns**.
4. Find the relevant metrics under **Ad Viewers**.
5. Select Reach and Frequency, along with any additional audience metrics you need.
6. Save the column settings.
7. Select a reporting date range and compare campaigns on the same period.

The product update also says the audience metrics are available through the Ads API. API users should refer to the current field names and definitions in the reporting documentation.

## How to use Reach and Frequency in a campaign review

A practical weekly review should include:

- Reach and percentage change from the previous comparable period.
- Impressions and average Frequency.
- Clicks and CTR.
- Spend and cost per reached thousand.
- Conversions and cost per conversion.
- Frequency alongside unique engagement, where available.

Do not compare a seven-day Reach number with a 30-day impression number. Use the same date range, campaign scope and time zone.

## What OpenAI has not explained yet

OpenAI has not published a detailed methodology describing how it estimates unique people across devices, sessions or accounts for Reach. It has also not publicly documented every calculation and deduplication rule for the newer audience metrics.

For this reason, do not describe Reach as an exact count of named individuals. Treat it as a platform-reported estimate. Avoid comparing it directly with another platform's Reach unless the methodologies and reporting periods are understood.

## The business lesson

Impressions tell you how often an ad was shown. Reach estimates how many people saw it. Frequency tells you how much repetition the campaign generated.

All three are useful, but none proves that the campaign created demand or revenue. Pair audience metrics with qualified traffic, conversions, customer value and sales outcomes.

**A good campaign does not simply maximise impressions. It reaches the right audience with enough repetition to support the decision, without paying endlessly to show the same message again.**
