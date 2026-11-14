---
title: "Automated queries, rank checkers and AI visibility tests: what Google's machine-generated traffic policy says"
date: 2026-11-15T15:00:00+05:30
description: "Google's spam policy names machine-generated traffic: automated queries and scraping results for rank checking without permission. How AEO teams can design prompt tests and choose tools with that in mind, with owners and a made-up example."
tag: "AEO"
tldr: "Google's spam policies define machine-generated traffic as automated queries to Google, including scraping results for rank-checking, done without express permission, and say it violates the spam policies and Terms of Service. Google's third-party guidance says tools cannot see its internal data. The checklist for AEO test design is ours."
sources:
  - title: "Spam policies for Google web search"
    url: "https://developers.google.com/search/docs/essentials/spam-policies"
    publisher: "Google Search Central"
    reviewed: "13 Nov 2026"
  - title: "Google Search's guidance on using third-party SEO tools, services, and advice"
    url: "https://developers.google.com/search/docs/fundamentals/third-party-seo"
    publisher: "Google Search Central"
    reviewed: "13 Nov 2026"
categories: ["AEO", "Spam policies", "Measurement"]
tags: ["Machine-generated traffic", "Rank tracking", "AI visibility", "Prompt testing", "Spam policy"]
---

AEO teams track how often their brand appears in AI answers, and many tools do it by sending large numbers of queries. Google's spam policies contain a short section on automated traffic. This post explains what it says and how to design tests and tool choices with it in mind. It is not legal advice.

**Best for:** AEO and SEO leads who run visibility tests, and anyone buying a rank-tracking or AI-tracking tool. Learners are welcome: each step names who does it and how to check it.

**New to SEO or AEO?** Rank checkers and AI visibility tools send many queries to see where you appear. Google's spam policy limits automated queries sent to Google.

**SEO and AEO angle:** This post is mainly for AEO teams, but the same rule applies to classic rank tracking, so SEO teams should read it too.

![Automated queries and AI tests: know the policy, prefer first-party data, keep manual samples small, ask vendors how they collect](/images/automated-queries-ai-tests/automated-queries.svg)

## What Google says

- Machine-generated traffic (also called automated traffic) is sending automated queries to Google. Google's examples include scraping results for rank-checking purposes and other automated access to Google Search conducted without express permission.
- Google says it consumes resources and interferes with its ability to serve users, and that such activity violates its spam policies and the Google Terms of Service.
- Google's third-party guidance says third-party tools do not have access to its internal ranking data, cannot guarantee performance, and that some provide data users misread as coming from Google. It encourages Search Console, a first-party tool, in either case.
- Google's generative AI guide points to the generative AI performance report in Search Console to measure visibility in AI features on Search and Discover.
- The page covers Google Search. Other AI products have their own terms; read each one before you automate.

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. List current tests | AEO lead | 30 min | Every manual and automated query routine | A list with owner and tool |
| 2. Mark automated ones | Analyst | 1 hour | Which send automated queries to Google or other engines | Automated routines flagged |
| 3. Read the terms | Legal or lead | 1 hour | Terms of each product and tool vendor | Allowed and not allowed noted |
| 4. Prefer first-party data | Analyst | 1 hour | Search Console reports first | First-party data is the base |
| 5. Keep manual samples small | AEO lead | Ongoing | A fixed prompt set checked by people on a schedule | Sample size and dates written down |
| 6. Question vendors | Procurement | 1 hour | How does the vendor collect its data, and under what permission? | Written answer on file |

## Example (made up)

A team had a script that sent 2,000 queries a day to a search engine to check rankings. After reading the policy it stops the script, uses Search Console for Google data, checks a fixed set of 20 prompts by hand each month, and asks its tool vendor to explain how its numbers are collected.

## Common mistakes

- Assuming a tool's collection method is permitted without asking.
- Scaling a prompt test to thousands of automated queries.
- Treating tool scores as Google data.
- Skipping Search Console because a tool looks easier.

Related: [judging AEO and GEO tools](/how-to-judge-aeo-and-geo-tools-and-advice-googles-third-party-guidance-as-a-six-question-scorecard/), [the Search Console generative AI report](/search-console-generative-ai-report-what-it-shows-and-what-it-leaves-out/) and [spam policies self-audit](/google-spam-policies-in-plain-english-a-self-audit-for-your-site-in-four-groups/). Results are not guaranteed.
