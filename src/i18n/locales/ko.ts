import { KO_PRICING } from '../../data/pricing';
import { LOCALE_META } from '../config';
import type { LocaleDict } from '../types';

const enginesText = LOCALE_META.ko.engines.join(' · ');
const P = KO_PRICING.formatted;

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
          { label: '① 질문 20개 × 주요 AI 검색 매주 측정', role: '측정 루프' },
          { label: '② 빠진 질문 · 대신 언급된 회사 찾아 주제 추천', role: '도구 추천' },
          { label: '③ 고객 질문 자료 대조 · 초안 담당자 검수 · 서명', role: '✓ 사람 검수 · 결정', isHuman: true },
          { label: '④ 자동 게시 · 색인 제출 및 다음 주 재측정', role: '자동 발행' },
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
          caption: '약 4개월 · 외부 링크 분석 도구',
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

  /* ====== 구간 2: 어떻게 일하나 (/ko/how/) ====== */
  how: {
    metaTitle: '어떻게 일하나 · zicks',
    metaDescription: `고정된 질문 세트를 매주 ${enginesText}에 묻고, 그 결과로 다음 글의 주제를 정하는 측정 루프. 글 규격과 담당자 검수 · 서명 절차.`,
    header: {
      eyebrow: '작동 방식',
      h1Lines: ['질문을 고정해 매주 재고,', '빠진 자리부터 글로 채웁니다'],
      lead: `사람이 감으로 키워드를 골라 순위를 보는 방식이 아닙니다. 첫 주에 정한 질문 20개로 매주 ${enginesText}의 답변을 확인하고, 우리 회사가 빠진 질문에서 다음 주 주제를 정합니다.`,
    },
    loopBlock: {
      chip: '주간 측정 · 발행 루프',
      heading: '반복은 루프가 돌리고, 현장 사실 확인만 담당자가 맡습니다',
      body: '견적 문의 · 전화 메모 · 자주 받는 질문이 글의 재료가 됩니다. 서명 없는 글은 게시되지 않으며, 고객사 담당자 부담은 주 2시간 안팎입니다.',
      mockBadge: '4단계 주간 루프 구조',
      steps: [
        {
          num: '01',
          title: '고정 질문 20개 매주 측정',
          desc: `첫 주에 확정해 둔 같은 문장으로 ${enginesText} 답변과 대신 언급된 회사를 기록합니다.`,
          role: '측정 기록',
        },
        {
          num: '02',
          title: '빠진 질문 · 주제 추천',
          desc: '우리 회사가 빠진 질문과 경쟁 언급 현황을 정리해 다음 주 원고 주제를 추립니다.',
          role: '도구 추천',
        },
        {
          num: '03',
          title: '고객 자료 대조 · 담당자 검수 · 서명',
          desc: '현장 상담 자료와 대조해 초안을 다듬고, 사양 · 발주처 · 날짜를 담당자가 확인 · 서명합니다.',
          role: '✓ 사람 검수 필수',
          isHuman: true,
        },
        {
          num: '04',
          title: '자동 게시 · 다음 주 재측정',
          desc: '승인된 글을 회사 · 문서 정보 코드와 함께 게시하고, 다음 주 측정에서 변화를 한 장 보고서로 드립니다.',
          role: '자동 발행',
        },
      ],
    },
    composition: {
      eyebrow: '질문 세트 설계',
      heading: '질문 20개는 다섯 갈래로 구성합니다',
      lead: '경쟁이 치열한 일반 추천 질문만 쫓지 않고, 실제로 먼저 인용될 수 있는 세부 질문부터 균형 있게 묶습니다.',
      items: [
        {
          tag: '유형 01',
          title: '일반 추천',
          body: '예: 지역 · 업종 업체 추천 — 경쟁이 커서 단기간 진입은 어렵지만 기준선으로 매주 기록합니다.',
        },
        {
          tag: '유형 02',
          title: '선정 기준 · 비용',
          body: '예: 업체 고를 때 확인할 항목 — 조건과 기준을 정리한 가이드 글이 먼저 인용되는 영역입니다.',
        },
        {
          tag: '유형 03',
          title: '절차 · 유지보수',
          body: '예: 진행 절차 · 사후 관리 — 구체적인 단계별 안내와 FAQ 문서가 출처로 연결됩니다.',
        },
        {
          tag: '유형 04',
          title: '빈자리 세부 질문',
          body: '현장에는 자주 들어오지만 온라인에 정돈된 답이 거의 없는 질문으로, 가장 먼저 언급될 수 있는 영역입니다.',
        },
        {
          tag: '유형 05',
          title: '브랜드 확인',
          body: '우리 회사가 어떤 일을 하는 곳인지 물었을 때 AI가 틀리지 않고 바르게 설명하도록 교정합니다.',
        },
      ],
    },
    craft: {
      eyebrow: '원고 · 검수 규격',
      heading: '글은 고객의 소리에서 시작합니다',
      lead: '견적 문의 · 전화 메모 · 자주 받는 질문 · 현장 이야기가 제목이 되고, 실제 사례와 현장 숫자가 본문이 됩니다. 자료가 부족하면 온라인 커뮤니티에서 발주자 질문을 대신 모아 옵니다.',
      cards: [
        {
          badge: '글의 틀',
          title: 'AI가 인용하기 좋은 구조',
          body: '첫 문단에서 바로 답하기 · 구체적 숫자 3개 이상 · 실제 사례 1개 · 출처 1개 · 불필요한 키워드 반복 금지 원칙을 그대로 적용합니다.',
        },
        {
          badge: '검수 · 서명',
          title: '주 2시간 안팎의 사실 확인',
          body: '담당자가 사양 · 발주처 · 날짜가 맞는지 확인하고 서명합니다. 서명 없는 글은 게시되지 않습니다.',
        },
        {
          badge: '게시 · 측정',
          title: '발행 후 주간 1장 보고',
          body: '승인하면 자동 게시되고 검색엔진에 등록됩니다. 다음 주 측정에서 AI 답변 변화를 확인해 한 장 보고서로 공유합니다.',
        },
      ],
    },
    comparison: {
      eyebrow: '운영 방식 비교',
      heading: '기존 대행과 다른 점',
      legacyTitle: '기존 대행',
      zicksTitle: 'zicks 운영',
      rows: [
        {
          topic: '질문 · 키워드 관리',
          legacy: '경험으로 키워드 선정 · 월 1회 보고',
          zicks: '첫 주에 질문 20개를 고정하고 매주 같은 문장으로 측정 (쉬운 질문으로 성과를 꾸밀 수 없음)',
        },
        {
          topic: '성과 보고 기준',
          legacy: '순위 · 노출 수치 보고',
          zicks: 'AI 답변에 회사명이 나왔는지, 우리 페이지가 출처로 걸렸는지를 나눠 답변 원문과 함께 공유',
        },
        {
          topic: '계약 종료 후 남는 것',
          legacy: '끝나면 결과 보고서만 남음',
          zicks: '측정 도구 사용권 · 고정 질문 목록 · 누적 기록 · 매뉴얼을 넘겨받아 직접 이어서 운영 가능',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      heading: '자주 묻는 질문',
      items: [
        {
          q: 'GEO가 무엇인가요?',
          a: `Generative Engine Optimization의 줄임말입니다. ${enginesText} 같은 AI 검색이 답을 작성할 때 우리 회사를 언급하거나 우리 페이지를 출처로 인용할 수 있도록 사이트 구조와 콘텐츠를 갖추고 측정하는 일입니다.`,
        },
        {
          q: 'AI 추천 순위를 보장하나요?',
          a: '보장하지 않습니다. 대신 매주 같은 질문으로 AI 답변을 측정해 「언급되었는가」와 「언급될 조건이 갖춰졌는가」를 나눠 보고합니다.',
        },
        {
          q: '글은 누가 쓰나요?',
          a: '고객의 실제 질문을 재료로 zicks가 초안을 준비하고, 고객사 현장 담당자가 사실을 확인한 뒤 서명해야 게시됩니다. 서명 없는 글은 올라가지 않습니다.',
        },
        {
          q: '계약이 끝나면 무엇이 남나요?',
          a: '측정 기록 · 매뉴얼 · 설정값은 고객 소유이고, 진단 · 발행 · 측정 도구는 사용권이 유지됩니다. 직접 운영하거나 월 단위 유지관리를 선택할 수 있습니다.',
        },
      ],
    },
    bottomNav: {
      heading: '우리 회사에 어떤 구성이 맞는지 살펴보세요',
      lead: '기반 정비부터 주간 콘텐츠 · 측정 운영까지 필요한 범위만 골라 시작할 수 있습니다.',
      nextLabel: '다음: 서비스 구성 보기 →',
      nextSlug: 'services',
    },
  },

  /* ====== 구간 2: 서비스 (/ko/services/) ====== */
  services: {
    metaTitle: '서비스 · zicks',
    metaDescription:
      '기반 정비(A) · 홈페이지 이관(B) · 콘텐츠 · 측정 운영(C). 각각 따로 계약할 수 있고, 기반 정비와 월 운영으로 첫 달 결과를 먼저 확인하는 순서를 권합니다.',
    header: {
      eyebrow: '서비스 구성',
      h1Lines: ['필요한 범위만 계약하고,', '첫 달 결과를 본 뒤 결정하세요'],
      lead: '세 가지 서비스는 각각 따로 계약할 수 있습니다. 기반 정비(A)와 콘텐츠 · 측정 운영(C)을 함께 시작해 4주 뒤 전후 비교를 보신 다음 계속 여부와 홈페이지 이관(B)을 정하시는 순서를 권합니다.',
    },
    featured: {
      chip: '권장 시작 조합 · A + C',
      headingLines: ['기반 정비와 주간 측정 운영으로', '첫 4주 전후 변화를 먼저 확인합니다'],
      body: `기존 홈페이지에서 바로 고칠 수 있는 크롤러 · 색인 · 회사 정보 코드를 정비하면서, 고객 질문에 답하는 검수 글 발행과 주간 측정을 함께 돌립니다. 종료 시 구축한 기록과 매뉴얼은 그대로 고객사에 남습니다.`,
      primaryBtn: { label: '가격 보기', slug: 'pricing' },
      secondaryBtn: { label: '무료 진단 요청', slug: 'contact' },
      mock: {
        badge: '인계 패키지 구성',
        title: '운영 중 쌓이고 종료 후에도 남는 자산',
        items: [
          { label: '크롤러 허용 · 사이트맵 · 회사 정보 코드(JSON-LD)', owner: '고객사 사이트 반영', isClientOwned: true },
          { label: '고정 질문 20개 목록 · 주차별 AI 답변 원문 기록', owner: '고객사 소유', isClientOwned: true },
          { label: '현장 담당자 검수 · 서명 원고 및 운영 매뉴얼', owner: '고객사 소유', isClientOwned: true },
          { label: '진단 · 발행 · 측정 도구', owner: '사용권 유지' },
        ],
        footnote: '종료 후 자체 인력으로 직접 운영하거나 선택형 유지관리만 이어갈 수 있습니다.',
      },
    },
    offersSection: {
      eyebrow: '개별 서비스 상세',
      heading: '세 가지 서비스 단위',
      lead: '순서 강제 없이 현재 홈페이지 상태에 맞춰 단독 또는 조합으로 진행합니다.',
      cards: [
        {
          code: '구성 A',
          duration: '4주',
          title: '기반 정비 · 새 사이트',
          recommendedTag: '시작 권장',
          summary: '지금 홈페이지에서 고칠 수 있는 기술 · 구조 문제를 전부 바로잡고 첫 기준선을 측정합니다.',
          details: [
            '크롤러 접근 · 색인 경로 · 사이트맵 · 제목 · 설명문 · 회사 정보 코드 정비',
            '현재 플랫폼이 AI 봇을 막는 구조라면 별도 주소에 새 사이트를 먼저 구축',
            '질문 세트 20개 확정 · 첫 측정 및 주간 측정 4회 연결',
            '4주 뒤 같은 도구로 재측정해 전후 비교 보고',
          ],
        },
        {
          code: '구성 C',
          duration: '월 단위',
          title: '콘텐츠 · 측정 운영',
          recommendedTag: '시작 권장',
          summary: '고객의 질문 · 피드백 · 후기를 현장 담당자 서명이 담긴 글로 바꾸고 매주 측정합니다.',
          details: [
            `월 ${KO_PRICING.monthlyArticles}편(한 질문에 한 글), 담당자 검수 · 서명 후 게시`,
            '매주 고정 질문 세트로 답변 변화를 측정해 다음 주 글 주제 선정',
            '보유 사례 재구성 · 외부 등록 · 실무 교육 4회 포함',
            '종료 시 도구 사용권 · 누적 측정 기록 · 운영 매뉴얼 인계',
          ],
        },
        {
          code: '구성 B',
          duration: '3~4주',
          title: '홈페이지 이관',
          summary: '첫 달 결과를 확인한 뒤, 기존 플랫폼 한계를 근본적으로 넘어야 할 때 워드프레스 또는 정적 사이트로 옮깁니다.',
          details: [
            '기존 주소 전부 연결',
            '기존 사례 · 사진 · 문의 내역 보존 및 검증 2회',
            '백업 · 복원 절차 시연 및 문제 발생 시 되돌림 계획 포함',
            '호스팅은 고객사 명의로 직접 계약',
          ],
        },
      ],
    },
    boundaries: {
      eyebrow: '약속의 경계',
      heading: '약속하지 않는 것 · 대신 보고하는 것',
      notPromisedTitle: '보장하지 않는 것',
      notPromisedItems: [
        'AI 추천 순위 · 검색 순위',
        '매출 증가 · 문의 건수 (AI 플랫폼의 정책이 바뀌면 결과도 흔들립니다)',
      ],
      reportedTitle: '대신 매주 보고하고 완료로 삼는 것',
      reportedItems: [
        '「AI가 우리 회사를 언급했는가」와 「언급될 준비가 됐는가」를 매주 따로 보고',
        '만들고 · 확인하고 · 고객사에 넘겨준 것으로 일의 완료를 판단',
      ],
      footnote: '범위와 보고 기준을 계약 전에 먼저 맞춘 뒤 작업을 시작합니다.',
    },
    bottomNav: {
      heading: '단계별 금액과 후불 정산 조건을 확인하세요',
      lead: '모든 작업은 결과 보고 후 청구하는 후불 기준이며, 첫 달 결과를 보고 계속 여부를 결정하실 수 있습니다.',
      nextLabel: '다음: 가격 보기 →',
      nextSlug: 'pricing',
    },
  },

  /* ====== 구간 2: 가격 가안 틀 (/ko/pricing/) ====== */
  pricing: {
    metaTitle: '가격 · zicks',
    metaDescription: `기반 정비(A) ${P.planAMan} · 홈페이지 이관(B) ${P.planBMan} · 콘텐츠 · 측정 운영(C) ${P.planCMonthlyMan} (VAT 별도). 후불 정산, 첫 달 결과 확인 후 계속 여부 결정.`,
    header: {
      asOfBadge: KO_PRICING.asOfLabel,
      h1Lines: ['완료 보고 뒤에 청구하는 후불 구조,', '첫 달 결과를 보고 결정합니다'],
      lead: 'VAT 별도입니다. 제작 과정은 완료 보고 뒤, 월 운영은 매월 결과 보고와 함께 익월 청구합니다. 호스팅 · 도메인 · 보도자료 송출 같은 외부 실비는 고객 명의로 직접 결제합니다.',
    },
    starterBox: {
      chip: '권장 시작 순서 · A + C',
      headingLines: [`첫 달 ${P.firstMonthACMan}으로 시작해`, '4주 뒤 전후 비교를 보고 결정하세요'],
      highlightAmount: P.firstMonthACMan,
      body: `1주차에 기반 정비(A)와 콘텐츠 · 측정 운영(C)을 함께 시작해 4주간 측정 기록을 쌓은 뒤, 홈페이지 이관(B) 및 월 운영 연장 여부를 정합니다. 3개월 전체 진행 시 ${P.threeMonthsTotalMan}(글 ${KO_PRICING.threeMonthsArticles}편) 규모입니다.`,
      badges: ['후불 청구', 'VAT 별도', '외부 실비 고객 명의'],
      footnote:
        '고객사 담당자가 주 2시간 안팎의 검수 시간을 내기 어려우면 월 발행 편수를 줄이고 금액을 함께 조정합니다.',
      timelineMock: {
        badge: '첫 4주 흐름 예시',
        title: '선결제 부담 없이 결과 보고 후 정산',
        milestones: [
          { phase: '1주차', task: '무료 진단 검토 · 질문 20개 확정 · 첫 기준선 측정', tag: '착수' },
          { phase: '2~3주차', task: '크롤러 · 정보 코드 정비 + 담당자 검수 원고 게시', tag: '정비 · 발행' },
          { phase: '4주차', task: '주간 측정 4회 취합 · 전후 비교 보고서 전달', tag: '결과 보고' },
          { phase: '보고 후', task: '완료 확인 뒤 청구 · B 이관 또는 C 연장 여부 결정', tag: '후불 정산' },
        ],
      },
    },
    plansSection: {
      eyebrow: '단계별 포함 범위와 금액',
      heading: '세 가지 구성과 기준 금액',
      cards: [
        {
          badge: '구성 A · 4주',
          title: '기반 정비 · 새 사이트',
          price: P.planA,
          billingNote: '완료 보고 뒤 후불 · VAT 별도',
          summary: '홈페이지 기술 · 정보 구조 정비와 4주 전후 비교 측정 패키지입니다.',
          includes: [
            '초기 정밀 진단 · 고정 질문 세트 20개 확정 · 첫 측정',
            '크롤러 접근 · 색인 · 설명문 · 제목 · 회사 정보 코드 정비',
            '자동 게시 연결 · 비즈니스 프로필 정리 · 보도자료 1건',
            '주간 측정 4회 및 4주차 전후 비교 보고',
          ],
          featured: true,
        },
        {
          badge: '구성 C · 월 단위',
          title: '콘텐츠 · 측정 운영',
          price: P.planCMonthly,
          billingNote: '매월 결과 보고와 함께 익월 청구 · VAT 별도',
          summary: '현장 질문 기반 원고 발행과 주간 AI 답변 측정 · 인계 루프입니다.',
          includes: [
            `고객 질문에 답하는 글 월 ${KO_PRICING.monthlyArticles}편 (담당자 검수 · 서명, 수정 요청 2회 포함)`,
            '보유 사례 재구성 및 외부 출처 등록',
            '주간 질문 세트 측정 · 답변 원문 보고 · 실무 교육 4회',
            '종료 시 도구 사용권 · 측정 기록 · 매뉴얼 인계',
          ],
          featured: true,
        },
        {
          badge: '구성 B · 3~4주 (선택)',
          title: '홈페이지 이관',
          price: P.planB,
          billingNote: '완료 보고 뒤 후불 · VAT 별도',
          summary: '첫 달 결과를 본 뒤 워드프레스나 정적 사이트로 이관이 필요할 때 선택합니다.',
          includes: [
            '워드프레스 또는 정적 사이트 구축 및 기존 주소 전부 연결',
            '기존 사례 · 사진 · 문의 보존 및 이관 검증 2회',
            '백업 · 복원 시연 및 되돌림 계획 수립',
          ],
          footnote: `호스팅 실비 참고: ${P.hostingNote}`,
        },
      ],
    },
    addons: {
      heading: '선택 옵션 · 종료 후 지원',
      items: [
        {
          title: '옵션 · 질문 발굴',
          price: P.optDiscovery,
          desc: '고객 질문 자료가 부족할 때 온라인 커뮤니티 · 입찰 공고에서 발주자 질문을 매주 수집 · 분류합니다.',
        },
        {
          title: '종료 후 유지관리 (선택)',
          price: P.optMaintRange,
          desc: '월 1~2시간 점검 · 소규모 수정 · 백업 확인. 선택 사항이며 기본 도구 사용권 유지와는 무관합니다.',
        },
      ],
    },
    bottomNav: {
      heading: '계약 전에 무료 진단 한 장으로 먼저 확인해 보세요',
      lead: '홈페이지 주소만 보내 주시면 현재 크롤러 접근 상태와 AI 답변 현황을 먼저 점검해 드립니다.',
      nextLabel: '사례 먼저 보기 →',
      nextSlug: 'cases',
    },
  },

  /* ====== 구간 3: 사례 (/ko/cases/) ====== */
  cases: {
    metaTitle: '사례 · zicks',
    metaDescription:
      'FeverCoach 블로그 11주 성과와 zicks 자체 사이트 운영 기록. 고객사 사례는 서면 동의 뒤에만 공개합니다.',
    header: {
      eyebrow: '선행 검증 · 자체 운영',
      h1Lines: ['우리 제품으로 먼저 해 보고,', '이 사이트도 같은 방식으로 운영합니다'],
      lead: '의사가 검수한 답변 2,400개 이상을 재료로 영어 · 스페인어 · 한국어 블로그를 발행하고 매주 Google Search Console로 측정했습니다. FeverCoach는 zicks의 첫 번째 사용자입니다.',
    },
    fevercoach: {
      badge: '자사 제품에 먼저 적용',
      heading: 'FeverCoach — 자사 소아 발열 앱',
      lead: '의사가 검수한 질문 · 답변 원고를 다국어 블로그로 발행하면서 색인 규모, 검색 유입, 구글 생성형 AI 노출, 외부 참조 도메인 변화를 날짜별 원장으로 기록했습니다.',
      stats: [
        {
          label: '검색 클릭 (11주)',
          before: '460 → ',
          value: '2,910',
          caption: 'Google Search Console · 3개 언어 합산',
        },
        {
          label: '구글에 등록된 페이지 (11주)',
          before: '318 → ',
          value: '2,096',
          caption: 'Google Search Console',
        },
        {
          label: '구글 생성형 AI 노출 (3개월)',
          value: '98.1K',
          caption: '일간 약 300 → 3,500 · Google Search Console',
        },
        {
          label: '참조 도메인 (4개월)',
          before: '160 → ',
          value: '631',
          caption: '외부에서 링크하는 도메인 · 외부 링크 분석 도구',
        },
      ],
      ledgerNote:
        '측정 기간 2026-06 → 2026-10. 자사 제품(FeverCoach)의 기록이며 다른 업종 · 사이트의 결과를 보장하지 않습니다. 개입(바꾼 것)과 측정값은 날짜별 원장으로 기록해 두었고, 요청하시면 보여 드립니다.',
    },
    thisSite: {
      eyebrow: '자체 적용 현황',
      heading: 'zicks — 이 사이트도 같은 원칙으로 만들었습니다',
      lead: '정적 사이트 생성기(Astro)로 만들어 무료 호스팅에 올렸고, 모든 주요 AI 크롤러에 열어 두었습니다. 회사 정보 코드 · 사이트맵 · llms.txt가 실제로 들어가 있습니다.',
      checks: [
        {
          num: '01',
          title: '읽을 수 있는가',
          body: 'robots.txt에서 GPTBot · ClaudeBot · PerplexityBot 등 주요 검색 · AI 크롤러를 전부 허용했습니다. 서버를 거치지 않는 정적 HTML이라 응답이 빠릅니다.',
          assetLink: {
            label: 'robots.txt 직접 보기 ↗',
            relPath: '/robots.txt',
          },
        },
        {
          num: '02',
          title: '무엇을 하는 회사인가',
          body: 'Organization · Service 구조화 코드는 모든 페이지에, FAQ 코드는 「어떻게 일하나」 페이지에 넣었습니다. llms.txt로 AI에게 한 번에 설명합니다.',
          assetLink: {
            label: 'llms.txt 직접 보기 ↗',
            relPath: '/llms.txt',
          },
        },
        {
          num: '03',
          title: '측정',
          body: '질문 세트를 매주 ChatGPT · Claude · Gemini · Perplexity에 묻고 언급 여부를 기록합니다. 첫 측정은 개편 사이트 공개 주에 하며, 기록이 쌓이는 대로 이 페이지에 공개합니다.',
        },
      ],
    },
    clientPolicy: {
      badge: '고객사 사례 공개 원칙',
      heading: '고객사 기록은 서면 동의 뒤에만 공개합니다',
      body: '진행 중인 고객사의 질문 목록과 측정 기록은 고객사 자산이므로 임의로 외부에 올리지 않습니다. 타사 사례 대신 무료 진단으로 지금 귀사 홈페이지가 AI에게 어떻게 보이는지 먼저 확인해 보세요.',
      ctaLabel: '무료 진단 요청',
      secondaryLabel: '가격 보기 →',
      secondarySlug: 'pricing',
    },
  },

  /* ====== 구간 3: 무료 진단 요청 (/ko/contact/) ====== */
  contact: {
    metaTitle: '무료 진단 요청 · zicks',
    metaDescription:
      '홈페이지 주소만 보내 주시면 크롤러 접근 · 색인 · 회사 정보 코드 · 설명문을 같은 도구로 재서 3영업일 안에 한 장으로 드립니다.',
    header: {
      eyebrow: '무료 1장 진단',
      h1Lines: ['홈페이지 주소와 질문 한두 개로', '현재 AI 노출 상태를 먼저 확인하세요'],
      lead: '홈페이지 주소와 AI에게 물어봤던 질문 한두 개만 보내 주세요. 크롤러 접근 · 색인 · 회사 정보 코드 · 설명문을 재서 한 장으로 드리고, AI가 지금 귀사를 어떻게 설명하는지 답변 원문을 함께 보냅니다. 3영업일 안에 회신합니다.',
    },
    actionCard: {
      badge: '이메일로 바로 요청',
      emailLabel: '문의 이메일',
      composeBtn: '메일 앱 열기 (양식 자동 채움)',
      copyBtn: '이메일 주소 복사',
      copiedBtn: '✓ 복사되었습니다',
      templateTitle: '웹메일 사용 시 아래 세 줄만 적어 보내 주세요',
      templateItems: [
        '회사명 · 홈페이지 주소',
        'AI에게 물어봤던 질문 (또는 고객이 자주 묻는 질문 1~2개)',
        '회신받을 담당자 성함 · 연락처',
      ],
      reviewerBadge: '담당자 직접 확인',
      reviewerTitle: '김명찬 대표 (의사 · 창업자)가 직접 봅니다',
      reviewerBody: '모닥에이아이코리아 · MoDoc AI. 보내 주신 홈페이지 주소와 질문을 직접 확인해 3영업일 안에 답변 메일을 드립니다.',
    },
    auditMock: {
      sampleBadge: '구성 안내',
      windowTag: '3영업일 내 회신되는 1장 진단서',
      title: '무료 진단 한 장에 담기는 네 가지',
      rows: [
        {
          num: '01',
          title: '크롤러 접근 · 색인 상태',
          detail: 'robots.txt · 사이트맵 · 주요 검색 및 AI 봇 차단 여부 확인',
          status: '기술 점검',
        },
        {
          num: '02',
          title: '회사 · 서비스 정의 코드',
          detail: '페이지 제목 · 설명문 · Organization/Service JSON-LD 유무 확인',
          status: '구조 점검',
        },
        {
          num: '03',
          title: '현재 AI 답변 원문 첨부',
          detail: 'AI가 지금 귀사와 보내 주신 질문을 어떻게 설명하는지 답변 원문을 함께 전달',
          status: '원문 첨부',
        },
        {
          num: '04',
          title: '바로 고칠 수 있는 우선순위',
          detail: '현재 홈페이지에서 먼저 보완할 수 있는 항목 정리',
          status: '요약 안내',
        },
      ],
      footnote: '홈페이지 주소와 물어봤던 질문 한두 개를 보내 주시면 위 항목을 한 장으로 보내 드립니다.',
    },
    reassurance: [
      '3영업일 안에 회신합니다',
      '진단 결과만 받아 보셔도 됩니다',
      '순위 · 매출 증가는 보장하지 않습니다',
    ],
  },
};
