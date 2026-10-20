// Writes preview-digest.html and preview-confirm.html so the designs can be opened in a browser.
import fs from 'node:fs';
import { buildDigest } from '../src/digest.js';
import { confirmEmail } from '../src/templates.js';
const base = 'https://blog.rudrakasturi.com';
const mk = (slug, title, topic, summary) => ({ title, topic, summary, link: `${base}/${slug}/`, image: `${base}/covers/${slug}.png` });
const items = [
  mk('a-practical-checklist-for-ai-search-visibility', 'A practical checklist for AI search visibility', 'AEO', 'Fix the basics first: let crawlers in, write clear answers, add something original, and cover follow-up questions. Measure with Search Console and your own tests.'),
  mk('do-you-need-an-llms-txt-file-what-google-has-said', 'Do you need an llms.txt file? What Google has said', 'AEO', ''),
  mk('youtube-cuts-reach-for-reposted-shorts-and-tests-ask-youtube-in-shorts', "YouTube cuts reach for reposted Shorts and tests 'Ask YouTube' inside Shorts", 'YouTube', ''),
  mk('google-september-2026-spam-update-what-happened-and-what-to-do', "Google's September 2026 spam update: what happened and what to do", 'Google', ''),
  mk('how-reddit-quietly-became-the-1-domain-for-ai-and-why-it-changes-everything', 'Reddit and AI answers: what the citation data actually says', 'Forums', ''),
  mk('ads-are-coming-to-ai-answers-what-chatgpt-and-google-are-testing', 'Ads are coming to AI answers: what ChatGPT and Google are testing', 'LLMs', ''),
];
fs.writeFileSync('preview-digest.html', buildDigest(items, `${base}/unsubscribe`, new Date()).html);
fs.writeFileSync('preview-confirm.html', confirmEmail({ name: 'Rudra', confirmUrl: `${base}/confirm`, reconfirm: true }).html);
