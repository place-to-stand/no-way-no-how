# no way no how

Website for [no way no how](https://nowayno.how), the Austin, TX indie rock project of [Jason Desiderio](https://jasondesiderio.com/).

Built with Next.js (App Router) and Tailwind CSS, deployed on Vercel.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Dependencies

`.npmrc` enforces a 7-day release cooldown (`min-release-age=7`) on installs. Next.js, React, and `@vercel/*` packages are exempt so security fixes can land immediately.

## Analytics

PostHog (project in the Place To Stand org) plus Vercel Analytics. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_POSTHOG_KEY`; analytics stays off without it, and always on localhost.

- Setup: `app/lib/analytics.ts`, loaded lazily from `instrumentation-client.ts`
- Events go through the same-origin `/ingest` proxy (`next.config.mjs` rewrites) so ad blockers don't drop them
- Custom event: `outbound_link_click`, with `platform` (Spotify, Bandcamp, Apple Music, Instagram, Email…), `url`, and `release` for the release cards. Plays inside the Spotify embed happen in a cross-origin iframe and aren't tracked.

## SEO

- Page metadata, Open Graph, and Twitter cards: `app/layout.tsx`
- Share image: `public/og-image.jpg` (1200×630)
- Structured data (schema.org `MusicGroup`): `app/page.tsx`
- `robots.txt` and `sitemap.xml`: `app/robots.ts`, `app/sitemap.ts`
