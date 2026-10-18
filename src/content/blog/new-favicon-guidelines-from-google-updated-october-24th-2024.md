---
title: "New Favicon Guidelines from Google (Updated October 24th, 2024)"
date: 2024-10-25T02:52:02Z
description: "On October 24th, 2024 , Google released updated guidelines for favicons in Google Search results. Favicons play an essential role in how users recognize and interact with websites in search results…"
tag: "Google"
image: "https://blog.rudrakasturi.com/wp-content/uploads/2024/10/image-51.png"
---

On **October 24th, 2024**, Google released updated guidelines for favicons in Google Search results. Favicons play an essential role in how users recognize and interact with websites in search results. Google’s new guidelines help ensure that favicons meet certain standards and are eligible to appear next to your site’s title in search results. However, even with all the guidelines met, it’s important to note that the display of favicons is **not guaranteed**.

Here’s a breakdown of the **new guidelines** and how to comply:

#### 1\. **Single Favicon Per Hostname**

Google has clarified that it **only supports one favicon per hostname**. A hostname is the main address of your website. While subdomains can have their own favicons, subdirectories **cannot**.

*   **Supported Examples**:
    *   `https://example.com`: This is the main domain-level home page and can have its own favicon.
    *   `https://news.example.com`: This is a subdomain, and it can have a different favicon from the main site.
*   **Not Supported Example**:
    *   `https://example.com/news`: This is a subdirectory under the main domain. Subdirectories cannot have separate favicons. Instead, the favicon of the main domain (`example.com`) will apply to all subdirectories.

In simple terms, if you run a site like `https://example.com`, all subdirectories (like `https://example.com/blog`) will share the same favicon. However, subdomains like `https://blog.example.com` can have their own favicons.

#### 2\. **Googlebot Must Be Able to Crawl**

For your favicon to be eligible to appear in Google Search results:

*   **Googlebot-Image** must be able to crawl your favicon file.
*   **Googlebot** must also be able to crawl your website’s home page.

If either of these is blocked from crawling, Google will not display your favicon in search results. Be sure that these resources are not blocked by your website’s `robots.txt` file or any other access restrictions.

#### 3\. **Visual Representation of Your Brand**

Your favicon should be a clear visual representation of your website’s brand. Since it is often the first thing users see when scrolling through search results, the favicon should make it easy for users to recognize your site.

For example, if you run a news website, using a recognizable part of your logo or something that stands out as part of your brand identity (like a unique letter or symbol) is ideal.

#### 4\. **Size and Format Requirements**

Google's update reinforces specific technical requirements for favicons:

*   The favicon **must be square** with a 1:1 aspect ratio.
*   The **minimum size** for the favicon is **8x8 pixels**, but Google **recommends using a size larger than 48x48 pixels** to ensure it looks good on different screen sizes and devices.
*   Any valid image format is supported, such as `.ico`, `.png`, or `.jpg`.

Using a larger size, such as 64x64 pixels or 128x128 pixels, ensures better quality across various devices without looking pixelated.

#### 5\. **Stable Favicon URL**

It’s important to use a **stable URL** for your favicon. Don’t frequently change the favicon URL, as this can cause issues with indexing and display in search results. A consistent URL helps Google recognize and display the favicon correctly.

#### 6\. **Content Restrictions**

Google has reiterated that it will not show any favicon it considers inappropriate. Favicons containing imagery related to **pornography**, **hate symbols** (such as swastikas), or other offensive content will be replaced with a default icon.

For example:

*   If a site’s favicon contains offensive symbols, Google will automatically replace it with a neutral icon, preventing the inappropriate content from being displayed in search results.

### Example of Correct Favicon Implementation:

Let’s say you own a website for a digital marketing agency called “BrightMarketing”:

*   Your main domain is `https://www.brightmarketing.com`, and you have a favicon that is a simple version of your logo.
*   You also have a blog hosted on `https://blog.brightmarketing.com`, and you want the blog to have a different favicon.
    *   This is allowed because `blog.brightmarketing.com` is a subdomain.
*   However, if you also have a section of your main website, like `https://www.brightmarketing.com/blog`, it **must use the same favicon** as the main domain.

To avoid any issues, ensure your favicon follows these new rules and is accessible for Google's crawlers.

### Key Takeaways:

With these new guidelines, it’s crucial for webmasters to ensure their favicons comply with Google's updated standards from **October 24th, 2024**.

To recap:

*   Only one favicon per hostname.
*   Ensure Googlebot can crawl both your home page and favicon file.
*   Make sure your favicon visually represents your brand.
*   Use square favicons with a minimum size of 8x8 pixels (preferably larger than 48x48 pixels).
*   Keep your favicon’s URL stable.
*   Avoid using inappropriate or offensive imagery.

By following these new guidelines, you’ll increase the chances of your favicon being displayed in search results, which can help users recognize and trust your site more easily.
