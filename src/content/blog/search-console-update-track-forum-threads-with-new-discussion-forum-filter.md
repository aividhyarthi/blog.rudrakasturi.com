---
title: "Search Console Update: Track Forum Threads with New 'Discussion Forum' Filter"
date: 2025-07-08T16:41:38Z
description: "Google now supports a new way for forums to show up better in Search. It’s called DiscussionForumPosting structured data . This means if your site has community"
tag: "Form Discussions"
image: "https://blog.rudrakasturi.com/wp-content/uploads/2025/07/create-a-featured-image-that-represents-the-concept-of-discussion.webp"
---

**Google now supports a new way for forums to show up better in Search.** It’s called **DiscussionForumPosting structured data**.

![](https://rudrakasturi.wpcomstaging.com/wp-content/uploads/2025/07/image-14-1024x876.webp)

This means if your site has community conversations, Google can highlight your threads with replies, authors, and more, directly in search results.

Think of it like this:  
When someone Googles a question like _“Best laptops under 50K”_, and your users have already discussed it in your forum, Google can now show that discussion like a featured result.

Let’s break it down.

## Who should care?

You should consider this if your site:

*   Has a **forum or discussion section**
*   Lets **users post questions** or start threads
*   Has **real replies** from other users

This is perfect for:

*   A tech support forum on your product site
*   A parenting or health community with user threads
*   A career or exam help group on your edu platform

Even internal company forums or brand-run support spaces are eligible.

## Who should _not_ use this?

If you’re:

*   Embedding Reddit or Facebook threads
*   Just posting FAQs or single-answer content
*   Running a blog with comments

Then this is not for you.

This is for **forums** where users talk to each other, not for static Q&A or content with passive comments.

## How it shows up in Google

If you add the right markup, Google can show:

*   The question or thread title
*   A snippet from replies
*   Author names
*   Reply count

It looks like a mini-preview of the conversation.  
Cleaner. More clickable. Built for user trust.

## How is this different from Q&A?

Let’s make it simple.

Type of content

Use this markup

One correct answer to a question

`QAPage`

Many opinions, open discussion

`DiscussionForumPosting`

So if your site has a thread like _“Best bank for students?”_ and 10 people reply with different views, this is **DiscussionForumPosting**.

If it’s _“When was RBI formed?”_ and there’s one factual answer, then it’s **QAPage**.

## How to use the markup – Example

Here’s a **clean version** of how your forum thread page should be marked up in code.

This tells Google what the page is about, who posted it, and what the replies are.

```
<script type="application/ld+json">{  "@context": "https://schema.org",  "@type": "DiscussionForumPosting",  "mainEntityOfPage": "https://example.com/forums/laptops-under-50k",  "headline": "Best laptops under ₹50,000 in 2025?",  "text": "Looking for a laptop for coding and light gaming. Any suggestions?",  "author": {    "@type": "Person",    "name": "Neha"  },  "datePublished": "2025-07-01T10:00:00+05:30",  "comment": [    {      "@type": "Comment",      "text": "Check out the Lenovo Ideapad 3. Decent specs and good support.",      "author": {        "@type": "Person",        "name": "Amit"      },      "datePublished": "2025-07-01T11:00:00+05:30"    },    {      "@type": "Comment",      "text": "Also look at the Asus VivoBook. Better battery life.",      "author": {        "@type": "Person",        "name": "Rekha"      },      "datePublished": "2025-07-01T12:00:00+05:30"    }  ]}</script>
```

You add this in your HTML code on each forum thread page.

Use a CMS plugin if you’re non-technical. There are tools like Schema Pro, RankMath, or dev help for custom platforms.

## Tips to get it right

*   Only mark up real forum pages with real replies
*   Don’t fake threads or stuff them with keywords
*   Test your pages using Google’s Rich Results Test
*   Track how they show in Search Console under **Enhancements**

## Why?

This is a solid opportunity to bring **community content** back into Google Search in a more visual and credible way.

If you already have a forum, this is a no-brainer.  
If not, and your audience loves discussing, maybe it’s time to start one.

Google is giving space to real conversations.  
Now it’s up to you to show up right.
