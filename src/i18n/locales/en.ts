import { LOCALE_META } from '../config';
import type { LocaleDict } from '../types';

const enginesText = LOCALE_META.en.engines.join(' · ');

export const en: LocaleDict = {
  locale: 'en',
  brandSub: 'by MoDoc AI',
  ctaLabel: 'Request a free audit',
  nav: [
    { slug: 'how', label: 'How it works' },
    { slug: 'services', label: 'Services' },
    { slug: 'cases', label: 'Case study' },
    { slug: 'pricing', label: 'Pricing' },
  ],
  aria: {
    primaryNav: 'Primary navigation',
    mobileNav: 'Mobile navigation',
    footerNav: 'Footer navigation',
    langSwitcher: 'Language selector',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  orgSchema: {
    name: 'zicks by MoDoc AI, Inc.',
    alternateName: ['zicks', 'MoDoc AI', 'MoDoc AI, Inc.'],
    description:
      'Paid content pilots and website visibility audits for clinics and healthcare software teams, operated by MoDoc AI.',
    founderName: 'Myeongchan Kim',
    founderHonorificSuffix: 'MD',
    founderJobTitle: 'Founder · Physician',
  },
  serviceSchema: {
    name: 'zicks Healthcare Content Services',
    providerName: 'MoDoc AI, Inc.',
    serviceType: 'Healthcare content pilots and website visibility audits',
  },
  footer: {
    companyLine: 'zicks by MoDoc AI, Inc.',
    tagline: 'Content services for clinics and healthcare software teams',
    addressLine: '163 Highland Ave #1015, Needham, MA 02494, United States',
    disclaimer:
      'Search rankings, AI citations, leads, and revenue are not guaranteed. Tracking setup and account access are agreed separately.',
    openWebNote:
      'Built as a static site (Astro) and open to major search and AI crawlers.',
    contactLabel: 'Contact',
  },
  inquiryMailto: {
    subject: 'zicks free website audit / content pilot',
    body: 'Company and website:\n\nFree visibility audit, clinic content pilot, or software content pilot:\n\nOne question or workflow to explain:\n\nWho would review and publish the work?\n',
  },
  home: {
    metaTitle: 'zicks · Content services for healthcare teams',
    metaDescription:
      'Free website visibility audits and scoped paid content pilots for clinics and healthcare software teams. Clear scope, customer review, and agreed measurement.',
    hero: {
      titleLines: [
        'Turn recurring questions',
        'into useful content',
        'your team can review',
      ],
      lead: `For clinics and healthcare software teams: website articles, product guides, and clear next steps for your readers. Start with a free one-page visibility audit across Google and AI search (${enginesText}), or a small paid pilot.`,
      primaryCta: 'Request a free audit',
      secondaryCta: 'How it works',
      trustPoints: [
        'Your designated reviewer approves before publishing',
        'Search rankings, citations, and revenue are not guaranteed',
        'Scope and measures agreed before paid work begins',
      ],
      mock: {
        sampleBadge: 'Sample view',
        windowTag: 'Free audit snapshot (illustrative)',
        questionLabel: 'Q. What should patients bring to an initial clinic visit?',
        answerBeforeCite:
          'Visitors look for clear preparation steps—photo ID, current medications, and arrival timing—on an easy-to-read FAQ page (',
        citeBadge: 'Clinician-approved draft sample',
        answerAfterCite:
          ') rather than scattered PDF forms.',
        engines: [
          { name: 'ChatGPT', status: 'Checked in audit', tone: 'cited' },
          { name: 'Claude', status: 'Checked in audit', tone: 'cited' },
          { name: 'Gemini', status: 'Checked in audit', tone: 'cited' },
          { name: 'Perplexity', status: 'Checked in audit', tone: 'cited' },
        ],
        footnote: 'Illustrative example of a free baseline visibility check, not client data.',
      },
    },
    fourChecks: {
      eyebrow: 'Free visibility audit criteria',
      heading: 'Four checks before search or AI can cite you',
      lead: 'In our free audit, we inspect how search engines and AI crawlers currently read your website.',
      items: [
        {
          num: '01',
          title: 'Can crawlers read your pages?',
          summary: 'Check search and AI bot access, indexing, and sitemaps.',
          detail:
            'If robots rules or platform settings block Googlebot or major AI crawlers (ChatGPT, Claude, Perplexity), your pages cannot be surfaced.',
        },
        {
          num: '02',
          title: 'Is your organization clearly defined?',
          summary: 'Check page definitions, metadata, and structured schema.',
          detail:
            'Clear service descriptions and JSON-LD help search engines and AI describe what your clinic or software team actually offers.',
        },
        {
          num: '03',
          title: 'Do pages answer real questions?',
          summary: 'Check whether recurring questions have direct answers.',
          detail:
            'We identify gaps where patients or prospective buyers ask practical questions that your current pages leave unanswered.',
        },
        {
          num: '04',
          title: 'Are you corroborated elsewhere?',
          summary: 'Check external listings, directories, and linking domains.',
          detail:
            'Consistent public profiles and external references help search and AI verify your organization across the web.',
        },
      ],
    },
    bento: {
      headingLines: ['Review first.', 'Measure what happened.'],
      lead: 'Start with approved source material, keep approval with your team, and agree on practical website measures before work begins.',
      wide: {
        chip: 'How pilots run',
        titleLines: ['Start from source material,', 'keep sign-off with your team'],
        body: 'Bring a recurring question, an approved explanation, or a product walkthrough. We flag missing information instead of inventing an answer, prepare drafts, and record revisions.',
        primaryBtn: { label: 'Compare the pilots', slug: 'services' },
        secondaryBtn: { label: 'How it works', slug: 'how' },
        steps: [
          { label: '① Free baseline check of crawler access & current AI answers', role: 'Free audit' },
          { label: '② Drafts prepared from approved source material', role: 'zicks draft' },
          { label: '③ Your clinician or product lead approves before publishing', role: '✓ Team sign-off', isHuman: true },
          { label: '④ Review agreed website visits & inquiry or demo clicks', role: 'End-of-pilot report' },
        ],
      },
      left: {
        chip: 'Clear expectations',
        titleLines: ['Agreed website measures,', 'reported separately from revenue'],
        body: 'We agree on available measures—such as article visits and inquiry or demo-link clicks—before starting, without promising rankings or leads.',
        rows: [
          { label: 'Typical retainer', value: 'Generic topic selection · monthly summary' },
          { label: 'zicks pilot', value: 'Agreed scope · human sign-off · no auto-renewal', highlight: true },
        ],
      },
      right: {
        chip: 'Practical boundaries',
        titleLines: ['Questions stripped of patient details,', 'published by your team'],
        body: 'For clinics, your clinician approves medical content; for software teams, we work from an approved demo environment with one consolidated revision round.',
        tags: [
          '✓ Questions stripped of patient details',
          '✓ Missing facts flagged, never invented',
          '✓ Designated reviewer approval',
          '✓ Neither pilot renews automatically',
        ],
      },
    },
    pilotsSection: {
      id: 'pilots',
      eyebrow: 'Scoped paid pilots',
      heading: 'One focused project to start',
      lead: 'Choose the audience you need to help. We agree on the topic, source material, reviewer, and schedule before work begins.',
      cards: [
        {
          badge: 'For clinics',
          title: 'Patient-question content',
          price: 'US$1,250',
          period: 'Fixed fee for a 30-day pilot, starting on an agreed date.',
          points: [
            'Two original FAQ article drafts based on your recurring questions',
            'Four social post drafts adapted from those articles',
            'A baseline review and an end-of-pilot report using available website data',
          ],
          approvalNote:
            'Your clinician approves medical content. Your team publishes it. We work from questions stripped of patient details.',
          note: 'Website rebuilding, advertising, translation, and video production are outside this pilot.',
        },
        {
          badge: 'For healthcare software teams',
          title: 'Explain one product workflow',
          price: 'US$2,500',
          period: 'Fixed fee for one agreed workflow.',
          points: [
            'Three articles for a defined customer or prospective-buyer audience',
            'Up to ten annotated screenshots from an approved demo environment',
            'One consolidated revision round',
          ],
          approvalNote:
            'Your product lead checks accuracy. Your team publishes it. We agree on help-center or marketing use before drafting.',
          note: 'Production integrations, patient data, and clinical protocols are outside this pilot.',
        },
      ],
      footnote:
        'As of Nov 2026. Review the delivered work and decide whether more content is useful. Clinic content operations can be scoped at US$2,500 per month for four FAQ drafts, eight social drafts, and a monthly report. Software content maintenance is scoped around actual updates. Neither pilot renews automatically.',
    },
    proof: {
      eyebrow: 'Built by a healthcare software team',
      headingLines: ['Operated by the team behind', 'FeverCoach'],
      lead: 'MoDoc AI operates FeverCoach and is developing zicks. Myeongchan (MC) Kim, MD, is our founder. These pilots are scoped services delivered with tools and human review.',
      stats: [
        {
          label: 'Founder background',
          value: 'MD-founded',
          caption: 'Myeongchan (MC) Kim, MD · Founder of MoDoc AI',
        },
        {
          label: 'First product operated in-house',
          value: 'FeverCoach',
          caption: 'Multilingual content & tooling operated by MoDoc AI',
        },
        {
          label: 'Pilot commitment',
          value: 'No auto-renewal',
          caption: 'Neither paid pilot renews automatically',
        },
      ],
      disclaimer:
        'FeverCoach is our own product. Its use here is not a client endorsement or a promise of results for your organization.',
      moreLabel: 'Learn more about our background →',
    },
    bottomCta: {
      heading: 'What does your team keep explaining?',
      lead: 'Email your website, one question or workflow, and who would review the work. MC will use that to discuss fit, a free visibility check, or pilot scope. Please leave out patient information.',
      buttonLabel: 'Request a free audit',
    },
  },
  subpages: {
    how: {
      metaTitle: 'How it works · zicks',
      metaDescription: 'Review-first content workflow for clinics and healthcare software teams.',
      eyebrow: 'How it works',
      h1: 'Review first. Measure what happened.',
      lead: 'Every project starts from approved source material, keeps sign-off with your designated reviewer, and agrees on practical website measures before work begins.',
      cards: [
        {
          badge: 'Step 1',
          title: 'Start with source material',
          body: 'Bring a recurring question, an approved explanation, or a product walkthrough. We flag missing information instead of inventing an answer.',
        },
        {
          badge: 'Step 2',
          title: 'Keep approval with your team',
          body: 'We prepare drafts and record revisions. Your designated reviewer approves the content before your team publishes it.',
        },
        {
          badge: 'Step 3',
          title: 'Choose a measurable next step',
          body: 'Agree on available measures, such as article visits and inquiry or demo-link clicks. Report them separately from customers and revenue.',
        },
      ],
      note: 'Search rankings, AI citations, leads, and revenue are not guaranteed. Tracking setup and account access are agreed separately.',
      nextLink: { label: 'Explore services →', slug: 'services' },
    },
    services: {
      metaTitle: 'Services · zicks',
      metaDescription: 'Free visibility audits and scoped paid content pilots for clinics and healthcare software teams.',
      eyebrow: 'Services',
      h1: 'One focused project to start',
      lead: 'Choose the audience you need to help. We agree on the topic, source material, reviewer, and schedule before work begins.',
      cards: [
        {
          badge: 'For clinics · US$1,250',
          title: 'Patient-question content',
          body: 'Fixed fee for a 30-day pilot, starting on an agreed date: two original FAQ drafts from recurring questions stripped of patient details, four adapted social post drafts, and a baseline + end-of-pilot report.',
        },
        {
          badge: 'For software teams · US$2,500',
          title: 'Explain one product workflow',
          body: 'Fixed fee for one agreed workflow: three articles for a defined customer or buyer audience, up to ten annotated demo screenshots, and one consolidated revision round.',
        },
        {
          badge: 'After a pilot',
          title: 'Optional ongoing operations',
          body: 'Review delivered work first. Clinic operations can be scoped at US$2,500/month (four FAQ drafts, eight social drafts, monthly report); software maintenance follows actual updates. Neither pilot renews automatically.',
        },
      ],
      note: 'Website rebuilding, advertising, translation, video production, production integrations, patient data, and clinical protocols are outside these pilots.',
      nextLink: { label: 'View pricing →', slug: 'pricing' },
    },
    cases: {
      metaTitle: 'Case study · zicks',
      metaDescription: 'Built by MoDoc AI, the healthcare software team operating FeverCoach.',
      eyebrow: 'Background',
      h1: 'Built by a healthcare software team',
      lead: 'MoDoc AI operates FeverCoach and is developing zicks. Myeongchan (MC) Kim, MD, is our founder. These pilots are scoped services delivered with tools and human review.',
      cards: [
        {
          badge: 'In-house operations',
          title: 'FeverCoach',
          body: 'MoDoc AI builds and operates FeverCoach (fevercoach.us), developing structured workflows for recurring health questions and human review.',
        },
        {
          badge: 'Open static architecture',
          title: 'zicks website',
          body: 'Built as a fast static site with open crawler rules, structured Organization and Service metadata, and clear scope boundaries.',
        },
        {
          badge: 'Client work',
          title: 'Shared only with permission',
          body: 'FeverCoach is our own product. Its use here is not a client endorsement or a promise of results for your organization.',
        },
      ],
      note: 'Client case studies are published only with written consent.',
      nextLink: { label: 'View pricing →', slug: 'pricing' },
    },
    pricing: {
      metaTitle: 'Pricing · zicks',
      metaDescription: 'Fixed-fee content pilots for clinics and healthcare software teams (as of Nov 2026).',
      eyebrow: 'Pricing · As of Nov 2026',
      h1: 'Scoped fixed-fee pilots',
      lead: 'Topic, source material, reviewer, and schedule are agreed before work begins. Neither pilot renews automatically.',
      cards: [
        {
          badge: 'For clinics',
          title: 'US$1,250',
          body: 'Fixed fee for a 30-day pilot, starting on an agreed date. Two FAQ drafts, four social post drafts, baseline review, and end-of-pilot report.',
        },
        {
          badge: 'For healthcare software teams',
          title: 'US$2,500',
          body: 'Fixed fee for one agreed workflow. Three articles, up to ten annotated demo screenshots, and one consolidated revision round.',
        },
        {
          badge: 'Optional post-pilot clinic ops',
          title: 'US$2,500 / month',
          body: 'Four FAQ drafts, eight social drafts, and a monthly report after reviewing pilot results. Software maintenance is scoped around actual updates.',
        },
      ],
      note: 'Tracking setup and account access are agreed separately.',
      nextLink: { label: 'Request a free audit →', slug: 'contact' },
    },
    contact: {
      metaTitle: 'Request a free audit · zicks',
      metaDescription: 'Email your website and one recurring question or workflow to request a free visibility audit or discuss a pilot.',
      eyebrow: 'Contact',
      h1: 'What does your team keep explaining?',
      lead: 'Email your website, one question or workflow, and who would review the work. MC will use that to discuss fit, a free visibility check, or pilot scope. Please leave out patient information.',
      cards: [
        {
          badge: 'Email',
          title: 'admin@modoc-ai.com',
          body: 'Send your website URL and one or two questions patients or buyers ask. Please do not include any patient information.',
        },
        {
          badge: 'Free baseline check',
          title: 'Website & AI visibility snapshot',
          body: 'We check crawler access, page metadata, and how ChatGPT, Claude, Gemini, and Perplexity currently read your site.',
        },
      ],
      note: 'Search rankings, AI citations, leads, and revenue are not guaranteed.',
    },
  },
};
