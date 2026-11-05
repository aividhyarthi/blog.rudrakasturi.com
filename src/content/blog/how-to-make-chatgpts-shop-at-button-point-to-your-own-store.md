---
title: "How to make ChatGPT's 'Shop at' button point to your own store"
date: 2026-11-05T12:10:00+05:30
description: "WISLR found that ChatGPT's 'Shop at' button went to the brand's own store far more often when the brand's product page was one of the answer's sources. Here is what to fix on your product page, with a before and after example."
tag: "AEO"
tldr: "In WISLR's four-day test, the brand's own store got the 'Shop at' button 34% of the time when its product page was one of ChatGPT's sources, and 6% when it was not. Nobody outside OpenAI knows how the button is chosen, so you cannot force it. You can make your page easy to read, easy to reach, and complete enough to be used."
sources:
  - title: "ChatGPT Now Puts a 'Shop at' Button in Its Shopping Answers, and Most of Them Point to Big-Box Stores"
    url: "https://www.wislr.com/articles/chatgpt-shop-at-buttons-big-box/"
    publisher: "WISLR"
categories: ["AEO","AI Search","Ecommerce"]
tags: ["ChatGPT","Shop at button","Product pages","Ecommerce"]
playbook: true
---

A "Shop at" button is the link ChatGPT puts under a product it recommends. In WISLR's test, only 5% of these buttons went to the brand's own store. We explained the full test in [our post on the buttons](/chatgpt-shop-at-buttons-most-go-to-big-box-stores/). This post is about what you can do on your side.

## What we know and what we do not

WISLR found that when the brand's product page was one of the pages ChatGPT used to write the answer, the brand's store got the button 34% of the time. When it was not, only 6%. WISLR ran a second, stricter match and got 39% against 7%.

OpenAI has not said how it picks the store. So we cannot promise that fixing your page will move the button. What we can say: if your page is not one of the pages ChatGPT reads, you have almost no chance. The steps below make your page easier to be read and used. Think of it as getting into the room. It does not guarantee the result.

## Step 1: Check that ChatGPT can reach the page

If your robots.txt blocks OpenAI's search crawler, ChatGPT cannot read your page at all. Follow our [10-minute crawler test](/can-chatgpt-reach-your-site-a-10-minute-test-for-gptbot-oai-searchbot-and-chatgpt-user/). Do this first, because nothing else matters if the page is blocked.

## Step 2: Put the facts a shopper needs in plain text

A shopper asks ChatGPT: "best budget running shoes for flat feet under $100". For your page to help answer that, the page must say the things in that question.

Here is a made-up example. A small shoe brand has this on its product page:

**Before:** "Meet the Stride 2. Born for the road. Feel the difference."

**After:** "Stride 2 running shoe, $89. Neutral cushioning with a firm arch support, which many people with flat feet find comfortable. Weight: 270 g. Sizes UK 6 to 12. Free returns within 30 days. In stock, ships in 2 days."

The first version is a slogan. The second answers price, who it suits, weight, sizes, returns and stock. Those are the things a shopping answer needs. Use your own real details, and do not claim anything about "flat feet" unless you can back it up.

## Step 3: Make sure the page matches every other place you sell

If your page says $89 and the same shoe says $99 on Amazon, ChatGPT sees two different prices. Pick one source of truth. Update every listing when the price changes.

## Step 4: Say what is true about the product, including limits

Shopping answers show pros and cons. A page that lists honest limits ("not for trail running", "runs half a size small") gives the answer something real to quote. A page that says "the best shoe ever" gives it nothing.

## Step 5: Test it, and write it down

Make a small table and fill it in once a month.

| Prompt you tried | Was your product named? | Where did its button go? | Was your page among the sources? |
|---|---|---|---|
| "best budget running shoes for flat feet" | | | |
| "where to buy [your brand] shoes" | | | |
| "[your brand] vs [competitor]" | | | |

ChatGPT lets you see the sources behind an answer. Use that to fill in the last column. After a few months you will see whether the changes helped. Four days of data from one company is not enough to be sure, and yours may differ.

## What to do

1. Allow OpenAI's search crawler in robots.txt.
2. Rewrite your product page with price, who it suits, size, returns and stock in plain text.
3. Make price and stock match on every store.
4. Add honest limits to the page.
5. Run the same five prompts every month and record the results.

Also read: [how to get your product page found in ChatGPT and Google AI Mode](/how-to-get-your-product-page-found-in-chatgpt-and-google-ai-mode/).

*Source: WISLR, published 14 October 2026, updated 16 October 2026. The shoe example is made up to show the idea.*
