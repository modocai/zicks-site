import type { Locale, PageSlug } from './config';

export interface NavItem {
  slug: PageSlug;
  label: string;
}

export interface FourCheckItem {
  num: string;
  title: string;
  summary: string;
  detail: string;
}

export interface LoopStepItem {
  label: string;
  role: string;
  isHuman?: boolean;
}

export interface StatItem {
  label: string;
  before?: string;
  value: string;
  caption: string;
}

export interface PilotSummaryCard {
  badge: string;
  title: string;
  price: string;
  period: string;
  points: string[];
  approvalNote: string;
  note: string;
}

export interface HomeContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    titleLines: string[];
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    trustPoints: string[];
    mock: {
      sampleBadge: string;
      windowTag: string;
      questionLabel: string;
      answerBeforeCite: string;
      citeBadge: string;
      answerAfterCite: string;
      engines: Array<{
        name: string;
        status: string;
        tone: 'cited' | 'gap';
      }>;
      footnote: string;
    };
  };
  fourChecks: {
    eyebrow: string;
    heading: string;
    lead: string;
    items: FourCheckItem[];
  };
  bento: {
    headingLines: string[];
    lead: string;
    wide: {
      chip: string;
      titleLines: string[];
      body: string;
      primaryBtn: { label: string; slug: PageSlug };
      secondaryBtn: { label: string; slug: PageSlug };
      steps: LoopStepItem[];
    };
    left: {
      chip: string;
      titleLines: string[];
      body: string;
      rows: Array<{ label: string; value: string; highlight?: boolean }>;
    };
    right: {
      chip: string;
      titleLines: string[];
      body: string;
      tags: string[];
    };
  };
  pilotsSection?: {
    id: string;
    eyebrow: string;
    heading: string;
    lead: string;
    cards: PilotSummaryCard[];
    footnote: string;
  };
  proof: {
    eyebrow: string;
    headingLines: string[];
    lead: string;
    stats: StatItem[];
    disclaimer: string;
    moreLabel: string;
  };
  bottomCta: {
    heading: string;
    lead: string;
    buttonLabel: string;
  };
}

export interface SubpagePlaceholder {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  cards: Array<{ badge?: string; title: string; body: string; meta?: string }>;
  note?: string;
  nextLink?: { label: string; slug: PageSlug };
}

export interface LocaleDict {
  locale: Locale;
  brandSub: string;
  ctaLabel: string;
  nav: NavItem[];
  aria: {
    primaryNav: string;
    mobileNav: string;
    footerNav: string;
    langSwitcher: string;
    openMenu: string;
    closeMenu: string;
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
  };
  footer: {
    companyLine: string;
    tagline: string;
    addressLine?: string;
    disclaimer: string;
    openWebNote: string;
    contactLabel: string;
  };
  inquiryMailto: {
    subject: string;
    body: string;
  };
  home: HomeContent;
  subpages?: Record<Exclude<PageSlug, ''>, SubpagePlaceholder>;
}
