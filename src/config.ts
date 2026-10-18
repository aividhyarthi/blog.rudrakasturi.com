// Facts used across the site. Edit here and every page updates.
export const SITE = {
  name: 'Rudra Kasturi',
  tagline: 'Search. Strategy. AI. Growth. Revenue. Coach. Farmer.',
  email: 'rudra@rudrakasturi.com',
  linkedin: 'https://www.linkedin.com/in/rudrakasturi',
  adsenseClient: 'ca-pub-2121262893172079',
};

export const YEARS = '24+';

// Hand-picked articles shown in "Start here" on the homepage (post slugs).
export const START_HERE = [
  'aeo-geo-ai-seo-what-the-terms-mean-and-what-google-actually-says',
  'why-chatgpt-perplexity-and-google-cite-different-sources',
  'how-to-do-youtube-seo-for-youtube-shorts-simple-tips-with-examples',
  'how-instagram-reels-can-boost-your-google-search-presence',
];

// Newsletter sign-up.
// provider 'formsubmit' (default): every sign-up is emailed to SITE.email as "New newsletter subscriber".
//   The first sign-up triggers a one-time activation email from formsubmit.co: click the link in it.
// provider 'substack' or 'buttondown': sign-ups go straight into that service's list; set `id` to your
//   publication / username (yourname.substack.com or buttondown.com/yourname). Use one of these to send the weekly email.
export const NEWSLETTER = {
  // Sign-up boxes and the slide-in popup are hidden until this is true.
  enabled: false,
  provider: 'formsubmit' as 'formsubmit' | 'substack' | 'buttondown',
  id: '',
  title: 'The Search & AI Briefing',
  blurb: 'A weekly briefing on what is changing in SEO, AEO and AI search, and what to do about it.',
};
export function newsletterConfig(): { mode: 'ajax' | 'post'; action: string } {
  if (NEWSLETTER.id && NEWSLETTER.provider === 'substack') return { mode: 'post', action: `https://${NEWSLETTER.id}.substack.com/api/v1/free?nojs=true` };
  if (NEWSLETTER.id && NEWSLETTER.provider === 'buttondown') return { mode: 'post', action: `https://buttondown.com/api/emails/embed-subscribe/${NEWSLETTER.id}` };
  return { mode: 'ajax', action: `https://formsubmit.co/ajax/${SITE.email}` };
}

// Posts from the AppRankr blog, shown as cross-promotion. Each card links to apprankr.in.
export const APPRANKR_POSTS = [
  { id: 'creative-assets', title: "Apple's New App Store Creative Assets: A Discovery Surface Beyond Screenshots", url: 'https://www.apprankr.in/blog/apple-app-store-creative-assets', blurb: 'What Apple\'s new visual placements mean for your listing, and what to audit once they ship.' },
  { id: 'play-for-you', title: "Google Play's Redesign Made Personalized Recommendations the Default View", url: 'https://www.apprankr.in/blog/google-play-for-you-default-tab-redesign', blurb: 'The For You feed now opens first on Google Play. How that changes app discovery.' },
  { id: 'play-memory', title: "Google Play's New Memory and Zero-Tap Sign-In Requirements, With the Exact Numbers", url: 'https://www.apprankr.in/blog/google-play-memory-zero-tap-signin-requirements', blurb: 'The new Android checks and deadlines, with the numbers developers need.' },
  { id: 'apple-live-activities', title: "Apple's New Rule 4.5.3: Live Activities Can't Be Used to Spam Users", url: 'https://www.apprankr.in/blog/apple-live-activities-spam-guideline', blurb: "Apple's anti-spam rule now names Live Activities. What it covers." },
  { id: 'play-experiments', title: 'How to Read Google Play Store Listing Experiment Results', url: 'https://www.apprankr.in/blog/how-to-read-google-play-experiment-results', blurb: 'Conversion rate and confidence, explained so you do not ship a false win.' },
];

export const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent('Consulting enquiry')}`;

export const TOOLS = [
  {
    name: 'AIPageAudit',
    url: 'https://aipageaudit.com',
    host: 'aipageaudit.com',
    blurb: 'Audit a web page for search and AI-answer visibility, and get a ranked list of what to fix first.',
  },
  {
    name: 'AppRankr',
    url: 'https://apprankr.in',
    host: 'apprankr.in',
    blurb: "Track your app's keyword and store rankings every day, and audit your store listing.",
  },
];

export const COMPANIES = [
  {
    name: 'AI Vidhyarthi',
    url: 'https://aividhyarthi.org',
    host: 'aividhyarthi.org',
    blurb: "India's first student-led AI literacy initiative.",
  },
  {
    name: 'AppStudioX',
    url: 'https://appstudiox.com',
    host: 'appstudiox.com',
    blurb: 'Product studio building apps and digital experiences.',
  },
  {
    name: 'Dhvani AI',
    url: 'https://dhvaniai.org',
    host: 'dhvaniai.org',
    blurb: 'An AI venture in the group.',
  },
];

// Adds tracking so you can see blog -> tool clicks in the tools' analytics.
export const utm = (url: string, medium: string) => `${url}${url.includes('?') ? '&' : '?'}utm_source=rudrakasturi.com&utm_medium=${medium}`;
