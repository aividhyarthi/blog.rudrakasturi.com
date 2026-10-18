---
title: "Should you block AI crawlers? Pay Per Crawl and the new rules, explained"
date: 2026-10-13
description: "AI bots take a lot of content and send little traffic back. Cloudflare and Google are testing ways to get publishers paid. What it means for you."
tag: "AI"
tldr: "AI crawlers take far more pages than the visitors they send back. Cloudflare lets sites block them or charge for access, and is testing new payment systems. Be careful: blocking or charging Googlebot can hurt your Google visibility."
sources:
  - title: "Cloudflare To Block AI Crawlers By Default"
    url: "https://www.seroundtable.com/cloudflare-block-ai-crawlers-39673.html"
    publisher: "Search Engine Roundtable"
  - title: "Cloudflare Moves Monetization Gateway & Pay Per Use Into Beta"
    url: "https://www.searchenginejournal.com/cloudflare-moves-monetization-gateway-pay-per-use-into-beta/591719/"
    publisher: "Search Engine Journal"
  - title: "Google's AI Payment Pilot Vs. Cloudflare And Microsoft Models"
    url: "https://www.searchenginejournal.com/googles-ai-payment-pilot-vs-cloudflare-and-microsoft-models/589636/"
    publisher: "Search Engine Journal"
  - title: "Google sends 831x more visitors than AI systems: Report"
    url: "https://searchengineland.com/google-more-visitors-ai-systems-report-462905"
    publisher: "Search Engine Land"
  - title: "Cloudflare Gives AI Agents Wallets That Pay For What They Access"
    url: "https://www.searchenginejournal.com/cloudflare-gives-ai-agents-wallets-that-pay-for-what-they-access/584959/"
    publisher: "Search Engine Journal"
categories: ["AI", "Crawling"]
tags: ["AI Crawlers", "Cloudflare"]
---

Many publishers ask the same question: should I let AI bots read my site? Here is the background and the latest news.

## The imbalance

A TollBit report cited by Search Engine Land found Google sent publishers **831 times more visitors** than AI systems in the second quarter of 2025. Cloudflare's crawl-to-visit ratios, reported by Search Engine Land, were about 60,000 to 1 for Anthropic and 1,500 to 1 for OpenAI, versus 18 to 1 for Google. In simple words: AI bots take a lot and send little back.

## What Cloudflare offers

- **Pay Per Crawl** launched in private beta on July 1, 2025. A publisher can set a price for AI crawlers, using the web's "402 Payment Required" response. Each crawler can be set to allow, charge or block. Cloudflare also began blocking AI crawlers by default for new domains.
- Cloudflare says it has blocked **416 billion** AI bot requests since the launch.
- On **September 30, 2026** Cloudflare moved two new tools into beta: a *Monetization Gateway* (charge per request) and *Pay Per Use* (publishers are paid when AI companies report using their content).
- On August 4, 2026 it announced *Wallets* for AI agents. Coverage notes there is still no general availability or published pricing.

## Google's position

Google is running its own invitation-only AI payment pilot, reported by Search Engine Journal.

## The big warning

Search Engine Journal points out that **blocking or charging Googlebot can hurt your search visibility**, because Google treats a 402 response as a client error. Separate Googlebot from the AI-only bots before you change any rule.

## What to do

1. List which bots hit your site, and separate **search bots** (keep them) from **AI training bots** (your choice).
2. Decide on purpose. If AI citations matter for your brand, blocking everything also removes you. ([Why each AI differs](/why-chatgpt-perplexity-and-google-cite-different-sources/))
3. Do not lock a permanent block into contracts. Coverage advises against it while the systems are still changing.
4. Check your CDN settings. Cloudflare's defaults may already be blocking bots you wanted.
