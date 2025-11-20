import type { APIRoute } from 'astro';
import { locales, defaultLocale } from '../i18n/translations';

const site = 'https://html-preview.educortez.com';

const pages = [
  '',
  '/about',
];

export const GET: APIRoute = () => {
  const urls: string[] = [];
  
  // Generate URLs for all locales
  for (const locale of locales) {
    for (const page of pages) {
      const path = locale === defaultLocale ? page : `/${locale}${page}`;
      const alternateLinks = locales
        .map(altLocale => {
          const altPath = altLocale === defaultLocale ? page : `/${altLocale}${page}`;
          return `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${site}${altPath}" />`;
        })
        .join('\n');
      
      urls.push(`  <url>
    <loc>${site}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
${alternateLinks}
    <mobile:mobile/>
  </url>`);
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${urls.join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

