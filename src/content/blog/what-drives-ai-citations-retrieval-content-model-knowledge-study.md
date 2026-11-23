---
title: "What Drives AI Citations? A Study of 158,099 Answers Finds Retrieval Matters More Than Page Tweaks"
date: 2026-11-23T14:10:00+05:30
description: "A research paper by Mahe Chen and Nick Koudas analyses 158,099 AI answers and 468,037 citations, finding that retrieval explains more citation variation than on-page properties in the study."
tag: "geo"
categories: ["AEO","GEO","SEO","Research"]
tags: ["AI Citations","Generative Engine Optimisation","Retrieval","Search Systems","Academic Research"]
type: "article"
draft: true
tldr: "The October 2026 paper by Mahe Chen and Nick Koudas studies two 90-day collections of commercial-question answers across generative search engines. It reports 158,099 answers and 468,037 citations. In its ChatGPT API replay, the pages retrieved for rewritten sub-queries explained more citation variation than measured page properties, 32% versus 2.8%. The authors also report that matching page titles and paragraphs to user questions is associated with more citations within the same website. These are findings from the study's datasets and methods, not a universal ranking formula."
sources:
  - title: "What Drives AI Citations? Content, Retrieval and Model Knowledge in Generative Engine Optimization"
    url: "https://arxiv.org/abs/2610.15033"
    publisher: "arXiv preprint"
    reviewed: "2026-11-23"
---
# What Drives AI Citations? A Study of 158,099 Answers Finds Retrieval Matters More Than Page Tweaks

A research paper by Mahe Chen and Nick Koudas examines why some web pages are cited by generative search engines while others are not. The paper, posted to arXiv on October 10, 2026, analyses two 90-day collections of answers to commercial questions across contrasting markets.

The researchers report 158,099 answers and 468,037 citations. Their central argument is that a page's chance of being cited depends heavily on whether the search system retrieves it in the first place. On-page changes may matter, but they cannot compensate for a page that is not surfaced during retrieval.

## The study in numbers

| Research measure | Reported value |
|---|---:|
| AI answers | 158,099 |
| Citations | 468,037 |
| Collection design | Two 90-day collections |
| Question type | Commercial questions |
| Markets | Two contrasting markets |
| Authors | Mahe Chen and Nick Koudas |
| Publication record | arXiv, October 10, 2026 |

The paper also reports that the findings were replicated in a market of small business-to-business vendors and that the authors released data and code.

## The central distinction: retrieval versus citation

Generative search systems do not necessarily select citations by scanning every page on the internet at the moment they write an answer.

A simplified process looks like this:

1. A user asks a question.
2. The model may rewrite the question into several search queries.
3. A retrieval system finds candidate pages.
4. The model uses retrieved material and its own learned knowledge to compose an answer.
5. Some sources are shown as citations.

A page that is not retrieved may have little opportunity to become a citation in that response.

## The paper's key quantitative finding

The authors replayed questions through engine APIs to examine how retrieval affected citations. For ChatGPT in their analysis, the search system's retrieval of pages for rewritten sub-queries explained more variation than the measured page properties.

| Factor examined | Variation explained in the paper's analysis |
|---|---:|
| Retrieval of pages for rewritten sub-queries | 32% |
| Measured page properties | 2.8% |

These figures describe the authors' analysis and should not be interpreted as universal percentages for every AI engine, topic or website.

## What page-level factors mattered?

The authors compared pages within the same website. They report that pages whose titles and paragraphs matched the questions people ask were more likely to be cited.

They also report that FAQ blocks, structured data, summary boxes and page speed appeared effective in comparisons across different websites, but did not show the same effect when comparing pages within the same site.

This distinction matters. A factor associated with differences between websites may not explain why one page on a particular website is cited more often than another.

| Page characteristic | Reported result |
|---|---|
| Title matches the question | Associated with more citations within the same website |
| Paragraphs match the question | Associated with more citations within the same website |
| FAQ blocks | Effect appeared across websites, not within-site comparisons |
| Structured data | Effect appeared across websites, not within-site comparisons |
| Summary boxes | Effect appeared across websites, not within-site comparisons |
| Page speed | Effect appeared across websites, not within-site comparisons |

The study does not prove that structured data or page speed are useless. It says their measured explanatory role differed depending on how pages were compared.

## Model knowledge and brand familiarity

The paper also argues that a model's prior knowledge can affect what it searches for and which brands it mentions.

The authors report that ChatGPT can include brands it already knows in its search queries, prefer familiar websites and sometimes name a brand without citing a supporting page. In controlled experiments described in the paper, brand names changed product rankings even when the compared products had identical facts.

This suggests that AI visibility has at least two separate components:

- **Retrieval visibility:** whether a page is found and cited.
- **Model familiarity:** whether a brand is already represented in the model's learned knowledge and appears in the answer.

A brand mention without a supporting page is not the same as a website citation.

## A measurement model publishers can use

The paper suggests a useful way to separate outcomes that are often mixed together in AEO reporting.

| Measurement | What it tells us | What it does not tell us |
|---|---|---|
| Brand mention | Whether the model names a brand | Whether it retrieved the brand's website |
| Retrieval | Whether a page entered the candidate set | Whether it was cited |
| Citation | Whether the answer links to a page | Whether the brand was named in prose |
| Referral visit | Whether a user clicked through | Whether the citation influenced the answer |
| Conversion | Whether the visit produced an outcome | Whether AI visibility caused the conversion |

## What this means for content strategy

The research does not support a shortcut such as adding an FAQ block to every page and expecting citations to rise.

A more defensible workflow is:

1. Collect the real questions users ask in a category.
2. Map each question to a page that directly answers it.
3. Make the page's title and core paragraphs clearly address that question.
4. Test whether the target engine retrieves the page for the relevant query.
5. Record whether the page is cited and whether the brand is named separately.
6. Repeat the test across engines and dates.

This approach treats AEO as a retrieval and evidence problem, not just a formatting exercise.

## Limitations to keep in mind

The paper focuses on commercial questions and two markets. Its API replay analysis is specifically described for ChatGPT. The findings should not be transferred automatically to every model, country, language or query type.

The paper is available as an arXiv preprint. Readers should review the full paper, its released data and code before treating the results as settled evidence.

**Source and research note:** This article is based on the arXiv paper by Mahe Chen and Nick Koudas, posted October 10, 2026. Numerical results and interpretations are attributed to the authors. This is not an independent replication or a guarantee of ranking outcomes. Consult the original paper and its accompanying data and code.
