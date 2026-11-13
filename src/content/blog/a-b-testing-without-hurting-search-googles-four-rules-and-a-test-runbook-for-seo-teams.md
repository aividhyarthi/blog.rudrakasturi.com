---
title: "A/B testing without hurting search: Google's four rules and a test runbook for SEO teams"
date: 2026-11-14T12:00:00+05:30
description: "Google's guidance on minimizing A/B testing impact in Search: no cloaking, rel=canonical, 302 not 301, and a short test. A runbook with owners, checks and a made-up example."
tag: "SEO"
tldr: "Google's A/B testing page (last updated 10 December 2025) says do not cloak test pages, use rel=canonical on alternate URLs, use 302 rather than 301 redirects, and run the experiment only as long as necessary, then remove the test elements. Googlebot generally does not support cookies. The runbook is ours."
sources:
  - title: "Minimize A/B testing impact in Google Search"
    url: "https://developers.google.com/search/docs/crawling-indexing/website-testing"
    publisher: "Google Search Central"
categories: ["SEO", "Experiments", "Technical SEO"]
tags: ["A/B testing", "Cloaking", "302 redirect", "rel=canonical", "Experiments"]
---

Growth teams test pages all the time, and SEO teams are often asked afterwards whether a test hurt search. Google's testing page (last updated 10 December 2025 as we read it) gives four rules. This post turns them into a runbook you can attach to every experiment ticket.

**Best for:** SEO leads working with product, growth and conversion teams.

![A/B testing and search: do not cloak, canonical the variants, use 302 redirects, and end the test promptly](/images/ab-testing-search/ab-testing.svg)

## What Google says

- Do not cloak test pages. Showing one set of URLs to Googlebot and a different set to humans is cloaking and is against the spam policies, whether or not you are running a test. That includes doing it with server logic or robots.txt.
- If cookies control the test, remember that Googlebot generally does not support cookies, so it sees only the version available to browsers that do not accept cookies.
- If a test uses multiple URLs, use `rel="canonical"` on the alternate URLs to point at the original. Google recommends this over `noindex` because it better matches the intent. Using noindex in that situation can sometimes have unexpected bad effects.
- If you redirect users to a variation, use a 302 (temporary) redirect, not a 301. JavaScript-based redirects are also fine.
- Run the experiment only as long as necessary. Afterwards, update the site and remove all test elements, such as alternate URLs and scripts, as soon as possible. Google says an unnecessarily long experiment, especially one that serves one variant to a large share of users, may be read as an attempt to deceive.
- Small changes, like a button colour or call-to-action text, often have little or no impact on the snippet or ranking.

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Classify the test | SEO | 15 min | Small element change, or new URLs for variants | Type written on the ticket |
| 2. Rule out cloaking | Developer | 30 min | Bots and users receive the same variant logic | No user-agent based switching |
| 3. Canonical the variants | Developer | 20 min | Each alternate URL points to the original | Canonicals verified in the live HTML |
| 4. Choose the redirect | Developer | 15 min | Status code of the redirect is 302 | No 301 on a test |
| 5. Set an end date | Product | 10 min | Date and the tool's stopping rule on the ticket | Test has an owner and end date |
| 6. Clean up | Developer | 30 min | Variant URLs, scripts and markup removed | Nothing from the test remains |

## Example (made up)

A team tests two checkout buttons on one URL with JavaScript and a cookie. The SEO lead confirms there is no user-agent logic and sets a two-week end date. After the result, the winning button ships and the script is deleted the same week. A second test with separate variant URLs gets canonicals and a 302.

## Common mistakes

- Using a 301 for a temporary test.
- Adding noindex to variants instead of rel=canonical.
- Letting a finished test script run for months.
- Serving a different version to crawlers.

Related: [which redirect to use](/which-redirect-should-you-use-301-302-meta-refresh-or-javascript/), [spam policies self-audit](/google-spam-policies-in-plain-english-a-self-audit-for-your-site-in-four-groups/) and [JavaScript SEO check](/javascript-seo-a-ten-minute-check-for-script-heavy-sites/). Results are not guaranteed.
