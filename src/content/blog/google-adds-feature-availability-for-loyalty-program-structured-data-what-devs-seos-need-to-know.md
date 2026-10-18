---
title: "Google Adds “Feature Availability” for Loyalty Program Structured Data – What Devs & SEOs Need to Know"
date: 2025-06-18T04:03:21Z
description: "What Changed? On June 17, 2025 , Google updated its Loyalty Program structured data documentation to include a “Feature Availability” section. This section lists the countries and devices where…"
tag: "Google"
image: "https://blog.rudrakasturi.com/wp-content/uploads/2025/06/image-52.webp"
---

**What Changed?**

On **June 17, 2025**, Google updated its [Loyalty Program structured data documentation](https://developers.google.com/search/docs/appearance/structured-data/loyalty-program#feature-availability) to include a **“Feature Availability”** section.

This section lists the **countries and devices** where Google currently supports loyalty program rich results helping devs and SEOs know where their markup will actually have impact.

**Supported Regions (as of June 2025)**

Structured data for Loyalty Programs is supported in:

*   **Australia**
*   **Brazil**
*   **Canada**
*   **France**
*   **Germany**
*   **Mexico**
*   **United Kingdom**
*   **United States**

And yes — it works on **both desktop and mobile**.

**What is Loyalty Program Structured Data?**

Google introduced `LoyaltyProgram` markup (as part of `schema.org`) to allow retailers and platforms to highlight reward systems directly in search.

Think:  
“Earn 10 points for every ₹100 spent” or “Free coffee on your 5th order.”

This is done by embedding **JSON-LD markup** on relevant product or offer pages.

**Key properties include:**

*   `name`
*   `description`
*   `url`
*   `loyaltyPoints` → including `pointsEarned` and `pointsRequired`
*   `membershipNumber`
*   `programName`

**Technical Takeaways**

1.  **Conditional Rendering by Google:**  
    Even if your markup is valid, rich results will **only appear** in the countries listed above. This helps avoid false expectations and allows better debugging.
2.  **Structured Data Validation Still Works Globally:**  
    You can still test and validate your loyalty program markup using the Rich Results Test, even if you're outside the supported countries.
3.  **Optional Implementation for Non-Supported Regions:**  
    Google won’t penalize unsupported markup it’ll simply ignore it for now. So international brands can still future-proof their sites.
4.  **Impact on Click-Through Rate (CTR):**  
    Rich results like loyalty programs can make your listing stand out especially in ecommerce. Early adopters in supported markets could see improved CTR and brand visibility.
5.  **Structured Data Monitoring:**  
    Use the “Enhancements” tab in Google Search Console to monitor how the loyalty program schema is being interpreted and displayed (if at all).

**What Developers Should Do**

*   **If you're in a supported country:**
    *   Review your loyalty program structure.
    *   Add the `LoyaltyProgram` schema to your site (via JSON-LD preferred).
    *   Ensure you define `loyaltyPoints`, `programName`, and membership logic clearly.
*   **If you're outside supported regions:**
    *   Optionally implement the schema for future-readiness.
    *   Use geotargeting or user-agent detection to render markup conditionally.
    *   Monitor official docs, Google may expand country support soon.

This small documentation update signals **a bigger shift** in how Google handles **regional availability of structured data features**. It's not just about “is the markup valid?” it's also **“is it supported here?”**

Structured data is now not just technical hygiene. it’s a **competitive advantage**.
