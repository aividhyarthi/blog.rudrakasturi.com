---
title: "Is llms.txt Accepted by Search Engines?"
date: 2025-06-10T03:15:31Z
description: "And What It Means for SEO, Publishers, and AI Control Is llms.txt Supported by Search Engines? As of now, no major search engine officially supports llms.txt . Google, Bing, and others still rely on…"
tag: "ai"
image: "https://blog.rudrakasturi.com/wp-content/uploads/2025/06/image-23.webp"
---

And What It Means for SEO, Publishers, and AI Control

## Is llms.txt Supported by Search Engines?

As of now, **no major search engine officially supports `llms.txt`**.

Google, Bing, and others still rely on the traditional `robots.txt` file to manage how their bots access content. However, the conversation around `llms.txt` is picking up momentum among publishers, SEO professionals, and legal teams.

In simple terms:

*   `robots.txt` is **used and respected** by Google, Bing, and OpenAI.
*   `llms.txt` is **not yet a standard**, but it's becoming a **symbolic move** by websites trying to control how AI models access their data.

## What Is llms.txt?

`llms.txt` is a **proposed new file**, similar to `robots.txt`, that allows website owners to manage how **large language model (LLM) crawlers** — such as those from OpenAI (ChatGPT), Google (Gemini), and Perplexity — can access and use their content.

It stands for **Large Language Models Text Directive**, and its primary goal is to separate **AI bot access** from traditional **search engine bot access**.

## Why Is llms.txt Being Proposed?

Because the web has changed.

Search bots used to crawl your content to help users **discover your website** via search.  
LLM bots crawl your site to **train AI models**, often to generate answers **without linking back** or giving credit.

This shift affects:

*   **Traffic**: AI Overviews and chatbots can answer queries directly, reducing site visits.
*   **Attribution**: Your brand might not be mentioned at all.
*   **Monetization**: Your content fuels AI models that profit without compensating you.

So, `llms.txt` gives publishers a tool to **control or block** LLMs without affecting their search engine traffic.

## What’s the Difference Between Robots.txt and llms.txt?

Here’s a simple comparison:

Feature

robots.txt

llms.txt

Purpose

Control access for search bots

Control access for AI language models

Official support

Yes (Google, Bing, OpenAI, etc.)

No (emerging, symbolic right now)

Crawler user-agents

Googlebot, Bingbot, etc.

ChatGPT-User, Google-Extended, etc.

Impact on SEO

Direct (can affect rankings)

Indirect (can affect AI usage, visibility)

File location

yourdomain.com/robots.txt

yourdomain.com/llms.txt

## Example of an llms.txt File

```
# Block OpenAI's ChatGPTUser-agent: ChatGPT-UserDisallow: /# Block Google Gemini (AI crawler)User-agent: Google-ExtendedDisallow: /# Allow Perplexity (if you have a content deal)User-agent: PerplexityBotAllow: /# Default ruleUser-agent: *Disallow: /
```

This setup says:

*   Block ChatGPT and Google’s AI products
*   Allow only Perplexity (if they’ve signed a licensing agreement)
*   Block all other LLMs by default

## Do AI Companies Actually Follow llms.txt?

Since it's not an official standard, **compliance is voluntary**. Here's where things stand:

LLM Provider

Crawler Name

Honors llms.txt?

Honors robots.txt?

OpenAI

ChatGPT-User

No (not confirmed)

Yes

Google Gemini

Google-Extended

No

Yes

Perplexity

PerplexityBot

No (unclear)

Yes

Bing Copilot

Unknown

No

Yes (via Bingbot)

As of today, these companies **only honor `robots.txt`**, but that could change under regulatory pressure or publisher alliances.

## Why Should SEOs and Tech Teams Care?

Even though `llms.txt` is not yet a formal rule, it signals the start of **AI-specific content governance**.

For SEOs:

*   Your content is now influencing **AI answers**, not just rankings.
*   You may lose visibility if AI tools train on your site but **don’t credit or send traffic**.
*   Understanding how to **allow or block AI crawlers** is the next evolution of SEO hygiene.

For tech and product teams:

*   You may want to block access to proprietary content, user-generated reviews, pricing, or premium content behind paywalls.
*   You need coordination between SEO, legal, and business to define LLM access policies.

For CEOs:

*   This is not just about traffic. It’s about **data licensing**, **brand control**, and **negotiation leverage** with AI platforms.
*   Some companies may choose to block all LLMs until a licensing model is in place.
*   Others may use `llms.txt` to signal openness to monetizing their content via AI partnerships.

## So What Should You Do Right Now?

**Step 1**: Audit your current `robots.txt` to see if you're already allowing LLMs like `Google-Extended`.

**Step 2**: Decide your strategy:

*   Block all AI crawlers for now?
*   Allow only trusted partners?
*   Use it to signal licensing readiness?

**Step 3**: Consider adding an `llms.txt` as a public declaration of your AI content policy — even if it’s not enforced yet.

**Step 4**: Monitor developments. Standards change quickly. Expect industry consensus (or regulation) to form soon

## Why You Should Care?

`llms.txt` is not yet supported by Google or Bing, but it's an important signal in a fast-changing ecosystem where AI, not search, may become the dominant interface to your content.

Treat it as a **defensive and strategic move** — much like `robots.txt` was 20 years ago.

It’s not just about blocking.  
It’s about **negotiating the future of content in the AI era.**
