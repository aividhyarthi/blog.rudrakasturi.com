---
title: "The PHP security flaw explained: what it is, who found it, and why governments said to update or go offline"
date: 2026-10-23T07:00:00+05:30
description: "Two serious flaws in PHP, the language behind a large share of websites, were found with an AI model. A plain-language guide with diagrams."
tag: "Security"
tldr: "Two serious flaws in PHP, found by a security firm using OpenAI's AI model, let an attacker take over an unpatched website server without a password. A fix was released on October 21, and US agencies said to update at once or take the system offline. Sites that do not use PHP are not affected."
sources:
  - title: "Critical vulnerabilities in PHP spark rush to update systems"
    url: "https://www.nbcnews.com/tech/security/critical-vulnerabilities-php-update-systems-rcna604751"
    publisher: "NBC News"
  - title: "PHP security flaw: Websites taken down as OpenAI spots issue with backbone of internet"
    url: "https://www.thenationalnews.com/future/technology/2026/10/21/php-security-issues-exploit/"
    publisher: "The National"
  - title: "World leaders warn of security flaws found in PHP programming language"
    url: "https://www.aljazeera.com/news/2026/10/22/world-leaders-warn-against-security-flaw-found-in-php-computer-programming"
    publisher: "Al Jazeera"
  - title: "Black October: why bugs discovered by OpenAI tech are creating a cyber emergency"
    url: "https://www.axios.com/2026/10/22/php-vulnerability-security-update-websites"
    publisher: "Axios"
  - title: "OpenAI says GPT-5.6 Sol found a PHP flaw before attackers did"
    url: "https://ppc.land/openai-says-gpt-5-6-sol-found-a-php-flaw-before-attackers-did/"
    publisher: "PPC Land"
  - title: "PHP2Shell: How AI Turns a Stalled PHP Flaw Into a Global Emergency"
    url: "https://winbuzzer.com/2026/10/22/php-patches-flaws-that-let-attackers-run-code-on-servers-xcxwbn/"
    publisher: "WinBuzzer"
categories: ["Security", "GPT"]
tags: ["PHP", "Security", "OpenAI", "WordPress"]
---

Many governments and security agencies issued warnings this week about two serious flaws in PHP. This guide explains in plain language what happened.

## The short version

- **PHP** is a programming language that runs a very large number of websites, including WordPress sites.
- Two flaws, together called **PHP2Shell**, let an attacker take control of a website's server **without a password**.
- A security firm found them using an **OpenAI AI model** and reported them privately, so a fix could be built first.
- The fix was released on **October 21**. US agencies said: **update now, or take the system offline.**

![A timeline with four steps: researchers find two flaws in August, they are reported in private on 11 August, the fix is released on 21 October, and governments warn on 21 and 22 October](/images/php2shell/timeline.svg)

## What is PHP?

PHP is software that sits on a web server and builds web pages when you visit them. Online shops, news sites, blogs and government portals often use it. WordPress, the most common website builder, runs on PHP. One widely quoted figure says up to **70% of websites** use it, but that is a media estimate, not a measured number.

## What is the flaw?

The two flaws are listed as CVE-2026-109618 and CVE-2026-109619. According to a CISA statement quoted by The National, they allow *unauthenticated remote code execution* in PHP. In plain words: someone far away, who has no account and no password, can make the server run their commands.

![A flow showing an attacker sending a crafted request to a website server that runs PHP, with no password needed, and then running their own commands on the server](/images/php2shell/attack.svg)

## Who found it, and how?

A security firm called Calif found one of the flaws using OpenAI's **GPT-5.6 Sol** model, as part of an OpenAI programme called "Patch the Planet". Another security company, Wiz, also found both flaws independently. Calif reported the problem to the PHP Foundation, the group that maintains PHP, on **August 11**, according to Futurism's reporting.

So OpenAI's AI was a tool used by researchers. The reason for such programmes is to find serious bugs in widely used software **before attackers do**.

## Why did governments say "update or go offline"?

Once a fix is published, attackers can study it to work out what was broken, then go after sites that have not yet updated. Some reports say this can take only hours, and that attackers now use AI too.

The FBI said that if an immediate update is not possible, organisations should [take the system offline until it can be fully fixed](https://www.nbcnews.com/tech/security/critical-vulnerabilities-php-update-systems-rcna604751). The logic is simple: a site that is switched off cannot be taken over, and a site left open and unpatched can.

![A decision guide: if you can update PHP today, update and stay online; if you cannot, take the site offline until it is fixed](/images/php2shell/decision.svg)

Germany, Belgium, the Netherlands, Finland and the Czech Republic took some government websites offline as a precaution, according to Al Jazeera.

## What happened next?

Reports differ. CISA said it had **not seen exploitation** when it first published. Other reports say Amazon and Cloudflare saw large numbers of attack attempts. WinBuzzer notes that no confirmed break-in at a real organisation had been shown at the time it wrote. Treat the situation as fast-moving and check the official advisories.

## Who is affected?

![Two boxes: sites that run PHP, such as WordPress sites, online shops, news sites, government sites and small businesses, may be affected; sites that do not use PHP are not](/images/php2shell/affected.svg)

**Government, media, online shops and small businesses** are the groups named most often, because they commonly use PHP.

## What should you do?

**If you run a PHP site:**

1. **Ask your web host** whether PHP has been updated to the fixed release, and update if they have not.
2. **Do not rely on automatic updates alone.** A Wordfence researcher said WordPress's automatic updates will not apply this particular fix, so some sites need a manual update.
3. **If you cannot update today,** consider taking the site offline until you can, as the FBI advises.

**If you do not run PHP:** nothing changes for you. This blog, for example, is a static site with no PHP on the server.

## What we do not know yet

Exact numbers of affected sites, how many have been attacked, and every detail of the timeline are still being reported, and different outlets give different figures. For anything you act on, use the official CISA advisory and the PHP Foundation's release notes.
