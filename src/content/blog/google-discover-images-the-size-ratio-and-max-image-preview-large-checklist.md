---
title: "Google Discover images: the size, ratio and max-image-preview:large checklist"
date: 2026-11-10T14:00:00+05:30
description: "What Google recommends for Discover images: at least 1200 px wide, over 300,000 pixels, 16:9, and the max-image-preview:large setting. A checklist you can run on any article."
tag: "Discover"
tldr: "Google's Discover page (last updated 9 March 2026) recommends large images at least 1200 px wide with more than 300,000 total pixels, in 16:9, allowed by max-image-preview:large, and named through og:image or schema.org. It says to avoid logos and text-heavy images. The checklist and example are our own."
sources:
  - title: "Discover and your website"
    url: "https://developers.google.com/search/docs/appearance/google-discover"
    publisher: "Google Search Central"
categories: ["Discover", "SEO"]
tags: ["Google Discover", "Images", "max-image-preview", "og:image"]
---

For Discover, the image often does more work than the headline. Google's Discover page (last updated 9 March 2026 as we read it) says large images are more likely to generate visits from Discover, and gives specific numbers.

**Best for:** bloggers and publishers who want articles to be eligible for Discover with a large preview.

![Discover image checklist: at least 1200 px wide, over 300,000 pixels, 16:9, max-image-preview large, named in og:image](/images/discover-images-specification/image-spec.svg)

## What Google says

- Content is eligible for Discover if it is indexed and meets Discover's content policies. No special tags or structured data are required, and eligibility is not a guarantee of appearing.
- Recommended image specification: at least 1200 px wide, more than 300,000 total pixels (a 1280 x 720 image has 921,600), and a 16:9 aspect ratio.
- Large images are enabled by the `max-image-preview:large` setting, or by AMP.
- Specify a large, relevant image in schema.org markup or the `og:image` meta tag. This can influence which image is chosen.
- Avoid generic images such as a site logo, and avoid text-heavy images, in that markup.
- Google tries to crop automatically. If you crop yourself, make sure the important details remain in a landscape crop.

## A ten-minute image check

| Check | Pass if |
|---|---|
| Width | 1200 px or more |
| Total pixels | Width x height is above 300,000 |
| Ratio | 16:9, with the subject away from the edges |
| Robots setting | The page allows `max-image-preview:large` |
| Named image | `og:image` or schema.org points to this image |
| Content | Relevant to the article, not a logo, little overlaid text |

## A worked example (made-up)

A blog uses its site logo as `og:image` on every article, at 600 x 315 pixels. That fails width, total pixels (189,000), and the logo guidance. The fix: a 1280 x 720 image per article with the subject centred, named in `og:image`, with the robots setting allowing large previews.

## What to do

1. Pick five recent articles and run the table above.
2. Check each page source for `og:image` and the robots meta setting.
3. Replace logo images with article-specific ones.
4. Pair this with a headline that matches the content. See [Discover headlines without clickbait](/google-discover-headlines-without-clickbait-before-and-after-examples/).
5. Run our [Discover eligibility test](/how-to-check-whether-a-page-can-appear-in-google-discover-a-10-minute-test/), and read [why Discover traffic changes](/why-google-discover-traffic-rises-and-falls-a-four-step-diagnosis-from-googles-documentation/).

Discover traffic is less predictable than search traffic, and following these steps does not guarantee it.
