/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables ensureStatic (see app/layout.tsx) and the Cache Components model
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // The photo never renders wider than ~1080 device pixels, and Next.js uses
    // the largest device size as the <img src> fallback that crawlers fetch.
    deviceSizes: [640, 828, 1080],
    formats: ['image/avif', 'image/webp'],
    qualities: [60],
    // Statically imported images get content-hashed URLs, so cache
    // optimized variants for 31 days instead of the 4-hour default
    minimumCacheTTL: 2678400,
  },
}

export default nextConfig
