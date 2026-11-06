---
title: "How to set a realistic Target CPA in ChatGPT Ads: a four-step worksheet and pre-launch check"
date: 2026-11-06T14:00:00+05:30
description: "Before ChatGPT Ads moves conversion campaigns to Target CPA, use this worksheet: confirm conversion signals, find your actual CPA, set a target, and review it as the campaign learns."
draft: true
tag: "AEO"
tldr: "OpenAI says Target CPA is an average-cost goal, not a guaranteed price, and that a target below recent performance may restrict delivery. The safest start is your actual CPA for the same event over a consistent window. A $20 target on a $40 actual CPA does not mean purchases at half the cost."
sources:
  - title: "Bidding strategies and how pricing works in ChatGPT Ads"
    url: "https://help.openai.com/en/articles/20001634-bidding-strategies-and-how-pricing-works-in-chatgpt-ads"
    publisher: "OpenAI Help Center"
categories: ["Ads", "ChatGPT Ads", "AI Search"]
tags: ["ChatGPT Ads", "Target CPA", "Conversion tracking", "Landing pages"]
---

**Quick answer:** Fix the data first, then set the target close to what you actually pay today, and adjust slowly.
**Best for:** advertisers moving ChatGPT conversion campaigns from Max Bid to Target CPA after 9 November.

OpenAI's help page is the source for the rules below. The worksheet layout is ours. For dates and what changes, see [our news post](/chatgpt-ads-target-cpa-and-target-cpc-start-on-9-november-and-max-bid-and-max-cpc-retire-on-1-january-2027/).

## Step 1: check the signal

OpenAI says setup alone does not prove usable conversion signals are arriving. Confirm that the OpenAI Pixel or Conversions API is sending the selected event to the data source linked to the campaign. Then read Event Quality Score warnings for missing matching information, delays and repeated events. Weak or missing signals can reduce delivery and leave budget unspent.

## Step 2: find actual CPA

Use the same conversion event and a consistent reporting period, and allow for conversion-reporting delay. OpenAI's example: $400 spend and 10 attributed purchases gives an actual CPA of $40 for that scope.

## Step 3: set the target

OpenAI advises comparing recent performance with what the outcome is worth to you. A target below recent performance may restrict delivery, and a $20 target on that $40 result does not mean the system delivers purchases at half the cost.

| Line | Your number |
|---|---|
| Actual CPA, last period | $40 |
| Most you can pay per sale and still profit | $55 |
| First target (our suggestion) | $40 to $45 |
| Review date | 7 days |

The $40 comes from OpenAI's example. The other numbers are illustrative.

## Step 4: review as it learns

OpenAI says to review spend, results and average cost together. Actual costs can be higher or lower than the target, since it is an average-cost goal. Audience multipliers, where available, change the target for a segment: a $50 target with a 1.2 times new-customer multiplier gives that segment $60.

## Landing page checks

Our checklist, not OpenAI's:

- The page matches the ad's promise.
- The conversion event fires once, and only on success.
- The page loads fast on a phone.
- Price, delivery and returns are visible.
- Tag links so visits appear in analytics. See [tracking AI referrals](/how-to-track-ai-referral-traffic-in-analytics-a-four-step-setup-and-its-limits/).

## What to do

1. Test the event today with a real conversion.
2. Calculate actual CPA by campaign.
3. Start near it, not at half.
4. Change the target in small steps and wait for data.
5. Read [what to know before you spend](/chatgpt-ads-what-advertisers-should-know-before-they-spend/).

Results are not guaranteed.

![Four-step worksheet for setting a realistic Target CPA in ChatGPT Ads: check signal, find actual CPA, set the target, review as it learns](/images/chatgpt-ads-target-cpa-worksheet/target-cpa-worksheet.svg)
