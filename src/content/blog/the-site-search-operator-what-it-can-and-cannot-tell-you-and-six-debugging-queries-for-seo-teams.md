---
title: "The site: search operator: what it can and cannot tell you, and six debugging queries for SEO teams"
date: 2026-11-15T11:00:00+05:30
description: "Google's page on the site: operator lists what it is good for (indexed URLs, spam checks, term checks) and its limits (not exhaustive, no ranking). Six queries to run, with owners, checks and a made-up example."
tag: "SEO"
tldr: "Google's site: operator page says a site: query returns indexed and serving URLs but not always all of them, that bigger sites should not expect to see every URL, that a bare site: query is not ranked, and that URL Inspection is the tool to confirm whether a URL can be indexed. The six queries are ours."
sources:
  - title: "site: search operator"
    url: "https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site"
    publisher: "Google Search Central"
    reviewed: "13 Nov 2026"
categories: ["SEO", "Debugging", "Indexing"]
tags: ["site: operator", "Indexing", "Search operators", "Debugging", "Spam monitoring"]
---

Everyone types `site:` into Google at some point. Google's own page on it is short and clear about what it is good for and where it misleads. This post turns it into a small set of queries with a rule for reading the results.

**Best for:** SEO analysts, developers and content leads who need a fast check on what Google shows for a site. Learners are welcome: each step names who does it and how to check it.

**New to SEO or AEO?** The site: operator is a search trick. Type site:yourdomain.com into Google to see pages Google shows for that site.

**SEO and AEO angle:** A page must be indexed to be eligible for Google's AI features (generative AI guide), so checking indexing is a first step for AEO too.

![The site: operator: check one URL, check a prefix, look for spam terms, test a term, and confirm with URL Inspection](/images/site-search-operator/site-operator.svg)

## What Google says

- A `site:` query asks for results from a specific domain, URL or URL prefix. If a URL is indexed it can show for related `site:` queries, but that is not guaranteed.
- If a URL does not show in a `site:` query, use the URL Inspection tool to check that it can be indexed, and double-check the query: `site:https://www.example.com` does not return the same results as `site:https://example.com/`.
- Google lists uses for site owners: `site:example.com` returns a list of indexed and serving URLs (not always exhaustive; bigger sites should not expect to see all of theirs, and a more specific prefix may yield more results); `site:` plus a URL can help show whether that URL is indexed and served; `site:example.com` plus spammy terms helps identify and monitor spam problems; and `site:` plus a term shows which URLs can appear for it.
- Limits: the operator was designed mainly for search users. It does not necessarily return all indexed URLs under the prefix, so do not use it to count indexed pages. A `site:` query without a term does not rank results, and it generally shows the shortest URL for the prefix at the top while the rest is relatively random.

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Check one URL | SEO | 5 min | `site:` plus the full URL | It appears, or you go to step 6 |
| 2. Check a section | SEO | 10 min | `site:` plus a path prefix such as /blog/ | You see sample pages, not a count |
| 3. Look for spam terms | Security | 15 min | `site:` plus words like casino or pills | Nothing unexpected shows |
| 4. Test a term | Content | 10 min | `site:` plus a topic word | The expected pages show |
| 5. Match the protocol and host | SEO | 5 min | Compare http, https, www and non-www forms | The right form is used |
| 6. Confirm with URL Inspection | Developer | 10 min | Inspect any URL that did not show | Reason for absence recorded |

## Example (made up)

A team publishes a new page and does not see it in a `site:` query. It does not conclude the page is unindexed. It runs URL Inspection, finds the page is fine, and notes the query is not exhaustive. A separate `site:` plus a spam word returns one hacked page, which goes to the security team.

## Common mistakes

- Using the number of results as an index count.
- Mixing up the protocol or the trailing slash in the query.
- Reading the order of a bare `site:` query as a ranking.
- Skipping URL Inspection when a URL does not appear.

Related: [how Google Search works](/how-google-search-works-crawl-index-and-serve-and-where-a-page-gets-stuck/), [search traffic drop routine](/search-traffic-drop-a-four-step-debugging-routine-from-googles-guide/) and [hidden text and links audit](/hidden-text-and-links-vs-accordions-and-tabs-what-googles-spam-policy-allows-and-how-to-audit/). Results are not guaranteed.
