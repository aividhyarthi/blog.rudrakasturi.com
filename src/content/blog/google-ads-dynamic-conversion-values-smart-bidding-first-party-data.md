---
title: "Google Ads Wants Better Conversion Values, Not Just More Leads: How Dynamic Scoring Changes Smart Bidding"
date: 2026-11-26
description: "Google Ads is encouraging advertisers to send dynamic conversion values based on first-party business data. Here is how Value-Based Bidding works and how to implement it responsibly."
tag: "Google Ads"
tldr: "Google Ads Liaison Ginny Marvin says dynamically assigning conversion values using first-party data is a foundational principle of Value-Based Bidding. Advertisers can send values that reflect lead quality, revenue or predicted customer value, helping Smart Bidding optimise towards outcomes that matter to the business."
categories: ["Google Ads", "Performance Marketing", "AI", "Growth"]
tags: ["Google Ads", "Smart Bidding", "Value-Based Bidding", "Conversion Values", "First-Party Data"]
type: "article"
draft: true
sources:
  - title: "Google Ads encourages dynamic conversion values to improve Smart Bidding"
    url: "https://searchengineland.com/google-ads-encourages-dynamic-conversion-values-to-improve-smart-bidding-503027"
    publisher: "Search Engine Land"
    reviewed: "2026-11-26"
  - title: "About value-based bidding"
    url: "https://support.google.com/google-ads/answer/7684216"
    publisher: "Google Ads Help"
    reviewed: "2026-11-26"
---

Google is reminding advertisers that a conversion is not always worth the same amount. A form submission from someone who is unlikely to buy should not necessarily carry the same value as a qualified lead with a high chance of becoming a profitable customer.

On November 25, Google Ads Liaison Ginny Marvin said that dynamically scoring conversion values using first-party data is a foundational principle of Value-Based Bidding. The comments followed a discussion about whether automated bidding can over-optimise for easy conversions instead of meaningful business growth.

The message is practical: advertisers should teach the bidding system what a valuable outcome looks like, rather than asking it to treat every conversion as equal.

## What is a dynamic conversion value?

A conversion value is the business value assigned to an action. It could represent a purchase amount, estimated revenue, profit contribution or a score that reflects the likelihood and value of a lead.

A fixed-value setup might assign every lead form submission a value of ₹1,000. But that assumes all leads are equally valuable.

A dynamic setup can assign different values based on information the business already knows. For example:

| Lead type | Illustrative value |
|---|---:|
| Unqualified enquiry | ₹100 |
| Contactable lead | ₹500 |
| Sales-qualified lead | ₹2,500 |
| Customer acquired | ₹10,000 |

These are example values, not Google's recommended values. A business should calculate its own values from historical conversion rates, revenue and margins.

## Why this matters for Smart Bidding

Smart Bidding uses auction-time signals to set bids. If the conversion data only tells Google that a form was submitted, the system may optimise towards the volume of form submissions.

If the advertiser sends reliable values that distinguish low-quality and high-quality outcomes, Value-Based Bidding can optimise towards higher-value conversions.

This does not mean Google automatically knows the real profit of every customer. The advertiser must supply accurate values and maintain a sensible measurement model.

## How to build a dynamic value model

### Step 1: Define the business outcome

Decide what matters: gross revenue, contribution margin, qualified pipeline, subscription value or another measurable outcome. Avoid assigning values simply because a platform accepts a number.

### Step 2: Map the customer journey

Identify stages such as enquiry, qualified lead, sales meeting, opportunity, purchase and repeat purchase. Decide which stages can be reliably recorded and sent back to Google Ads.

### Step 3: Calculate expected value

For a lead stage, a simple expected-value model is:

**Expected value = Probability of becoming a customer × Expected contribution value**

For example, if a qualified lead has a 20% probability of becoming a customer and the expected contribution margin from that customer is ₹25,000, the expected value of that lead is ₹5,000.

This is an illustrative business calculation, not a Google formula.

### Step 4: Connect first-party data

Use an appropriate Google Ads conversion setup, CRM integration or offline conversion import to return qualified outcomes and values. Follow Google's requirements for identifiers, consent, enhanced conversions and data handling.

### Step 5: Check value quality before changing bidding

Compare the values sent to Google with actual CRM and finance outcomes. Look for missing records, duplicate conversions, inconsistent currencies and values that change unpredictably.

### Step 6: Test the bidding strategy

Move to a value-based strategy only when there is enough reliable conversion data and the business can tolerate a learning period. Use an experiment where possible and avoid changing budgets, values and campaign structure all at once.

## A simple example for an Indian business

Imagine a real estate company receiving 1,000 enquiries in a month. Its CRM shows that only 100 are genuinely qualified and 10 eventually purchase a property.

If the campaign treats every enquiry as equal, the bidding system may find more people who submit forms but never progress.

If the company returns reliable qualification and sale values, it can give the algorithm a better signal. The objective changes from generating the cheapest form fill to finding customers with a higher expected business value.

## What can go wrong?

- **Inflated values:** If the business assigns arbitrary high values to leads, the algorithm learns from misleading data.
- **Delayed outcomes:** Long sales cycles mean conversion values may arrive weeks later.
- **Duplicate events:** A lead may be counted more than once if browser and CRM events are not deduplicated.
- **Changing definitions:** If sales teams redefine a qualified lead every month, the values become difficult to compare.
- **Revenue mistaken for profit:** High revenue does not always mean high margin.
- **Too little data:** A complex scoring model can create noise when the business has too few conversions.

## The measurement shift

The important question for advertisers is no longer simply how many conversions a campaign produced. It is how much business value those conversions created.

Dynamic conversion values can improve automated bidding, but only when the underlying business data is accurate, timely and consistent. The algorithm cannot repair a broken CRM or a poorly defined sales process.

**Google's message is a reminder that automation is only as good as the outcome data we give it.**
