import { LOCALE_META } from '../config';
import type { LocaleDict } from '../types';

const enginesText = LOCALE_META.ko.engines.join(' · ');

export const ko: LocaleDict = {
  locale: 'ko',
  brandSub: 'by MoDoc AI',
  ctaLabel: '무료 진단 요청',
  nav: [
    { slug: 'how', label: '어떻게 일하나' },
    { slug: 'services', label: '서비스' },
    { slug: 'cases', label: '사례' },
    { slug: 'pricing', label: '가격' },
  ],
  aria: {
    primaryNav: '주 메뉴',
    mobileNav: '모바일 메뉴',
    footerNav: '푸터 메뉴',
    langSwitcher: '언어 선택',
    openMenu: '메뉴 열기',
    closeMenu: '메뉴 닫기',
  },
  orgSchema: {
    name: 'zicks by MoDoc AI',
    alternateName: ['zicks', '모닥에이아이코리아'],
    description: `AI native GEO · SEO 운영 엔진. 고객의 질문을 검수 · 서명된 글로 바꾸고 매주 AI 검색(${enginesText}) 답변을 측정합니다.`,
    founderName: '김명찬',
    founderJobTitle: '대표 · 의사',
  },
  serviceSchema: {
    name: 'zicks AI 검색 노출 · 콘텐츠 운영',
    providerName: '모닥에이아이코리아',
    serviceType: 'Generative Engine Optimization (GEO) · SEO 콘텐츠 운영 · 측정',
  },
  footer: {
    companyLine: '모닥에이아이코리아 (MoDoc AI)',
    tagline: 'AI native GEO · SEO 운영 엔진',
    disclaimer:
      'AI 추천 순위 · 검색 순위 · 매출 증가는 보장하지 않습니다. 보고하는 것은 「인용되었는가」와 「인용될 조건이 갖춰졌는가」입니다.',
    openWebNote:
      '이 사이트는 정적 사이트(Astro)로 만들어 무료 호스팅에 올렸고, 모든 AI 크롤러에 열려 있습니다.',
    contactLabel: '문의',
  },
  inquiryMailto: {
    subject: 'zicks 무료 진단 요청',
    body: '회사명 · 홈페이지 주소:\n\nAI에게 물어봤던 질문 (1~2개):\n\n회신받을 담당자 성함 · 연락처:\n',
  },
  home: {
    metaTitle: 'zicks · AI native GEO · SEO 콘텐츠 운영 엔진',
    metaDescription: `고객의 질문을 현장 담당자가 검수한 글로 바꾸고, 매주 같은 질문으로 ${enginesText}의 답을 측정합니다. 모닥에이아이코리아의 AI native GEO · SEO 운영.`,
    hero: {
      titleLines: [
        '고객의 실제 질문을',
        '현장 검수 글로 바꾸고',
        '매주 AI 답변을 측정합니다',
      ],
      lead: `검색 시대에는 링크 10개가 나열됐지만, AI 검색은 질문 하나를 여러 갈래로 쪼개 약 100개 페이지를 읽고 답 안에서 업체를 추립니다. 현장 담당자가 검수 · 서명한 글로 답을 준비하고 ${enginesText}의 답변을 매주 기록합니다.`,
      primaryCta: '무료 진단 요청',
      secondaryCta: '어떻게 일하나',
      trustPoints: [
        '서명 없는 글은 게시하지 않습니다',
        '순위 · 매출 증가는 보장하지 않습니다',
        '종료 시 도구 · 측정 기록을 인계합니다',
      ],
      mock: {
        sampleBadge: '예시 화면',
        windowTag: '주간 질문 세트 측정 예시',
        questionLabel: 'Q. B2B 설비 업체 선정할 때 견적서에서 먼저 확인할 항목은?',
        answerBeforeCite:
          '유지보수 포함 범위와 예비 부품 납기 조건을 먼저 비교하는 것이 좋습니다. 가상 예시 업체의 점검 안내(',
        citeBadge: '출처 연결 · 담당자 서명 예시',
        answerAfterCite:
          ')에서는 설치 환경별 확인 항목을 표로 정리해 안내합니다.',
        engines: [
          { name: 'ChatGPT', status: '회사명 언급', tone: 'cited' },
          { name: 'Claude', status: '출처 연결', tone: 'cited' },
          { name: 'Gemini', status: '회사명 언급', tone: 'cited' },
          { name: 'Perplexity', status: '→ 다음 주 주제', tone: 'gap' },
        ],
        footnote: '실제 고객사 기록이 아닌 작동 방식 설명용 가상 예시입니다.',
      },
    },
    fourChecks: {
      eyebrow: '무료 진단 점검 기준',
      heading: 'AI가 업체를 고르는 네 조건',
      lead: '자사 제품 FeverCoach에서 먼저 해 봤고, 같은 순서로 고객사 홈페이지를 진단 · 정비합니다.',
      items: [
        {
          num: '01',
          title: '읽을 수 있는가',
          summary: '검색 로봇과 AI 크롤러가 막힘없이 읽는지 확인합니다.',
          detail:
            '구글 · 네이버 검색 로봇과 ChatGPT · Claude · Perplexity AI 크롤러 접근, 색인 경로, 사이트맵을 가장 먼저 점검합니다.',
        },
        {
          num: '02',
          title: '무엇을 하는 회사인가',
          summary: 'AI가 회사를 틀리게 설명하지 않도록 기준 정보를 맞춥니다.',
          detail:
            '한 줄 정의, 회사 정보 코드(JSON-LD), 비즈니스 프로필을 정리해 업종과 제공 범위를 명확히 알립니다.',
        },
        {
          num: '03',
          title: '질문에 답하는가',
          summary: '고객이 실제로 묻는 말에 정면으로 답하는 글을 쌓습니다.',
          detail:
            '견적 문의와 자주 받는 질문을 원고로 바꾸고, 현장 담당자가 사실과 숫자를 검수 · 서명한 뒤에만 게시합니다.',
        },
        {
          num: '04',
          title: '남들이 그렇게 말하는가',
          summary: '다른 출처에서도 확인되는 회사를 AI가 신뢰합니다.',
          detail:
            '보도자료, 업체 명부, 리뷰, 외부에서 링크하는 도메인까지 함께 살펴 제3자 근거를 보강합니다.',
        },
      ],
    },
    bento: {
      headingLines: ['측정과 주제 추천은 도구가 맡고,', '검수와 결정은 사람이 합니다'],
      lead: '정해 둔 질문 20개를 매주 똑같이 묻고, 빠진 질문에서 다음 주 주제를 찾습니다.',
      wide: {
        chip: '주간 운영 루프',
        titleLines: ['고정 질문 측정부터 게시까지', '담당자 부담은 주 2시간 안팎입니다'],
        body: `매주 같은 질문 20개로 ${enginesText}의 답변을 확인하고 어떤 질문에서 빠졌는지 찾아냅니다. 고객 질문 자료와 대조한 초안을 담당자가 검수 · 서명하면 자동 게시됩니다.`,
        primaryBtn: { label: '서비스 구성 보기', slug: 'services' },
        secondaryBtn: { label: '어떻게 일하나', slug: 'how' },
        steps: [
          { label: '① 질문 20개 × 주요 AI 검색 매주 측정', role: '도구 자동' },
          { label: '② 빠진 질문 · 대신 언급된 회사 찾아 주제 추천', role: '도구 자동' },
          { label: '③ 고객 질문 자료 대조 · 초안 담당자 검수 · 서명', role: '✓ 사람 검수 · 결정', isHuman: true },
          { label: '④ 자동 게시 · 색인 제출 및 다음 주 재측정', role: '도구 자동' },
        ],
      },
      left: {
        chip: '기존 대행과 다른 점',
        titleLines: ['추상적인 순위 약속 대신', '매주 답변 원문을 그대로 공유합니다'],
        body: '쉬운 질문으로 성과를 꾸미지 않습니다. 첫 주에 고정한 질문에서 회사명이 나왔는지, 페이지가 출처로 걸렸는지를 나눠 보고합니다.',
        rows: [
          { label: '기존', value: '경험으로 키워드 선정 · 월 1회 보고' },
          { label: 'zicks', value: '첫 주 질문 고정 · 매주 답변 원문 공유', highlight: true },
        ],
      },
      right: {
        chip: '도구 · 기록 인계',
        titleLines: ['계약이 끝나도 남는', '고객사 소유의 질문 자산'],
        body: '보고서만 남고 끝나는 대행이 아닙니다. 측정 기록 · 매뉴얼 · 설정값은 고객 소유이며, 진단 · 발행 · 측정 도구 사용권이 유지됩니다.',
        tags: [
          '✓ 회사 정보 코드 · 사이트맵',
          '✓ 고정 질문 목록 · 측정 기록',
          '✓ 진단 · 발행 · 측정 도구 사용권',
          '✓ 운영 매뉴얼 인계',
        ],
      },
    },
    proof: {
      eyebrow: '자사 제품 선행 검증',
      headingLines: ['먼저 우리 제품으로', '해 봤습니다'],
      lead: '의사가 검수한 답변 2,400개 이상을 재료로 자사 소아 발열 앱 FeverCoach 블로그를 발행하고 매주 기록한 성과입니다.',
      stats: [
        {
          label: 'Google 검색 클릭 (11주)',
          before: '460 → ',
          value: '2,910',
          caption: 'Google Search Console',
        },
        {
          label: '구글 생성형 AI 노출 (3개월)',
          value: '98.1K',
          caption: '일간 약 300 → 3,500 · Google Search Console',
        },
        {
          label: '외부에서 링크하는 도메인',
          before: '160 → ',
          value: '631',
          caption: '약 4개월 · Ahrefs',
        },
      ],
      disclaimer:
        '측정 기간 2026-06 → 2026-10. 자사 제품(FeverCoach)의 기록이며, 다른 업종 · 사이트의 결과를 보장하지 않습니다. 고객사 사례는 서면 동의 뒤에만 공개합니다.',
      moreLabel: '사례 자세히 보기 →',
    },
    bottomCta: {
      heading: '지금 홈페이지가 AI에게 어떻게 보이는지부터 확인하세요',
      lead: '크롤러 접근 · 색인 · 회사 정보 코드 · 설명문을 같은 도구로 재서 3영업일 안에 한 장으로 드립니다. 무료입니다.',
      buttonLabel: '무료 진단 요청',
    },
  },
};
