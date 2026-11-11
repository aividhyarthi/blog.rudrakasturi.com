---
title: "Product data for AI shopping and Google merchant listings: a four-point scorecard"
date: 2026-11-11T18:00:00+05:30
description: "Google's merchant listing documentation sets rules for product pages: buyable, single product, markup in the first HTML, one URL per currency. A scorecard with owners and checks."
tag: "AEO"
tldr: "Google's merchant listing documentation (last updated 8 September 2026) says only pages where a shopper can purchase the product are eligible, pages must focus on one product, markup is best in the initial HTML, and each currency needs its own URL. Google's AI features guide asks merchants to keep Merchant Center data up to date. The scorecard is ours."
sources:
  - title: "Merchant listing (Product, Offer) structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/merchant-listing"
    publisher: "Google Search Central"
  - title: "AI features and your website"
    url: "https://developers.google.com/search/docs/appearance/ai-features"
    publisher: "Google Search Central"
categories: ["AEO", "Ecommerce", "Structured data"]
tags: ["Product schema", "Merchant listings", "Merchant Center", "Ecommerce SEO"]
---

Shopping results, AI answers and product snippets all depend on the same thing: clear, current facts about a product. Google's merchant listing documentation (last updated 8 September 2026 as we read it) lists the technical rules.

**Best for:** ecommerce managers, SEO teams and developers who own product pages.

![Product data scorecard: one product per page, buyable on the page, markup in the first HTML, one URL per currency](/images/merchant-listing-product-data/product-data.svg)

## What Google says

- Only pages where a shopper can purchase a product are eligible for merchant listings, not pages that link to other sites selling it.
- Product markup supports pages that focus on a single product or variants of the same product. "Shoes in our shop" is not a specific product. Google recommends adding markup to product pages rather than category or list pages.
- Product variants with distinct URLs are supported.
- If you sell in several currencies, use a distinct URL per currency.
- Google may attempt to verify merchant listing product data before showing it.
- For best results, put Product structured data in the initial HTML. Markup generated with JavaScript can make Shopping crawls less frequent and less reliable, which matters for fast-changing price and availability, and your server must handle the extra crawl load.
- Google's examples include `image`, `sku`, `brand` and an offer with `price`, `priceCurrency`, `priceValidUntil` and `availability`.
- Google's AI features guide asks you to check that Merchant Center and Business Profile information is up to date.

## What to do: scorecard and steps

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Sample 20 product URLs | Ecommerce | 30 min | Random sample across categories | List saved |
| 2. One product per page | Ecommerce | 30 min | Does the page sell one product or its variants? | No list pages carry Product markup |
| 3. Buyable on the page | Ecommerce | 20 min | Is there an add-to-cart on this URL? | No redirect-only pages remain |
| 4. Markup in the first HTML | Developer | 45 min | View source, not inspect element | Price and availability are in the source |
| 5. One URL per currency | Developer | 30 min | Compare currency switchers | Each currency has its own URL |
| 6. Match price and stock | Ops | 45 min | Compare page, markup and Merchant Center | No mismatch on the sample |
| 7. Fix, then re-sample | Team lead | Monthly | Repeat steps 1 to 6 | Score is 20 of 20, or a plan exists |

## Score each page from 0 to 4

One point each for: single product, buyable here, markup in the first HTML, correct currency URL. Fewer than 3 means fix before anything else. This is our own scoring.

## Common mistakes

- Marking up a category page as a Product.
- Letting price and availability in markup drift from the visible page.
- Building the markup with a script and ignoring crawl load.

For context, see [Google's universal cart](/googles-universal-cart-is-live-in-us-search-and-gemini-what-merchants-need-to-know/) and the [AI features checklist](/ai-overviews-and-ai-mode-what-google-says-you-need-and-a-team-checklist-for-seo-and-aeo/). Results are not guaranteed.
