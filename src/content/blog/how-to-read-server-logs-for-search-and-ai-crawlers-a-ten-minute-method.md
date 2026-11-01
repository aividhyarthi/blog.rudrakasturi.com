---
title: "How to read server logs for search and AI crawlers: a ten-minute method"
date: 2026-11-01T08:30:00+05:30
description: "Server logs show which crawlers reach your pages and what they receive. A ten-minute method to filter by user agent, verify Google's crawlers with DNS checks, read status codes and decide what to fix."
tag: "AEO"
tldr: "Raw access logs show who asked for which page and what your server answered. Filter by user agent, verify claimed Google crawlers with a reverse then forward DNS check, count status codes per bot and list the top URLs. Google documents the verification method; the decision table is our own."
sources:
  - title: "Verify requests from Google crawlers and fetchers"
    url: "https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot"
    publisher: "Google Search Central"
categories: ["AEO", "SEO", "Technical SEO"]
tags: ["Server logs", "Googlebot", "AI crawlers", "Crawling", "robots.txt"]
---

Search Console and AI visibility tools tell you what happened after a crawl. Server logs tell you whether the crawl happened at all. If you are trying to appear in Google, Bing or AI answers, a week of logs answers a simple question: which bots reached which pages, and what did your server say back? This is a method you can run in ten minutes. The verification steps come from Google's documentation, which we read in full (last updated 20 March 2026, as we saw it). The tables and thresholds are our own.

![Four steps to read server logs for crawlers: pull seven days of raw logs, filter by user agent, verify the claim with reverse and forward DNS, and read status codes and top URLs](/images/server-logs-crawler-method/four-steps.svg)

## Step 1: pull seven days of raw logs

Ask your host or CDN for raw access logs. A dashboard summary is not enough, because you need the user agent, the URL, the status code and the visitor's IP address on each line.

## Step 2: filter by user agent

Search the logs for the crawler names you care about: Googlebot, bingbot and any AI crawler named in its owner's documentation, such as the OpenAI names in our [ChatGPT access test](/can-chatgpt-reach-your-site-a-10-minute-test-for-gptbot-oai-searchbot-and-chatgpt-user/). Count requests per bot. On a standard combined log, a command such as `grep -i "Googlebot" access.log | wc -l` gives a first count. Formats differ, so adapt it to your file.

## Step 3: verify the claim

A user agent is only a name. Anyone can send it. Google says you can verify a request really is from Google, and that this matters if spammers claim to be Google. Its manual method has two steps:

1. Run a reverse DNS lookup on the IP address from your logs, and check that the domain is googlebot.com, google.com or googleusercontent.com.
2. Run a forward DNS lookup on that domain and check it returns the original IP address.

Google also publishes IP range lists in JSON files for automated matching. It describes three types of requester. Common crawlers such as Googlebot always respect robots.txt for automatic crawls. Special-case crawlers may or may not respect it. User-triggered fetchers ignore robots.txt because a person asked for the fetch. For other companies' bots, use their own documentation. We have not verified their methods.

## Step 4: read status codes and top URLs

For each verified bot, count status codes and list the ten most requested URLs.

| What you see | What it may mean | Our suggested action |
|---|---|---|
| A bot never appears | Not discovered, blocked, or not interested | Check robots.txt, sitemap and firewall |
| Many 403 or 429 for a real bot | Firewall or rate limits are blocking it | Allow verified requests |
| Many 404 | Old links or deleted pages | Fix or redirect, per our [redirect guide](/which-redirect-should-you-use-301-302-meta-refresh-or-javascript/) |
| Many 301 chains | Wasted requests | Link straight to final URLs |
| 5xx spikes | Server errors at crawl time | Ask your host, check capacity |
| Claimed Googlebot fails DNS check | A fake bot | Consider blocking by IP |
| Top URLs are junk parameters | Crawl waste | Review parameters and canonicals |

## Limits

Logs show requests, not rankings or citations. A crawl does not guarantee indexing or an AI citation. Treat counts as directional.

## What to do

1. Get a week of raw logs this week and keep a monthly copy.
2. Run the user agent filter for Googlebot, bingbot and each AI bot you care about.
3. Verify a sample of Googlebot requests with the two DNS steps.
4. Fix the top two problems from the table.
5. Compare with your robots.txt using our [starter robots.txt guide](/robots-txt-for-a-blog-a-starter-file-explained-line-by-line/), then recheck next month.
