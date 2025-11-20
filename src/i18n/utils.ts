import type { Locale } from './translations';
import { getLocaleFromPath, getLocalizedPath as getLocalizedPathFromTranslations } from './translations';

export function getCurrentLocale(url: URL): Locale {
  return getLocaleFromPath(url.pathname);
}

export function getLocalizedUrl(url: URL, locale: Locale): string {
  return getLocalizedPathFromTranslations(url.pathname, locale);
}

// Re-export getLocalizedPath for convenience
export function getLocalizedPath(path: string, locale: Locale): string {
  return getLocalizedPathFromTranslations(path, locale);
}

export function getAlternateLocales(currentLocale: Locale, currentPath: string): Array<{ locale: Locale; url: string }> {
  const locales: Locale[] = ['es', 'en', 'it', 'de'];
  
  return locales
    .filter(locale => locale !== currentLocale)
    .map(locale => ({
      locale,
      url: getLocalizedPathFromTranslations(currentPath, locale),
    }));
}

