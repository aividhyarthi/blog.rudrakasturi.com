---
title: "ChatGPT Ads Adds Audience Measurement, Business Agents and New Product Feed Controls"
date: 2026-11-26
description: "OpenAI's latest ChatGPT Ads update adds Reach and Frequency reporting, a default Learn more link, Business Agents in more markets, sale price controls and clearer rejection explanations."
tag: "ChatGPT Ads"
tldr: "OpenAI has added audience measurement and workflow features to ChatGPT Ads. Advertisers can now see estimated unique Reach and average Frequency, access additional viewer metrics, use a default Learn more link on single-image ads, hide expired sale prices in product feeds and see more context when ads are rejected."
categories: ["ChatGPT", "Advertising", "AI", "Marketing"]
tags: ["ChatGPT Ads", "OpenAI Ads", "Reach", "Frequency", "Business Agents", "Ad Policy"]
type: "article"
draft: true
sources:
  - title: "ChatGPT Ads New Call-To-Actions, Business Agents Expand, More Audience Metrics & More"
    url: "https://www.seroundtable.com/chatgpt-ads-updates-42623.html"
    publisher: "Search Engine Roundtable"
    reviewed: "2026-11-26"
  - title: "Ads in ChatGPT: The Basics"
    url: "https://help.openai.com/en/articles/20001207-ads-in-chatgpt-the-basics"
    publisher: "OpenAI Help Center"
    reviewed: "2026-11-26"
  - title: "Creating ads for ChatGPT Ads"
    url: "https://help.openai.com/en/articles/20001212-creating-ads-for-chatgpt-ads"
    publisher: "OpenAI Help Center"
    reviewed: "2026-11-26"
  - title: "Ad policies"
    url: "https://openai.com/policies/ad-policies/"
    publisher: "OpenAI"
    reviewed: "2026-11-26"
---

OpenAI is adding a more complete measurement and management layer to ChatGPT Ads. The November 25 product update brings audience metrics, a new default call to action for single-image ads, broader access to Business Agents, a way to hide expired sale prices in product feeds and more detailed explanations when an advertisement is rejected.

The update matters because it moves ChatGPT advertising beyond the first set of basic delivery numbers. Advertisers have traditionally looked at impressions, clicks, click-through rate and spend. They can now begin to understand how many people an ad reached and how frequently those people saw it.

The changes were reported in an advertiser update shared by OpenAI and summarised by Search Engine Roundtable. OpenAI's public documentation confirms the underlying ad formats, campaign setup and policy framework. Some of the new metric definitions, particularly the unique metrics, are not yet fully explained in public documentation. We separate confirmed details from calculations that advertisers should treat as working interpretations.

## 1. Reach and Frequency bring audience measurement to ChatGPT Ads

Reach estimates the number of unique people who saw an ad at least once during the selected reporting period.

Frequency measures how many times those reached people saw the ad on average. OpenAI's stated calculation is:

**Frequency = Total impressions ÷ Reach**

For example, if a campaign records 100,000 impressions and an estimated reach of 40,000 people, average frequency is 2.5. That means the reached audience saw the ad 2.5 times on average. It does not mean every person saw it exactly two or three times.

This distinction matters. Impressions count exposures, not people. Reach estimates people, while frequency helps explain how often the campaign repeated its message to them.

OpenAI has also added Click Reach, Click Frequency, Total Reach, Total Frequency, Unique CTR, Unique CPC and Cost per 1,000 Reached. The precise calculation rules for every one of these fields are not all documented publicly yet. Advertisers should check the field descriptions in their Ads Manager or API response before comparing them with other platforms.

To display the metrics in Ads Manager, select **Edit columns**, find the relevant fields under **Ad Viewers**, select the metrics and save the column settings. The metrics are also available through the Ads API, according to the product update.

## 2. Single-image ads now show Learn more by default

A Learn more link now appears below the description on single-image ads by default. OpenAI says the link opens the landing page already configured in Ads Manager. Advertisers do not need to add a separate destination or create a second campaign setting.

This is a default link, not evidence that every advertiser can choose any CTA label. OpenAI's current creation guidance says Learn more is the only CTA option for multi-image ads. It does not publish a general self-serve menu for replacing the single-image label with Call now, Sign up or Book now.

Advertisers should make the headline, description and destination page do the work of explaining the next step. A campaign promoting a consultation, for example, can send users to a booking page even if the visible CTA says Learn more.

Read our companion explainer: [Can you change Learn more to Call now or Sign up in ChatGPT Ads?](/chatgpt-ads-learn-more-call-to-action-customisation-guide/).

## 3. Business Agents expand to supported markets outside the US

Eligible ecommerce and online service businesses in supported markets outside the United States can now create and publish a Business Agent through ChatGPT Business Hub. Customers can choose to chat with the agent to learn about products and services.

Advertisers who have access to the feature and meet OpenAI's ad policy requirements may also be able to add a Business Agent to an eligible campaign as a Sponsored Business Agent.

The important qualification is supported markets and eligibility. The announcement does not mean every business in every country can immediately publish or sponsor an agent. Businesses should check availability in their own Business Hub.

## 4. Product feeds can hide sale prices after a promotion ends

Advertisers using product-feed ad groups can now choose **Hide product sale prices** under **Product display** when editing an ad group. This lets the ad show the regular price again after a promotion ends.

The change addresses a simple but expensive retail problem: a product feed may still contain a promotional price after a campaign has finished. Showing an expired discount can mislead shoppers and create a mismatch between the ad and the product page.

Our companion guide explains the setting and a pre-promotion checklist: [How to hide expired sale prices in ChatGPT Ads product feeds](/chatgpt-ads-hide-expired-sale-prices-product-feed-guide/).

## 5. Rejected ads now have more policy context

When an ad is not approved, the review message in Ads Manager now provides more context about the policy involved. Advertisers can use the message to decide whether to revise the ad or request a review. The Policy Center is available from the dropdown in the bottom-left corner of Ads Manager.

OpenAI says the approval guidelines have not changed. The update is about making the reason for a decision easier to understand, not relaxing or replacing the policy.

The review applies to more than the headline. OpenAI's published policy says the advertiser, creative assets and landing page are reviewed. An otherwise acceptable image can still be rejected if the destination page promotes a prohibited product or makes a misleading claim.

Read our practical guide: [Why ChatGPT Ads get rejected and how to fix them](/chatgpt-ads-rejection-reasons-policy-center-dos-and-donts/).

## What advertisers should measure next

The addition of Reach and Frequency makes it possible to ask better questions than whether clicks increased.

- Did the campaign reach more distinct people, or did it repeatedly show to the same audience?
- Is frequency rising while unique engagement remains flat?
- Does a campaign with lower CTR still produce more qualified visits or conversions?
- Are product prices and availability consistent between the feed, ad and landing page?
- Are rejection reasons pointing to a creative problem, a landing-page problem or a category restriction?

A campaign should not be judged by one metric. Reach explains audience scale, frequency explains repetition, clicks indicate response and conversion outcomes indicate business value.

## The larger change

ChatGPT Ads is gradually acquiring the measurement and operational features advertisers expect from a mature advertising platform. But marketers should not assume every metric is directly comparable with Meta, Google or programmatic reporting. The definitions, identity estimation, attribution windows and data freshness rules matter.

The next step for advertisers is to build a measurement routine that combines reach, frequency, unique engagement, conversion quality and landing-page outcomes. More numbers are useful only when teams understand what each number counts.

**Editorial note:** This article reflects the OpenAI advertiser update reported on November 25, 2026, and the public Help Center and policy documentation reviewed on November 26. Where OpenAI has not published a calculation method, we have identified that gap rather than inventing one.
