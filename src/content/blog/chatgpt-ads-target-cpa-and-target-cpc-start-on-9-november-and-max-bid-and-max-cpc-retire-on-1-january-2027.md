---
title: "ChatGPT Ads: Target CPA and Target CPC start on 9 November, and Max Bid and Max CPC retire on 1 January 2027"
date: 2026-11-06T08:20:00+05:30
description: "OpenAI is replacing Max Bid and Max CPC in ChatGPT Ads with Target CPA and Target CPC. The dates, what each option does, what API users must change, and what to check before you switch."
tag: "AEO"
tldr: "OpenAI's help page and advertiser email say Target CPA replaces Max Bid for new conversion campaigns and Target CPC replaces Max CPC for new click campaigns from Monday 9 November. Max Bid and Max CPC retire on 1 January 2027. Both targets are averages, not guaranteed prices. Maximize results is now called intelligent bidding."
sources:
  - title: "Bidding strategies and how pricing works in ChatGPT Ads"
    url: "https://help.openai.com/en/articles/20001634-bidding-strategies-and-how-pricing-works-in-chatgpt-ads"
    publisher: "OpenAI Help Center"
categories: ["Ads", "ChatGPT Ads", "AI Search"]
tags: ["ChatGPT Ads", "Target CPA", "Target CPC", "Bidding", "Advertising"]
---

**Quick answer:** From 9 November you can set an average cost per conversion or click in ChatGPT Ads Manager. The old Max Bid and Max CPC controls stop on 1 January 2027.
**Best for:** advertisers and agencies running ChatGPT Ads.

## What changes and when

This comes from OpenAI's help article, "Bidding strategies and how pricing works in ChatGPT Ads", and OpenAI's email to advertisers.

| Date | What happens |
|---|---|
| Monday 9 November 2026 | Target CPA is available for new conversion campaigns and replaces Max Bid. Target CPC is available for new click campaigns and replaces Max CPC. |
| Now | Existing campaigns keep serving as Max Bid or Max CPC. You may switch them. |
| Before 18 November (API) | Max Bid and Max CPC fields keep their behaviour. |
| From 18 November (API) | OpenAI recommends the new target fields. Legacy fields work through 31 December, but using them to create a campaign or change an ad group's bid type selects Target CPA or Target CPC, and the values become average-cost targets. |
| 1 January 2027 | Max Bid and Max CPC retire. The legacy API fields are deprecated. |

## What each option means

- **Intelligent bidding** (formerly Maximize results or autobid): the system adjusts bids and delivery to pursue your outcome within budget. No target needed.
- **Target CPA:** the average you would like to pay per conversion, such as a purchase or lead. OpenAI's example: a $50 target aims for a $50 average, and some conversions will cost more or less.
- **Target CPC:** the average you would like to pay per click. Unlike Max CPC, the system may bid above or below the target in each auction.

OpenAI states that a target is not a guaranteed maximum, and that the final winning auction bid sets the price you pay. Your bidding goal and billing event are separate settings.

## What to check first

OpenAI says restrictive targets or weak conversion signals can reduce delivery and leave budget unspent. For conversion campaigns, confirm the OpenAI Pixel or Conversions API is sending the selected event, and review Event Quality Score warnings.

## What to do

1. List every campaign still on Max Bid or Max CPC.
2. Calculate recent actual CPA or CPC for the same event and period. A worksheet for this follows later today.
3. Check that conversion events are arriving before you switch.
4. If you use the API, plan to move to the new fields before 18 November and before the 1 January deprecation.
5. Watch spend as campaigns learn. OpenAI does not promise any result.
6. Read our earlier guide, [what advertisers should know before they spend](/chatgpt-ads-what-advertisers-should-know-before-they-spend/).

The dates come from OpenAI's own page and advertiser email.

![Timeline of ChatGPT Ads bidding changes: now, 9 November, 18 November for API and 1 January 2027](/images/chatgpt-ads-target-cpa-cpc/bidding-changes.svg)
