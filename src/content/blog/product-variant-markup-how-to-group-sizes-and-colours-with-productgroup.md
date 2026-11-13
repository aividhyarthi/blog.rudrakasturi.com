---
title: "Product variant markup: how to group sizes and colours with ProductGroup"
date: 2026-11-13T16:00:00+05:30
description: "Google's ProductGroup markup tells it which products are variants of one parent. Rules for IDs, URLs and canonical pages, a rollout with owners and checks, and the mistakes to avoid."
tag: "AEO"
tldr: "Google's product variant documentation (last updated 8 September 2026) says to use ProductGroup with variesBy, hasVariant and productGroupID, to give each variant a unique ID such as sku or gtin, to make each variant preselectable through its own URL, and to put Product markup in the initial HTML for best results. The rollout is ours."
sources:
  - title: "Product variant structured data (ProductGroup, Product)"
    url: "https://developers.google.com/search/docs/appearance/structured-data/product-variants"
    publisher: "Google Search Central"
  - title: "Merchant listing (Product, Offer) structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/merchant-listing"
    publisher: "Google Search Central"
categories: ["AEO", "SEO", "Ecommerce", "Structured data"]
tags: ["ProductGroup", "Product variants", "SKU", "Merchant listings", "Ecommerce SEO"]
---

A jacket in four sizes and three colours is one product to a shopper and twelve to a catalogue. Google's variant documentation (last updated 8 September 2026 as we read it) shows how to tell it which is which.

**Best for:** ecommerce teams with apparel, shoes, furniture, electronics, luggage or any product sold in variations.

![Product variants: group with ProductGroup, give each variant an ID, preselect by URL, keep markup in the HTML](/images/product-variants-productgroup/variants.svg)

## What Google says

- Use the `ProductGroup` class with `variesBy`, `hasVariant` and `productGroupID` to group variants, in addition to `Product` structured data. This also makes products eligible for variant information in merchant listing experiences.
- `ProductGroup` can hold properties common to all variants, such as brand and review information, plus the variant-determining properties, which reduces duplication.
- `variesBy` names the aspects that differ, such as size or colour, using full schema.org URLs. `hasVariant` nests the variant products. `productGroupID` is the parent identifier, also called the parent SKU. Variants can alternatively carry `inProductGroupWithID`.
- Each variant must have a unique ID in its markup, for example `sku` or `gtin`. Each product group must have a unique ID.
- Add `Product` markup that meets the merchant listing or product snippet requirements as well.
- **Single-page sites:** there must be one canonical URL for the whole `ProductGroup`, typically the base page with no variant preselected. **Multi-page sites:** there is no single canonical, and each page needs full, self-contained markup for its own entities.
- Each variant must be preselectable through a distinct URL, for example with query parameters. That includes showing the right image, price and availability and letting the user add that variant to the cart.
- Put `Product` markup in the initial HTML for best results. Script-generated markup can make Shopping crawls less frequent and less reliable, which matters for price and availability, so make sure your server can handle the extra crawl traffic.

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Choose single-page or multi-page | Ecommerce, developer | 30 min | Do variants share a page or have their own pages? | One model documented |
| 2. List variant attributes | Merchandiser | 1 hour | Size, colour, material or pattern per product | A table per category |
| 3. Fix identifiers | Data team | 2 hours | Unique `sku` or `gtin` per variant, one parent ID per group | No duplicate IDs |
| 4. Build `ProductGroup` markup | Developer | 3 hours | `variesBy`, `hasVariant`, `productGroupID` | Validates on five sample products |
| 5. Test variant URLs | Developer, QA | 1 hour | Open each variant URL cold | Right image, price and stock appear |
| 6. Check the canonical | SEO | 30 min | Single-page: one base canonical. Multi-page: each page canonical to itself | Rules match the model |
| 7. Check initial HTML | Developer | 20 min | View source | Product markup present without scripts |

## Common mistakes

- Reusing one `sku` for every colour.
- A variant URL that opens the default option, with the wrong price or image.
- Pointing every variant canonical at one page on a multi-page site.
- Building markup only with a script and ignoring crawl load.

Related: [product data scorecard](/product-data-for-ai-shopping-and-google-merchant-listings-a-four-point-scorecard/), [canonical URLs](/canonical-urls-for-a-blog-three-signals-and-six-mistakes-to-avoid/) and [faceted navigation](/faceted-navigation-and-filters-how-to-avoid-crawl-traps/). Results are not guaranteed.
