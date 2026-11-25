---
title: "How Google Chooses Sources for AI Overviews and AI Mode"
date: 2026-11-25
description: "Google has explained how AI Overviews and AI Mode find, check and link to websites. Here is what the new guidance means for publishers and SEO teams."
tag: "AEO"
tldr: "Google says AI Overviews and AI Mode use its Search index, related searches and query fan-out to find supporting pages. Its systems then ground and corroborate generated responses before choosing which links to display. Publishers still need indexed, snippet-eligible pages, clear evidence, accurate information and visible authorship. None of this guarantees a citation."
categories: ["AEO", "SEO", "Google", "AI Search", "Publishing"]
tags: ["Google AI Overviews", "AI Mode", "AI citations", "Query fan-out", "Google Search Central"]
type: "article"
sources:
  - title: "Attribution and factuality in Search generative AI features"
    url: "https://developers.google.com/search/docs/fundamentals/gen-ai-attribution-factuality"
    publisher: "Google Search Central"
    reviewed: "2026-11-25"
  - title: "Google On How Links Are Selected & Shown In AI Overviews & AI Mode"
    url: "https://www.seroundtable.com/google-ai-overviews-ai-mode-link-selection-42617.html"
    publisher: "Search Engine Roundtable"
    reviewed: "2026-11-25"
  - title: "More ways to connect with the web from Search"
    url: "https://blog.google/products-and-platforms/products/search/updates-ai-mode-overviews-explore-web/"
    publisher: "Google"
    reviewed: "2026-11-25"
---

Google has published a detailed explanation of how its AI Search features choose the websites they link to. The new guidance covers AI Overviews, AI Mode and other generative AI features in Search. It explains how Google finds supporting pages, checks the information used in an answer and decides which links to show.

For publishers, this is useful because it describes the process more clearly than the usual advice to create helpful content. It also confirms an important point: Google's AI answers are connected to its existing Search ranking, retrieval and quality systems. There is no separate shortcut that guarantees a website will be cited.

The document was added to Google Search Central on November 24, 2026. Here is what it says and how SEO and editorial teams should use it.

## How Google finds pages for an AI answer

Google describes a process with several stages.

### 1. It starts with the Search index

Google says its generative AI features use a customised Gemini model integrated with core Search ranking, information retrieval and quality systems.

For AI Overviews, the system first looks at ranked Search results that are relevant to the query. It can provide snippets from those pages to the model as a starting point. For Discover, Google says it uses underlying web content to identify fresh and relevant material for the individual user.

This means that a page still needs to be discoverable and eligible in Google Search. Publishing an article does not automatically make it available as a supporting source in an AI answer.

### 2. It can run related searches

The model may run additional searches to explore different parts of the original question. Google calls this query fan-out.

Consider a question such as, "Which electric car is suitable for a family that drives 60 kilometres a day and needs a reliable service network in Hyderabad?"

The system may need information about vehicle range, charging, safety, price, service locations and ownership costs. Those are separate information needs within one question.

This is why a useful page can support one part of a larger answer without being the page that ranks for the entire original query. Our guide to [query fan-out in AI search](/query-fan-out-in-ai-search-what-it-is-how-it-works/) explains this retrieval process in more detail.

### 3. It grounds and corroborates the response

Google says the model uses the retrieved web results to ground its response. It then links to pages that support the information in the generated answer. Google describes this as corroboration.

The company also says it checks responses against a range of reliable sources, which can include web results, data feeds and its Knowledge Graph.

This is an important distinction. A page being retrieved does not automatically mean it will appear as a visible citation. The page needs to support the relevant claim, and Google's systems still decide which sources are useful to show.

### 4. It decides how links should appear

Google lists several display formats. These include inline link icons inside the answer, grouped source cards and expandable carousels that show site names, favicons and article titles.

The company says it balances relevance and quality signals from Search with the need for a clear layout on desktop and mobile. It also aims to show links where they are useful as people explore a topic.

This helps explain why a source may appear in one AI answer as an inline link and in another as a grouped card. The visible format is not necessarily fixed for every query.

## What checks happen before an AI response appears?

Google says it applies automated checks before showing a Search generative AI response.

The checks include safety and policy guardrails. For sensitive topics, breaking news or subjects where reliable consensus is missing, Google says it may avoid showing an AI-generated response.

Google also describes corroboration with reliable web results and other information sources. The purpose is to check whether the generated claims are supported.

The company says it continuously evaluates and improves attribution. That is not a promise that every citation will be perfect. Publishers should still check a citation if an AI answer misrepresents an article or attributes a claim incorrectly.

## What publishers should do now

Google's practical recommendations are familiar, but the new document makes their relevance to AI citations explicit.

1. **Keep important pages eligible for Search.** A page must be indexed, technically eligible and able to appear with a snippet. Check indexing and page-level eligibility in Search Console.
2. **Put key facts in visible text.** Do not make essential information available only inside an image, video, interactive widget or script that may not be accessible to Search systems.
3. **Show where information comes from.** Link to primary documents, research, official data and original reporting. Make it easy for readers to verify important claims.
4. **Make authorship clear.** Maintain useful author profiles and an About page that explains the publication's experience and editorial responsibility.
5. **Correct factual errors.** Review dates, prices, policy details, product specifications and other facts that change. Update a page when the information has materially changed.
6. **Do not refresh dates just to look current.** Google specifically advises against changing a page's date unless the content has substantially changed.
7. **Measure AI visibility separately.** Use the Generative AI performance report in Search Console where available, and distinguish impressions from clicks and visible citations.

Our [AI search visibility checklist](/a-practical-checklist-for-ai-search-visibility/) provides a broader routine for teams reviewing technical eligibility and content quality.

## What this does not mean

The new documentation is not a new ranking update. Google has not published a formula for earning citations, a minimum word count or a preferred article template.

It also does not say that every page appearing in the normal Search results will be cited in an AI answer. The systems can retrieve related pages, combine information from multiple sources and choose only some links for display.

A citation is not guaranteed traffic either. A user may read the answer without opening the source. That is why publishers should measure visible citations, Search Console performance, referral visits and business outcomes as separate things.

Our guide to [tracking the exact URLs cited by ChatGPT, Gemini and Perplexity](/what-are-cited-urls-ai-search-track-chatgpt-gemini-perplexity-2026/) explains how to build a page-level citation report across platforms.

## A practical test for editorial teams

Take ten important pages from your website. For each page, record the main claim, the primary source supporting it, the author, the last material update and whether the page is indexed and snippet-eligible.

Then test a set of relevant questions in Google AI Overviews and AI Mode. Save the answer and every visible source link. Check whether your page appears and whether the generated answer represents it accurately.

Repeat the test under the same conditions after a month. This will not reveal Google's private retrieval logs, but it will give your team a consistent record of visible source selection.

Google's new document gives publishers a clearer view of how its AI Search features connect answers to the web. The lesson is not to write for a mysterious citation algorithm. It is to publish information that can be found, checked and trusted, then measure whether it is actually being used.
