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

export interface HowContent {
  metaTitle: string;
  metaDescription: string;
  header: {
    eyebrow: string;
    h1Lines: string[];
    lead: string;
  };
  loopBlock: {
    chip: string;
    heading: string;
    body: string;
    mockBadge: string;
    steps: Array<{
      num: string;
      title: string;
      desc: string;
      role: string;
      isHuman?: boolean;
    }>;
  };
  composition: {
    eyebrow: string;
    heading: string;
    lead: string;
    items: Array<{
      tag: string;
      title: string;
      body: string;
    }>;
  };
  craft: {
    eyebrow: string;
    heading: string;
    lead: string;
    cards: Array<{
      badge: string;
      title: string;
      body: string;
    }>;
  };
  comparison: {
    eyebrow: string;
    heading: string;
    legacyTitle: string;
    zicksTitle: string;
    rows: Array<{
      topic: string;
      legacy: string;
      zicks: string;
    }>;
  };
  faq: {
    eyebrow: string;
    heading: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  bottomNav: {
    heading: string;
    lead: string;
    nextLabel: string;
    nextSlug: PageSlug;
  };
}

export interface ServicesContent {
  metaTitle: string;
  metaDescription: string;
  header: {
    eyebrow: string;
    h1Lines: string[];
    lead: string;
  };
  featured: {
    chip: string;
    headingLines: string[];
    body: string;
    primaryBtn: { label: string; slug: PageSlug };
    secondaryBtn: { label: string; slug: PageSlug };
    mock: {
      badge: string;
      title: string;
      items: Array<{
        label: string;
        owner: string;
        isClientOwned?: boolean;
      }>;
      footnote: string;
    };
  };
  offersSection: {
    id?: string;
    eyebrow: string;
    heading: string;
    lead: string;
    cards: Array<{
      code: string;
      duration: string;
      title: string;
      summary: string;
      details: string[];
      boundaryNote?: string;
      recommendedTag?: string;
    }>;
  };
  boundaries: {
    eyebrow: string;
    heading: string;
    notPromisedTitle: string;
    notPromisedItems: string[];
    reportedTitle: string;
    reportedItems: string[];
    footnote: string;
  };
  bottomNav: {
    heading: string;
    lead: string;
    nextLabel: string;
    nextSlug: PageSlug;
  };
}

export interface PricingContent {
  metaTitle: string;
  metaDescription: string;
  header: {
    asOfBadge: string;
    h1Lines: string[];
    lead: string;
  };
  starterBox: {
    chip: string;
    headingLines: string[];
    highlightAmount?: string;
    body: string;
    badges: string[];
    footnote: string;
    timelineMock: {
      badge: string;
      title: string;
      milestones: Array<{
        phase: string;
        task: string;
        tag: string;
      }>;
    };
  };
  plansSection: {
    eyebrow: string;
    heading: string;
    cards: Array<{
      badge: string;
      title: string;
      price: string;
      billingNote: string;
      summary: string;
      includes: string[];
      footnote?: string;
      featured?: boolean;
    }>;
  };
  addons?: {
    heading: string;
    items: Array<{
      title: string;
      price: string;
      desc: string;
    }>;
  };
  bottomNav: {
    heading: string;
    lead: string;
    nextLabel?: string;
    nextSlug?: PageSlug;
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
  how: HowContent;
  services: ServicesContent;
  pricing: PricingContent;
  subpages?: Partial<Record<Exclude<PageSlug, ''>, SubpagePlaceholder>>;
}
