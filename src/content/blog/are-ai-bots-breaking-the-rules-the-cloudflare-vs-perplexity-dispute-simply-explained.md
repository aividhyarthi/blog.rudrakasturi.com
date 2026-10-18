---
title: "Are AI Bots Breaking the Rules? The Cloudflare vs Perplexity Dispute, Simply Explained"
date: 2025-08-06T04:37:08Z
description: "Recently, Cloudflare a global leader in web security and performance blocked the AI company Perplexity from accessing websites across its network. The reason? C"
tag: "ai"
image: "https://blog.rudrakasturi.com/wp-content/uploads/2025/08/image-37.webp"
---

Recently, **Cloudflare** a global leader in web security and performance blocked the AI company **Perplexity** from accessing websites across its network. The reason? Cloudflare accused Perplexity of “stealth crawling” a technical term for accessing and collecting content from websites while deliberately **evading the rules** set by site owners.

### What Did Cloudflare Find?

*   **Evading Website Rules:** Perplexity’s bots reportedly disguised themselves by switching their online identity (user-agent) to look like ordinary web browsers, instead of identifying as bots.
*   **Bypassing Blocks:** When blocked by robots.txt files (a standard protocol that tells bots what they can or cannot access), Perplexity’s systems allegedly used rotating IP addresses and new tactics to keep crawling content effectively ignoring “no entry” signs put up by website owners.
*   **Massive Scale:** Cloudflare claimed this “stealth crawling” wasn’t just occasional or accidental; it involved millions of requests a day across thousands of websites protected by Cloudflare.

## What Does “Bypassing” Mean Here?

**Bypassing** means finding ways to get around the rules or blocks that websites set up to control who can see or use their content.

### How Does Bypassing Typically Work?

1.  **Websites Use Rules:**  
    Websites use tools like **robots.txt** files to tell bots (like search engines or AI crawlers) what parts of the site they’re allowed to access. Some sites also block specific bots by looking at their “user-agent” the bit of code that says, “I am Googlebot,” or “I am PerplexityBot.”
2.  **Bots Are Supposed to Listen:**  
    Legitimate bots (like Googlebot) check these rules and follow them. If a site says “Don’t come here,” they stay out.
3.  **Bypassing = Not Listening:**  
    A bot that’s **bypassing** does not follow these rules. Instead, it finds ways around them, like:
    *   Changing its “user-agent” to pretend it’s a normal person’s web browser (like Chrome or Safari), so the website can’t tell it’s a bot.
    *   Switching to different IP addresses to avoid being blocked or recognized.

### What Did Perplexity Do, According to Cloudflare?

Cloudflare says Perplexity’s systems:

*   **Changed identities:** When blocked as “PerplexityBot,” they started pretending to be a regular browser to sneak past the block.
*   **Rotated IP addresses:** Used new IPs to keep getting into websites that had already tried to block them.
*   **Ignored robots.txt:** Went to parts of websites that were clearly marked “no entry” for bots.

**In short:**  
Cloudflare’s claim is that Perplexity kept coming in even after being told not to by disguising itself and dodging the roadblocks set up by websites.

Perplexity says this wasn’t intentional, and that their system is just fetching pages for users, not mass-scraping or sneaking

### What Was Perplexity’s Response?

Perplexity strongly denied any intentional wrongdoing.

*   **User-driven, not mindless bots:** They argued that their system only fetches web pages in response to actual user questions not just to “scrape” or copy the internet.
*   **Misunderstood tech:** Perplexity said Cloudflare misunderstood how modern AI-powered assistants work, and accused them of a publicity stunt.

### Why Does This Matter?

*   **Control:** At the heart of the issue is who gets to control how information is accessed and used on the web. Cloudflare says sites should have the final say; Perplexity believes AI assistants need broad access to serve users.
*   **Trust:** The debate highlights growing mistrust between content owners and AI companies over how online information is gathered and used.
*   **Precedent:** This isn’t just about Perplexity other AI companies, search engines, and data scrapers are watching closely. The outcome could set a standard for how the web and AI interact going forward.

**Closure Note**

Cloudflare blocked Perplexity for what it saw as repeated violations of site-owner controls. Perplexity denies those claims, arguing its AI operates fairly and for the benefit of users. This case is a flashpoint in the bigger battle over the rules and ethics of the open web in the age of AI.
