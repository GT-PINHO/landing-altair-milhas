import type { MetadataRoute } from 'next'

import { siteUrl } from '@/lib/config'

// Landing page de pagina unica: o sitemap existe para acelerar a indexacao inicial.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
