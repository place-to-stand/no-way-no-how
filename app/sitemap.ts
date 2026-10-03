import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://nowayno.how/', changeFrequency: 'monthly' }]
}
