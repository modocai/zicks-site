import { EN_PRICING } from '../../data/pricing';
import { LOCALE_META } from '../config';
import type { LocaleDict } from '../types';

const enginesText = LOCALE_META.en.engines.join(' · ');
const P = EN_PRICING.formatted;

export const en: LocaleDict = {
  locale: 'en',
  brandSub: 'by MoDoc AI',
  ctaLabel: 'Get a free audit',
  nav: [
    { slug: 'how', label: 'How it works' },
    { slug: 'services', label: 'Services' },
    { slug: 'cases', label: 'Background' },
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
      'Scoped content pilots and website visibility audits for clinics and healthcare software teams, operated by MoDoc AI.',
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
    addressLine: '163 Highland Ave #1015, Needham, MA 02494',
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
      lead: `For clinics and healthcare software teams: website articles, product guides, and clear next steps for your readers. Start with a free one-page visibility audit across Google and AI search (${enginesText}), or a small scoped pilot.`,
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
        footnote: 'Illustrative example of a free visibility audit, not client data.',
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
          { label: '① Free visibility audit of crawler access & current AI answers', role: 'Free audit' },
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
      eyebrow: 'Scoped paid pilots (Reference pricing)',
      heading: 'One focused project to start',
      lead: 'Choose the audience you need to help. We agree on the topic, source material, reviewer, and schedule before work begins.',
      cards: [
        {
          badge: 'For clinics',
          title: 'Patient-question content',
          price: P.clinicPilot,
          period: 'Reference fee for a 30-day pilot, starting on an agreed date.',
          points: [
            `${EN_PRICING.clinicFaqDrafts} original FAQ article drafts based on your recurring questions`,
            `${EN_PRICING.clinicSocialDrafts} social post drafts adapted from those articles`,
            'A baseline review and an end-of-pilot report using available website data',
          ],
          approvalNote:
            'Your clinician approves medical content. Your team publishes it. We work from questions stripped of patient details.',
          note: 'Website rebuilding, advertising, translation, and video production are outside this pilot.',
        },
        {
          badge: 'For healthcare software teams',
          title: 'Explain one product workflow',
          price: P.softwarePilot,
          period: 'Reference fee for one agreed workflow.',
          points: [
            `${EN_PRICING.softwareArticles} articles for a defined customer or prospective-buyer audience`,
            `Up to ${EN_PRICING.softwareScreenshots} annotated screenshots from an approved demo environment`,
            'One consolidated revision round',
          ],
          approvalNote:
            'Your product lead checks accuracy. Your team publishes it. We agree on help-center or marketing use before drafting.',
          note: 'Production integrations, patient data, and clinical protocols are outside this pilot.',
        },
      ],
      footnote: `${EN_PRICING.asOfLabel}. Review the delivered work and decide whether more content is useful. Clinic content operations can be scoped around ${P.clinicMonthlyInline} for ${EN_PRICING.monthlyFaqDrafts} FAQ drafts, ${EN_PRICING.monthlySocialDrafts} social drafts, and a monthly report. Software content maintenance is scoped around actual updates. Neither pilot renews automatically.`,
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
      lead: 'Email your website, one question or workflow, and who would review the work. MC will use that to discuss fit, a free visibility audit, or pilot scope. Please leave out patient information.',
      buttonLabel: 'Request a free audit',
    },
  },

  /* ====== Phase 2: How it works (/how/) ====== */
  how: {
    metaTitle: 'How it works · zicks',
    metaDescription:
      'Review-first content workflow for clinics and healthcare software teams: approved source material, designated team sign-off, and agreed website measures.',
    header: {
      eyebrow: 'How it works',
      h1Lines: ['Review first.', 'Measure what happened.'],
      lead: 'Every engagement starts with your real questions or product workflows, keeps clinical or product approval with your team, and reports agreed website metrics honestly.',
    },
    loopBlock: {
      chip: 'Step-by-step workflow',
      heading: 'Structured drafting with human sign-off at the center',
      body: 'We flag missing information instead of inventing an answer, prepare drafts, and record revisions.',
      mockBadge: '4-stage pilot flow',
      steps: [
        {
          num: '01',
          title: 'Free visibility audit & scope agreement',
          desc: `Inspect crawler access, page metadata, and current AI answers (${enginesText}), then agree on topic, source material, reviewer, and schedule.`,
          role: 'Baseline & scope',
        },
        {
          num: '02',
          title: 'Draft from approved source material',
          desc: 'Turn recurring questions (stripped of patient details) or an approved demo walkthrough into clear drafts.',
          role: 'zicks draft',
        },
        {
          num: '03',
          title: 'Designated reviewer sign-off',
          desc: 'Your clinician or product lead checks accuracy and requests revisions before anything goes live.',
          role: '✓ Team sign-off',
          isHuman: true,
        },
        {
          num: '04',
          title: 'Your team publishes & reviews report',
          desc: 'Your team publishes the approved pages, and we review agreed website data such as article visits and inquiry or demo-link clicks.',
          role: 'Measured report',
        },
      ],
    },
    composition: {
      eyebrow: 'Good starting inputs',
      heading: 'What you can bring to a pilot',
      lead: 'You do not need a finished content brief. Any of the following approved materials is enough to scope a focused project.',
      items: [
        {
          tag: 'Input 01',
          title: 'Recurring patient questions',
          body: 'Common pre-visit, preparation, or follow-up questions your front desk or clinicians answer repeatedly—stripped of patient details.',
        },
        {
          tag: 'Input 02',
          title: 'Approved clinical explanations',
          body: 'Existing handouts or clinician explanations that need to become clear, structured web articles and adapted social posts.',
        },
        {
          tag: 'Input 03',
          title: 'One software workflow',
          body: 'A specific feature or onboarding step prospective buyers or current users ask your team to explain.',
        },
        {
          tag: 'Input 04',
          title: 'Approved demo environment',
          body: 'A non-patient demo environment where we can capture and annotate up to ten clear workflow screenshots.',
        },
      ],
    },
    craft: {
      eyebrow: 'Operating principles',
      heading: 'Three rules we follow on every project',
      lead: 'Built around your existing clinical and product review process.',
      cards: [
        {
          badge: 'Principle 01',
          title: 'Start with source material',
          body: 'Bring a recurring question, an approved explanation, or a product walkthrough. We flag missing information instead of inventing an answer.',
        },
        {
          badge: 'Principle 02',
          title: 'Keep approval with your team',
          body: 'We prepare drafts and record revisions. Your designated reviewer approves the content before your team publishes it.',
        },
        {
          badge: 'Principle 03',
          title: 'Choose a measurable next step',
          body: 'Agree on available measures, such as article visits and inquiry or demo-link clicks. Report them separately from customers and revenue.',
        },
      ],
    },
    comparison: {
      eyebrow: 'Working model comparison',
      heading: 'How a zicks pilot differs',
      legacyTitle: 'Typical content retainer',
      zicksTitle: 'zicks scoped pilot',
      rows: [
        {
          topic: 'Source & accuracy',
          legacy: 'Topics chosen by the agency',
          zicks: 'Built from your approved inputs; missing facts flagged rather than invented',
        },
        {
          topic: 'Publishing control',
          legacy: 'Agency publishes on a set schedule',
          zicks: 'Your clinician or product lead approves accuracy, and your team publishes',
        },
        {
          topic: 'Commitment & reporting',
          legacy: 'Ongoing monthly retainer',
          zicks: 'Single focused pilot with no automatic renewal; visits and clicks reported separately from revenue',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      heading: 'Common questions',
      items: [
        {
          q: 'Who approves medical or product accuracy?',
          a: 'Your designated clinician approves medical content, and your product lead checks software workflow accuracy. Nothing is published without your team’s approval.',
        },
        {
          q: 'Do we share patient information?',
          a: 'No. Please leave out patient information. Clinic pilots work from recurring questions stripped of patient details, and software pilots use an approved demo environment.',
        },
        {
          q: 'Are search rankings or AI citations guaranteed?',
          a: 'No. Search rankings, AI citations, leads, and revenue are not guaranteed. We agree on available website measures—such as article visits and inquiry or demo-link clicks—before work starts.',
        },
        {
          q: 'What happens when a pilot ends?',
          a: 'Neither pilot renews automatically. You review the delivered work and report first, then decide whether ongoing monthly content or update-based maintenance is useful.',
        },
      ],
    },
    bottomNav: {
      heading: 'See the exact deliverables for clinics and software teams',
      lead: 'Compare our two focused pilot scopes or start with a free one-page visibility audit.',
      nextLabel: 'Next: Compare services →',
      nextSlug: 'services',
    },
  },

  /* ====== Phase 2: Services (/services/) ====== */
  services: {
    metaTitle: 'Services · zicks',
    metaDescription:
      'Free one-page visibility audits and scoped content pilots for clinics and healthcare software teams.',
    header: {
      eyebrow: 'Services',
      h1Lines: ['Start with a free visibility audit,', 'then run one focused pilot'],
      lead: 'Choose the audience you need to help. Topic, source material, designated reviewer, and schedule are agreed before any paid work begins.',
    },
    featured: {
      chip: 'Recommended starting path',
      headingLines: ['See how your site reads', 'before scoping a pilot'],
      body: `Send your website and one recurring question. We inspect crawler access, page structure, and how ${enginesText} currently describe your organization—then recommend a pilot only if there is a clear fit.`,
      primaryBtn: { label: 'View pilot pricing', slug: 'pricing' },
      secondaryBtn: { label: 'Request a free audit', slug: 'contact' },
      mock: {
        badge: 'Responsibility split',
        title: 'Clear roles throughout the engagement',
        items: [
          { label: 'Free crawler & AI visibility audit', owner: 'zicks prepares' },
          { label: 'Article, social, or annotated workflow drafts', owner: 'zicks prepares' },
          { label: 'Clinical or product accuracy approval', owner: 'Your reviewer', isClientOwned: true },
          { label: 'Publishing to your website or help center', owner: 'Your team', isClientOwned: true },
        ],
        footnote: 'Tracking setup and analytics account access are agreed separately.',
      },
    },
    offersSection: {
      id: 'pilots',
      eyebrow: 'Scoped service options',
      heading: 'Focused pilots & post-pilot options',
      lead: 'Each pilot has explicit deliverables and clear boundaries on what is outside scope.',
      cards: [
        {
          code: 'Clinics',
          duration: '30-day pilot',
          title: 'Patient-question content',
          summary: 'Turn recurring patient questions into clinician-approved FAQ articles and adapted social posts.',
          details: [
            `${EN_PRICING.clinicFaqDrafts} original FAQ article drafts based on recurring questions stripped of patient details`,
            `${EN_PRICING.clinicSocialDrafts} social post drafts adapted from those articles`,
            'Baseline review and end-of-pilot report using available website data',
            'Your clinician approves medical content; your team publishes it',
          ],
          boundaryNote:
            'Outside this pilot: website rebuilding, advertising, translation, and video production.',
        },
        {
          code: 'Software',
          duration: '1 workflow',
          title: 'Explain one product workflow',
          summary: 'Clarify one important workflow for prospective buyers or existing customers.',
          details: [
            `${EN_PRICING.softwareArticles} articles for a defined customer or prospective-buyer audience`,
            `Up to ${EN_PRICING.softwareScreenshots} annotated screenshots from an approved demo environment`,
            'One consolidated revision round with your product lead',
            'Help-center or marketing use agreed before drafting',
          ],
          boundaryNote:
            'Outside this pilot: production integrations, patient data, and clinical protocols.',
        },
        {
          code: 'After a pilot',
          duration: 'Optional',
          title: 'Post-pilot content operations',
          summary: 'Available only after reviewing delivered pilot work. Neither pilot renews automatically.',
          details: [
            `Clinics: monthly operations for ${EN_PRICING.monthlyFaqDrafts} FAQ drafts, ${EN_PRICING.monthlySocialDrafts} social drafts, and a monthly report`,
            'Healthcare software: maintenance scoped around actual product updates',
            'Review delivered work first—neither pilot renews automatically',
          ],
        },
      ],
    },
    boundaries: {
      eyebrow: 'Scope & expectations',
      heading: 'What we never promise · What we report instead',
      notPromisedTitle: 'Not promised',
      notPromisedItems: [
        'Guaranteed Google rankings, AI search citations, patient volume, leads, or revenue',
        'Unapproved clinical advice or work involving patient health records',
      ],
      reportedTitle: 'Agreed and delivered',
      reportedItems: [
        'Scoped drafts, revision records, and clear handoff for your team to publish',
        'Available website measures—such as article visits and inquiry or demo-link clicks—reported separately from revenue',
      ],
      footnote: 'Clear scope protects both your reviewers’ time and your clinical or product standards.',
    },
    bottomNav: {
      heading: 'Review reference pilot pricing and terms',
      lead: 'See current reference fees for clinic and healthcare software pilots, with no automatic renewal.',
      nextLabel: 'Next: View pricing →',
      nextSlug: 'pricing',
    },
  },

  /* ====== Phase 2: Pricing (/pricing/) ====== */
  pricing: {
    metaTitle: 'Pricing · zicks',
    metaDescription: `Reference pilot pricing for clinics (${P.clinicPilot}) and healthcare software teams (${P.softwarePilot}). Agreed scope before starting, no automatic renewal.`,
    header: {
      asOfBadge: EN_PRICING.asOfLabel,
      h1Lines: ['Scoped pilot pricing,', 'with no automatic renewal'],
      lead: 'We agree on the topic, source material, designated reviewer, and schedule before work begins. Pricing below reflects our current reference structure and is confirmed with scope.',
    },
    starterBox: {
      chip: 'Before any paid pilot',
      headingLines: ['Start with a free audit,', 'confirm scope upfront'],
      body: 'Email your website, one question or workflow, and who would review the work. MC will use that to discuss fit, a free visibility audit, or pilot scope.',
      badges: ['No auto-renewal', 'Scope agreed upfront', 'Leave out patient info'],
      footnote:
        'Tracking setup, analytics account access, and custom deliverable adjustments are agreed separately.',
      timelineMock: {
        badge: 'Typical engagement flow',
        title: 'From initial audit to end-of-pilot review',
        milestones: [
          { phase: 'Step 1', task: 'Free visibility audit & confirm topic, reviewer, and schedule', tag: 'Pre-pilot' },
          { phase: 'Step 2', task: 'Draft articles or workflow guides from approved inputs', tag: 'Drafting' },
          { phase: 'Step 3', task: 'Clinician or product lead review & consolidated revisions', tag: 'Sign-off' },
          { phase: 'Step 4', task: 'Team publishes · End-of-pilot report · No auto-renewal', tag: 'Wrap-up' },
        ],
      },
    },
    plansSection: {
      eyebrow: 'Reference pilot fees',
      heading: 'Choose the pilot that matches your team',
      cards: [
        {
          badge: 'For clinics · 30 days',
          title: 'Patient-question content pilot',
          price: P.clinicPilot,
          billingNote: 'Reference fee · 30-day pilot starting on an agreed date',
          summary: 'For practices turning recurring patient questions into clinician-approved website pages.',
          includes: [
            `${EN_PRICING.clinicFaqDrafts} original FAQ article drafts (from questions stripped of patient details)`,
            `${EN_PRICING.clinicSocialDrafts} social post drafts adapted from those articles`,
            'Baseline review and end-of-pilot report using available website data',
            'Approved by your clinician and published by your team',
          ],
          footnote: 'Excludes website rebuilding, advertising, translation, and video production.',
          featured: true,
        },
        {
          badge: 'For software teams · 1 workflow',
          title: 'Product workflow guide pilot',
          price: P.softwarePilot,
          billingNote: 'Reference fee · One agreed product workflow',
          summary: 'For healthcare software teams explaining a key workflow to buyers or users.',
          includes: [
            `${EN_PRICING.softwareArticles} articles for a defined customer or prospective-buyer audience`,
            `Up to ${EN_PRICING.softwareScreenshots} annotated screenshots from an approved demo environment`,
            'One consolidated revision round with your product lead',
            'Help-center or marketing placement agreed before drafting',
          ],
          footnote: 'Excludes production integrations, patient data, and clinical protocols.',
          featured: true,
        },
        {
          badge: 'Optional · Post-pilot',
          title: 'Ongoing clinic operations',
          price: P.clinicMonthly,
          billingNote: 'Reference monthly scope · Decided only after a pilot',
          summary: 'Review delivered pilot work first, then decide whether ongoing monthly output helps.',
          includes: [
            `Clinics: ${EN_PRICING.monthlyFaqDrafts} FAQ article drafts per month with clinician approval`,
            `${EN_PRICING.monthlySocialDrafts[0].toUpperCase()}${EN_PRICING.monthlySocialDrafts.slice(1)} adapted social post drafts per month`,
            'Monthly website data report',
          ],
          footnote: 'Software content maintenance is scoped around actual product updates rather than a fixed monthly volume.',
        },
      ],
    },
    bottomNav: {
      heading: 'Ready to see how your website reads today?',
      lead: 'Send your URL and one question patients or buyers keep asking. Please leave out any patient information.',
      nextLabel: 'Learn about our background →',
      nextSlug: 'cases',
    },
  },

  /* ====== Phase 3: Background (/cases/) ====== */
  cases: {
    metaTitle: 'Background · zicks',
    metaDescription:
      'Built by MoDoc AI, the healthcare software team operating FeverCoach. Open static website architecture and client confidentiality policy.',
    header: {
      eyebrow: 'Background',
      h1Lines: ['Built by a healthcare software team', 'operating its own product'],
      lead: 'MoDoc AI operates FeverCoach and is developing zicks. Myeongchan (MC) Kim, MD, is our founder. These pilots are scoped services delivered with tools and human review.',
    },
    fevercoach: {
      badge: 'In-house product & operations',
      heading: 'FeverCoach — operated by MoDoc AI',
      lead: 'Before offering content services to clinics and healthcare software teams, we built structured drafting and physician-review workflows for our own multilingual pediatric fever app.',
      stats: [
        {
          label: 'Founder background',
          value: 'MD-founded',
          caption: 'Myeongchan (MC) Kim, MD · Founder of MoDoc AI, Inc.',
        },
        {
          label: 'FeverCoach',
          value: 'Built by physicians',
          caption: 'FeverCoach (fevercoach.us) operated in-house by MoDoc AI',
        },
        {
          label: 'FeverCoach Q&A corpus',
          value: '2,400+',
          caption: '2,400+ physician-reviewed answers in our in-house corpus',
        },
      ],
      ledgerNote:
        'FeverCoach is our own product. Its use here is not a client endorsement or a promise of results for your organization.',
    },
    thisSite: {
      eyebrow: 'Open web architecture',
      heading: 'zicks — how this website is structured',
      lead: 'We apply the same technical basics to our own website: fast static HTML, open crawler permissions, and structured machine-readable definitions.',
      checks: [
        {
          num: '01',
          title: 'Open crawler access',
          body: 'Built as static HTML (Astro) with open rules in robots.txt for Googlebot, GPTBot, ClaudeBot, and PerplexityBot.',
          assetLink: {
            label: 'View robots.txt ↗',
            relPath: '/robots.txt',
          },
        },
        {
          num: '02',
          title: 'Structured organization & service data',
          body: 'Every page includes Organization and Service JSON-LD (plus FAQPage schema on How it works), paired with a concise llms.txt summary.',
          assetLink: {
            label: 'View llms.txt ↗',
            relPath: '/llms.txt',
          },
        },
        {
          num: '03',
          title: 'Clear scope & disclaimers',
          body: 'Deliverables, reviewer responsibilities, and non-guaranteed outcomes are stated upfront in plain text.',
        },
      ],
    },
    clientPolicy: {
      badge: 'Client confidentiality',
      heading: 'Client work is shared only with written permission',
      body: 'We do not publish client names, topics, or reports without explicit written consent. Instead of case studies, request a free visibility audit to see how your own website reads today.',
      ctaLabel: 'Request a free audit',
      secondaryLabel: 'View pricing →',
      secondarySlug: 'pricing',
    },
  },

  /* ====== Phase 3: Contact (/contact/) ====== */
  contact: {
    metaTitle: 'Request a free audit · zicks',
    metaDescription:
      'Email your website and one recurring question or workflow to request a free visibility audit or discuss a scoped content pilot.',
    header: {
      eyebrow: 'Free visibility audit & pilot inquiry',
      h1Lines: ['What does your team', 'keep explaining?'],
      lead: 'Email your website, one question or workflow, and who would review the work. MC will use that to discuss fit, a free visibility audit, or pilot scope. Please leave out patient information.',
    },
    actionCard: {
      badge: 'Direct email',
      emailLabel: 'Contact email',
      composeBtn: 'Open email draft (pre-filled)',
      copyBtn: 'Copy email address',
      copiedBtn: '✓ Copied',
      templateTitle: 'Using webmail? Include these four lines',
      templateItems: [
        'Company and website URL',
        'Free visibility audit, clinic content pilot, or software content pilot',
        'One recurring question or product workflow to explain',
        'Who on your team would review and publish the work',
      ],
      reviewerBadge: 'Founder contact',
      reviewerTitle: 'Myeongchan (MC) Kim, MD · Founder',
      reviewerBody: 'zicks by MoDoc AI, Inc. (163 Highland Ave #1015, Needham, MA 02494). Please leave out patient information.',
    },
    auditMock: {
      sampleBadge: 'Overview',
      windowTag: '1-page free visibility audit',
      title: 'What we inspect in a free visibility audit',
      rows: [
        {
          num: '01',
          title: 'Crawler & indexing access',
          detail: 'Check robots.txt, sitemap, and whether major search or AI bots are blocked',
          status: 'Technical check',
        },
        {
          num: '02',
          title: 'Organization & page metadata',
          detail: 'Inspect page titles, descriptions, and structured JSON-LD definitions',
          status: 'Schema check',
        },
        {
          num: '03',
          title: 'Current AI search snapshot',
          detail: `Check how ${enginesText} currently answer a sample question about your space`,
          status: 'Snapshot',
        },
        {
          num: '04',
          title: 'Practical next steps',
          detail: 'Outline clear fixes or whether a focused clinic or software pilot fits',
          status: 'Summary',
        },
      ],
      footnote: 'Send your website URL and one recurring question to receive this one-page summary.',
    },
    reassurance: [
      'Scope agreed before paid work begins',
      'No automatic renewal on pilots',
      'Rankings, citations, and revenue are not guaranteed',
    ],
  },
};
