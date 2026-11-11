---
title: "Organization markup and sameAs for brand clarity: what Google recommends and a six-step rollout"
date: 2026-11-11T16:00:00+05:30
description: "Google's Organization structured data has no required properties, but recommends specifics such as name, url, logo and sameAs. A six-step rollout with owners and checks."
tag: "AEO"
tldr: "Google's Organization documentation (last updated 8 September 2026) says there are no required properties. It recommends putting the markup on the home page or an About page, using the most specific subtype, matching the name to your site name, and listing real profile pages in sameAs. The rollout steps are ours."
sources:
  - title: "Organization structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/organization"
    publisher: "Google Search Central"
  - title: "AI features and your website"
    url: "https://developers.google.com/search/docs/appearance/ai-features"
    publisher: "Google Search Central"
categories: ["AEO", "SEO", "Structured data"]
tags: ["Organization schema", "sameAs", "Brand entity", "Logo", "Structured data"]
---

When an AI answer or a search result names your company, it works from what it can find about you. Organization markup is one way to state the facts yourself. Google's documentation (last updated 8 September 2026 as we read it) is clear about what it asks for and what it does not.

**Best for:** brand owners, in-house SEO teams and agencies setting up client sites.

![Organization markup: one page, the most specific subtype, a matching name, real sameAs profiles and an accurate logo](/images/organization-markup-sameas/organization-markup.svg)

## What Google says

- Organization markup helps Google understand administrative details about an organisation and which logo to show in Search results and knowledge panels.
- There are no required properties. Add the recommended properties that apply.
- Google suggests focusing on properties useful to users: `name` or `alternateName`, real-world presence such as `address` or `telephone`, and online presence such as `url` or `logo`.
- Place the markup on your home page or a single page that describes the organisation, such as an About page. It is not needed on every page.
- Use the most specific schema.org subtype. An online shop should use `OnlineStore` rather than `OnlineBusiness`. A physical business should use the right `LocalBusiness` subtype and follow the local business guidance too.
- `name` should match the name and `alternateName` you use for your site name.
- `sameAs` is the URL of a page on another website with more information about the organisation, such as a profile on a social or review site. You can give several.
- `url` helps Google uniquely identify your organisation.
- Google's AI features guide says no special schema is needed for those features. Our view: this markup is worth adding for clarity, not as an AI trick.

## What to do: six-step rollout

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Write the facts once | Brand, legal | 1 hour | One document: legal name, brand name, address, phone, logo file | Both teams sign it off |
| 2. Choose the subtype | SEO | 15 min | Browse schema.org for the most specific type | One type is picked and noted |
| 3. List real profiles | Social, brand | 30 min | Open each URL and confirm it is yours and active | Only verified URLs remain |
| 4. Build the markup | Developer | 45 min | JSON-LD on the home or About page only | It validates in the Rich Results Test |
| 5. Check it matches the page | SEO | 20 min | Name, address and logo agree with visible text | No mismatch |
| 6. Review when facts change | Brand | 15 min a quarter | A dated change log | New address or profile is reflected within a week |

## A worked example (made-up)

A shoe retailer, "Kaveri Footwear", uses "Kaveri Footwear Pvt Ltd" in its markup but "Kaveri Shoes" in its site name, with three social profiles including one it abandoned. After the rollout, the name matches the site name, the abandoned profile is removed, and the type is `OnlineStore`.

## Common mistakes

- Adding `sameAs` links to pages you do not control or that are not about you.
- Repeating the markup on every page and letting it drift out of date.
- Using a generic type when a specific one exists.
- Treating the markup as proof of reputation. It only states facts.

Pair this with [author and profile pages](/author-and-profile-pages-that-google-and-ai-tools-can-recognise-a-four-point-checklist/) and our [schema decision table](/schema-for-aeo-and-geo-a-decision-table-by-page-type-and-a-ten-point-audit/). Results are not guaranteed.
