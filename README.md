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

## SEO

- Page metadata, Open Graph, and Twitter cards: `app/layout.tsx`
- Share image: `public/og-image.jpg` (1200×630)
- Structured data (schema.org `MusicGroup`): `app/page.tsx`
- `robots.txt` and `sitemap.xml`: `app/robots.ts`, `app/sitemap.ts`
