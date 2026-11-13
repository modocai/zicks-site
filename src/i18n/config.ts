/**
 * 시장+언어 단위 라우팅.
 * - us-en: /         (미국, 영어, x-default)
 * - us-ko: /us/ko/   (미국, 한국어. us-en의 1:1 번역본)
 * - kr:    /kr/      (한국, 한국어. 별도 상품)
 * 미국용 언어를 더하려면 'us-es' 같은 항목을 MARKETS, MARKET_META, 사전에 추가한다.
 */
export const MARKETS = ['us-en', 'us-ko', 'kr'] as const;
export type Market = (typeof MARKETS)[number];
export type Region = 'us' | 'kr';

export const SLUGS = ['', 'how', 'services', 'cases', 'pricing', 'contact'] as const;
export type PageSlug = (typeof SLUGS)[number];

export interface MarketMeta {
  region: Region;
  /** 사이트 루트 기준 경로 접두사. 끝 슬래시 없음 */
  prefix: string;
  htmlLang: 'en' | 'ko';
  hreflang: string;
  ogLocale: string;
  /** 언어 전환에 표시할 이름 (그 언어로) */
  langLabel: string;
}

export const MARKET_META: Record<Market, MarketMeta> = {
  'us-en': {
    region: 'us',
    prefix: '',
    htmlLang: 'en',
    hreflang: 'en-US',
    ogLocale: 'en_US',
    langLabel: 'English',
  },
  'us-ko': {
    region: 'us',
    prefix: '/us/ko',
    htmlLang: 'ko',
    hreflang: 'ko-US',
    ogLocale: 'ko_KR',
    langLabel: '한국어',
  },
  kr: {
    region: 'kr',
    prefix: '/kr',
    htmlLang: 'ko',
    hreflang: 'ko-KR',
    ogLocale: 'ko_KR',
    langLabel: '한국어',
  },
};

export const DEFAULT_MARKET: Market = 'us-en';

/** 같은 시장 안의 언어판 (언어 전환 대상) */
export function languagesOf(region: Region): Market[] {
  return MARKETS.filter((m) => MARKET_META[m].region === region);
}

/** 시장 전환은 항상 상대 시장의 기본 언어 홈으로 보낸다 */
export const OTHER_MARKET: Record<Region, Market> = {
  us: 'kr',
  kr: 'us-en',
};

export const CONTACT_EMAIL = 'admin@modoc-ai.com';
export const SITE_ORIGIN = 'https://zicks.modoc-ai.com';

export function pagePath(market: Market, slug: PageSlug = ''): string {
  return `${MARKET_META[market].prefix}/${slug ? `${slug}/` : ''}`;
}

export function pageAbsUrl(site: URL | undefined, market: Market, slug: PageSlug = ''): string {
  return `${(site ?? new URL(SITE_ORIGIN)).origin}${pagePath(market, slug)}`;
}

export function linkHref(market: Market, link: { slug: PageSlug; hash?: string }): string {
  return `${pagePath(market, link.slug)}${link.hash ? `#${link.hash}` : ''}`;
}
