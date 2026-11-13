import type { PageSlug } from './config';

/*
 * 세 시장(us-en, us-ko, kr)이 같은 모양의 사전을 채운다.
 * us-en과 us-ko는 1:1 번역본이고, kr은 같은 틀에 한국 상품 내용을 넣는다.
 * 제목 문자열의 '\n'은 줄바꿈(<br>)으로 그린다.
 */

/** 사이트 안 링크. slug는 현재 시장 기준 주소로 바뀐다 */
export interface PageLink {
  label: string;
  slug: PageSlug;
  hash?: string;
}

/** 사람이 하는 단계(review)는 채운 원, 도구나 zicks가 하는 단계(tool)는 테두리 원. team은 클리닉이 하는 마무리 단계 */
export type StepKind = 'tool' | 'review' | 'team';

export interface Step {
  role?: string;
  title: string;
  body: string;
  kind: StepKind;
}

/** 굵은 이름표가 붙은 한 줄 (예: "범위 밖  웹사이트 개편, ...") */
export interface LabeledLine {
  label?: string;
  text: string;
}

export interface SubHero {
  title: string;
  lead: string;
  primary?: PageLink;
  secondary?: PageLink;
  note?: string;
}

export interface Cta {
  heading: string;
  lead: string;
  primary: PageLink;
  secondary: PageLink;
  note?: { before: string; link: PageLink; after: string };
}

export interface Compare {
  heading: string;
  lead?: string;
  headers: [string, string, string];
  rows: { topic: string; legacy: string; zicks: string }[];
}

export type Mark = 'cited' | 'named' | 'none';
export type StatusTone = 'warn' | 'neutral' | 'pass';

export interface HomeDict {
  metaTitle: string;
  metaDescription: string;
  hero: {
    title: string;
    lead: string;
    primary: PageLink;
    secondary: PageLink;
    note: string;
    panel: {
      ariaLabel: string;
      tabs: string[];
      sampleBadge: string;
      context: string;
      contextMenu?: boolean;
      summary: { label: string; value: string; note: string; accent?: boolean }[];
      questionHeader: string;
      engines: string[];
      /** 굵게 표시할 엔진 열 (미국 AI Overviews, 한국 네이버) */
      highlightEngine: number;
      rows: { q: string; tag: string; topic?: string; marks: Mark[] }[];
      markLabels: Record<Mark, string>;
      legend: { cited: string; named: string };
    };
  };
  audit: {
    heading: string;
    lead: string;
    link: PageLink;
    doc: {
      ariaLabel: string;
      title: string;
      meta: string;
      badge: string;
      items: { title: string; scope: string; finding: string; status: string; tone: StatusTone }[];
      next: LabeledLine;
    };
  };
  steps: { heading: string; lead: string; items: Step[] };
  proof: {
    heading: string;
    lead: string;
    link: PageLink;
    stats: { label: string; value: string; change: string; source: string }[];
    note: string;
  };
  /** 미국 홈: 30일 파일럿 가격 */
  pricing?: {
    heading: string;
    lead: string;
    price: string;
    priceNote: string;
    button: PageLink;
    includedTitle: string;
    included: string[];
    excludedTitle: string;
    excluded: string;
    afterTitle: string;
    after: string;
  };
  /** 한국 홈: 기존 대행과 비교 */
  compare?: Compare;
  bottomCta: Cta;
}

export interface HowDict {
  metaTitle: string;
  metaDescription: string;
  hero: SubHero;
  stepsTable: {
    heading: string;
    lead: string;
    headers: [string, string, string, string];
    rows: { title: string; body: string; owner: string; output: string; kind: StepKind }[];
  };
  inputs: { heading: string; lead: string; items: { title: string; body: string }[] };
  principles: { heading: string; lead: string; items: { title: string; body: string }[] };
  compare: Compare;
  faq: { heading: string; items: { q: string; a: string }[] };
  bottomCta: Cta;
}

export interface ServicesDict {
  metaTitle: string;
  metaDescription: string;
  hero: SubHero;
  roles: {
    heading: string;
    lead: string;
    caption: string;
    headers: [string, string];
    /** client: 고객 쪽이 맡는 일 (강조 표시) */
    rows: { task: string; owner: string; client?: boolean }[];
    note: string;
  };
  offers: {
    heading: string;
    lead: string;
    items: { title: string; meta: string; summary: string; points: string[]; foot?: LabeledLine }[];
    /** 미국: "클리닉이 아닌 팀이라면" 상자 */
    other?: {
      id: string;
      title: string;
      body: string;
      rows: { label: string; value: string }[];
      link: PageLink;
    };
  };
  boundaries: {
    heading: string;
    notTitle: string;
    notItems: string[];
    yesTitle: string;
    yesItems: string[];
    note: string;
  };
  bottomCta: Cta;
}

export interface CasesDict {
  metaTitle: string;
  metaDescription: string;
  hero: { title: string; lead: string };
  about: {
    heading: string;
    lead: string;
    facts?: { term: string; desc: string; link?: { label: string; href: string } }[];
  };
  metrics: {
    heading: string;
    headers: [string, string, string, string, string];
    rows: { label: string; sub?: string; before: string; after: string; period: string; source: string }[];
    note: string;
  };
  site: {
    heading: string;
    lead: string;
    items: { title: string; body: string; link?: { label: string; asset: string } }[];
  };
  closing: Cta;
}

export interface PricingDict {
  metaTitle: string;
  metaDescription: string;
  hero: SubHero;
  table: {
    heading: string;
    headers: [string, string, string, string];
    rows: {
      name: string;
      sub?: string;
      audience: string;
      unit: string;
      price: string;
      per?: string;
      /** 강조 행 (시작 권장) */
      highlight?: boolean;
    }[];
    note: string;
  };
  plans: {
    heading: string;
    items: { title: string; summary: string; points: string[]; foot?: LabeledLine }[];
  };
  flow: { heading: string; items: Step[]; promise: string };
  bottomCta: Cta;
}

export interface ContactDict {
  metaTitle: string;
  metaDescription: string;
  hero: {
    title: string;
    lead: string;
    emailLabel: string;
    composeLabel: string;
    copyLabel: string;
    copiedLabel: string;
    composeNote: string;
    mailSubject: string;
    mailBody: string;
  };
  box: {
    title: string;
    items: string[];
    note: string;
    reviewerLabel: string;
    reviewerName: string;
    reviewerInfo: string;
  };
  audit: {
    heading: string;
    lead: string;
    headers: [string, string];
    rows: { title: string; detail: string }[];
    note: string;
  };
}

export interface SiteDict {
  brandSub: string;
  ctaLabel: string;
  nav: { slug: Exclude<PageSlug, '' | 'contact'>; label: string }[];
  /** 헤더의 시장 전환 링크 */
  marketLink: string;
  /** 푸터의 시장 전환 문장 */
  marketLine: string;
  /** 시장 전환 문구의 언어가 페이지 언어와 다를 때 (한국 페이지의 "US service") */
  marketLang?: string;
  aria: {
    primaryNav: string;
    mobileNav: string;
    footerNav: string;
    langSwitcher: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    companyLine: string;
    addressLine?: string;
    contactLabel: string;
    disclaimer: string;
  };
  orgSchema: {
    name: string;
    alternateName: string[];
    description: string;
    founderName: string;
    founderHonorificSuffix?: string;
    founderJobTitle: string;
  };
  serviceSchema: {
    name: string;
    providerName: string;
    serviceType: string;
    description: string;
  };
  /** 미국 영어 홈에서 한국어 브라우저에만 보이는 띠 (/us/ko/로 연결) */
  langHint?: { text: string; link: string; lang: string };
  home: HomeDict;
  how: HowDict;
  services: ServicesDict;
  cases: CasesDict;
  pricing: PricingDict;
  contact: ContactDict;
}
