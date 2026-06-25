import { MetadataRoute } from 'next';
import { PRODUCTS_FULL } from '@/data/products-full';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gta6hq.fr';
  const now = new Date();

  const productUrls: MetadataRoute.Sitemap = PRODUCTS_FULL.map((p) => ({
    url: `${baseUrl}/produits/${p.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/precommande`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/setup`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/quiz`, lastModified: now, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${baseUrl}/produits`, lastModified: now, changeFrequency: 'daily', priority: 0.90 },
    { url: `${baseUrl}/accessoires`, lastModified: now, changeFrequency: 'daily', priority: 0.80 },
    { url: `${baseUrl}/histoire-gta`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/guides/meilleur-ssd-gta6`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/guides/meilleure-tv-gta6`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/guides/edition-standard-vs-ultimate`, lastModified: now, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${baseUrl}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.20 },
    ...productUrls,
  ];
}
