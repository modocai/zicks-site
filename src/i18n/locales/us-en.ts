import { US_PRICING, enCount } from '../../data/pricing';
import type { SiteDict } from '../types';

/* US English (/). 1:1 with us-ko.ts. Home copy comes from handoff design/us-en-home.html; subpages reuse the old English copy where a sentence matched. */

const P = US_PRICING.formatted;
const N = US_PRICING;
const faq = enCount(N.clinicFaqDrafts, true);
const social = enCount(N.clinicSocialDrafts, true);
const mFaq = enCount(N.monthlyFaqDrafts);
const mSocial = enCount(N.monthlySocialDrafts);

const notGuaranteed = 'Search rankings, AI citations, leads, and revenue are not guaranteed.';
const proofNote =
  'Measured June to October 2026. FeverCoach is our own product, so these figures are not a client result or a promise of results for your clinic.';

export const usEn: SiteDict = {
  brandSub: 'by MoDoc AI',
  ctaLabel: 'Get a free audit',
  nav: [
    { slug: 'how', label: 'How it works' },
    { slug: 'services', label: 'Services' },
    { slug: 'cases', label: 'Background' },
    { slug: 'pricing', label: 'Pricing' },
  ],
  marketLink: 'Korea service',
  marketLine: 'In Korea? See the Korea service',
  aria: {
    primaryNav: 'Primary',
    mobileNav: 'Mobile navigation',
    footerNav: 'Footer',
    langSwitcher: 'Language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  footer: {
    companyLine: 'zicks by MoDoc AI, Inc.',
    addressLine: '163 Highland Ave #1015, Needham, MA 02494',
    contactLabel: 'Contact',
    disclaimer: `${notGuaranteed} Tracking setup and account access are agreed separately.`,
  },
  orgSchema: {
    name: 'zicks by MoDoc AI, Inc.',
    alternateName: ['zicks', 'MoDoc AI', 'MoDoc AI, Inc.'],
    description:
      'A free website visibility audit and a scoped content pilot for US clinics. We turn recurring patient questions into pages your clinician approves.',
    founderName: 'Myeongchan (MC) Kim',
    founderHonorificSuffix: 'MD',
    founderJobTitle: 'Founder, Physician',
  },
  serviceSchema: {
    name: 'zicks content service for clinics',
    providerName: 'MoDoc AI, Inc.',
    serviceType: 'Clinic content pilot and website visibility audit',
    description:
      'Recurring patient questions turned into clinician-approved FAQ articles and social posts, with results reported against agreed website measures.',
  },
  langHint: { text: '이 페이지는 한국어로도 볼 수 있습니다.', link: '한국어로 보기', lang: 'ko' },

  home: {
    metaTitle: 'zicks | Content services for US clinics',
    metaDescription:
      'A free audit of what AI tells patients about your clinic, then the questions your front desk hears every day turned into pages your clinician approves. A 30-day pilot that never renews automatically.',
    hero: {
      title: 'What does AI tell\npatients about\nyour clinic?',
      lead: 'Patients ask ChatGPT and Google’s AI answers before they call. We check what those answers say, then turn the questions your front desk hears every day into pages your clinician approves.',
      primary: { label: 'Get a free audit', slug: 'contact' },
      secondary: { label: 'How a pilot works', slug: 'how' },
      note: 'Send your website and one recurring patient question. Please leave out patient information.',
      panel: {
        ariaLabel:
          'Sample visibility audit screen. For each patient question, it shows whether five AI tools name the clinic or cite the clinic’s website.',
        tabs: ['Visibility audit', 'Drafts', 'Approvals', 'Report'],
        sampleBadge: 'Sample data',
        context: 'Riverbend Family Clinic',
        summary: [
          { label: 'Questions checked', value: '12', note: 'From front-desk notes' },
          { label: 'Clinic named', value: '5', note: 'of 12 questions', accent: true },
          { label: 'Website cited', value: '2', note: 'of 12 questions', accent: true },
          { label: 'Unanswered', value: '4', note: 'Ready for drafts' },
        ],
        questionHeader: 'Patient question (5 of 12)',
        engines: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'AI Overviews'],
        highlightEngine: 4,
        rows: [
          {
            q: 'Is Riverbend Family Clinic taking new patients?',
            tag: 'Access',
            marks: ['named', 'cited', 'named', 'none', 'named'],
          },
          {
            q: 'What should I bring to a first visit?',
            tag: 'Visit prep',
            marks: ['cited', 'named', 'none', 'cited', 'named'],
          },
          {
            q: 'Does Riverbend Family Clinic take Blue Cross Blue Shield?',
            tag: 'Insurance',
            topic: 'Pilot topic',
            marks: ['none', 'none', 'none', 'none', 'named'],
          },
          {
            q: 'Same-day sick visits near Framingham, MA',
            tag: 'Local search',
            marks: ['none', 'none', 'named', 'none', 'named'],
          },
          {
            q: 'How early should I arrive for a new-patient appointment?',
            tag: 'Visit prep',
            topic: 'Pilot topic',
            marks: ['none', 'none', 'none', 'none', 'none'],
          },
        ],
        markLabels: { cited: 'Cited', named: 'Named', none: 'Not found' },
        legend: {
          cited: 'the answer links to your website as a source',
          named: 'your clinic appears in the answer',
        },
      },
    },
    audit: {
      heading: 'Four things search and AI check before naming a clinic',
      lead: 'The free audit shows how Google and AI tools currently read your website, and what to fix first. It fits on one page.',
      link: { label: 'See what the audit covers', slug: 'contact' },
      doc: {
        ariaLabel: 'Sample website visibility audit',
        title: 'Website visibility audit',
        meta: 'Riverbend Family Clinic  Nov 10, 2026',
        badge: 'Sample',
        items: [
          {
            title: 'Can crawlers read your pages?',
            scope: 'Search and AI crawler access, indexing, sitemaps',
            finding: 'Hours and locations load inside a booking widget that crawlers can’t read.',
            status: 'Needs work',
            tone: 'warn',
          },
          {
            title: 'Is your clinic clearly defined?',
            scope: 'Services, insurance plans, hours, structured data',
            finding: 'Insurance plans on the website don’t match your Google Business Profile.',
            status: 'Fair',
            tone: 'neutral',
          },
          {
            title: 'Do pages answer real questions?',
            scope: 'Direct answers to what patients ask the front desk',
            finding: '4 of the 10 most common front-desk questions have no answer on the site.',
            status: 'Needs work',
            tone: 'warn',
          },
          {
            title: 'Are you confirmed elsewhere?',
            scope: 'Google Business Profile, health directories, reviews',
            finding: 'Name, address, and phone match across Google, Healthgrades, and Zocdoc.',
            status: 'Good',
            tone: 'pass',
          },
        ],
        next: {
          label: 'Start here',
          text: 'Put hours and locations in plain page text, then answer the insurance and new-patient questions first.',
        },
      },
    },
    steps: {
      heading: 'Your clinician signs off before anything goes live',
      lead: 'We draft from questions with patient details removed. When a fact is missing, we flag it for your team instead of filling the gap.',
      items: [
        {
          role: 'zicks',
          title: 'Free visibility audit',
          body: 'We check crawler access and what AI tools currently say about your clinic.',
          kind: 'tool',
        },
        {
          role: 'zicks',
          title: 'Drafts from front-desk questions',
          body: `${faq} FAQ articles and ${enCount(N.clinicSocialDrafts)} social posts, written from the questions your staff answer most.`,
          kind: 'tool',
        },
        {
          role: 'Your clinician',
          title: 'Clinical review',
          body: 'Your designated clinician approves every piece of medical content. Nothing is published without sign-off.',
          kind: 'review',
        },
        {
          role: 'Your team',
          title: 'Publish and review',
          body: 'Your team publishes. At the end we report the measures you agreed to, such as article visits and appointment-link clicks.',
          kind: 'team',
        },
      ],
    },
    proof: {
      heading: 'Built by a physician-led team that runs its own health app',
      lead: 'MoDoc AI was founded by Myeongchan (MC) Kim, MD. We publish FeverCoach, a pediatric fever app built on more than 2,400 physician-reviewed answers, and measure its blog every week.',
      link: { label: 'Learn about our background', slug: 'cases' },
      stats: [
        {
          label: 'Google search clicks',
          value: '2,910',
          change: 'Up from 460 over 11 weeks',
          source: 'Source: Google Search Console',
        },
        {
          label: 'Google AI impressions',
          value: '98.1K',
          change: 'Over 3 months, from about 300 to 3,500 a day',
          source: 'Source: Google Search Console',
        },
        {
          label: 'Referring domains',
          value: '631',
          change: 'Up from 160 in about 4 months',
          source: 'Source: backlink analysis tool',
        },
      ],
      note: proofNote,
    },
    pricing: {
      heading: 'Start with one\n30-day pilot',
      lead: 'Before paid work begins, we agree on the topic, source material, reviewer, and start date.',
      price: P.clinicPilot,
      priceNote: US_PRICING.asOf.en,
      button: { label: 'Get a free audit first', slug: 'contact' },
      includedTitle: 'Included',
      included: [
        `${faq} original FAQ article drafts based on your recurring patient questions`,
        `${social} social post drafts adapted from those articles`,
        'A baseline review and an end-of-pilot report using available website data',
      ],
      excludedTitle: 'Not included',
      excluded: 'Website rebuilding, advertising, translation, and video production.',
      afterTitle: 'After the pilot',
      after: `If more content is useful, ongoing work can be scoped around ${P.clinicMonthly} a month for ${mFaq} FAQ drafts, ${mSocial} social drafts, and a monthly report. The pilot never renews automatically.`,
    },
    bottomCta: {
      heading: 'What does your front desk keep explaining?',
      lead: 'Email your website, one recurring patient question, and who would review the work. MC will reply about fit, a free audit, or pilot scope. Please leave out patient information.',
      primary: { label: 'Get a free audit', slug: 'contact' },
      secondary: { label: 'See pricing', slug: 'pricing' },
      note: {
        before: 'Not a clinic? ',
        link: { label: 'See the option for teams outside clinics', slug: 'services', hash: 'other-teams' },
        after: '.',
      },
    },
  },

  how: {
    metaTitle: 'How it works | zicks for US clinics',
    metaDescription:
      'Review-first content for clinics: a free audit and agreed scope, drafts from approved source material, clinician sign-off, and your team publishing with an agreed report.',
    hero: {
      title: 'Review first.\nMeasure what happened.',
      lead: 'Every engagement starts with your real patient questions, keeps clinical approval with your team, and reports agreed website metrics honestly.',
      primary: { label: 'Get a free audit', slug: 'contact' },
      secondary: { label: 'See services', slug: 'services' },
    },
    stepsTable: {
      heading: 'Four steps from audit to report',
      lead: 'We flag missing information instead of inventing an answer, prepare drafts, and record revisions.',
      headers: ['Step', 'What happens', 'Who', 'Output'],
      rows: [
        {
          title: 'Free visibility audit and scope agreement',
          body: 'Inspect crawler access, page metadata, and current AI answers (ChatGPT, Claude, Gemini, and Perplexity), then agree on topic, source material, reviewer, and schedule.',
          owner: 'zicks and your clinic',
          output: 'One-page audit, agreed scope',
          kind: 'tool',
        },
        {
          title: 'Draft from approved source material',
          body: 'Turn recurring questions (stripped of patient details) into clear drafts.',
          owner: 'zicks',
          output: 'FAQ article and social post drafts',
          kind: 'tool',
        },
        {
          title: 'Designated reviewer sign-off',
          body: 'Your clinician checks accuracy and requests revisions before anything goes live. Nothing is published without sign-off.',
          owner: 'Your clinician',
          output: 'Approval and revision record',
          kind: 'review',
        },
        {
          title: 'Your team publishes and reviews the report',
          body: 'Your team publishes the approved pages, and we review agreed website data such as article visits and appointment-link clicks.',
          owner: 'Your team',
          output: 'End-of-pilot report',
          kind: 'team',
        },
      ],
    },
    inputs: {
      heading: 'What you can bring to a pilot',
      lead: 'You do not need a finished content brief. Either of the following approved materials is enough to scope a focused project.',
      items: [
        {
          title: 'Recurring patient questions',
          body: 'Common pre-visit, preparation, or follow-up questions your front desk or clinicians answer repeatedly, stripped of patient details.',
        },
        {
          title: 'Approved clinical explanations',
          body: 'Existing handouts or clinician explanations that need to become clear, structured web articles and adapted social posts.',
        },
      ],
    },
    principles: {
      heading: 'Three rules we follow on every project',
      lead: 'Built around your existing clinical review process.',
      items: [
        {
          title: 'Start with source material',
          body: 'Bring a recurring question or an approved explanation. We flag missing information instead of inventing an answer.',
        },
        {
          title: 'Keep approval with your team',
          body: 'We prepare drafts and record revisions. Your designated reviewer approves the content before your team publishes it.',
        },
        {
          title: 'Choose a measurable next step',
          body: 'Agree on available measures, such as article visits and appointment-link clicks. Report them separately from patients and revenue.',
        },
      ],
    },
    compare: {
      heading: 'How a zicks pilot differs',
      headers: ['Topic', 'Typical content retainer', 'zicks scoped pilot'],
      rows: [
        {
          topic: 'Source and accuracy',
          legacy: 'Topics chosen by the agency',
          zicks: 'Built from your approved inputs; missing facts flagged rather than invented',
        },
        {
          topic: 'Publishing control',
          legacy: 'Agency publishes on a set schedule',
          zicks: 'Your clinician approves accuracy, and your team publishes',
        },
        {
          topic: 'Commitment and reporting',
          legacy: 'Ongoing monthly retainer',
          zicks: 'Single focused pilot with no automatic renewal; visits and clicks reported separately from revenue',
        },
      ],
    },
    faq: {
      heading: 'Common questions',
      items: [
        {
          q: 'Who approves medical accuracy?',
          a: 'Your designated clinician approves medical content. Nothing is published without your team’s approval.',
        },
        {
          q: 'Do we share patient information?',
          a: 'No. Please leave out patient information. Clinic pilots work from recurring questions stripped of patient details.',
        },
        {
          q: 'Are search rankings or AI citations guaranteed?',
          a: 'No. Search rankings, AI citations, leads, and revenue are not guaranteed. We agree on available website measures, such as article visits and appointment-link clicks, before work starts.',
        },
        {
          q: 'What happens when a pilot ends?',
          a: 'It does not renew automatically. You review the delivered work and report first, then decide whether ongoing monthly content is useful.',
        },
      ],
    },
    bottomCta: {
      heading: 'See the exact deliverables\nfor clinics',
      lead: 'Look at the pilot scope or start with a free one-page visibility audit.',
      primary: { label: 'Get a free audit', slug: 'contact' },
      secondary: { label: 'See services', slug: 'services' },
    },
  },

  services: {
    metaTitle: 'Services | zicks for US clinics',
    metaDescription: `A free visibility audit, a 30-day patient-question content pilot (${P.clinicPilot}), and optional monthly content operations after the pilot. What is outside scope and what we do not promise is stated upfront.`,
    hero: {
      title: 'Start with a free visibility audit,\nthen run one focused pilot',
      lead: 'Topic, source material, designated reviewer, and schedule are agreed before any paid work begins.',
      primary: { label: 'Get a free audit', slug: 'contact' },
      secondary: { label: 'See pricing', slug: 'pricing' },
    },
    roles: {
      heading: 'See how your site reads\nbefore scoping a pilot',
      lead: 'Send your website and one recurring question. We inspect crawler access, page structure, and how ChatGPT, Claude, Gemini, and Perplexity currently describe your clinic, then recommend a pilot only if there is a clear fit.',
      caption: 'Clear roles throughout the engagement',
      headers: ['Task', 'Owner'],
      rows: [
        { task: 'Free crawler and AI visibility audit', owner: 'zicks prepares' },
        { task: 'Article and social post drafts', owner: 'zicks prepares' },
        { task: 'Clinical accuracy approval', owner: 'Your reviewer', client: true },
        { task: 'Publishing to your website', owner: 'Your team', client: true },
      ],
      note: 'Tracking setup and analytics account access are agreed separately.',
    },
    offers: {
      heading: 'Two scoped service options',
      lead: 'Each option has explicit deliverables and clear boundaries on what is outside scope.',
      items: [
        {
          title: 'Patient-question content',
          meta: 'For clinics, 30-day pilot',
          summary: 'Turn recurring patient questions into clinician-approved FAQ articles and adapted social posts.',
          points: [
            `${faq} original FAQ article drafts based on recurring questions stripped of patient details`,
            `${social} social post drafts adapted from those articles`,
            'Baseline review and end-of-pilot report using available website data',
            'Your clinician approves medical content; your team publishes it',
          ],
          foot: { label: 'Outside this pilot', text: 'Website rebuilding, advertising, translation, and video production.' },
        },
        {
          title: 'Post-pilot content operations',
          meta: 'Optional, after a pilot',
          summary: 'Available only after reviewing delivered pilot work. The pilot does not renew automatically.',
          points: [
            `${mFaq[0]!.toUpperCase()}${mFaq.slice(1)} FAQ article drafts per month with clinician approval`,
            `${mSocial[0]!.toUpperCase()}${mSocial.slice(1)} adapted social post drafts per month`,
            'Monthly website data report',
          ],
        },
      ],
      other: {
        id: 'other-teams',
        title: 'Not a clinic?',
        body: 'For teams that want to earn customers’ attention with content they can trust. We turn the questions customers keep asking into pages your reviewer approves.',
        rows: [
          {
            label: 'Includes',
            value: `${enCount(N.nonClinicArticles, true)} articles answering customer questions, annotated screenshots where useful, one consolidated revision round`,
          },
          { label: 'Reference fee', value: `${P.nonClinicPilot} per topic` },
        ],
        link: { label: 'Ask about this option', slug: 'contact' },
      },
    },
    boundaries: {
      heading: 'What we never promise\nand what we report instead',
      notTitle: 'Not promised',
      notItems: [
        'Guaranteed Google rankings, AI search citations, patient volume, leads, or revenue',
        'Unapproved clinical advice or work involving patient health records',
      ],
      yesTitle: 'Agreed and delivered',
      yesItems: [
        'Scoped drafts, revision records, and clear handoff for your team to publish',
        'Available website measures, such as article visits and appointment-link clicks, reported separately from revenue',
      ],
      note: 'Clear scope protects both your reviewers’ time and your clinical standards.',
    },
    bottomCta: {
      heading: 'Review reference pricing\nand terms',
      lead: 'See current reference fees for the clinic pilot and monthly operations. Neither renews automatically.',
      primary: { label: 'See pricing', slug: 'pricing' },
      secondary: { label: 'Get a free audit', slug: 'contact' },
    },
  },

  cases: {
    metaTitle: 'Background | zicks for US clinics',
    metaDescription:
      'Built by MoDoc AI, the physician-founded team that operates the pediatric fever app FeverCoach. Weekly FeverCoach blog measurements and the principles behind this website.',
    hero: {
      title: 'Built by a physician-led team\nthat runs its own health app',
      lead: 'MoDoc AI operates FeverCoach and is developing zicks. Myeongchan (MC) Kim, MD, is our founder. These pilots are scoped services delivered with tools and human review.',
    },
    about: {
      heading: 'The approach we first built\nfor FeverCoach',
      lead: 'Before offering content services to clinics, we built structured drafting and physician-review processes for our own multilingual pediatric fever app.',
      facts: [
        {
          term: 'Founder',
          desc: 'Myeongchan (MC) Kim, MD. Founder of MoDoc AI, Inc.',
        },
        {
          term: 'FeverCoach',
          desc: 'A pediatric fever app built by physicians and operated in-house by MoDoc AI.',
          link: { label: 'fevercoach.us', href: 'https://www.fevercoach.us' },
        },
        { term: 'Answer corpus', desc: '2,400+ physician-reviewed answers in our in-house corpus.' },
      ],
    },
    metrics: {
      heading: 'What we measure weekly on the FeverCoach blog',
      headers: ['Measure', 'Before', 'After', 'Period', 'Source'],
      rows: [
        { label: 'Google search clicks', before: '460', after: '2,910', period: '11 weeks', source: 'Google Search Console' },
        {
          label: 'Google AI impressions (per day)',
          sub: '98.1K over 3 months',
          before: 'About 300',
          after: 'About 3,500',
          period: '3 months',
          source: 'Google Search Console',
        },
        {
          label: 'Referring domains',
          before: '160',
          after: '631',
          period: 'About 4 months',
          source: 'Backlink analysis tool',
        },
      ],
      note: proofNote,
    },
    site: {
      heading: 'This website follows\nthe same principles',
      lead: 'We apply the same technical basics to our own website: fast static HTML, open crawler permissions, and structured machine-readable definitions.',
      items: [
        {
          title: 'Open crawler access',
          body: 'Built as static HTML (Astro) with open rules in robots.txt for Googlebot, GPTBot, ClaudeBot, and PerplexityBot.',
          link: { label: 'View robots.txt', asset: '/robots.txt' },
        },
        {
          title: 'Structured organization and service data',
          body: 'Every page includes Organization and Service JSON-LD (plus FAQPage schema on How it works), paired with a concise llms.txt summary.',
          link: { label: 'View llms.txt', asset: '/llms.txt' },
        },
        {
          title: 'Clear scope and disclaimers',
          body: 'Deliverables, reviewer responsibilities, and non-guaranteed outcomes are stated upfront in plain text.',
        },
      ],
    },
    closing: {
      heading: 'Client work is shared only\nwith written permission',
      lead: 'We do not publish client names, topics, or reports without explicit written consent. Instead of case studies, request a free visibility audit to see how your own website reads today.',
      primary: { label: 'Get a free audit', slug: 'contact' },
      secondary: { label: 'See pricing', slug: 'pricing' },
    },
  },

  pricing: {
    metaTitle: 'Pricing | zicks for US clinics',
    metaDescription: `Reference pricing: a free visibility audit, a 30-day clinic pilot at ${P.clinicPilot}, and monthly content operations at ${P.clinicMonthly} a month. Scope is agreed before starting, with no automatic renewal.`,
    hero: {
      title: 'Scoped pilot pricing,\nwith no automatic renewal',
      lead: 'We agree on the topic, source material, designated reviewer, and schedule before work begins. Pricing below is our reference structure as of November 2026 and is confirmed with scope.',
    },
    table: {
      heading: 'Options and reference fees',
      headers: ['Option', 'For', 'Unit', 'Reference fee'],
      rows: [
        { name: 'Free visibility audit', audience: 'Any clinic', unit: 'One-page audit', price: 'Free' },
        {
          name: 'Patient-question content pilot',
          sub: 'Where clinics start',
          audience: 'Clinics',
          unit: '30 days',
          price: P.clinicPilot,
          highlight: true,
        },
        {
          name: 'Post-pilot content operations',
          sub: 'Optional',
          audience: 'Clinics that finished a pilot',
          unit: 'Monthly',
          price: P.clinicMonthly,
          per: ' / month',
        },
        {
          name: 'Pilot for non-clinic teams',
          sub: 'For teams that want to earn customers’ attention with content they can trust',
          audience: 'Teams outside clinics',
          unit: 'One topic',
          price: P.nonClinicPilot,
        },
      ],
      note: 'Tracking setup, analytics account access, and custom deliverable adjustments are agreed separately.',
    },
    plans: {
      heading: 'What each option includes',
      items: [
        {
          title: 'Patient-question content pilot',
          summary: 'For practices turning recurring patient questions into clinician-approved website pages.',
          points: [
            `${faq} original FAQ article drafts (from questions stripped of patient details)`,
            `${social} social post drafts adapted from those articles`,
            'Baseline review and end-of-pilot report using available website data',
            'Approved by your clinician and published by your team',
          ],
          foot: { label: 'Excludes', text: 'Website rebuilding, advertising, translation, and video production.' },
        },
        {
          title: 'Post-pilot content operations',
          summary: 'Review delivered pilot work first, then decide whether ongoing monthly output helps.',
          points: [
            `${mFaq[0]!.toUpperCase()}${mFaq.slice(1)} FAQ article drafts per month with clinician approval`,
            `${mSocial[0]!.toUpperCase()}${mSocial.slice(1)} adapted social post drafts per month`,
            'Monthly website data report',
          ],
          foot: { text: 'Does not follow a pilot automatically. It starts separately, only if you want it.' },
        },
      ],
    },
    flow: {
      heading: 'From first email to end-of-pilot report',
      items: [
        {
          title: 'Free audit',
          body: 'Review the audit, then confirm topic, reviewer, and schedule. There is no charge up to this point.',
          kind: 'tool',
        },
        { title: 'Drafting', body: 'We prepare article and social post drafts from approved source material.', kind: 'tool' },
        {
          title: 'Clinician review',
          body: 'Your designated clinician reviews, and revisions are consolidated into one round.',
          kind: 'review',
        },
        {
          title: 'Publish and report',
          body: 'Your team publishes and we review the end-of-pilot report together. Nothing renews automatically.',
          kind: 'team',
        },
      ],
      promise: 'No automatic renewal, scope agreed upfront, and no patient information needed.',
    },
    bottomCta: {
      heading: 'Ready to see how your website\nreads today?',
      lead: 'Send your URL and one question patients keep asking. Please leave out any patient information.',
      primary: { label: 'Get a free audit', slug: 'contact' },
      secondary: { label: 'Learn about our background', slug: 'cases' },
    },
  },

  contact: {
    metaTitle: 'Get a free audit | zicks for US clinics',
    metaDescription:
      'Email your website, one recurring patient question, and who would review the work. The one-page free audit covers crawler access, page metadata, current AI answers, and next steps.',
    hero: {
      title: 'What does your front desk\nkeep explaining?',
      lead: 'Email your website, one recurring patient question, and who would review the work. MC will reply about fit, a free audit, or pilot scope. Korean and English both work. Please leave out patient information.',
      emailLabel: 'Contact email',
      composeLabel: 'Open email draft',
      copyLabel: 'Copy email address',
      copiedLabel: 'Copied',
      composeNote: 'The draft opens with the four items below already listed.',
      mailSubject: 'zicks free audit inquiry',
      mailBody:
        'Clinic name and website:\n\nWhat I want (free audit, clinic pilot, or something else):\n\nOne recurring patient question:\n\nWho would review and publish the work:\n\nPlease leave out patient information.',
    },
    box: {
      title: 'Using webmail? Include these four lines',
      items: [
        'Clinic name and website',
        'What you want: a free audit, a clinic pilot, or something else',
        'One recurring patient question',
        'Who would review and publish the work',
      ],
      note: 'Please leave out patient information.',
      reviewerLabel: 'Who replies',
      reviewerName: 'Myeongchan (MC) Kim, MD',
      reviewerInfo: 'Founder, MoDoc AI, Inc.\n163 Highland Ave #1015, Needham, MA 02494',
    },
    audit: {
      heading: 'What we inspect in a\nfree visibility audit',
      lead: 'Send your website URL and one recurring question to receive this one-page summary.',
      headers: ['Item', 'What we check'],
      rows: [
        {
          title: 'Crawler and indexing access',
          detail: 'Check robots.txt, sitemap, and whether major search or AI bots are blocked',
        },
        {
          title: 'Organization and page metadata',
          detail: 'Inspect page titles, descriptions, and structured JSON-LD definitions',
        },
        {
          title: 'Current AI search snapshot',
          detail: 'Check how ChatGPT, Claude, Gemini, and Perplexity currently answer a sample question about your field',
        },
        {
          title: 'Practical next steps',
          detail: 'Outline clear fixes and whether a focused clinic pilot fits',
        },
      ],
      note: 'Scope is agreed before paid work begins. Pilots do not renew automatically. Rankings, citations, and revenue are not guaranteed.',
    },
  },
};
