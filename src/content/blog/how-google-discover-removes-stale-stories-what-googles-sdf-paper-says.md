---
title: "How Google Discover removes stale stories: what Google's SDF paper says"
date: 2026-10-23T16:00:00+05:30
description: "A Google research paper describes two filters that remove outdated stories from Discover before ranking. What it says, what it measured, and what publishers can take from it."
tag: "Google Discover"
tldr: "A Google research paper describes SDF, a system in Google Discover that removes outdated stories before ranking, using one filter for stories replaced by newer coverage and one for stories expected to lose value quickly. After two years in production, user reports of stale stories fell by 54.9%."
sources:
  - title: "Decomposing Staleness in Recommender Systems: A Dual-Filter Framework for Supersession and Decay"
    url: "https://arxiv.org/abs/2608.15780"
    publisher: "arXiv (Google authors, CIKM 2026)"
  - title: "Details Emerge About Google Discover's SDF Freshness Algorithm"
    url: "https://www.searchenginejournal.com/details-emerge-about-google-discovers-sdf-freshness-algorithm/593774/"
    publisher: "Search Engine Journal"
categories: ["Google Discover", "Google Search"]
tags: ["Google Discover", "Freshness", "Research paper"]
---

A research paper by six Google authors describes how Google Discover removes outdated stories from its feed. It was submitted to arXiv in August 2026 and is listed for the CIKM 2026 conference. Search Engine Journal reported on it on October 21, 2026.

## What the system does

The paper calls its system **SDF**, short for Supersession-Decay Filtering. It treats staleness as two separate problems, each with its own filter.

![A diagram showing stories entering Discover, two filters, supersession and relevance decay, and either one removing a story before ranking](/images/discover-sdf.svg)

1. **Supersession.** A story becomes stale when newer coverage replaces it. The paper describes a model that detects, for pairs of items, whether one supersedes the other.
2. **Relevance decay.** Some stories lose value fast even if nothing replaces them. A second model predicts how much of a story's total traffic it has already earned, using the story's content, and is trained on lifetime traffic data.

The two filters are combined so that **either one is enough** to remove a story. They run **before ranking**, so a filtered story does not enter the ranking stage at all. The paper says SDF is fully deployed in Google Discover.

## What the paper measured

According to the paper's abstract, after two years of production use:

| Measure | Change in user-filed staleness reports |
| --- | --- |
| Supersession filter | down 64.0% |
| Relevance decay filter | down 34.4% |
| Both filters together | down 54.9% |

These are reductions in reports that users filed about stale stories, not changes in traffic to publishers. We have read the abstract and the coverage, not the full text, so check the paper for the method and details.

## What this means for publishers

The paper describes a system, not advice. These points are our own reading of it:

- **Time-sensitive stories fade by design.** A story about an event that has passed may be removed even if it was once strong in Discover.
- **A newer story on the same topic can replace an older one.** If you cover a developing story, consider updating the main page with the latest facts instead of leaving an outdated version live next to a new one.
- **Evergreen pages are less exposed to decay** than news, though the paper does not say how it treats them.
- **This is about removal, not penalties.** The paper describes pruning candidates before ranking. It does not describe a ranking penalty.

More coverage of Google Search changes is in [our Google section](/category/google/).
