---
title: "2,126 AI Answers, 4,356 Citations: What the State of AEO 2027 Study Actually Found"
date: 2026-11-23T14:00:00+05:30
updated: 2026-11-23T18:45:00+05:30
description: "A close reading of aeo.so's State of AEO 2027 study: how 2,126 answers were collected, why five AI engines produced six data streams, what the citation overlap means, and where the findings should not be generalised."
tag: "AEO"
categories: ["AEO","GEO","SEO","Research"]
tags: ["AEO Research","AI Citations","Google AI Overviews","ChatGPT","Gemini","Claude","Perplexity","DataForSEO"]
type: "article"
tldr: "The State of AEO 2027 report by aeo.so analysed 2,126 answers about AEO and AI search, counted 4,356 citations and identified 217 cited domains. The sample combines 1,910 Google AI Overview answers and 176 ChatGPT database answers from DataForSEO with a separate 40-answer panel across ChatGPT, Claude, Gemini and Perplexity. The study is useful as a snapshot of AEO-source visibility in US English queries, not as a universal ranking of sources across industries."
sources:
  - title: "State of AEO 2027: Which Sources AI Engines Cite"
    url: "https://aeo.so/research/state-of-aeo"
    publisher: "aeo.so"
    reviewed: "2026-11-23"
  - title: "AI Optimization Data API and LLM Mentions"
    url: "https://dataforseo.com/apis/ai-optimization-api"
    publisher: "DataForSEO"
    reviewed: "2026-11-23"
  - title: "Optimizing your website for generative AI features on Google Search"
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
    publisher: "Google Search Central"
    reviewed: "2026-11-23"
  - title: "Introducing Search Generative AI performance reports in Search Console"
    url: "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports"
    publisher: "Google Search Central"
    reviewed: "2026-11-23"
  - title: "GEO: Generative Engine Optimization"
    url: "https://arxiv.org/abs/2311.09735"
    publisher: "Aggarwal et al."
    reviewed: "2026-11-23"
---
# 2,126 AI Answers, 4,356 Citations: What the State of AEO 2027 Study Actually Found

A new study from [aeo.so](https://aeo.so/research/state-of-aeo), published in November 2026, looks at a question many SEO teams are now asking: when people ask AI platforms about answer engine optimisation and AI search, which websites do those platforms cite?

The study analysed 2,126 answers, counted 4,356 citations and identified 217 different cited domains. It examined Google AI Overviews, ChatGPT, Claude, Gemini and Perplexity.

Its central finding is that the platforms do not consistently cite the same websites. The report puts pairwise overlap between cited-domain sets at between 3% and 17%.

That is an interesting finding. But the sample needs to be understood before anyone turns it into an AEO strategy. This is a study of AEO-related questions in English in the United States. It is not a ranking of the most influential websites across every industry, country or language.

## The study snapshot

The original report gives the following headline totals.

| Research detail | Reported value |
|---|---:|
| Answers analysed | 2,126 |
| Citations counted | 4,356 |
| Unique domains cited | 217 |
| AI platforms covered | 5 |
| Data collection date | 16 November 2026 |
| Main topic | AEO and AI search |
| Market and language | United States, English |

**One important clarification:** the study covers five AI platforms, but it analyses six data streams. ChatGPT appears twice: once in the DataForSEO database and once in the separate ten-question panel. Those are different samples and should not be combined as if they were one identical measurement.

## How were the 2,126 answers collected?

The [original methodology published by aeo.so](https://aeo.so/research/state-of-aeo) describes two separate parts.

### 1. The DataForSEO citation database: 2,086 answers

The researchers used [DataForSEO's LLM Mentions database](https://dataforseo.com/apis/ai-optimization-api) to examine answers and cited sources for ten topic phrases:

- Answer engine optimization
- Generative engine optimization
- AI SEO
- LLM SEO
- AI Overviews
- AI search
- llms.txt
- Schema markup
- ChatGPT SEO
- AI visibility

The database portion contained:

| Platform in database | Answers |
|---|---:|
| Google AI Overviews | 1,910 |
| ChatGPT | 176 |
| **Total** | **2,086** |

The study recorded the ten most cited domains for each topic. It counted a domain once per answer for the reported answer-level percentages.

This matters because the database analysis does not provide a complete census of every long-tail domain cited. Domains outside the top ten for a topic can be missed in that part of the analysis.

### 2. The live question panel: 40 answers

The researchers then asked the same ten AEO questions to four platforms through DataForSEO's AI Optimization API, with web search enabled.

| Platform | Questions asked |
|---|---:|
| ChatGPT | 10 |
| Claude | 10 |
| Gemini | 10 |
| Perplexity | 10 |
| **Total** | **40** |

The study identifies the models used on 16 November 2026 as ChatGPT gpt-5.5, Claude Sonnet 5.5, Gemini 3.5 Flash and Perplexity Sonar Pro.

The first answer to each question was used for the comparison. The researchers recorded the links returned by each answer.

Add the two parts together and the arithmetic is clear:

**2,086 database answers + 40 panel answers = 2,126 answers.**

The distinction is important. The 1,910 Google AI Overview answers are database observations, while Claude, Gemini and Perplexity each have only ten answers in the live panel. Those sample sizes are not equivalent.

## What did the study find?

### 1. Different platforms cite different websites

The report says the overlap between pairs of cited-domain sets ranged from 3% to 17%.

This is the headline finding, but it needs careful interpretation. It compares the domain sets in the study's different data streams, including the separate ChatGPT database and panel samples. It does not mean that every pair of AI platforms will share only 3% to 17% of sources for every query.

The practical implication is narrower and more useful: a brand or publisher should not assume that visibility in one AI platform predicts visibility in another.

### 2. YouTube and Reddit appeared frequently in Google AI Overviews

In the 1,910-answer Google AI Overview database sample:

- YouTube appeared in 66% of tracked answers, or 1,252 answers.
- Reddit appeared in 25%, or 481 answers.
- Google support pages appeared in 16%, or 309 answers.
- LinkedIn appeared in 10%, or 182 answers.
- Semrush appeared in 9%, or 181 answers.

These percentages describe how often a domain appeared in the tracked answer set. They do not mean that YouTube received 66% of all clicks, or that it is the preferred source for every Google AI Overview topic.

The study also reports that video and community platforms together accounted for 49% of Google's citations by its source-type classification.

### 3. Official documentation was prominent in the ChatGPT database sample

The study classified 59% of ChatGPT database citations as official documentation and reference sources. In the smaller ChatGPT panel, the corresponding share was 40%.

The report names Google Search Central and Google's help centre among the sources contributing to this pattern.

This is a useful observation about the particular AEO questions and samples. It should not be rewritten as a universal rule that ChatGPT always prefers official documentation.

### 4. Vendor and agency websites featured strongly in some smaller panels

The study's source classification found that brands, vendors and agencies accounted for:

| Panel | Share reported by the study |
|---|---:|
| Claude | 92% |
| Gemini | 76% |
| Perplexity | 76% |

These figures come from very small panels: ten questions per platform. The Claude result, for example, is based on eight answers that returned citations. Treat these numbers as early observations, not stable market benchmarks.

### 5. Search Engine Land appeared across the study's sources

The study identifies Search Engine Land as the only domain cited by all four platforms in the live question panel and by both database samples. It was cited in seven of Perplexity's ten panel answers.

That is a notable result for a trade publication. But the finding applies to this AEO-focused set of questions. It does not establish that Search Engine Land is the most cited publisher for other subjects.

## The six data streams should not be mistaken for six AI engines

The original report compares six columns in its cross-engine citation table:

1. Google AI Overviews, database
2. ChatGPT, database
3. ChatGPT, question panel
4. Claude, question panel
5. Gemini, question panel
6. Perplexity, question panel

There are five AI platforms, not six. ChatGPT has two separate samples because the study combines a database source and a live question panel.

This distinction is important when reading the reported 3% to 17% overlap. A comparison between two database samples is not the same as a comparison between two live panel tests. The sample size, collection method and source coverage differ.

The report's own table is the place to inspect individual domain percentages. Do not turn the overlap range into a universal cross-platform score.

## What the research does not prove

| The study supports | The study does not establish |
|---|---|
| Different AI platforms can cite different domains for AEO questions | A universal ranking of AI citation sources |
| YouTube and Reddit appeared frequently in the Google sample | That video and forums dominate every AI search topic |
| Official documentation was prominent in the ChatGPT database sample | That every ChatGPT answer prefers official documentation |
| Vendor and agency sites featured heavily in some small panels | That vendors have a guaranteed citation advantage |
| A fixed prompt set can reveal differences between platforms | That ten questions represent the behaviour of an entire platform |

There are further limitations worth keeping in view.

**The topic is narrow.** All questions were about AEO and AI search. Health, banking, travel, ecommerce, news and local-service questions may produce very different source patterns.

**The geography and language are narrow.** The study used US English queries. It cannot be assumed to represent Indian users, Hindi or regional-language searches.

**The samples are uneven.** Google AI Overviews has 1,910 database answers, while Claude, Gemini and Perplexity have ten panel answers each.

**Topic counts can overlap.** An answer matching more than one of the ten topic phrases can appear in more than one topic-level count.

**Some source coverage is limited.** The database analysis reports the ten most cited domains per topic, which can under-represent smaller sites. The report also notes that some platforms returned fewer citations or no citations for particular questions.

**AI answers change.** Models, search systems, prompts and retrieved sources can change. The results are a dated snapshot, not a permanent ranking.

## What should SEO and AEO teams do with this research?

The study is not a list of websites to copy. It is a reason to stop treating one AI platform as a proxy for all the others.

A practical measurement programme should include six checks.

1. **Build a question set from customer intent.** Include informational, comparison, transactional and support questions relevant to your actual category.
2. **Test platforms separately.** Record Google AI Overviews, ChatGPT, Claude, Gemini and Perplexity independently. Do not combine their results into one unexplained score.
3. **Record exact URLs as well as domains.** A domain-level mention can hide which specific article, product page or documentation page was cited.
4. **Separate citations from mentions.** A platform may name a brand without linking to it. A citation is a source link, not necessarily a recommendation.
5. **Check factual accuracy.** Record whether the answer describes the product, service, location, price and company correctly.
6. **Repeat the test.** Keep prompts and conditions stable, then compare results over time. A one-off answer is not a trend.

For a repeatable approach, see our [20-prompt AI visibility test, scoring rubric and monthly routine](/a-20-prompt-ai-visibility-test-template-scoring-rubric-and-monthly-routine/).

## What Google itself says about AI Search visibility

The study is about which sources appeared in a particular set of AI answers. It should not be confused with Google's official guidance on how to appear in its generative search features.

In its [guide to optimising websites for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), Google says established SEO fundamentals remain relevant to AI Overviews and AI Mode. The guide highlights useful, original content, clear organisation, strong page experience, and high-quality images and video.

Google also explains that its generative Search features use its core Search systems to retrieve relevant pages and generate responses with links to supporting sources.

Separately, Google's [Search Generative AI performance report announcement](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) explains the visibility data available in Search Console, including impressions and the pages appearing in AI features. That is a Google Search reporting product. It does not measure ChatGPT, Claude, Gemini or Perplexity citations.

The distinction matters. Use the aeo.so research to understand a sample of cross-platform citations. Use Search Console to monitor Google's own reported AI search impressions. Use analytics and CRM data to understand visits, leads and revenue.

## Why this matters for Indian publishers and businesses

An Indian ecommerce company, bank, hospital, SaaS provider or news publisher should not copy the source mix from a US AEO study and assume it will work in its own category.

A healthcare question in India may surface hospital websites, medical associations and government health information. A consumer finance question may surface banks, regulators and comparison sites. A regional news query may depend on local publishers and language-specific sources.

The right approach is to repeat the research with the questions your own audience asks, in the markets and languages where you operate.

That is how a business can discover whether its pages are being cited, which competitors appear instead, and where the factual gaps are.

## The takeaway

The State of AEO 2027 study is a useful early snapshot of how five AI platforms cited sources for questions about AEO and AI search. It analysed 2,126 answers through two different collection methods, counted 4,356 citations and found 217 cited domains.

Its most useful lesson is not that one source type wins everywhere. It is that the source mix changes by platform, question set and collection method.

Use the numbers as a starting point for your own testing. Do not present them as a universal citation ranking, and do not confuse the six data streams in the report with six separate AI engines.

## Primary sources and further reading

- [State of AEO 2027: Which Sources AI Engines Cite](https://aeo.so/research/state-of-aeo) — original study, full methodology, platform tables and downloadable data.
- [DataForSEO AI Optimization Data API](https://dataforseo.com/apis/ai-optimization-api) — description of the LLM Mentions and LLM Responses data services used in the research.
- [Google Search Central: Optimizing your website for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) — Google's official guidance for AI Overviews and AI Mode.
- [Google Search Central: Search Generative AI performance reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) — Google's explanation of its Search Console AI visibility reporting.
- [GEO: Generative Engine Optimization](https://arxiv.org/abs/2311.09735) — academic paper by Pranjal Aggarwal and co-authors introducing the GEO research framework.

**Research attribution:** The counts and findings in this article are attributed to Paul Andre de Vera's *State of AEO 2027: Which Sources AI Engines Cite*, published by aeo.so on 15 November 2026 and updated on 20 November 2026. The data was pulled on 16 November 2026. This article is an editorial reading of the published study, not an independent replication. The original study is the primary source for all reported figures.
