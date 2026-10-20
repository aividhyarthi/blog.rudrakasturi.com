// All settings come from environment variables (set in Railway). Nothing secret lives in the code.
const env = process.env;
const list = (v) => (v || '').split(',').map((s) => s.trim()).filter(Boolean);

export const config = {
  port: Number(env.PORT || 8080),
  databaseUrl: env.DATABASE_URL || '',
  resendKey: env.RESEND_API_KEY || '',
  from: env.MAIL_FROM || 'Rudra Kasturi <newsletter@rudrakasturi.com>',
  replyTo: env.MAIL_REPLY_TO || 'rudra@rudrakasturi.com',
  // Public address of this service, used in confirm and unsubscribe links.
  publicUrl: (env.PUBLIC_URL || `http://localhost:${env.PORT || 8080}`).replace(/\/$/, ''),
  siteUrl: (env.SITE_URL || 'https://blog.rudrakasturi.com').replace(/\/$/, ''),
  adminToken: env.ADMIN_TOKEN || '',
  allowedOrigins: list(env.ALLOWED_ORIGINS || 'https://blog.rudrakasturi.com'),
  // Postal address shown in every email footer (anti-spam laws require one).
  address: env.MAIL_ADDRESS || '',
};
