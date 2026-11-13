---
title: "Shipping policy markup for merchants: how to describe rates and delivery times to Google"
date: 2026-11-13T15:00:00+05:30
description: "Google's ShippingService markup lets a merchant state shipping costs and delivery times once, with product-level overrides. A step-by-step rollout with owners, checks and common mistakes."
tag: "AEO"
tldr: "Google's shipping policy documentation (last updated 8 September 2026) says to describe a standard policy once, with ShippingService nested under Organization using hasShippingService, and to override a specific product with OfferShippingDetails under Offer. Google may show shipping information next to products and in knowledge panels. The rollout is ours."
sources:
  - title: "Merchant shipping policy (ShippingService) structured data"
    url: "https://developers.google.com/search/docs/appearance/structured-data/shipping-policy"
    publisher: "Google Search Central"
categories: ["AEO", "SEO", "Ecommerce", "Structured data"]
tags: ["ShippingService", "Shipping policy", "Merchant listings", "Organization markup", "Ecommerce"]
---

Shoppers and shopping systems ask the same questions: how much does shipping cost and when will it arrive? Google's shipping policy documentation (last updated 8 September 2026 as we read it) explains how to answer them in markup, once for the business and again where a product is different.

**Best for:** ecommerce managers, merchandisers and developers.

![Shipping policy markup: one policy page, nested under Organization, with rates and times, and overrides per product](/images/shipping-policy-markup/shipping-policy.svg)

## What Google says

- When you add `ShippingService` structured data, Google Search can use it to display shipping information alongside your products and in knowledge panels.
- It lets you specify shipping costs and delivery times that depend on product characteristics such as weight or dimensions, or on delivery location.
- A standard policy for most or all products goes in `ShippingService`, nested under `Organization` with the `hasShippingService` property. Google recommends putting it on a single page that describes your shipping policy, not on every page.
- For a non-standard policy on a specific product, use `OfferShippingDetails` under `Offer` with the `shippingDetails` property. The properties supported at offer level are a subset of those at organisation level. See Google's merchant listing documentation for that subset.
- `shippingConditions` is required. It specifies the shipping cost and delivery times that apply for a set of conditions, such as a weight range, order value or destination. Other properties include `name`, `description`, `fulfillmentType` (delivery to an address, or to a collection point), `handlingTime` and `validForMemberTier` for loyalty tiers.
- Within conditions, recommended properties include `shippingDestination`, `shippingRate` and `doesNotShip`.
- Google's example describes free two-day shipping over a price threshold in some countries and no shipping below a threshold elsewhere, which shows that one policy can hold several conditions.

## What to do: step by step

| Step | Owner | Time | How to check | Done when |
|---|---|---|---|---|
| 1. Write the policy in plain text | Operations | 2 hours | Destinations, thresholds, rates, handling and delivery times | One approved page |
| 2. Publish one shipping page | Content | 1 hour | A single URL linked from the footer | Page live and crawlable |
| 3. Model the conditions | Developer | 2 hours | One `ShippingService` per policy, one condition per row | Each rule in the text has a condition |
| 4. Nest under Organization | Developer | 1 hour | `hasShippingService` on your organisation markup | Validates with no errors |
| 5. Add product overrides | Developer | 2 hours | `OfferShippingDetails` for exceptions only | Each exception has a reason |
| 6. Match markup to the page | Merchandiser | 30 min | Compare rates and times | No mismatch |
| 7. Review when rates change | Operations | Quarterly | Dated change note | Markup updated within a week |

## A worked example (made-up)

A shop ships free in two days within India for orders above 1,999 rupees, otherwise charges 99 rupees and takes four days. It does not ship to two regions. It publishes one policy page, a `ShippingService` with three conditions and `doesNotShip` for the excluded regions, and an override for oversized furniture with its own rate and time.

## Common mistakes

- Putting a different policy in markup from the one the page states.
- Repeating the full policy on every product page instead of using offer-level overrides for exceptions.
- Leaving old delivery times after a courier change.
- Forgetting that offer-level details support fewer properties.

Related: [product data for AI shopping](/product-data-for-ai-shopping-and-google-merchant-listings-a-four-point-scorecard/), [organization markup and sameAs](/organization-markup-and-sameas-for-brand-clarity-what-google-recommends-and-a-six-step-rollout/) and [Google's universal cart](/googles-universal-cart-is-live-in-us-search-and-gemini-what-merchants-need-to-know/). Display of shipping information is not guaranteed.
