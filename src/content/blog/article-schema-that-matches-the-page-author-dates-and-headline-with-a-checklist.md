---
title: "Article schema that matches the page: author, dates and headline, with a checklist"
date: 2026-11-05T15:00:00+05:30
description: "Article structured data should describe what readers see. A property-by-property checklist for headline, author, datePublished and dateModified, with common mistakes, from Google's documentation."
tag: "Schema"
tldr: "Google says Article markup helps it understand a page and show better title text, images and dates, and that markup must represent the visible content. Its documentation recommends author, datePublished, dateModified, headline and image. This post gives a checklist and mistakes list for each, drawn from the documentation; the checklist wording is our own."
sources:
  - title: "Article (Article, NewsArticle, BlogPosting) structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/article"
    publisher: "Google Search Central"
  - title: "General structured data guidelines"
    url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies"
    publisher: "Google Search Central"
  - title: "Creating helpful, reliable, people-first content"
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
    publisher: "Google Search Central"
categories: ["Structured Data", "SEO", "AEO"]
tags: ["Article schema", "BlogPosting", "JSON-LD", "Author markup", "Structured data"]
---

Google's Article documentation (updated 8 September 2026 as we read it) says Article markup on news, blog and sports pages can help it understand the page and show better title text, images and date information. It lists author, dateModified, datePublished, headline and image as recommended properties. It also notes there is no markup requirement for Google News features such as Top stories. The principle that runs through the guidelines: markup must be a true representation of the page.

![Four Article schema fields that must match the visible page: headline, author, datePublished and dateModified](/images/article-schema-match/article-match.svg)

## Checklist, property by property

| Property | What Google's documentation says | Our check |
|---|---|---|
| headline | The article title; concise, as long titles may be truncated | Matches the visible title or a clear short form |
| author | Person or Organization; include every author shown on the page | Names on the page equal names in markup |
| author.name | Only the name; no job title, honorific or publisher | No "Dr." or "CEO" in the name field |
| author.url | A page that uniquely identifies the author, or use sameAs | Link resolves and describes that person |
| datePublished | When first published, ISO 8601, with time zone recommended | Equals the date readers see |
| dateModified | When last modified, ISO 8601, with time zone recommended | Changes only with real edits |
| image | Relevant to the article, not a logo | Same image readers can see |

## Multiple authors

List each author as its own object. Google says not to merge names into one field.

## An example

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article schema that matches the page",
  "datePublished": "2026-11-05T15:00:00+05:30",
  "dateModified": "2026-11-05T15:00:00+05:30",
  "author": [{
    "@type": "Person",
    "name": "Jane Doe",
    "url": "https://example.com/authors/jane-doe/"
  }]
}
```

The author and URL are placeholders. Use real ones, and keep them matching the byline.

## Common mistakes

- **Fake freshness.** Setting dateModified to today on every deploy. Google's helpful content page warns against changing dates to make pages look fresh when content has not changed.
- **Invented authors.** Google's guidelines say not to mislead users or impersonate any person or organization. See our post on [fake authorship](/googles-helpful-content-page-now-warns-against-fake-authorship-what-the-5-october-update-says/).
- **Markup for hidden content.** Authors or dates that readers cannot see.
- **Missing time zone.** Google says that without one it defaults to Googlebot's time zone.
- **Wrong type.** Use the most specific applicable type, such as BlogPosting for a blog post.

Google also says markup is not a guarantee of rich results. For AI search, it says no special schema is required; Article markup is good SEO hygiene, not an AI shortcut. See our [schema decision table](/schema-for-aeo-and-geo-a-decision-table-by-page-type-and-a-ten-point-audit/).

## What to do

1. Open a recent post and compare each visible field with its markup.
2. Fix any mismatch in the template, not page by page.
3. Link author names to real profile pages.
4. Test with the Rich Results Test and the URL Inspection tool.
5. Add breadcrumbs too, using our [breadcrumb guide](/breadcrumb-markup-for-a-blog-a-json-ld-example-and-the-rules/).
