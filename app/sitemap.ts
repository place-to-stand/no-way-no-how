import type { MetadataRoute } from 'next'
import { pages, siteUrl } from './lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: 'monthly' },
    ...pages.map(p => ({
      url: `${siteUrl}${p.path}`,
      changeFrequency: 'yearly' as const,
    })),
  ]
}
