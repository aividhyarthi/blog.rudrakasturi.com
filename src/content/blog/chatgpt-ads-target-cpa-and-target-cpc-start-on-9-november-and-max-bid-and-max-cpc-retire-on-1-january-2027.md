---
title: "ChatGPT Ads is replacing Max Bid and Max CPC with Target CPA and Target CPC: what changes on 9 November"
date: 2026-11-06T08:20:00+05:30
description: "From 9 November, ChatGPT Ads moves to cost targets. Target CPA and Target CPC replace Max Bid and Max CPC, which retire on 1 January 2027. What each one does, what changes for the API, and how to prepare."
draft: true
tag: "AEO"
tldr: "From Monday 9 November, new ChatGPT conversion campaigns use Target CPA and new click campaigns use Target CPC. Max Bid and Max CPC retire on 1 January 2027. A target is an average you aim for, not a ceiling, so your cost per conversion can land above or below it. Check your conversion tracking and set the target from your real cost, not a wish."
sources:
  - title: "Bidding strategies and how pricing works in ChatGPT Ads"
    url: "https://help.openai.com/en/articles/20001634-bidding-strategies-and-how-pricing-works-in-chatgpt-ads"
    publisher: "OpenAI Help Center"
categories: ["Ads", "ChatGPT Ads", "AI Search"]
tags: ["ChatGPT Ads", "Target CPA", "Target CPC", "Bidding", "Advertising"]
---

OpenAI is changing how you bid in ChatGPT Ads. Instead of setting a cap on each bid, you tell the system what you want to pay on average, and it manages the bids. If you run ChatGPT Ads today, you have until 1 January 2027 to move.

![OpenAI's Help Center page on bidding strategies in ChatGPT Ads, showing Intelligent bidding, Target CPA, Target CPC and the retirement of Max Bid and Max CPC](/images/chatgpt-ads-target-cpa-cpc/help-center-bidding.png)

## What changes and when

| Date | What happens |
|---|---|
| Monday 9 November 2026 | You can choose a cost target in Ads Manager when you create or edit a campaign. Target CPA is available for new conversion campaigns. Target CPC is available for new click campaigns. |
| Now, until 1 January | Existing campaigns keep running as Max Bid or Max CPC. You can switch them to a target if you want. |
| 18 November (API) | New Target CPA and Target CPC fields arrive. OpenAI recommends using them. |
| 31 December | The old API fields still work until this date. |
| 1 January 2027 | Max Bid and Max CPC retire. Target CPA replaces Max Bid on conversion campaigns, and Target CPC replaces Max CPC on click campaigns. |

Maximize results, also called autobid, is now called **intelligent bidding**. The system keeps adjusting bids and delivery to get the most results from your budget, and you don't set a target.

## What each option means

**Target CPA** is for conversion campaigns. You set the average you would like to pay for one conversion, such as a purchase or a lead. OpenAI's example: with a $50 target, the system works toward a $50 average. Some conversions cost more and some cost less.

**Target CPC** is for click campaigns. You set the average you would like to pay for one click. Max CPC capped each bid. With Target CPC the system can bid above or below your target in each auction, to get as many clicks as it can from your budget at your average.

## What this changes in practice

In my view, the key change is that you lose the hard ceiling. Max Bid and Max CPC set a limit on a single bid. A target does not. OpenAI says plainly that a target is not a guaranteed maximum, and that actual averages can be higher or lower.

That means you need to watch your average cost and your spend more closely than before. It also means the quality of your conversion tracking matters more, because the system learns from it.

## What to do

1. **List your campaigns** still on Max Bid or Max CPC.
2. **Check conversion tracking.** Confirm the OpenAI Pixel or the Conversions API is sending the event your campaign uses. Look at Event Quality Score warnings. OpenAI says weak or missing signals can reduce delivery and leave budget unspent.
3. **Work out your real cost.** Take the same conversion event over a steady period. OpenAI's example: $400 spent and 10 purchases is a $40 CPA.
4. **Set the target near that number.** OpenAI warns that a target below your recent results may restrict delivery. A $20 target on a $40 result does not mean purchases at half the price.
5. **Watch it as it learns.** Look at spend, results and average cost together.
6. **If you use the API,** move to the new fields before 1 January. From 18 November, using the old fields to create a campaign or change a bid type will set a target instead, and your numbers will be treated as averages.

Your bidding goal and your billing are separate settings. A campaign can aim for conversions while you are charged per click or per impression.
