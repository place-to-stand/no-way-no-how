/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The photo never renders wider than ~1080 device pixels, and Next.js uses
    // the largest device size as the <img src> fallback that crawlers fetch.
    deviceSizes: [640, 828, 1080],
    formats: ['image/avif', 'image/webp'],
    qualities: [60],
  },
}

export default nextConfig
