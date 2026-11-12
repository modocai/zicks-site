import { getAbsoluteLocaleUrl, getRelativeLocaleUrl } from 'astro:i18n';

export const DEFAULT_LOCALE = 'en' as const;
export const LOCALES = ['en', 'ko'] as const;
export type Locale = (typeof LOCALES)[number];
export const NON_DEFAULT_LOCALES = LOCALES.filter(
  (l): l is Exclude<Locale, typeof DEFAULT_LOCALE> => l !== DEFAULT_LOCALE
);

export type PageSlug = '' | 'how' | 'services' | 'cases' | 'pricing' | 'contact';

export interface LocaleMeta {
  code: Locale;
  shortLabel: string;
  nativeLabel: string;
  htmlLang: string;
  ogLocale: string;
  areaServed: string;
  engines: readonly string[];
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: {
    code: 'en',
    shortLabel: 'EN',
    nativeLabel: 'English',
    htmlLang: 'en',
    ogLocale: 'en_US',
    areaServed: 'US',
    engines: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
  },
  ko: {
    code: 'ko',
    shortLabel: 'KO',
    nativeLabel: '한국어',
    htmlLang: 'ko',
    ogLocale: 'ko_KR',
    areaServed: 'KR',
    engines: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity', '네이버'],
  },
};

export const CONTACT_EMAIL = 'admin@modoc-ai.com';

export function pagePath(locale: Locale, slug: PageSlug = ''): string {
  return getRelativeLocaleUrl(locale, slug);
}

export function pageAbsUrl(locale: Locale, slug: PageSlug = ''): string {
  return getAbsoluteLocaleUrl(locale, slug);
}

export function assetPath(relPath: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = relPath.startsWith('/') ? relPath : `/${relPath}`;
  return `${base}${clean}`;
}
