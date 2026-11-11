import { DEFAULT_LOCALE, type Locale } from './config';
import { en } from './locales/en';
import { ko } from './locales/ko';
import type { LocaleDict } from './types';

const DICTS: Record<Locale, LocaleDict> = {
  ko,
  en,
};

export function getDict(locale: Locale = DEFAULT_LOCALE): LocaleDict {
  return DICTS[locale] ?? DICTS[DEFAULT_LOCALE];
}

export * from './config';
export * from './types';
