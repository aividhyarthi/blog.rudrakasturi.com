---
title: "ChatGPT visits fell. Did ChatGPT stop recommending you? How to tell the difference"
date: 2026-11-05T12:17:00+05:30
description: "A fall in ChatGPT visits and a fall in ChatGPT mentions are two different problems. WISLR's October data shows visits dropping while brand mentions held. Here is how to check both, with a simple table."
tag: "AEO"
tldr: "On one store WISLR measures, ChatGPT visits fell 66% from 9 to 13 October, but when WISLR asked ChatGPT the same 250 shopping questions before and after 10 October, the brand was named in 43% of answers after and 40% before. Fewer visits does not always mean fewer mentions. Track both, separately."
sources:
  - title: "ChatGPT Now Puts a 'Shop at' Button in Its Shopping Answers, and Most of Them Point to Big-Box Stores"
    url: "https://www.wislr.com/articles/chatgpt-shop-at-buttons-big-box/"
    publisher: "WISLR"
categories: ["AEO","Analytics","AI Search"]
tags: ["ChatGPT","AI referrals","Direct traffic","Measurement"]
playbook: true
---

Two things can go wrong with ChatGPT, and they look the same in a quick glance at your report.

1. **Fewer visits.** ChatGPT still talks about you, but fewer people click through.
2. **Fewer mentions.** ChatGPT talks about you less.

They need different fixes. If you treat one as the other, you waste time.

## What WISLR saw in October

On one store WISLR measures, visits from ChatGPT from 9 to 13 October were 66% lower than from 1 to 7 October. On a second store they were 57% lower. Visits from Gemini went up over the same days.

That looks like a big loss. But WISLR also asked ChatGPT the same 250 shopping questions before and after 10 October. The brand was named in 43% of answers afterward, against 40% before. So mentions did not fall.

WISLR points to two things that explain the gap:

- From 8 to 15 October, links in ChatGPT opened without a referrer and without the utm_source=chatgpt.com tag. Analytics tools count a visit as ChatGPT only if one of those is present. Without both, the visit is filed as Direct. WISLR says Adobe's Cedric Huesler reported that OpenAI confirmed the missing tag was a bug, and the tag came back on 15 October. OpenAI has not commented publicly.
- On 10 October, ChatGPT started adding "Shop at" buttons, and most went to retailers. Some clicks that used to go to your site may now go to a store. See [our post on the buttons](/chatgpt-shop-at-buttons-most-go-to-big-box-stores/).

## The four cases

Put your visits and your mentions side by side.

| Visits | Mentions | What it probably means | What to do |
|---|---|---|---|
| Down | Same or up | Clicks are going elsewhere, or not being counted | Check Direct traffic. Check the "Shop at" button destinations. |
| Down | Down | You may have lost visibility | Check that ChatGPT can reach your pages and review your content |
| Same or up | Down | Our view, not WISLR's: mentions may be slipping before visits show it | Test again next month and compare |
| Same | Same | Nothing to fix | Keep tracking |

## How to check Direct traffic, the right way

WISLR found that not every lost click came back as Direct in the same way. On the store it measures:

- Lost clicks to support and how-to pages came back as Direct visits.
- Lost clicks to product pages mostly did not come back for US visitors, and only about half did elsewhere.

So check Direct visits for the same dates on both kinds of page, not only on one. If Direct rose on support pages but not on product pages, the product page visits may truly be going somewhere else, for example to a retailer.

## A simple example (made-up numbers)

A site has 1,000 ChatGPT visits a week. After 10 October it has 400. The owner panics and starts rewriting pages.

A better order:

1. Check Direct for the same dates. It rose by 450. So about 450 of the missing visits were probably counted as Direct.
2. Ask ChatGPT 20 shopping questions about the product. The brand is named in 9 of them, the same as last month.
3. Conclusion: the brand is still mentioned. Most of the drop is a counting problem. The owner leaves the pages alone and checks again in two weeks.

## What to do

1. Mark 8 October 2026 on every chart that has ChatGPT or AI traffic. Compare windows that fall entirely after it, not before and after.
2. Build a small list of 20 shopping questions about your products. Run them once a month and write down how often your brand is named.
3. Look at Direct traffic on product pages and on support pages for the same dates.
4. Use our [analytics setup guide](/how-to-track-ai-referral-traffic-in-analytics-a-four-step-setup-and-its-limits/) so the UTM tag and the referrer are both tracked.
5. Read [what happened with the October tracking bug](/where-did-my-chatgpt-traffic-go-the-october-utm-bug-that-sent-ai-visits-to-direct/).

*Source: WISLR, published 14 October 2026, updated 16 October 2026. The 1,000-visits example is made up to show the idea. WISLR's own figures come from a few stores and a few days, and it calls the exact percentages provisional.*
