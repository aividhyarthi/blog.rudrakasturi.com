---
title: "How to set a Target CPA in ChatGPT Ads: pick a bidding strategy, then a realistic number"
date: 2026-11-06T14:00:00+05:30
description: "ChatGPT Ads now offers intelligent bidding, Target CPA and Target CPC. Which one to choose, and a four-step way to set a Target CPA that does not starve your campaign."
draft: true
tag: "AEO"
tldr: "OpenAI says Target CPA is an average-cost goal, not a guaranteed price, and a target below your recent results may restrict delivery. Pick the strategy first, check that your conversion tracking works, work out your real cost per conversion, then set the target close to it and adjust slowly."
sources:
  - title: "Bidding strategies and how pricing works in ChatGPT Ads"
    url: "https://help.openai.com/en/articles/20001634-bidding-strategies-and-how-pricing-works-in-chatgpt-ads"
    publisher: "OpenAI Help Center"
categories: ["Ads", "ChatGPT Ads", "AI Search"]
tags: ["ChatGPT Ads", "Target CPA", "Conversion tracking", "Bidding"]
---

**Quick answer:** choose the strategy that matches your goal, fix your tracking, then set a target near what you actually pay today.
**Best for:** advertisers moving ChatGPT Ads campaigns off Max Bid and Max CPC. The dates are in [our news post](/chatgpt-ads-target-cpa-and-target-cpc-start-on-9-november-and-max-bid-and-max-cpc-retire-on-1-january-2027/).

## Pick your strategy

| What you want | Use | OpenAI's description |
|---|---|---|
| The most results from your budget, no target | Intelligent bidding | The system adjusts bids and delivery for your desired outcome within budget. You do not manage bids. |
| An average cost per purchase or lead | Target CPA (conversion campaigns) | The system works toward your average cost per conversion. |
| An average cost per click | Target CPC (click campaigns) | The system bids above or below your target in each auction and aims for your average. |
| Old setting | Max Bid or Max CPC | Retire on 1 January 2027. |

## Setting a Target CPA in four steps

![OpenAI Help Center page section Set a realistic target, with advice to review recent actual CPA and an example of $400 spend and 10 purchases](/images/chatgpt-ads-target-cpa-worksheet/help-center-set-a-realistic-target.png)

*Source: OpenAI Help Center, [Bidding strategies and how pricing works in ChatGPT Ads](https://help.openai.com/en/articles/20001634-bidding-strategies-and-how-pricing-works-in-chatgpt-ads).*

**Step 1: Check the signal.**
*What it is:* the conversion events reaching ChatGPT Ads. Setup alone does not prove they arrive.
*Do this:* confirm the OpenAI Pixel or the Conversions API is sending your chosen event to the data source linked to the campaign. Read the Event Quality Score warnings for missing matching information, delays and repeated events.
*Watch out:* OpenAI says weak or missing signals can reduce delivery and leave budget unspent.

**Step 2: Find your actual CPA.**
*What it is:* what you really pay now, for the same conversion event.
*Do this:* use a steady period and allow for reporting delay. OpenAI's example: $400 spent and 10 purchases is a $40 CPA.

**Step 3: Set the target.**
*What it is:* the average you want the system to aim for.
*Do this:* start from your actual CPA and what a conversion is worth to you. A target below recent performance may restrict delivery.
*Watch out:* a $20 target on a $40 result does not mean the system can deliver purchases at half the cost.

**Step 4: Review as it learns.**
*What it is:* checking that the target and the results agree.
*Do this:* look at spend, results and average cost together, and adjust gradually. Where an audience multiplier is available, remember it changes the target for that group: $50 with a 1.2 times new-customer multiplier gives that group a $60 target.
*Watch out:* actual costs can be higher or lower than the target, and a very tight target can leave budget unspent.

## Before you launch: a landing page check

This is my checklist, not OpenAI's.

- The page matches what the ad promised.
- The conversion fires once, and only on success.
- The page loads fast on a phone.
- Price, delivery and returns are easy to find.

## What to do

1. Pick the strategy from the table.
2. Test your conversion event with a real purchase or lead.
3. Work out your actual CPA for the same event.
4. Set the target near it, not at half of it.
5. Review weekly and change it in small steps.
6. Read [what advertisers should know before they spend](/chatgpt-ads-what-advertisers-should-know-before-they-spend/) and [how to track AI referrals](/how-to-track-ai-referral-traffic-in-analytics-a-four-step-setup-and-its-limits/).

Your bidding goal and your billing are separate settings, and OpenAI does not guarantee results.
