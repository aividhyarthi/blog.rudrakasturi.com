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

// Newsletter sign-up. Paste your provider's form address here (Buttondown, Substack, beehiiv, Mailchimp...)
// and the form posts straight to it. Until then, the form opens an email to you with the subscriber's address.
export const NEWSLETTER = {
  action: '',
  emailField: 'email',
  title: 'The Search & AI brief',
  blurb: 'One short email when something important changes in SEO, AEO and AI search. Plain English, every source linked.',
};

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
    blurb: 'Understand and improve how your mobile app ranks and gets discovered in the app stores.',
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
