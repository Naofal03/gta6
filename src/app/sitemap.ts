import { MetadataRoute } from 'next';
import { PRODUCTS_FULL } from '@/data/products-full';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gta6hq.fr';
  const now = new Date();

  const productUrls: MetadataRoute.Sitemap = PRODUCTS_FULL.map((p) => ({
    url: `${baseUrl}/produits/${p.id}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Dynamically scan the guides folder
  let guideUrls: MetadataRoute.Sitemap = [];
  try {
    const guidesDir = path.join(process.cwd(), 'src/content/guides');
    if (fs.existsSync(guidesDir)) {
      const files = fs.readdirSync(guidesDir);
      guideUrls = files
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
          const slug = file.replace('.md', '');
          const priority = slug.includes('precommande') ? 0.90 : 0.80;
          return {
            url: `${baseUrl}/guides/${slug}`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority,
          };
        });
    }
  } catch (error) {
    console.error('Error generating sitemap for guides:', error);
  }

  return [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/precommande`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/setup`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/quiz`, lastModified: now, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${baseUrl}/produits`, lastModified: now, changeFrequency: 'daily', priority: 0.90 },
    { url: `${baseUrl}/accessoires`, lastModified: now, changeFrequency: 'daily', priority: 0.80 },
    { url: `${baseUrl}/histoire-gta`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${baseUrl}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.20 },
    ...guideUrls,
    ...productUrls,
  ];
}
