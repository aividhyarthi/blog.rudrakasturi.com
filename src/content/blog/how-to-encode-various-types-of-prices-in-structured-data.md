---
title: "How to Encode Various Types of Prices in Structured Data"
date: 2025-02-17T02:51:03Z
description: "Structured data helps search engines understand content better, and for merchants, it ensures that product prices are displayed correctly in search results. Google has recently updated its Merchant…"
tag: "Google"
image: "https://blog.rudrakasturi.com/wp-content/uploads/2025/02/image.png"
categories: ["SEO","Structure Data"]
tags: ["Google","Rudra Kasturi","SEO"]
---

Structured data helps search engines understand content better, and for merchants, it ensures that product prices are displayed correctly in search results. Google has recently updated its Merchant listing structured data guidelines to support more complex pricing structures. This includes the use of the `priceType` property and the new beta `validForMemberTier` property.

In this article, we’ll break down these updates and explain how you can use them to properly encode different types of pricing in JSON-LD structured data.

## **Why This Update Matters**

Merchants often offer different types of prices for their products, such as:

*   **Regular Prices** – The standard price of an item.
*   **Sale Prices** – A temporary discount or promotional price.
*   **Strikethrough Prices** – The original price shown with a line through it to highlight a discount.
*   **Member Prices** – Special prices available only to certain customer tiers, such as loyalty program members.

Previously, structured data did not fully support these variations. Now, with the new `priceType` and `validForMemberTier` properties, merchants can define these prices more accurately.

## **Understanding `priceType`**

The `priceType` property allows you to specify the nature of a price, making it clear whether it is a sale price, a standard price, or a strikethrough price. The values for `priceType` include:

*   `"regular"`: The normal, non-discounted price.
*   `"sale"`: A temporarily discounted price.
*   `"clearance"`: A deep discount for items being discontinued.
*   `"minimumAdvertisedPrice"`: The lowest price that can be publicly displayed due to brand restrictions.
*   `"strikethrough"`: The original price before a discount, shown with a line through it.

### **Example JSON-LD for a Sale Price**

```
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Wireless Headphones",
  "offers": {
    "@type": "Offer",
    "price": "49.99",
    "priceCurrency": "USD",
    "priceType": "sale",
    "availability": "https://schema.org/InStock"
  }
}
```

This JSON-LD snippet clearly defines that the price of $49.99 is a sale price.

## **Understanding `validForMemberTier`**

The `validForMemberTier` property is currently in beta and allows merchants to specify pricing available only to specific membership tiers. This is useful for loyalty programs, subscription-based pricing, or VIP discounts.

### **Example JSON-LD for a Member-Only Price**

```
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Premium Coffee Beans",
  "offers": {
    "@type": "Offer",
    "price": "15.99",
    "priceCurrency": "USD",
    "priceType": "regular",
    "validForMemberTier": "Gold Members"
  }
}
```

This means that only Gold Members can see and access the $15.99 price.

## **Combining Multiple Prices in Structured Data**

Sometimes, a product may have multiple pricing types simultaneously, such as a regular price and a member price.

### **Example JSON-LD for Multiple Prices**

```
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Smartwatch",
  "offers": [
    {
      "@type": "Offer",
      "price": "199.99",
      "priceCurrency": "USD",
      "priceType": "regular"
    },
    {
      "@type": "Offer",
      "price": "179.99",
      "priceCurrency": "USD",
      "priceType": "sale"
    },
    {
      "@type": "Offer",
      "price": "149.99",
      "priceCurrency": "USD",
      "priceType": "sale",
      "validForMemberTier": "Platinum Members"
    }
  ]
}
```

Here, the smartwatch has:

*   A regular price of $199.99
*   A sale price of $179.99 for the general public
*   A special member price of $149.99 for Platinum Members

## **Best Practices for Implementing Structured Pricing Data**

1.  **Use the correct `priceType` values** to ensure your prices are displayed accurately.
2.  **Ensure consistency between structured data and the actual website prices** to avoid penalties from search engines.
3.  **Use `validForMemberTier` only if your pricing structure includes member-only discounts.**
4.  **Validate your JSON-LD markup** using Google’s Rich Results Test tool to check for errors.

* * *

## **Final Thoughts**

With the introduction of `priceType` and `validForMemberTier`, merchants can now provide clearer, more structured pricing data. This helps search engines display accurate pricing and improves the shopping experience for customers.

By implementing these structured data updates, merchants can ensure their product listings reflect the most accurate and appealing prices to their target audiences. Start optimizing your structured data today to make the most of these new features!
