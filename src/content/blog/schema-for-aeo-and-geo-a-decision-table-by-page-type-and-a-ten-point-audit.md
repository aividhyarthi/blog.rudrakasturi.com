---
title: "Schema for AEO and GEO: a decision table by page type and a ten-point audit"
date: 2026-10-30T12:15:00+05:30
description: "Google says no special schema is needed for AI search, but structured data still matters for rich results and clarity. A decision table by page type, the rules Google sets, and a ten-point audit you can run in an hour."
tag: "AEO"
tldr: "Google says structured data is not required for generative AI search and that no special schema.org markup exists for it. It still recommends structured data for rich results. The rules are accuracy and visibility: mark up what people can see, use the most specific type, fill required properties, and keep pages crawlable. The page-type table here is our own guidance."
sources:
  - title: "Optimizing your website for generative AI features on Google Search"
    url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
    publisher: "Google Search Central"
  - title: "General structured data guidelines"
    url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies"
    publisher: "Google Search Central"
categories: ["AEO", "GEO", "Structured Data", "SEO"]
tags: ["Schema", "Structured data", "JSON-LD", "AEO", "GEO", "Rich results"]
---

Schema is the most oversold part of AEO. Some sellers promise that the right markup makes AI tools cite you. Google's guide to generative AI features says otherwise, and its structured data rules tell you what to do instead. This guide separates the two and ends with a ten-point audit.

## What Google says about schema and AI

Google says structured data is not required for generative AI search, and that there is no special schema.org markup you need to add. It still recommends continuing to use structured data as part of an overall SEO strategy, because it helps with eligibility for rich results on Google Search. It lists over-focusing on structured data among the things you can ignore. Our related explainer is [is schema useful for LLMs?](/is-schema-useful-for-llms-the-impact-of-schema-on-search-and-content-visibility/).

## The rules Google sets

From Google's general structured data guidelines, last updated in July 2026:

- Markup must be a **true representation of the page content**. Google's examples of irrelevant data are a live-streaming site labelling broadcasts as local events, and a woodworking site labelling instructions as recipes.
- **Do not mark up content that is not visible** to readers, and do not mark up fake reviews or misleading content.
- Use **JSON-LD (recommended), Microdata or RDFa**, and do not block marked-up pages with robots.txt or noindex.
- Specify **all required properties** for the feature. Items missing them are not eligible for rich results.
- Use the **most specific schema.org type** that applies.
- Put the markup on the page it describes, and the same markup on duplicate pages, not only the canonical.
- Image URLs in markup must be **crawlable and indexable**.
- Google does not guarantee that structured data will show up, even if the Rich Results Test passes. A structured data manual action removes rich result eligibility but does not affect how the page ranks in web search.

![Four rules for schema markup in the AI search era: mark up what people see, use the most specific type, keep it crawlable, and expect no guarantee](/images/schema-for-aeo-decision-table/four-rules.svg)

## Decision table by page type

This table is our own guidance. It maps page types to the structured data features Google documents. Check each feature's guide for the required properties.

| Page type | Consider | Note |
| --- | --- | --- |
| Blog post or news article | Article, Breadcrumb | Author and dates must match the visible byline. |
| Product page | Product snippet or Merchant listing | Add review markup only for genuine reviews. |
| Local business | Local business | Keep it consistent with your Business Profile. |
| Recipe | Recipe, Video | Link the video to the recipe with an `@id`. |
| Event | Event | Remove or update it once the date passes. |
| Job listing | Job posting | Follow the job posting content policies. |
| Course | Course list | Only for pages that describe courses. |
| Forum or Q&A | Discussion forum, Q&A | Use only where users genuinely ask and answer. |
| App page | Software app | Match the store listing. |
| Home page | Organization, site name | See [favicons and site names](/favicons-and-site-names-in-google-results-a-home-page-checklist/). |

For breadcrumbs, see [our breadcrumb guide](/breadcrumb-markup-for-a-blog-a-json-ld-example-and-the-rules/). For shops, see [AEO for e-commerce](/aeo-for-e-commerce-product-pages-feeds-and-what-google-says-about-universal-cart/).

## A ten-point audit

1. List your top ten pages and their page types.
2. For each, note which markup is present.
3. Check each marked-up fact appears on the visible page.
4. Remove markup for anything hidden or out of date.
5. Confirm required properties are present.
6. Confirm the type is the most specific available.
7. Test with the Rich Results Test and the URL Inspection tool.
8. Check images in markup are crawlable.
9. Check duplicates carry the same markup.
10. Review the Search Console rich result reports after each template change.

## What to do

1. **Run the audit** on ten pages this week.
2. **Delete markup you cannot defend** as visible and accurate.
3. **Stop buying "AI schema"** that claims to guarantee citations.
4. **Put effort into the content itself.** See [our AEO and GEO playbook](/the-aeo-and-geo-playbook-technology-content-schema-writing-style-and-myths/).

*Sources: Google Search Central documentation, as linked above. The page-type table and audit are our own guidance.*
