# Newsletter service: setup

A small service that keeps the subscriber list, handles sign-up, confirm and unsubscribe,
and sends the weekly digest. It runs as a second service on Railway, next to the website.

## Railway steps (once)
1. In the Railway project click **New → Database → PostgreSQL**.
2. Click **New → GitHub Repo**, pick this repo, then in the new service's Settings set **Root Directory** to `newsletter`.
3. In the service **Variables** add:
   - `DATABASE_URL` = reference the Postgres service's `DATABASE_URL`
   - `ADMIN_TOKEN` = a long password only you know
   - `PUBLIC_URL` = the service's public address (Settings → Networking → Generate Domain), later e.g. `https://news.rudrakasturi.com`
   - `RESEND_API_KEY` = from resend.com (leave empty to test: emails are only printed in the logs)
   - `MAIL_FROM` = `Rudra Kasturi <newsletter@rudrakasturi.com>` (the domain must be verified in Resend)
   - `MAIL_ADDRESS` = your postal address, shown in every email footer (anti-spam law)
4. Open `PUBLIC_URL/admin`, sign in with `ADMIN_TOKEN`.

## Using the admin page
1. **Import** the CSV: 34 already-confirmed people as "active"; the other addresses as "not confirmed yet".
2. **Send confirmation emails** to the not-confirmed group.
3. **Preview** the weekly digest, send a test to yourself, then send to everyone.

Weekly sending can be automated with a Railway cron service running `node src/cli.js digest`.

## Tests
`npm install && npm test`
