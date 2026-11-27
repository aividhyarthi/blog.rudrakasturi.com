---
title: "Perplexity Time Machine Lets AI Agents Search the Web as It Existed 12 Months Ago"
date: 2026-11-27
description: "Perplexity has added historical snapshots to its Search and Context APIs, allowing developers to retrieve web content as it appeared at a selected date up to 365 days earlier."
draft: true
tag: "AI Agents"
tldr: "Perplexity Time Machine adds a snapshot_as_of parameter to its Search and Context APIs. Developers can request results and page content as they existed at a selected point in time, up to 365 days earlier. This could make historical research and reproducible AI workflows easier, although snapshot availability depends on what Perplexity has archived."
categories: ["AI", "AI Agents", "Technology"]
tags: ["AI news", "AI Agents", "2026"]
type: "article"
sources:
  - title: "Freeze the web with Perplexity Time Machine"
    url: "https://www.perplexity.ai/en-GB/hub/blog/freeze-the-web-with-perplexity-time-machine"
    publisher: "Perplexity"
    reviewed: "2026-11-27"
---

An AI agent researching a company today may find that the company's website, product page or policy document has changed since the event it is investigating.

That creates a problem for historical research. A system may know what a page says now, but not what it said at the time a decision was made.

Perplexity's new Time Machine feature is designed to address that problem. Announced on November 25, 2026, it lets developers request web search results and page content from a selected historical date, up to 365 days earlier.

## What is Perplexity Time Machine?

Time Machine is a historical retrieval option for Perplexity's Search API and Context API.

Developers can add a parameter called snapshot_as_of to an existing request. The API then returns results based on the web as it was stored at the requested cutoff date.

Without the parameter, the API returns current results.

Perplexity says the feature does not require a separate endpoint or a new API setup. It is available through an existing API key and is priced like a regular API request, with default rate limits for historical requests.

## How does it work?

The workflow has two parts.

**Search API:** A developer can ask a question and specify the date that should be used as the historical cutoff. Search results are returned using the stored page versions available for that period.

**Context API:** A developer can provide a known URL and ask for the page as it existed at the selected date, rather than retrieving only its current version.

For example, a research agent comparing a company's pricing in October with its current pricing could request the historical page snapshot and compare the two versions.

The important limitation is that the system can only retrieve historical versions that have been captured and are available. It should not be treated as a complete archive of every web page.

## Why historical web access matters for AI agents

AI agents increasingly perform research that depends on time and sequence.

A financial research agent may need to check what a company disclosed before an earnings announcement. A policy researcher may need the version of a regulation or government page that existed when a decision was made. A journalist may need to verify what a company said before changing its website.

If the agent retrieves only the current page, it can accidentally apply today's information to yesterday's event.

Historical snapshots can reduce this problem by making the source date part of the retrieval request.

## Where could developers use it?

**News and journalism:** Compare statements and company pages before and after an announcement.

**Financial research:** Retrieve historical product, investor relations or company information for a specific date.

**Policy analysis:** Compare public guidance and policy pages over time.

**AI evaluation:** Re-run a research task using the same historical information rather than allowing current web changes to alter the test.

**Competitive intelligence:** Examine how pricing, product descriptions and positioning changed over a selected period.

These are possible applications of the feature, not claims that Perplexity has launched finished tools for each sector.

## What are the limitations?

Historical retrieval is only as good as the available snapshots.

A page may not have been captured on the requested date. Some websites change frequently or block automated access. Dynamic content, personalisation and region-specific pages may also make exact reproduction difficult.

A historical snapshot should therefore be treated as evidence of the stored page version, not necessarily a complete record of everything every user saw at that time.

Our [guide to tracking cited URLs across AI platforms](/what-are-cited-urls-ai-search-track-chatgpt-gemini-perplexity-2026/) explains why source identity and traceability matter. Time Machine adds another dimension: the version of the source that an AI system retrieves.

## What developers should test

1. Request a page using today's retrieval and a historical cutoff.
2. Compare the title, text and source date.
3. Test URLs that change frequently, such as pricing and policy pages.
4. Check what happens when a snapshot is unavailable.
5. Record the requested cutoff date and the actual page version returned.
6. Use historical snapshots in repeatable evaluation datasets.

A useful metric is *historical retrieval coverage*: the percentage of tested URLs for which the API returns a usable page version at the requested date. Track it separately from content accuracy.

## Frequently asked questions

### What is Perplexity Time Machine?

It is a historical web retrieval feature for Perplexity's Search API and Context API. It allows developers to request web results or page content as they existed at a selected past date.

### How far back can Time Machine go?

Perplexity says historical requests can go back up to 365 days.

### Which API parameter enables historical search?

Developers add snapshot_as_of to a Search API or Context API request. It specifies the historical cutoff date.

### Does Time Machine require a new API endpoint?

No. Perplexity says it works with the existing Search API and Context API, using an existing API key.

### Can Time Machine retrieve every page from any past date?

No. Historical retrieval depends on whether Perplexity has a stored snapshot for the requested page and date. It should not be treated as a complete archive of the web.

### Does historical retrieval cost more?

Perplexity says Time Machine requests are priced like regular API calls, with no additional surcharge for historical requests. Default rate limits apply.

## Making AI research reproducible

AI agents are becoming more capable at searching and summarising the web. But research is difficult to reproduce if the source material keeps changing.

Perplexity Time Machine addresses one part of that problem by allowing developers to specify when the web should be observed. It does not solve every issue in historical research, but it makes time-aware retrieval a practical API capability.