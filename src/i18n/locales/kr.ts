import { KR_PRICING, formatManwon } from '../../data/pricing';
import type { SiteDict } from '../types';

/*
 * 한국판 (/kr/). 학원과 교육업체 대상의 별도 상품.
 * 홈, 헤더, 푸터 문구 원본: handoff design/kr-home.html
 * 하위 5개 페이지는 기존 ko.ts 내용과 가격을 새 부품 모양으로 다시 조립한 것 (HANDOFF 7.3).
 */

const P = KR_PRICING.formatted;
const N = KR_PRICING;

const enginesText = '네이버, ChatGPT, Claude, Gemini, Perplexity';
const titleSuffix = 'zicks 학원 AI 검색 운영';

/** 표 안의 월 단위 금액 (per ' / 월'과 함께 씀) */
const man = {
  planA: P.planAMan,
  planB: P.planBMan,
  planC: formatManwon(N.planCMonthly),
  discovery: formatManwon(N.optDiscoveryMonthly),
  maint: `${N.optMaintMin / 10_000}~${formatManwon(N.optMaintMax)}`,
};

export const kr: SiteDict = {
  brandSub: 'by MoDoc AI',
  ctaLabel: '무료 진단 받기',
  nav: [
    { slug: 'how', label: '진행 방식' },
    { slug: 'services', label: '서비스' },
    { slug: 'cases', label: '사례' },
    { slug: 'pricing', label: '가격' },
  ],
  marketLink: 'US service',
  marketLine: 'Looking for the US service?',
  marketLang: 'en',
  aria: {
    primaryNav: '주요 메뉴',
    mobileNav: '모바일 메뉴',
    footerNav: '하단 메뉴',
    langSwitcher: '언어 선택',
    openMenu: '메뉴 열기',
    closeMenu: '메뉴 닫기',
  },
  footer: {
    companyLine: '모닥에이아이코리아 (MoDoc AI)',
    contactLabel: '문의',
    disclaimer:
      'AI 추천 순위, 검색 순위, 매출 증가는 보장하지 않습니다. 보고하는 것은 인용되었는지, 그리고 인용될 조건이 갖춰졌는지입니다.',
  },
  orgSchema: {
    name: 'zicks by MoDoc AI',
    alternateName: ['zicks', 'MoDoc AI', '모닥에이아이코리아'],
    description: `학원과 교육업체를 위한 AI 검색 측정과 콘텐츠 운영. 학부모가 상담에서 묻는 질문으로 ${enginesText}의 답을 매주 기록하고, 빠진 자리는 원장님이 검수한 글로 채웁니다.`,
    founderName: '김명찬',
    founderJobTitle: '대표, 의사',
  },
  serviceSchema: {
    name: 'zicks 학원 AI 검색 측정과 콘텐츠 운영',
    providerName: '모닥에이아이코리아',
    serviceType: '학원과 교육업체를 위한 AI 검색 노출 측정, 홈페이지 기반 정비, 콘텐츠 운영',
    description: `학원과 교육업체의 홈페이지와 블로그를 AI가 읽을 수 있게 정비하고, 학부모 상담 질문 20개로 ${enginesText}의 답변을 매주 측정합니다. 원고는 원장님이나 담당 강사가 검수하고 서명한 뒤에만 게시합니다.`,
  },

  home: {
    metaTitle: `${titleSuffix} | 매주 측정하고 검수한 글로 채웁니다`,
    metaDescription:
      '학부모가 상담에서 묻는 질문 20개로 AI 검색 5곳의 답을 매주 기록하고, 빠진 자리는 원장님이 검수한 글로 채웁니다. 학원과 교육업체를 위한 모닥에이아이코리아의 AI 검색 운영.',
    hero: {
      title: 'AI 답변 속 우리 학원,\n매주 측정하고 채웁니다',
      lead: '학부모가 상담에서 묻는 질문 20개로 AI 검색 5곳의 답을 매주 기록하고, 빠진 자리는 원장님이 검수한 글로 채웁니다.',
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '진행 방식 보기', slug: 'how' },
      note: '홈페이지나 블로그 주소만 보내 주시면 3영업일 안에 진단서 한 장을 드립니다. 비용은 없습니다.',
      panel: {
        ariaLabel:
          '주간 측정 화면 예시. 고정 질문별로 AI 검색 5곳이 학원 이름을 언급했는지, 학원 페이지를 출처로 연결했는지 표시합니다.',
        tabs: ['주간 측정', '주제 추천', '원고 검수', '인계 자료'],
        sampleBadge: '가상 데이터',
        context: '11월 2주차',
        contextMenu: true,
        summary: [
          { label: '고정 질문', value: '20', note: '첫 주에 확정' },
          { label: '학원명 언급', value: '9', note: '지난주 6', accent: true },
          { label: '출처로 연결', value: '4', note: '지난주 2', accent: true },
          { label: '다음 주 주제', value: '3', note: '빠진 질문에서 추천' },
        ],
        questionHeader: '질문 (20개 중 5개)',
        engines: ['네이버', 'ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
        highlightEngine: 0,
        rows: [
          {
            q: '중2 수학학원 고를 때 상담에서 꼭 물어볼 것은?',
            tag: '선정 기준',
            marks: ['cited', 'named', 'cited', 'named', 'none'],
          },
          {
            q: '학원 수강료 환불은 어떤 기준으로 받나요?',
            tag: '수강료와 운영',
            marks: ['named', 'cited', 'named', 'none', 'cited'],
          },
          {
            q: '내신 대비 기간에 보강은 몇 번 해 주나요?',
            tag: '빈자리 질문',
            topic: '다음 주 주제',
            marks: ['none', 'none', 'none', 'none', 'none'],
          },
          {
            q: '분당 중등 수학학원 추천해 줘',
            tag: '지역 추천',
            marks: ['named', 'none', 'none', 'named', 'none'],
          },
          {
            q: '○○수학학원은 어떤 곳인가요?',
            tag: '브랜드 확인',
            marks: ['cited', 'named', 'cited', 'named', 'named'],
          },
        ],
        markLabels: { cited: '출처', named: '언급', none: '없음' },
        legend: {
          cited: '우리 페이지가 답변의 근거로 연결됨',
          named: '답변에 학원 이름이 나옴',
        },
      },
    },
    audit: {
      heading: 'AI가 학원을 추천할 때 보는\n네 가지부터 점검합니다',
      lead: '자사 제품 FeverCoach에 먼저 적용해 본 순서 그대로 학원 홈페이지와 블로그를 진단하고, 결과를 한 장으로 정리해 드립니다.',
      link: { label: '진단 항목 자세히 보기', slug: 'contact' },
      doc: {
        ariaLabel: '홈페이지 AI 진단서 가상 예시',
        title: '홈페이지 AI 진단서',
        meta: '○○수학학원  2026년 11월 10일',
        badge: '가상 예시',
        items: [
          {
            title: '읽을 수 있는가',
            scope: '검색 로봇과 AI 크롤러 접근, 색인, 사이트맵',
            finding: '블로그의 수업 안내가 이미지로만 올라가 있어 AI가 내용을 읽지 못합니다.',
            status: '보완 필요',
            tone: 'warn',
          },
          {
            title: '어떤 학원인가',
            scope: '대상 학년, 과목, 위치를 담은 한 줄 정의와 학원 정보 코드(JSON-LD), 네이버 플레이스',
            finding: '홈페이지와 네이버 플레이스에 적힌 대상 학년이 서로 다릅니다.',
            status: '보통',
            tone: 'neutral',
          },
          {
            title: '질문에 답하는가',
            scope: '학부모가 상담에서 실제로 묻는 말에 답하는 글',
            finding: '상담에서 자주 받는 질문 8개 중 홈페이지에 답이 있는 것은 1개입니다.',
            status: '보완 필요',
            tone: 'warn',
          },
          {
            title: '다른 곳에서도 확인되는가',
            scope: '네이버 플레이스 리뷰, 지역 카페 언급, 교육 플랫폼 등록',
            finding: '플레이스 리뷰와 지역 카페 언급이 꾸준히 확인됩니다.',
            status: '양호',
            tone: 'pass',
          },
        ],
        next: {
          label: '권장 순서',
          text: '이미지로 된 수업 안내를 글로 옮기고, 답이 없는 상담 질문 7개를 첫 4주 주제로 잡습니다.',
        },
      },
    },
    steps: {
      heading: '매주 같은 질문으로 재고,\n빠진 자리부터 채웁니다',
      lead: '반복은 도구가 맡고, 사실 확인과 게시 결정은 원장님이나 담당 강사가 합니다. 검수 시간은 주 2시간 안팎입니다.',
      items: [
        {
          role: '도구',
          title: '고정 질문 측정',
          body: '상담 기록에서 고른 질문 20개를 매주 같은 문장으로 묻고, AI 검색 5곳의 답과 대신 추천된 학원을 기록합니다.',
          kind: 'tool',
        },
        {
          role: '도구',
          title: '다음 주 주제 추천',
          body: '우리 학원이 빠진 질문과 주변 학원의 언급 현황을 정리해 다음 주 원고 주제를 추립니다.',
          kind: 'tool',
        },
        {
          role: '원장님',
          title: '검수와 서명',
          body: '초안의 커리큘럼, 수강료, 일정이 맞는지 원장님이나 담당 강사가 확인하고 서명합니다. 서명 없는 글은 올라가지 않습니다.',
          kind: 'review',
        },
        {
          role: '도구',
          title: '게시와 재측정',
          body: '승인된 글을 게시하고 검색엔진에 등록한 뒤, 다음 주 측정에서 달라진 점을 한 장으로 보고합니다.',
          kind: 'tool',
        },
      ],
    },
    proof: {
      heading: '먼저 우리 제품으로\n해 봤습니다',
      lead: '의사가 검수한 답변 2,400개 이상으로 자사 소아 발열 앱 FeverCoach의 블로그를 운영하며 매주 기록한 결과입니다.',
      link: { label: '사례 자세히 보기', slug: 'cases' },
      stats: [
        {
          label: 'Google 검색 클릭',
          value: '2,910',
          change: '11주 전 460에서',
          source: '출처: Google Search Console',
        },
        {
          label: '구글 생성형 AI 노출',
          value: '98.1K',
          change: '3개월 누적, 일간 약 300에서 3,500으로',
          source: '출처: Google Search Console',
        },
        {
          label: '외부에서 링크하는 도메인',
          value: '631',
          change: '약 4개월 전 160에서',
          source: '출처: 외부 링크 분석 도구',
        },
      ],
      note: '측정 기간은 2026년 6월부터 10월까지입니다. 자사 제품의 기록이며 다른 업종이나 사이트의 결과를 보장하지 않습니다. 고객사 사례는 서면 동의를 받은 뒤에만 공개합니다.',
    },
    compare: {
      heading: '기존 대행과 무엇이 다른가요',
      lead: '보고서만 남는 대행이 아니라, 계약이 끝나도 직접 이어 갈 수 있게 일합니다.',
      headers: ['항목', '일반적인 블로그 대행', 'zicks'],
      rows: [
        {
          topic: '질문 관리',
          legacy: '검색 키워드로 블로그 글을 쌓고 월 1회 보고합니다.',
          zicks: '첫 주에 질문 20개를 고정하고 매주 같은 문장으로 측정합니다. 쉬운 질문으로 성과를 꾸밀 수 없습니다.',
        },
        {
          topic: '성과 보고',
          legacy: '블로그 순위와 조회수를 보고합니다.',
          zicks: '학원 이름이 나왔는지, 우리 페이지가 출처로 걸렸는지 나눠서 답변 원문과 함께 보여 드립니다. 순위와 원생 모집은 보장하지 않습니다.',
        },
        {
          topic: '계약이 끝나면',
          legacy: '결과 보고서만 남습니다.',
          zicks: '측정 도구 사용권, 질문 목록, 누적 기록, 운영 매뉴얼을 넘겨받아 직접 이어서 운영할 수 있습니다.',
        },
      ],
    },
    bottomCta: {
      heading: '지금 우리 학원이 AI에게\n어떻게 보이는지부터 확인하세요',
      lead: '크롤러 접근, 색인, 학원 정보 코드, 설명문을 점검해 3영업일 안에 한 장으로 보내 드립니다. 비용은 없습니다.',
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '가격 먼저 보기', slug: 'pricing' },
    },
  },

  // 검토 필요 (HANDOFF 7.3): 학원 기준 문구 미정리
  how: {
    metaTitle: `진행 방식 | ${titleSuffix}`,
    metaDescription: `학부모 상담 질문 20개를 고정해 매주 ${enginesText}에 묻고, 학원이 빠진 질문에서 다음 글의 주제를 정합니다. 글의 틀과 원장님 검수, 서명 절차.`,
    hero: {
      title: '질문을 고정해 매주 재고,\n빠진 자리부터 글로 채웁니다',
      lead: `감으로 키워드를 골라 블로그 순위를 보는 방식이 아닙니다. 첫 주에 정한 상담 질문 20개로 매주 ${enginesText}의 답변을 확인하고, 우리 학원이 빠진 질문에서 다음 주 주제를 정합니다.`,
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '서비스 보기', slug: 'services' },
    },
    stepsTable: {
      heading: '반복은 도구가 돌리고,\n사실 확인만 원장님이 맡습니다',
      lead: '상담 기록, 전화 문의 메모, 학부모가 자주 묻는 질문이 글의 재료가 됩니다. 서명 없는 글은 게시되지 않으며, 원장님이나 담당 강사의 검수 시간은 주 2시간 안팎입니다.',
      headers: ['단계', '하는 일', '담당', '결과물'],
      rows: [
        {
          title: '고정 질문 20개 매주 측정',
          body: `첫 주에 확정해 둔 같은 문장으로 ${enginesText}에 묻고, 답변과 대신 추천된 학원을 기록합니다.`,
          owner: '도구',
          output: '질문별 답변 원문 기록',
          kind: 'tool',
        },
        {
          title: '빠진 질문과 주제 추천',
          body: '우리 학원이 빠진 질문과 주변 학원의 언급 현황을 정리해 다음 주 원고 주제를 추립니다.',
          owner: '도구',
          output: '다음 주 원고 주제',
          kind: 'tool',
        },
        {
          title: '상담 자료 대조, 검수와 서명',
          body: '상담 기록과 대조해 초안을 다듬고, 커리큘럼, 수강료, 일정이 맞는지 원장님이나 담당 강사가 확인하고 서명합니다.',
          owner: '원장님이나 담당 강사',
          output: '서명한 원고',
          kind: 'review',
        },
        {
          title: '게시와 다음 주 재측정',
          body: '승인된 글을 학원 정보 코드와 함께 게시하고 검색엔진에 등록합니다. 다음 주 측정에서 달라진 점을 한 장으로 보고합니다.',
          owner: '도구',
          output: '한 장 주간 보고서',
          kind: 'tool',
        },
      ],
    },
    inputs: {
      heading: '질문 20개는\n다섯 갈래로 구성합니다',
      lead: '경쟁이 치열한 지역 추천 질문만 쫓지 않고, 실제로 먼저 인용될 수 있는 세부 질문까지 균형 있게 묶습니다.',
      items: [
        {
          title: '지역 추천',
          body: '예: 분당 중등 수학학원 추천. 경쟁이 커서 단기간에 들어가기는 어렵지만, 기준선으로 매주 기록합니다.',
        },
        {
          title: '선정 기준과 수강료',
          body: '예: 학원 고를 때 상담에서 물어볼 것, 수강료 환불 기준. 조건과 기준을 정리한 안내 글이 먼저 인용되는 영역입니다.',
        },
        {
          title: '수업 운영과 관리',
          body: '예: 내신 대비 보강, 결석 시 보충, 학부모 상담 주기. 구체적인 단계별 안내와 자주 묻는 질문 글이 출처로 연결됩니다.',
        },
        {
          title: '빈자리 세부 질문',
          body: '상담에서는 자주 듣지만 온라인에 정돈된 답이 거의 없는 질문입니다. 가장 먼저 언급될 수 있는 영역입니다.',
        },
        {
          title: '브랜드 확인',
          body: '예: ○○수학학원은 어떤 곳인가요. AI가 대상 학년, 과목, 위치를 틀리지 않고 바르게 설명하도록 바로잡습니다.',
        },
      ],
    },
    principles: {
      heading: '글은 학부모의 질문에서 시작합니다',
      lead: '상담 기록, 전화 문의 메모, 자주 받는 질문, 수업 현장 이야기가 제목이 되고, 실제 사례와 숫자가 본문이 됩니다. 자료가 부족하면 지역 카페 같은 온라인 커뮤니티에서 학부모 질문을 대신 모아 옵니다.',
      items: [
        {
          title: 'AI가 인용하기 좋은 구조',
          body: '첫 문단에서 바로 답하고, 구체적인 숫자 3개 이상, 실제 사례 1개, 출처 1개를 넣습니다. 불필요한 키워드는 반복하지 않습니다.',
        },
        {
          title: '주 2시간 안팎의 사실 확인',
          body: '원장님이나 담당 강사가 커리큘럼, 수강료, 일정이 맞는지 확인하고 서명합니다. 서명 없는 글은 게시되지 않습니다.',
        },
        {
          title: '발행 후 주간 한 장 보고',
          body: '승인하면 게시하고 검색엔진에 등록합니다. 다음 주 측정에서 AI 답변이 어떻게 달라졌는지 한 장 보고서로 공유합니다.',
        },
      ],
    },
    compare: {
      heading: '기존 대행과 다른 점',
      headers: ['항목', '일반적인 블로그 대행', 'zicks 운영'],
      rows: [
        {
          topic: '질문과 키워드 관리',
          legacy: '경험으로 키워드를 고르고 월 1회 보고합니다.',
          zicks: '첫 주에 질문 20개를 고정하고 매주 같은 문장으로 측정합니다. 쉬운 질문으로 성과를 꾸밀 수 없습니다.',
        },
        {
          topic: '성과 보고 기준',
          legacy: '블로그 순위와 조회수를 보고합니다.',
          zicks: 'AI 답변에 학원 이름이 나왔는지, 우리 페이지가 출처로 걸렸는지 나눠서 답변 원문과 함께 공유합니다.',
        },
        {
          topic: '계약이 끝난 뒤 남는 것',
          legacy: '결과 보고서만 남습니다.',
          zicks: '측정 도구 사용권, 고정 질문 목록, 누적 기록, 운영 매뉴얼을 넘겨받아 직접 이어서 운영할 수 있습니다.',
        },
      ],
    },
    faq: {
      heading: '자주 묻는 질문',
      items: [
        {
          q: 'GEO가 무엇인가요?',
          a: `Generative Engine Optimization의 줄임말입니다. ${enginesText} 같은 AI 검색이 답을 쓸 때 우리 학원을 언급하거나 우리 페이지를 출처로 인용할 수 있도록 홈페이지 구조와 글을 갖추고 측정하는 일입니다.`,
        },
        {
          q: 'AI 추천 순위나 원생 모집을 보장하나요?',
          a: '보장하지 않습니다. 대신 매주 같은 질문으로 AI 답변을 측정해, 학원 이름이 언급되었는지와 언급될 조건이 갖춰졌는지를 나눠 보고합니다.',
        },
        {
          q: '글은 누가 쓰나요?',
          a: '학부모가 실제로 묻는 질문을 재료로 zicks가 초안을 준비하고, 원장님이나 담당 강사가 사실을 확인한 뒤 서명해야 게시됩니다. 서명 없는 글은 올라가지 않습니다.',
        },
        {
          q: '계약이 끝나면 무엇이 남나요?',
          a: '측정 기록, 운영 매뉴얼, 설정값은 학원 소유이고, 진단, 발행, 측정 도구는 사용권이 유지됩니다. 직접 운영하거나 월 단위 유지관리를 선택할 수 있습니다.',
        },
      ],
    },
    bottomCta: {
      heading: '우리 학원에 맞는 구성을\n살펴보세요',
      lead: '기반 정비부터 주간 콘텐츠와 측정 운영까지, 필요한 범위만 골라 시작할 수 있습니다.',
      primary: { label: '서비스 구성 보기', slug: 'services' },
      secondary: { label: '무료 진단 받기', slug: 'contact' },
    },
  },

  // 검토 필요 (HANDOFF 7.3): 학원 기준 문구 미정리
  services: {
    metaTitle: `서비스 | ${titleSuffix}`,
    metaDescription:
      '기반 정비(A), 홈페이지 이관(B), 콘텐츠와 측정 운영(C). 각각 따로 계약할 수 있고, 기반 정비와 월 운영으로 첫 달 결과를 먼저 확인하는 순서를 권합니다.',
    hero: {
      title: '필요한 범위만 계약하고,\n첫 달 결과를 본 뒤 결정하세요',
      lead: '세 가지 서비스는 각각 따로 계약할 수 있습니다. 기반 정비(A)와 콘텐츠와 측정 운영(C)을 함께 시작해 4주 뒤 전후 비교를 보신 다음, 계속 여부와 홈페이지 이관(B)을 정하시는 순서를 권합니다.',
      primary: { label: '가격 보기', slug: 'pricing' },
      secondary: { label: '무료 진단 받기', slug: 'contact' },
    },
    roles: {
      heading: '측정과 주제 추천은 도구가 맡고,\n검수와 결정은 원장님이 합니다',
      lead: '기반 정비(A)와 콘텐츠와 측정 운영(C)을 함께 시작하면, 지금 홈페이지와 블로그에서 바로 고칠 수 있는 크롤러 접근, 색인, 학원 정보 코드를 정비하면서 학부모 질문에 답하는 검수 글을 발행하고 매주 측정합니다.',
      caption: '누가 무엇을 맡는지',
      headers: ['하는 일', '담당'],
      rows: [
        { task: '크롤러 접근, 색인, 사이트맵, 학원 정보 코드(JSON-LD) 정비', owner: 'zicks' },
        { task: '고정 질문 20개 매주 측정과 다음 주 주제 추천', owner: 'zicks 도구' },
        { task: '상담 기록과 학부모가 자주 묻는 질문 공유', owner: '학원', client: true },
        { task: '원고 초안 작성', owner: 'zicks' },
        { task: '커리큘럼, 수강료, 일정 사실 확인과 서명', owner: '원장님이나 담당 강사', client: true },
        { task: '게시, 검색엔진 등록, 주간 한 장 보고', owner: 'zicks 도구' },
      ],
      note: '고정 질문 목록, 주차별 AI 답변 원문 기록, 서명한 원고, 운영 매뉴얼은 학원 소유입니다. 진단, 발행, 측정 도구 사용권은 계약이 끝나도 유지되며, 직접 운영하거나 선택형 유지관리만 이어 갈 수 있습니다.',
    },
    offers: {
      heading: '세 가지 서비스 단위',
      lead: '순서를 강제하지 않고, 지금 홈페이지와 블로그 상태에 맞춰 단독 또는 조합으로 진행합니다.',
      items: [
        {
          title: '기반 정비와 새 사이트',
          meta: '구성 A, 4주, 시작 권장',
          summary: '지금 홈페이지에서 고칠 수 있는 기술과 구조 문제를 바로잡고 첫 기준선을 측정합니다.',
          points: [
            '크롤러 접근, 색인 경로, 사이트맵, 제목, 설명문, 학원 정보 코드 정비',
            '지금 쓰는 플랫폼이 AI 봇을 막는 구조라면 별도 주소에 새 사이트를 먼저 구축',
            '상담 질문 20개 확정, 첫 측정과 주간 측정 4회 연결',
            '4주 뒤 같은 도구로 다시 재서 전후 비교 보고',
          ],
        },
        {
          title: '콘텐츠와 측정 운영',
          meta: '구성 C, 월 단위, 시작 권장',
          summary: '학부모의 질문, 상담 피드백, 후기를 원장님이나 담당 강사의 서명이 담긴 글로 바꾸고 매주 측정합니다.',
          points: [
            `월 ${N.monthlyArticles}편 (한 질문에 한 글), 원장님이나 담당 강사가 검수하고 서명한 뒤 게시`,
            '매주 고정 질문으로 답변 변화를 측정해 다음 주 글 주제 선정',
            '보유 사례 재구성, 네이버 플레이스 같은 외부 등록 정리, 실무 교육 4회 포함',
            '종료 시 도구 사용권, 누적 측정 기록, 운영 매뉴얼 인계',
          ],
        },
        {
          title: '홈페이지 이관',
          meta: '구성 B, 3~4주, 선택',
          summary: '첫 달 결과를 확인한 뒤, 지금 플랫폼의 한계를 근본적으로 넘어야 할 때 워드프레스나 정적 사이트로 옮깁니다.',
          points: [
            '기존 주소 전부 연결',
            '기존 수업 안내, 사진, 상담 문의 내역 보존과 검증 2회',
            '백업과 복원 절차 시연, 문제가 생기면 되돌리는 계획 포함',
            '호스팅은 학원 명의로 직접 계약',
          ],
        },
      ],
    },
    boundaries: {
      heading: '약속하지 않는 것과\n대신 보고하는 것',
      notTitle: '보장하지 않는 것',
      notItems: [
        'AI 추천 순위와 검색 순위',
        '원생 모집, 매출 증가, 상담 문의 건수 (AI 플랫폼의 정책이 바뀌면 결과도 흔들립니다)',
      ],
      yesTitle: '대신 매주 보고하고 완료로 삼는 것',
      yesItems: [
        'AI가 우리 학원을 언급했는지와 언급될 준비가 됐는지를 매주 따로 보고',
        '만들고, 확인하고, 학원에 넘겨준 것으로 일의 완료를 판단',
      ],
      note: '범위와 보고 기준을 계약 전에 먼저 맞춘 뒤 작업을 시작합니다.',
    },
    bottomCta: {
      heading: '단계별 금액과\n후불 정산 조건을 확인하세요',
      lead: '모든 작업은 결과 보고 뒤에 청구하는 후불 기준이며, 첫 달 결과를 보고 계속 여부를 정하실 수 있습니다.',
      primary: { label: '가격 보기', slug: 'pricing' },
      secondary: { label: '무료 진단 받기', slug: 'contact' },
    },
  },

  // 검토 필요 (HANDOFF 7.3): 학원 기준 문구 미정리
  cases: {
    metaTitle: `사례 | ${titleSuffix}`,
    metaDescription:
      'FeverCoach 블로그 11주 기록과 zicks 자체 사이트 운영 기록. 고객사 사례는 서면 동의 뒤에만 공개합니다.',
    hero: {
      title: '우리 제품으로 먼저 해 보고,\n이 사이트도 같은 방식으로 운영합니다',
      lead: '의사가 검수한 답변 2,400개 이상을 재료로 영어, 스페인어, 한국어 블로그를 발행하고 매주 Google Search Console로 측정했습니다. FeverCoach는 zicks의 첫 번째 사용자입니다.',
    },
    about: {
      heading: 'FeverCoach,\n자사 소아 발열 앱',
      lead: '의사가 검수한 질문과 답변 원고를 여러 언어의 블로그로 발행하면서, 검색 유입, 구글 생성형 AI 노출, 외부에서 링크하는 도메인의 변화를 날짜별 원장으로 기록했습니다.',
      facts: [
        { term: '창업자', desc: '김명찬 대표. 의사이며 모닥에이아이코리아(MoDoc AI)를 창업했습니다.' },
        { term: 'FeverCoach', desc: 'MoDoc AI가 직접 운영하는 자사 소아 발열 앱입니다.' },
        { term: '답변 자료', desc: '의사가 검수한 답변 2,400개 이상을 자체 보유하고 있습니다.' },
      ],
    },
    metrics: {
      heading: 'FeverCoach 블로그에서 매주 기록한 수치',
      headers: ['지표', '이전', '이후', '기간', '출처'],
      rows: [
        { label: 'Google 검색 클릭', before: '460', after: '2,910', period: '11주', source: 'Google Search Console' },
        {
          label: '구글 생성형 AI 노출 (하루 기준)',
          sub: '3개월 누적 98.1K',
          before: '약 300',
          after: '약 3,500',
          period: '3개월',
          source: 'Google Search Console',
        },
        { label: '외부에서 링크하는 도메인', before: '160', after: '631', period: '약 4개월', source: '외부 링크 분석 도구' },
      ],
      note: '측정 기간은 2026년 6월부터 10월까지입니다. 자사 제품(FeverCoach)의 기록이며 다른 업종이나 사이트의 결과를 보장하지 않습니다. 고객사 사례는 서면 동의를 받은 뒤에만 공개합니다. 바꾼 것과 측정값은 날짜별 원장으로 기록해 두었고, 요청하시면 보여 드립니다.',
    },
    site: {
      heading: '이 사이트도\n같은 원칙으로 만들었습니다',
      lead: '정적 사이트 생성기(Astro)로 만들어 무료 호스팅에 올렸고, 주요 AI 크롤러에 모두 열어 두었습니다. 회사 정보 코드, 사이트맵, llms.txt가 실제로 들어가 있습니다.',
      items: [
        {
          title: '읽을 수 있는가',
          body: 'robots.txt에서 GPTBot, ClaudeBot, PerplexityBot을 비롯한 주요 검색 로봇과 AI 크롤러를 모두 허용했습니다. 서버를 거치지 않는 정적 HTML이라 응답이 빠릅니다.',
          link: { label: 'robots.txt 보기', asset: '/robots.txt' },
        },
        {
          title: '무엇을 하는 회사인가',
          body: '조직과 서비스 정보를 구조화 코드(JSON-LD)로 모든 페이지에 넣었고, 자주 묻는 질문 코드는 진행 방식 페이지에 넣었습니다. llms.txt로 AI에게 한 번에 설명합니다.',
          link: { label: 'llms.txt 보기', asset: '/llms.txt' },
        },
        {
          title: '측정',
          body: `질문 세트를 매주 ${enginesText}에 묻고 언급 여부를 기록합니다. 첫 측정은 개편한 사이트를 공개하는 주에 하며, 기록이 쌓이는 대로 이 페이지에 공개합니다.`,
        },
      ],
    },
    closing: {
      heading: '고객사 기록은\n서면 동의 뒤에만 공개합니다',
      lead: '진행 중인 학원의 질문 목록과 측정 기록은 그 학원의 자산이므로 임의로 외부에 올리지 않습니다. 다른 학원 사례 대신, 무료 진단으로 지금 우리 학원 홈페이지가 AI에게 어떻게 보이는지 먼저 확인해 보세요.',
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '가격 보기', slug: 'pricing' },
    },
  },

  // 검토 필요 (HANDOFF 7.3): 학원 기준 문구 미정리
  pricing: {
    metaTitle: `가격 | ${titleSuffix}`,
    metaDescription: `기반 정비(A) ${P.planAMan}, 홈페이지 이관(B) ${P.planBMan}, 콘텐츠와 측정 운영(C) ${P.planCMonthlyMan} (VAT 별도). 후불 정산이며, 첫 달 ${P.firstMonthACMan}으로 시작해 결과를 보고 계속 여부를 정합니다.`,
    hero: {
      title: '완료 보고 뒤에 청구하는 후불 구조,\n첫 달 결과를 보고 결정합니다',
      lead: `1주차에 기반 정비(A)와 콘텐츠와 측정 운영(C)을 함께 시작해 첫 달 ${P.firstMonthACMan}으로 4주간 측정 기록을 쌓고, 전후 비교를 본 뒤 홈페이지 이관(B)과 월 운영 연장 여부를 정합니다. VAT 별도이며, 호스팅, 도메인, 보도자료 송출 같은 외부 실비는 학원 명의로 직접 결제합니다.`,
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '서비스 보기', slug: 'services' },
      note: N.asOfLabel,
    },
    table: {
      heading: '구성과 기준 금액',
      headers: ['구성', '대상', '단위', '기준 금액'],
      rows: [
        { name: '무료 진단', audience: '모든 학원과 교육업체', unit: '진단서 한 장', price: '무료' },
        {
          name: '첫 달 시작 조합 (A와 C)',
          sub: '권장 시작 순서',
          audience: '처음 시작하는 학원',
          unit: '첫 4주',
          price: P.firstMonthACMan,
          highlight: true,
        },
        {
          name: '구성 A. 기반 정비와 새 사이트',
          sub: '완료 보고 뒤 후불',
          audience: '모든 학원과 교육업체',
          unit: '4주',
          price: man.planA,
        },
        {
          name: '구성 C. 콘텐츠와 측정 운영',
          sub: '매월 결과 보고와 함께 다음 달 청구',
          audience: '모든 학원과 교육업체',
          unit: `월 ${N.monthlyArticles}편`,
          price: man.planC,
          per: ' / 월',
        },
        {
          name: '구성 B. 홈페이지 이관',
          sub: '선택, 완료 보고 뒤 후불',
          audience: '첫 달 결과를 본 학원',
          unit: '3~4주',
          price: man.planB,
        },
        {
          name: '옵션. 질문 발굴',
          sub: '상담 질문 자료가 부족할 때 지역 카페 같은 온라인 커뮤니티에서 학부모 질문을 매주 모아 분류합니다',
          audience: '구성 C 진행 학원',
          unit: '매월',
          price: man.discovery,
          per: ' / 월',
        },
        {
          name: '종료 후 유지관리',
          sub: '선택. 월 1~2시간 점검, 작은 수정, 백업 확인. 기본 도구 사용권 유지와는 무관합니다',
          audience: '운영을 마친 학원',
          unit: '매월',
          price: man.maint,
          per: ' / 월',
        },
      ],
      note: `VAT 별도입니다. 3개월 전체를 진행하면 ${P.threeMonthsTotalMan}(글 ${N.threeMonthsArticles}편) 규모입니다. 원장님이나 담당 강사가 주 2시간 안팎의 검수 시간을 내기 어려우면 월 발행 편수를 줄이고 금액을 함께 조정합니다. 호스팅 실비 참고: ${P.hostingNote}.`,
    },
    plans: {
      heading: '구성별로 받게 되는 것',
      items: [
        {
          title: '구성 A. 기반 정비와 새 사이트',
          summary: '홈페이지 기술과 정보 구조를 정비하고, 4주 전후를 비교 측정합니다.',
          points: [
            '초기 정밀 진단, 상담 질문 20개 확정, 첫 측정',
            '크롤러 접근, 색인, 설명문, 제목, 학원 정보 코드 정비',
            '자동 게시 연결, 네이버 플레이스 같은 프로필 정리, 보도자료 1건',
            '주간 측정 4회와 4주차 전후 비교 보고',
          ],
          foot: { label: '청구', text: '완료 보고 뒤 후불, VAT 별도' },
        },
        {
          title: '구성 C. 콘텐츠와 측정 운영',
          summary: '학부모 질문으로 쓴 원고를 발행하고, 매주 AI 답변을 측정해 다음 주제를 정합니다.',
          points: [
            `학부모 질문에 답하는 글 월 ${N.monthlyArticles}편 (원장님이나 담당 강사 검수와 서명, 수정 요청 2회 포함)`,
            '보유 사례 재구성과 외부 출처 등록',
            '주간 질문 측정, 답변 원문 보고, 실무 교육 4회',
            '종료 시 도구 사용권, 측정 기록, 운영 매뉴얼 인계',
          ],
          foot: { label: '청구', text: '매월 결과 보고와 함께 다음 달 청구, VAT 별도' },
        },
        {
          title: '구성 B. 홈페이지 이관 (선택)',
          summary: '첫 달 결과를 본 뒤 워드프레스나 정적 사이트로 옮겨야 할 때 선택합니다.',
          points: [
            '워드프레스나 정적 사이트 구축, 기존 주소 전부 연결',
            '기존 수업 안내, 사진, 상담 문의 보존과 이관 검증 2회',
            '백업과 복원 시연, 되돌림 계획 수립',
          ],
          foot: { label: '청구', text: '완료 보고 뒤 후불, VAT 별도' },
        },
      ],
    },
    flow: {
      heading: '첫 4주 흐름',
      items: [
        {
          role: '1주차',
          title: '착수',
          body: '무료 진단을 함께 검토하고, 상담 질문 20개를 확정해 첫 기준선을 측정합니다.',
          kind: 'tool',
        },
        {
          role: '2~3주차',
          title: '정비와 발행',
          body: '크롤러 접근과 학원 정보 코드를 정비하고, 원장님이나 담당 강사가 검수한 원고를 게시합니다.',
          kind: 'review',
        },
        {
          role: '4주차',
          title: '결과 보고',
          body: '주간 측정 4회를 모아 전후 비교 보고서를 드립니다.',
          kind: 'tool',
        },
        {
          role: '보고 후',
          title: '후불 정산과 결정',
          body: '완료를 확인한 뒤 청구합니다. 홈페이지 이관(B)이나 월 운영(C) 연장 여부는 원장님이 정합니다.',
          kind: 'team',
        },
      ],
      promise: '선결제 없이 결과 보고 뒤에 청구하고, 첫 달 결과를 보고 계속 여부를 정합니다.',
    },
    bottomCta: {
      heading: '계약 전에 무료 진단 한 장으로\n먼저 확인해 보세요',
      lead: '홈페이지나 블로그 주소만 보내 주시면 지금의 크롤러 접근 상태와 AI 답변 현황을 먼저 점검해 드립니다.',
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '사례 먼저 보기', slug: 'cases' },
    },
  },

  // 검토 필요 (HANDOFF 7.3): 학원 기준 문구 미정리
  contact: {
    metaTitle: `무료 진단 받기 | ${titleSuffix}`,
    metaDescription:
      '학원 홈페이지나 블로그 주소만 보내 주시면 크롤러 접근, 색인, 학원 정보 코드, 설명문을 점검해 3영업일 안에 진단서 한 장으로 드립니다. 비용은 없습니다.',
    hero: {
      title: '홈페이지 주소와 질문 한두 개로\n지금 AI에게 어떻게 보이는지 확인하세요',
      lead: '학원 홈페이지나 블로그 주소와, AI에게 물어봤던 질문 한두 개만 보내 주세요. 크롤러 접근, 색인, 학원 정보 코드, 설명문을 점검해 한 장으로 드리고, AI가 지금 우리 학원을 어떻게 설명하는지 답변 원문을 함께 보내 드립니다. 3영업일 안에 회신합니다.',
      emailLabel: '문의 이메일',
      composeLabel: '메일 앱 열기',
      copyLabel: '이메일 주소 복사',
      copiedLabel: '복사했습니다',
      composeNote: '메일 앱 열기를 누르면 아래 네 가지 항목이 미리 적힌 메일 창이 열립니다.',
      mailSubject: 'zicks 무료 진단 요청',
      mailBody:
        '학원 이름과 홈페이지나 블로그 주소:\n\n원하시는 것 (무료 진단, 가격 상담, 그 밖의 문의):\n\nAI에게 물어봤던 질문, 또는 상담에서 자주 받는 질문 (1~2개):\n\n회신받을 분 성함과 연락처:\n\n학생과 학부모 개인정보는 적지 말아 주세요.',
    },
    box: {
      title: '메일에는 이 네 가지만 적어 주세요',
      items: [
        '학원 이름과 홈페이지나 블로그 주소',
        '원하시는 것. 무료 진단, 가격 상담, 그 밖의 문의 가운데 하나',
        'AI에게 물어봤던 질문, 또는 학부모가 상담에서 자주 묻는 질문 1~2개',
        '회신받을 분 성함과 연락처',
      ],
      note: '학생과 학부모 개인정보는 적지 말아 주세요. 진단 결과만 받아 보셔도 됩니다.',
      reviewerLabel: '직접 확인하는 사람',
      reviewerName: '김명찬 대표',
      reviewerInfo: '의사이자 창업자\n모닥에이아이코리아 (MoDoc AI)',
    },
    audit: {
      heading: '무료 진단서 한 장에\n담기는 것',
      lead: '홈페이지나 블로그 주소와 물어봤던 질문 한두 개를 보내 주시면, 아래 항목을 한 장으로 정리해 3영업일 안에 보내 드립니다.',
      headers: ['항목', '확인하는 내용'],
      rows: [
        {
          title: '읽을 수 있는가',
          detail: 'robots.txt와 사이트맵을 보고, 검색 로봇과 AI 크롤러가 막혀 있지 않은지, 수업 안내가 이미지로만 올라가 있지 않은지 확인합니다.',
        },
        {
          title: '어떤 학원인가',
          detail: '대상 학년, 과목, 위치를 담은 한 줄 정의, 페이지 제목과 설명문, 학원 정보 코드(JSON-LD), 네이버 플레이스 정보가 서로 맞는지 봅니다.',
        },
        {
          title: '질문에 답하는가',
          detail: '학부모가 상담에서 묻는 말에 답하는 글이 있는지 보고, 보내 주신 질문에 AI 검색 5곳이 지금 어떻게 답하는지 원문을 함께 첨부합니다.',
        },
        {
          title: '다른 곳에서도 확인되는가',
          detail: '네이버 플레이스 리뷰, 지역 카페 언급, 교육 플랫폼 등록처럼 다른 곳에서 우리 학원이 확인되는지 봅니다.',
        },
        {
          title: '먼저 할 일',
          detail: '지금 홈페이지와 블로그에서 바로 고칠 수 있는 항목을 우선순위대로 정리합니다.',
        },
      ],
      note: '3영업일 안에 회신합니다. 비용이 드는 작업은 범위를 합의한 뒤에만 시작합니다. 순위, 원생 모집, 매출 증가는 보장하지 않습니다.',
    },
  },
};
