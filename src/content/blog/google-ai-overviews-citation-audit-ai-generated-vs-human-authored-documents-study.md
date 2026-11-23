---
title: "Do Google AI Overviews Cite AI-Written Pages More Often? What a Peer-Reviewed Citation Audit Found"
date: 2026-11-23T14:40:00+05:30
description: "A paper in Proceedings of Machine Learning Research proposes a framework for auditing AI Overview citations and reports differences between AI-generated and human-authored documents in a study of YMYL queries."
tag: "aeo"
categories: ["AEO","GEO","SEO","Research","Google Search"]
tags: ["Google AI Overviews","Citation Audit","AI Generated Content","Academic Research","PMLR","Search Quality"]
type: "article"
draft: true
tldr: "A 2026 paper by Rustem Kakimov, Xing Tan, Jonathan Gillham and Narcis Bejtic, published in Proceedings of Machine Learning Research, proposes a framework for auditing citations in AI-generated search summaries. Its Google AI Overviews case study uses Your Money or Your Life queries from the MS MARCO Web Search dataset. The authors report that AI-generated documents were cited more frequently than human-authored documents even after controlling for retrieval rank, with the difference driven mainly by non-retrieved citations. The result is specific to the study's dataset and design."
sources:
  - title: "Auditing Citation Behavior in AI-Generated Search Summaries: A Framework and a Case Study of Google AI Overviews"
    url: "https://proceedings.mlr.press/v318/kakimov26a.html"
    publisher: "Proceedings of Machine Learning Research"
    reviewed: "2026-11-23"
  - title: "Paper PDF"
    url: "https://raw.githubusercontent.com/mlresearch/v318/main/assets/kakimov26a/kakimov26a.pdf"
    publisher: "Proceedings of Machine Learning Research"
    reviewed: "2026-11-23"
---
# Do Google AI Overviews Cite AI-Written Pages More Often? What a Peer-Reviewed Citation Audit Found

A paper published in the Proceedings of Machine Learning Research in 2026 examines how AI-generated search summaries select and cite web documents. Its case study focuses on Google AI Overviews and asks whether the provenance of a document, including whether it was AI-generated or human-authored, is associated with citation behaviour.

The paper is titled "Auditing Citation Behavior in AI-Generated Search Summaries: A Framework and a Case Study of Google AI Overviews". Its authors are Rustem Kakimov, Xing Tan, Jonathan Gillham and Narcis Bejtic.

The authors report that AI-generated documents were cited more frequently than human-authored documents even after controlling for retrieval rank. They say the difference was driven primarily by non-retrieved citations and was most pronounced at highly ranked positions.

This is a finding from a defined research design. It should not be simplified into the claim that Google generally prefers AI-written content.

## Research details

| Field | Detail |
|---|---|
| Paper | Auditing Citation Behavior in AI-Generated Search Summaries |
| Authors | Rustem Kakimov, Xing Tan, Jonathan Gillham, Narcis Bejtic |
| Publication | Proceedings of Machine Learning Research, volume 318 |
| Pages | 224 to 235 |
| Year | 2026 |
| Search system studied | Google AI Overviews |
| Query category | Your Money or Your Life |
| Dataset | MS MARCO Web Search |

## What question did the researchers investigate?

Search engines increasingly produce natural-language summaries with citations. The paper asks how those systems choose which documents to cite and whether document provenance affects that choice.

The authors propose a system-agnostic observational framework that treats retrieval and citation as processes that can be examined across query-document pairs.

They introduce measures conditioned on retrieval rank and provenance. The goal is to distinguish a document's position in a search process from whether it ultimately appears as a citation in the generated answer.

## The headline finding

The authors report that AI-generated documents were cited more frequently than human-authored documents even after controlling for retrieval rank.

They attribute the difference primarily to non-retrieved citations, with the effect most pronounced at highly ranked positions.

The abstract does not provide a single headline percentage for this difference. It would therefore be misleading to invent a rate or imply that the paper found a fixed uplift applicable to all queries.

## Why retrieval and citation must be separated

A search result can be retrieved by a system without appearing in the final generated answer. Conversely, a generated answer may include a citation whose relationship to the retrieved result needs to be audited.

The paper's framework is designed to examine these distinctions.

| Stage | Audit question |
|---|---|
| Query | What did the user ask? |
| Retrieval | Which documents were returned by the search system? |
| Rank | Where did each document appear? |
| Generation | Which documents were used or referenced in the answer? |
| Citation | Which sources were displayed to the user? |
| Provenance | Was the document AI-generated or human-authored? |

For publishers, this is a reminder that ranking, retrieval and citation are related but different events.

## What this paper does not prove

| Supported by the paper | Not established by the paper |
|---|---|
| It proposes a framework for auditing AI search citations | A universal Google ranking rule |
| It studies Google AI Overviews on YMYL queries | The same effect across all topics |
| It reports a difference by document provenance after rank controls | That every AI-generated page has a citation advantage |
| It identifies non-retrieved citations as a major driver of the reported difference | That publishing AI-generated content is a reliable SEO strategy |

The study's scope is important. YMYL queries have distinct quality and trust requirements. Results from this dataset should not be transferred automatically to entertainment, ecommerce, local search or other subject areas.

## Why AEO researchers should pay attention

Many AEO reports count the final citation but do not examine how the source entered the answer. A more rigorous audit should record the query, retrieved documents, rank, final citations and document provenance.

A useful experimental design would compare pages with matched topics and similar retrieval positions, then measure whether the final answer cites them. It should also document how AI-generated and human-authored pages were classified.

## A practical citation audit template

| Field | Record |
|---|---|
| Query ID | Stable identifier for the test question |
| Query text | Exact prompt submitted |
| Engine and version | System used for the test |
| Retrieval URL | Page returned by search |
| Retrieval rank | Position in retrieved results |
| Final citation URL | Page linked in the answer |
| Document provenance | Human-authored, AI-generated or unknown |
| Claim support | Whether the page supports the associated claim |
| Capture time | Date and time of the observation |

This creates a more useful evidence trail than a simple count of citations.

## The takeaway

The paper contributes a framework for examining the path from retrieval to citation. Its case study raises a question about document provenance in Google AI Overviews, but its results are tied to a particular dataset and query category.

For publishers, the right response is not to chase AI-generated content as a shortcut. It is to measure retrieval, citation and source quality separately, and to inspect the evidence behind every claimed visibility gain.

**Source and research note:** This article is based on the paper published in Proceedings of Machine Learning Research, volume 318, in 2026. Findings are attributed to the authors. The study focuses on YMYL queries from the MS MARCO Web Search dataset and should not be generalised beyond its evidence without further research. Consult the original paper and PDF for full methods and results.
