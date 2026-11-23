---
title: "Does Adding Schema Markup Help Your Website Get Cited by AI Search Engines?"
date: 2026-11-23T19:48:00+05:30
description: "A 90-day study of 158,099 AI answers examines whether schema markup, FAQ blocks and page structure improve citations, or whether retrieval and query relevance matter more."
tag: "AEO"
type: research
image: "/images/schema-markup-ai-citations/featured.svg"
tldr: "A University of Toronto preprint analysed 158,099 answers and 468,037 citations across ChatGPT, Gemini and Perplexity APIs. It found that retrieval explained more variation in ChatGPT citations than the page features studied. Schema markup did not show a statistically robust independent advantage when pages on the same website were compared. This is evidence from two commercial markets, not a universal rule for every AI search product."
categories: ["AEO", "GEO", "AI Search", "Research"]
tags: ["Schema markup", "Structured data", "AI citations", "AI search", "GEO", "Retrieval"]
sources:
  - title: "What Drives AI Citations? Content, Retrieval and Model Knowledge in Generative Engine Optimization (GEO)"
    url: "https://arxiv.org/abs/2610.15033"
    publisher: "arXiv"
    reviewed: "Preprint submitted 10 October 2026; peer review not established"
---

# Does Adding Schema Markup Help Your Website Get Cited by AI Search Engines?

*An analysis of 158,099 AI-generated answers suggests that retrieval and query relevance may matter more than adding FAQ blocks, structured data and other page elements.*

## The short answer

Schema markup helps describe information on a website. But a large 90-day study from two University of Toronto researchers did **not** find a statistically robust, independent citation advantage for schema markup when it compared pages belonging to the same website.

The same study found that the AI system's retrieval process explained substantially more variation in ChatGPT citations than the page features examined.

That does not mean schema is useless. It means there is not enough evidence here to treat schema implementation as a shortcut to AI citations.

![Editorial illustration showing an AI search question moving through retrieval, a website page and a cited answer](/images/schema-markup-ai-citations/featured.svg)

## Why this question matters

SEO teams are adding FAQ sections, structured data, author details, summary boxes and other page elements to improve visibility in AI-powered search.

The logic sounds reasonable: if a machine can understand a page more easily, perhaps it will be more likely to use that page as a source.

But there are two separate steps:

1. An AI search system must discover and retrieve a page.
2. The model must decide whether to use that page in its answer and cite it.

A page element may help describe content without guaranteeing that the page is retrieved, ranked highly or selected as a source. The difference between those steps is central to the research examined here.

## The research behind this article

The paper is titled **[What Drives AI Citations? Content, Retrieval and Model Knowledge in Generative Engine Optimization (GEO)](https://arxiv.org/abs/2610.15033)**.

It was written by **Mahe Chen and Nick Koudas**, both affiliated with the University of Toronto, Canada. The paper was submitted to arXiv on **10 October 2026**.

**Research classification:** Preprint. It is not established as peer-reviewed research.

### What did the researchers study?

The researchers collected answers to commercial questions in two markets over 90 days.

| Research component | US consumer market | Niche B2B market |
|---|---:|---:|
| Questions | 651 | 55 |
| Answers | 143,249 | 14,850 |
| Citations | 396,188 | 71,849 |
| Market | Home fibre internet | Proposal and business-development software for AEC firms |

Across both datasets, the study contains **158,099 answers and 468,037 citations**.

The main collection ran from 24 June to 21 September 2026. The researchers collected answers daily through APIs with web search enabled.

### Which AI systems were tested?

| System | Model or search setup |
|---|---|
| ChatGPT | GPT-5.4 nano with the web search tool |
| Gemini | Gemini 3.1 Flash Lite with Google Search grounding |
| Perplexity | Sonar |

These were API-based tests. They should not be treated as a direct audit of every consumer-facing version of ChatGPT, Gemini or Perplexity. The study did not directly test Google AI Overviews or Google AI Mode as separate products.

The researchers also replayed questions through the APIs to inspect search queries, retrieved pages and citation choices. Their within-website analysis compared pages from the same domain to reduce the risk of mistaking a website's overall prominence for the effect of an individual page feature.

## What did the researchers find?

### 1. Retrieval explained more citation variation than page features

In the main ChatGPT analysis, the researchers examined 6,178 pages across 362 websites.

They estimated that retrieval explained **32%** of within-website variation in citation counts. The page-level features examined together explained **2.8%**.

![Bar chart comparing 32 percent of citation variation explained by retrieval with 2.8 percent explained by page features](/images/schema-markup-ai-citations/retrieval-vs-page-features.svg)

*Source: Chen and Koudas, 2026, Table 3. ChatGPT retrieval analysis. Retrieval: 32%, 95% confidence interval 24% to 42%. Page features: 2.8%. These are explanatory shares, not percentage increases in traffic or citations.*

In everyday terms, the system's own search process was much more informative in explaining which pages received citations than the page elements measured in this study.

This does not mean content does not matter. It means content has to be found and ranked by the system before it can be cited.

### 2. Schema markup did not show a robust independent advantage within websites

The researchers compared common GEO recommendations across websites and then compared pages within the same website.

The difference matters. Websites that are already well-known or frequently cited may also be more likely to have FAQ sections, schema and other advanced page elements. A simple comparison between different websites can mistakenly credit those elements for an advantage that belongs to the website itself.

| Page feature | Across websites | Within the same website |
|---|---:|---:|
| FAQ block | +18.1% | -3.4% |
| Summary box | +20.9% | +6.9% |
| Author information | +14.9% | -4.6% |
| Schema.org markup | +7.5% | -5.3% |
| Faster page speed | +11.7% | -1.1% |

![Comparison chart showing how apparent advantages for schema, FAQs, summary boxes and author information shrink in within-website comparisons](/images/schema-markup-ai-citations/schema-comparison.svg)

*Source: Chen and Koudas, 2026, Section 4.2. The within-website estimates were not statistically significant. The figures are associations, not causal effects.*

The researchers found that none of the within-website estimates for these recommended practices passed their five-test robustness rule.

Their explanation is important: recommended practices were more common on websites that already received more citations. The across-website comparison could therefore confuse website-level differences with the effect of the page feature. The authors describe this as an instance of Simpson's paradox.

**What this does not prove:** It does not prove that schema markup reduces citations, that structured data is useless, or that search engines ignore structured data. It means this study did not establish an independent citation benefit from schema in its within-website analysis.

### 3. Pages that matched the question more closely were cited more

The strongest page-level associations were about relevance to the query.

| Content characteristic | Association with citations within the same website |
|---|---:|
| Best paragraph matches a query | +15.5% |
| Page title matches a query | +14.1% |
| Word overlap with queries | +9.1% |

The best-paragraph and title-match results passed all five robustness tests used by the researchers. The word-overlap result passed four of the five tests.

![Three horizontal bars showing the association of best paragraph match, title match and word overlap with citations](/images/schema-markup-ai-citations/query-relevance.svg)

*Source: Chen and Koudas, 2026, Table 2. These are associations per standard deviation in the measured matching feature, not guaranteed gains from editing a page.*

The practical point is not to repeat keywords. It is to make the page's subject and useful answer clear enough to match the information need behind a query.

### 4. ChatGPT cited pages from its own retrieved results

The researchers replayed questions through ChatGPT's API to inspect the pages returned by its search process.

For each question, ChatGPT consulted approximately **26 pages** and cited approximately **3**.

The probability of a page being cited was associated with its position in the retrieved list:

| Position in ChatGPT's retrieved list | Share of pages cited |
|---|---:|
| First | 43.8% |
| Second | 35.5% |
| Sixth to tenth | 12.2% |
| Eleventh to twentieth | 3.5% |

![Chart showing the share of retrieved pages cited by ChatGPT at different retrieval positions](/images/schema-markup-ai-citations/retrieval-position.svg)

*Source: Chen and Koudas, 2026, Table 3. The percentages are citation rates for pages at each position, not shares of all citations.*

The authors also reported that 97% of ChatGPT's retrieved pages were absent from Google's top 50 results for the AI system's own rewritten queries. This is a finding about the particular replayed queries and collection period, not proof that Google rankings never influence AI visibility.

The study's implication is that conventional organic ranking and an AI system's own retrieval ranking should be measured separately.

### 5. AI systems rewrite questions before searching

The researchers found that ChatGPT generated about four keyword-style queries for a user question. Gemini generated about three natural-language subquestions.

ChatGPT kept around 43% of the original question's words in its rewritten queries. It added the current year to 23% of its queries and a brand the user had not named to 28%.

Gemini's subquestions stayed closer to the original question and rarely added a year or an unmentioned brand.

The rewritten queries also changed between repeated runs. For ChatGPT, the overlap between search queries on the same day was 2.7%, while the overlap between cited pages was 15%.

This helps explain why a single AI visibility check is not a stable measure of performance. The search process itself can vary.

### 6. A brand can be mentioned without a cited page naming it

The paper also examined the model's prior knowledge.

In 46% of ChatGPT's mentions of a brand that the question did not name, no cited page named that brand.

This does not automatically mean the mention was invented or false. The model may have used information already present in its learned knowledge.

The distinction is important for measurement:

- A page must be retrieved before it can be cited.
- A brand can be mentioned because the model already knows it.
- A citation does not automatically mean the brand is recommended.

Citation visibility and brand mention rate should therefore be tracked as separate metrics.

## What should businesses and SEO teams do?

The findings do not justify abandoning technical SEO. They suggest a more balanced order of work.

**1. Keep structured data accurate and appropriate.** Use schema to describe products, organisations, articles and other supported entities. Do not promise that schema alone will generate AI citations.

**2. Make important pages answer real questions.** Use descriptive titles and ensure the page contains a clear, useful explanation of the subject.

**3. Make pages accessible.** Check crawlability, indexability, canonical URLs, internal links and rendering. A page that cannot be accessed is unlikely to be useful to a retrieval system.

**4. Measure retrieval and citations separately.** Record the exact prompt, platform, model or API route, date, cited URL and whether the source supports the answer.

**5. Repeat the measurement.** The paper found that cited-page patterns changed over time. Do not make strategy decisions from one prompt run or one screenshot.

## What we know and what remains uncertain

| What this study supports | What it does not establish |
|---|---|
| Retrieval explained more within-website citation variation than the page features examined in the main ChatGPT analysis. | Retrieval is the only factor that matters. |
| Query and content relevance were associated with more citations. | A particular rewrite will guarantee more citations. |
| Schema markup did not show a statistically robust independent advantage within websites. | Schema is useless for AI search. |
| AI systems rewrite questions and use their own retrieval processes. | Google rankings have no influence on any AI product. |
| A brand can be mentioned without a cited page naming it. | Every such mention is a hallucination. |

### Limitations to keep in mind

The study examined two US commercial markets, not a representative sample of all search behaviour. It used specific API-accessible models, not every consumer-facing product experience. The page-feature findings are observational associations, even though the authors use several robustness checks. The retrieval replay was available for ChatGPT and Gemini in different forms; Perplexity did not have the same replay analysis.

The paper is an arXiv preprint. It has not been established as peer-reviewed research. The results should be treated as a substantial research signal that needs replication across other markets, topics and product versions.

## Our final verdict

**Does adding schema markup help your website get cited by AI search engines?**

Schema markup can help describe website information, but this study does not establish that adding schema independently increases AI citations.

The strongest signal in the research is the role of retrieval. In the main ChatGPT analysis, retrieval explained 32% of within-website citation variation, compared with 2.8% explained by the page features examined.

The same paper found that page titles and paragraphs that matched the questions people asked were associated with more citations. By contrast, FAQ blocks, summary boxes, author information and schema did not show a statistically robust independent advantage in the within-website comparison.

That is not a reason to remove structured data. It is a reason to stop treating schema implementation as proof of AI visibility optimisation.

**Our conclusion: Build pages for discoverability, relevance and usefulness. Use schema to describe your content, not as a promise of AI citations.**

## Original research and references

**Primary paper**

Mahe Chen and Nick Koudas, University of Toronto.

*What Drives AI Citations? Content, Retrieval and Model Knowledge in Generative Engine Optimization (GEO).*

- Submitted: 10 October 2026
- Repository: arXiv
- Status: Preprint; peer review not established
- [Original paper and abstract](https://arxiv.org/abs/2610.15033)
- [Full HTML paper](https://arxiv.org/html/2610.15033v1)
- [Original PDF](https://arxiv.org/pdf/2610.15033)

**Editorial note:** All research figures are attributed to the original paper. The practical recommendations and final verdict are the Research Hub's interpretation, not claims made by the researchers.
