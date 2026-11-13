import type { Market } from './config';
import { kr } from './locales/kr';
import { usEn } from './locales/us-en';
import { usKo } from './locales/us-ko';
import type { SiteDict } from './types';

const DICTS: Record<Market, SiteDict> = {
  'us-en': usEn,
  'us-ko': usKo,
  kr,
};

export function getDict(market: Market): SiteDict {
  return DICTS[market];
}

export * from './config';
export * from './types';
