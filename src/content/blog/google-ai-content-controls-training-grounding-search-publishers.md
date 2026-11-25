---
title: "Google Gives Publishers More Clarity on AI Training, Grounding and Search Controls"
date: 2026-11-25
description: "Google has clarified how publishers can control AI training and grounding across its products. Learn what Google-Extended, Search Console controls and robots meta tags actually do."
tag: "AEO"
tldr: "Google's November 24 documentation separates model training from grounding, and Search AI controls from controls for other Google products. Google-Extended controls training use and non-Search grounding, while the Search Console control governs whether content can be used for grounding or displayed in Search generative AI features. These controls are separate. These are controls over use, not ranking shortcuts."
categories: ["AEO", "SEO", "Google", "Technical SEO", "AI Search"]
tags: ["Google-Extended", "AI training", "AI grounding", "robots.txt", "Search Console", "AI Overviews"]
type: "article"
sources:
  - title: "Control how your content is used for generative AI at Google"
    url: "https://developers.google.com/search/docs/fundamentals/gen-ai-controls"
    publisher: "Google Search Central"
    reviewed: "2026-11-25"
  - title: "Generative AI performance report (Search)"
    url: "https://support.google.com/webmasters/answer/16984139?hl=en"
    publisher: "Google Search Console Help"
    reviewed: "2026-11-25"
  - title: "Google releases new search ranking transparency hub"
    url: "https://searchengineland.com/google-releases-new-search-ranking-transparency-hub-502957"
    publisher: "Search Engine Land"
    reviewed: "2026-11-25"
---

**Short answer:** Google separates model training from grounding and separates Search AI controls from controls for other products. Google-Extended can limit training use and non-Search grounding. A separate Search Console setting controls grounding and display in AI Overviews, AI Mode and other Search generative AI features.

Google has clarified how website owners can control the use of their content across its generative AI products. The documentation, published on November 24, 2026, separates two activities that are often treated as if they are the same: training an AI model and grounding an answer with information retrieved from the web.

It also explains that controls for Google Search's AI features are different from controls for other Google products. This matters because a publisher could block one type of use and still allow another.

The biggest correction for website owners is this: **Google-Extended is not the control for whether a page is grounded or displayed as a source in AI Overviews or AI Mode.** Google documents a separate Search Console control for that. Google-Extended can, however, limit training use, including training of models used for Search generative AI responses, according to Google's Search Console Help.

## Training and grounding are not the same thing

Before changing robots.txt, understand the two uses Google describes.

**Training** happens before a model is deployed. It helps a model learn general language patterns, reasoning and knowledge from large collections of information.

**Grounding** happens when a deployed AI system looks up relevant information to answer a particular prompt. It can retrieve fresh pages from the Search index and link to those pages as supporting sources.

Think of training as teaching a student before an examination. Grounding is the student checking current reference material while answering a question. Blocking one does not automatically block the other.

Google says grounding can help an AI answer use current information and show links to the websites that support it. It is separate from the earlier model training process.

## Which Google control does what?

Google's new documentation sets out separate controls for different purposes.

| Control | What it affects | What it does not do |
|---|---|---|
| Search generative AI control in Search Console | Whether site content is used for grounding or displayed, including links, in AI Overviews, AI Mode and generative AI features in Discover | It does not control model training and is not a ranking or inclusion signal for other parts of Search |
| Google-Extended in robots.txt | Limits use of content for training and for grounding on specified non-Search Google AI products | It does not block Search crawling or indexing, or opt a site out of grounding and display in AI Overviews and AI Mode |
| \`nosnippet\`, \`max-snippet\` and \`data-nosnippet\` | Control snippets or limit specific text from being used in Search features, including AI Overviews and AI Mode | They are not a general switch for every Google AI product |
| \`noindex\` | Prevents a page from appearing in Google Search, including Search generative AI features | It is not a selective AI training control |

The Search generative AI control is managed in Search Console. Google says its worldwide rollout was completed on August 31, 2026. The November 24 documentation explains the control more clearly; it is not a brand-new control launched on that date.

## What Google-Extended actually means now

Google-Extended is a robots.txt product token. It is not a separate crawler and does not have its own user-agent string.

Google's clarified documentation says it can control whether content is used for training and grounding in certain non-Search generative AI products, including Gemini Apps and Vertex AI.

It does not control whether Google Search can crawl, index or rank a page. It also does not block the use of a page as a source in AI Overviews or AI Mode. Those Search features are governed by the separate Search generative AI control and Search's normal technical requirements.

A basic robots.txt example looks like this:

\`\`\`txt
User-agent: Google-Extended
Disallow: /
\`\`\`

This tells Google not to use content covered by the Google-Extended token for the relevant non-Search uses. It does not remove pages from Google Search.

Do not copy this rule into a production robots.txt file without first deciding what your organisation wants to permit. A blanket disallow can affect more than one Google AI product.

For a wider explanation of crawler behaviour, see our updated guide to [Google's crawlers and fetchers and their robots.txt rules](/googles-crawlers-and-fetchers-which-obey-robots-txt-and-which-do-not-a-decision-table/).

## What if you want to remain in Search but opt out of Search AI features?

Google says site owners can use the Search generative AI control in Search Console to exclude their site's links and content from Search generative AI features.

That choice is separate from Google-Extended. A publisher could remain eligible for ordinary Search while opting out of Search AI features. Equally, a publisher could allow Search AI features while blocking Google-Extended for non-Search training and grounding.

The decision should be based on the value of each distribution channel, the publisher's licensing position and its business model. Do not assume that blocking AI use will improve ranking, or that allowing it will guarantee traffic.

## What should publishers do before changing robots.txt?

Use this decision process.

1. **Write down the intended outcome.** Is the concern model training, grounding in Gemini Apps, use in Search AI answers, or all of these?
2. **Check the Search Console setting.** Confirm whether the site is included in Search generative AI features. Google says this control is available through Search Console settings.
3. **Review Google-Extended.** Decide whether to allow or disallow non-Search uses. Document the decision with the editorial, legal and product teams.
4. **Review snippet controls.** Check whether \`nosnippet\`, \`max-snippet\` or \`data-nosnippet\` is already applied to important pages.
5. **Do not use noindex as an AI opt-out.** Noindex removes the page from Search itself, which is a much wider consequence.
6. **Test after deployment.** Check robots.txt, page-level meta tags, Search Console indexing and visible Search results.
7. **Record the policy.** Keep a short internal note explaining which Google uses are allowed and why.

## Common mistakes to avoid

**Blocking Googlebot to stop AI training.** This can affect Search crawling and visibility. Google-Extended exists for a different purpose.

**Assuming Google-Extended blocks AI Overviews.** Google-Extended does not control grounding or display in AI Overviews and AI Mode. However, Google's Search Console Help says to use Google-Extended to limit training of models used to generate Search AI responses. Use the Search generative AI control to opt out of Search AI grounding and display.

**Treating training and grounding as one activity.** They happen at different stages and have different controls.

**Using noindex as a selective AI control.** Noindex removes the page from Search, not just from a particular AI product.

**Assuming a control is a ranking signal.** Google says the Search generative AI control is not used as a ranking or inclusion signal for other parts of Search.

## What this means for SEO and AEO strategy

The new guidance makes one thing clearer: publishers need an explicit content-use policy, not a collection of robots.txt rules copied from social media.

For most publishers, the first step is to map the value exchange. Search visibility, referral traffic, licensing, model training and grounding are different questions. A single setting cannot solve all of them.

Keep a record of which controls are active, which pages they affect and what the business intends to achieve. Revisit that decision when Google changes its documentation or adds new controls.

Our [AEO and GEO guide](/aeo-geo-ai-seo-what-the-terms-mean-and-what-google-actually-says/) explains the wider relationship between search optimisation and AI discovery. The key is to make technical decisions based on the exact behaviour Google documents, not on assumptions about what a crawler token might do.

## Frequently asked questions

### Does Google-Extended block AI Overviews and AI Mode?

It does not control whether a page is grounded or displayed as a source in AI Overviews or AI Mode. Google says it can limit training use, including training of models used for Search AI responses. The Search Console control governs grounding and display in Search AI features.

### Is Google-Extended a crawler?

No. It is a robots.txt product token and does not have its own crawler or user-agent string.

### What is the difference between AI training and grounding?

Training helps build or improve a model before deployment. Grounding happens when a deployed system retrieves information to support a particular answer.

### Does the Search generative AI control affect Google rankings?

Google says the Search Console control is not a ranking or inclusion signal for other parts of Search.

### Does noindex work as an AI opt-out?

No. Noindex removes a page from Google Search, including Search generative AI features. It is much broader than a selective AI-use control.

### When did Google's Search AI control roll out?

Google's Search Console Help says the worldwide rollout was completed on August 31, 2026. The November 24 documentation clarifies how the controls work.


## Related reading

- [What is Google-Extended? The updated guide](/what-is-google-extended-and-why-it-matters-for-your-website-april-2025-update/)
- [Google's crawlers and fetchers: robots.txt decision table](/googles-crawlers-and-fetchers-which-obey-robots-txt-and-which-do-not-a-decision-table/)
- [Google's official AI Search source selection explanation](/google-explains-how-ai-overviews-and-ai-mode-select-and-link-sources/)
- [AI Overviews and AI Mode: Google's technical requirements](/ai-overviews-and-ai-mode-what-google-says-you-need-and-a-team-checklist-for-seo-and-aeo/)
