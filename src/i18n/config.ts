export const SUPPORTED_LOCALES = ['es', 'en'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';
export const SITE = 'https://druiz.dev';

export function isValidLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1];
  if (isValidLocale(segment)) {
    return segment;
  }
  return DEFAULT_LOCALE;
}

export function isEnglishPath(pathname: string): boolean {
  return pathname.startsWith('/en');
}

export function isRootPath(pathname: string): boolean {
  return pathname === '/';
}