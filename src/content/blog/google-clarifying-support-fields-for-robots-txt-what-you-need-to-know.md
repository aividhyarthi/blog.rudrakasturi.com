---
title: "Google Clarifying Support Fields for Robots.txt: What You Need to Know"
date: 2024-10-08T04:23:35Z
description: "What’s Happening? Google has provided a clear update on the use of fields in your robots.txt file. They have confirmed that only certain fields are officially supported. If you’re using fields that…"
tag: "Google"
image: "https://blog.rudrakasturi.com/wp-content/uploads/2024/10/image-21.png"
categories: ["Explainers","Google Updates","SEO"]
tags: ["Google","Indexing","Robots","Robots File","Rudra Kasturi","SEO"]
---

#### What’s Happening?

Google has [provided a clear update](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt#syntax) on the use of fields in your robots.txt file. They have confirmed that only certain fields are officially supported. If you’re using fields that aren’t listed in their documentation (like `crawl-delay`), they **won’t be recognized** by Google.

#### Why Does This Matter?

Many webmasters and SEOs have tried using unsupported fields in their robots.txt files, leading to confusion when Google doesn’t follow those rules. By clarifying which fields are supported, Google wants to ensure that everyone understands exactly which instructions its crawlers will follow.

#### Key Supported Fields

Here are the **four key fields** that Google officially supports in your robots.txt file:

1.  **User-agent**:  
    This field is used to specify which search engine crawler (also called a “user-agent”) the rules apply to. For example, you can create rules that only apply to Google's crawler.
    *   **Example**:`User-agent: Googlebot` This rule applies only to Google's web crawler (Googlebot).
2.  **Allow**:  
    The `allow` field specifies which pages or parts of your website are permitted to be crawled, even if broader rules may block other parts.
    *   **_Example: `Allow: /public-content/` This allows the crawler to access the `/public-content/` section of your website._**
3.  **Disallow**:  
    The `disallow` field blocks specific URLs from being crawled. It tells search engines not to visit certain pages or directories.
    *   **_Example: `Disallow: /private/` This prevents crawlers from accessing the `/private/` directory of your website._**
4.  **Sitemap**:  
    This field provides the full URL of your website’s sitemap, which is a file containing a list of all the important pages on your site. Including this ensures Google knows where to find your sitemap.
    *   **_Example: `Sitemap: https://www.example.com/sitemap.xml` This tells Google where to find your website’s sitemap._**

#### Unsupported Fields

Some fields, like `crawl-delay`, may work with other search engines but **are not supported by Google**. If you’re using unsupported fields, they will be ignored by Google’s crawlers.

#### Example of a Properly Configured Robots.txt:

```
User-agent: *
Disallow: /private/
Allow: /public/
Sitemap: https://www.example.com/sitemap.xml
```

*   All crawlers ("\*") are prevented from accessing the `/private/` directory.
*   The `/public/` directory is allowed for crawling.
*   Google is informed about the location of the sitemap.

Robots.txt URL examples

`https://example.com/robots.txt`

This is the general case. It's not valid for other subdomains, protocols, or port numbers. It's valid for all files in all subdirectories on the same host, protocol, and port number.  
**Valid for:**  
`https://example.com/https://example.com/folder/file`  
**Not valid for:**  
`https://other.example.com/http://example.com/https://example.com:8181/`

`https://www.example.com/robots.txt`

A robots.txt on a subdomain is only valid for that subdomain.  
**Valid for:** `https://www.example.com/`  
**Not valid for:**  
`https://example.com/https://shop.www.example.com/https://www.shop.example.com/`

`https://example.com/folder/robots.txt`

Not a valid robots.txt file. Crawlers don't check for robots.txt files in subdirectories.

`https://www.exämple.com/robots.txt`

IDNs are equivalent to their punycode versions. See also [RFC 3492](https://www.ietf.org/rfc/rfc3492.txt).  
**Valid for:**  
`https://www.exämple.com/https://xn--exmple-cua.com/`  
**Not valid for:** `https://www.example.com/`

`ftp://example.com/robots.txt`

**Valid for:** `ftp://example.com/`  
**Not valid for:** `https://example.com/`

`https://212.96.82.21/robots.txt`

A robots.txt with an IP-address as the host name is only valid for crawling of that IP address as host name. It isn't automatically valid for all websites hosted on that IP address (though it's possible that the robots.txt file is shared, in which case it would also be available under the shared host name).  
**Valid for:** `https://212.96.82.21/`  
**Not valid for:** `https://example.com/` (even if hosted on `212.96.82.21`)

`https://example.com:443/robots.txt`

Standard port numbers (`80` for HTTP, `443` for HTTPS, `21` for FTP) are equivalent to their default host names.  
  
**Valid for:**  
`https://example.com:443/https://example.com/`  
**Not valid for:**  
 `https://example.com:444/`

`https://example.com:8181/robots.txt`

Robots.txt files on non-standard port numbers are only valid for content made available through those port numbers.  
**Valid for:** `https://example.com:8181/`  
**Not valid for:** `https://example.com/`

Example path matches

`/`

Matches the root and any lower level URL.

`/*`

Equivalent to `/`. The trailing wildcard is ignored.

`/$`

Matches only the root. Any lower level URL is allowed for crawling.

`/fish`

Matches any path that starts with `/fish`. Note that the matching is case-sensitive.  
  
**Matches:**  
  
`/fish/fish.html`  
`/fish/salmon.html`  
`/fishheads`  
`/fishheads/yummy.html`  
`/fish.php?id=anything`  
  
**Doesn't match:**  
`/Fish.asp`  
`/catfish/`  
`?id=fish`  
`/desert/fish`

`/fish*`

Equivalent to `/fish`. The trailing wildcard is ignored.  
  
**Matches:**`/fish/fish.html`  
`/fish/salmon.html`  
`/fishheads`  
`/fishheads/yummy.html`  
`/fish.php?id=anything`  
  
**Doesn't match:**  
`/Fish.asp`  
`/catfish/`  
`?id=fish`  
`/desert/fish`

`/fish/`

Matches anything in the `/fish/` folder.  
  
**Matches:**  
`/fish/`  
`/fish/?id=anything/fish/salmon.htm`  
  
**Doesn't match:**  
  
`/fish/`  
`fish.html`  
`/animals/fish/`  
`/Fish/Salmon.asp`

`/*.php`

Matches any path that contains `.php`.  
  
**Matches:**`/index.php/filename.php`  
`/folder/filename.php`  
`/folder/filename.php?parameters/folder/`  
`any.php.file.html`  
`/filename.php/`  
  
**Doesn't match:**`/`  
 (even if it maps to /index.php)`/windows.PHP`

`/*.php$`

Matches any path that ends with `.php`.  
**Matches:**  
`/filename.php`  
`/folder/filename.php`  
  
**Doesn't match:**  
  
`/filename.php?parameters/filename.php/`  
`/filename.php5`  
`/windows.PHP`

`/fish*.php`

Matches any path that contains `/fish` and `.php`, in that order.  
  
**Matches:**  
`/fish.php`  
`/fishheads`  
`/catfish.php?parameters`  
  
**Doesn't match:**   
`/Fish.PHP`

#### Final Takeaway:

To ensure Google correctly follows the rules you set, make sure your robots.txt file only uses supported fields. Unsupported fields won’t work with Google, so [double-check](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt#syntax) that your file contains only these key fields: **User-agent, Allow, Disallow, and Sitemap**.
