import type { Locale } from './translations';
import { getLocaleFromPath, getLocalizedPath } from './translations';

export function getCurrentLocale(url: URL): Locale {
  return getLocaleFromPath(url.pathname);
}

export function getLocalizedUrl(url: URL, locale: Locale): string {
  return getLocalizedPath(url.pathname, locale);
}

export function getAlternateLocales(currentLocale: Locale, currentPath: string): Array<{ locale: Locale; url: string }> {
  const locales: Locale[] = ['es', 'en', 'it', 'de'];
  
  return locales
    .filter(locale => locale !== currentLocale)
    .map(locale => ({
      locale,
      url: getLocalizedPath(currentPath, locale),
    }));
}

