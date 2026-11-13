import { US_PRICING } from '../../data/pricing';
import type { SiteDict } from '../types';

/* 미국 한국어판 (/us/ko/). 미국 영어판(us-en.ts)과 1:1로 대응한다. 문구 원본: handoff design/us-ko-*.html */

const P = US_PRICING.formatted;
const N = US_PRICING;

const notGuaranteed = '검색 순위, AI 인용, 문의 건수, 매출은 보장하지 않습니다.';

export const usKo: SiteDict = {
  brandSub: 'by MoDoc AI',
  ctaLabel: '무료 진단 받기',
  nav: [
    { slug: 'how', label: '진행 방식' },
    { slug: 'services', label: '서비스' },
    { slug: 'cases', label: '팀 소개' },
    { slug: 'pricing', label: '가격' },
  ],
  marketLink: '한국 서비스',
  marketLine: '한국에 계신가요? 한국 서비스 보기',
  aria: {
    primaryNav: '주요 메뉴',
    mobileNav: '모바일 메뉴',
    footerNav: '하단 메뉴',
    langSwitcher: '언어 선택',
    openMenu: '메뉴 열기',
    closeMenu: '메뉴 닫기',
  },
  footer: {
    companyLine: 'zicks by MoDoc AI, Inc.',
    addressLine: '163 Highland Ave #1015, Needham, MA 02494',
    contactLabel: '문의',
    disclaimer: `${notGuaranteed} 트래킹 설정과 계정 접근 권한은 따로 합의합니다.`,
  },
  orgSchema: {
    name: 'zicks by MoDoc AI, Inc.',
    alternateName: ['zicks', 'MoDoc AI', 'MoDoc AI, Inc.'],
    description:
      '미국 클리닉을 위한 무료 웹사이트 노출 진단과 범위가 정해진 콘텐츠 파일럿. 환자 질문을 의료진이 승인한 글로 만듭니다.',
    founderName: '김명찬',
    founderHonorificSuffix: 'MD',
    founderJobTitle: '창업자, 의사',
  },
  serviceSchema: {
    name: 'zicks 클리닉 콘텐츠 서비스',
    providerName: 'MoDoc AI, Inc.',
    serviceType: '클리닉 콘텐츠 파일럿과 웹사이트 노출 진단',
    description:
      '반복되는 환자 질문을 의료진이 승인한 FAQ 글과 소셜 게시물로 만들고, 합의한 웹사이트 지표로 결과를 보고합니다.',
  },

  home: {
    metaTitle: 'zicks 미국 클리닉 콘텐츠 서비스 (한국어)',
    metaDescription:
      'AI가 환자에게 우리 클리닉을 어떻게 소개하는지 무료로 진단하고, 접수 데스크가 매일 받는 질문을 의료진이 승인한 글로 만듭니다. 30일 파일럿, 자동 연장 없음.',
    hero: {
      title: 'AI는 환자에게\n우리 클리닉을\n어떻게 소개할까요?',
      lead: '요즘 환자는 전화하기 전에 ChatGPT와 구글 AI에 먼저 묻습니다. 그 답에 우리 클리닉이 어떻게 나오는지 확인하고, 접수 데스크가 매일 받는 질문을 의료진이 승인한 글로 만들어 드립니다.',
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '파일럿 진행 방식', slug: 'how' },
      note: '웹사이트 주소와 자주 받는 환자 질문 하나면 됩니다. 환자 개인정보는 빼고 보내 주세요.',
      panel: {
        ariaLabel:
          '노출 진단 화면 예시. 환자 질문마다 AI 검색 5곳이 클리닉 이름을 언급했는지, 클리닉 웹사이트를 출처로 연결했는지 표시합니다.',
        tabs: ['노출 진단', '초안', '승인', '리포트'],
        sampleBadge: '가상 데이터',
        context: 'Riverbend Family Clinic',
        summary: [
          { label: '확인한 질문', value: '12', note: '접수 데스크 기록에서' },
          { label: '클리닉 언급', value: '5', note: '질문 12개 중', accent: true },
          { label: '출처로 연결', value: '2', note: '질문 12개 중', accent: true },
          { label: '답이 없는 질문', value: '4', note: '초안 작성 대상' },
        ],
        questionHeader: '환자 질문 (12개 중 5개)',
        engines: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'AI Overviews'],
        highlightEngine: 4,
        rows: [
          {
            q: 'Riverbend Family Clinic은 신규 환자를 받나요?',
            tag: '진료 접수',
            marks: ['named', 'cited', 'named', 'none', 'named'],
          },
          {
            q: '첫 방문 때 무엇을 가져가야 하나요?',
            tag: '방문 준비',
            marks: ['cited', 'named', 'none', 'cited', 'named'],
          },
          {
            q: 'Riverbend Family Clinic에서 Blue Cross 보험을 받나요?',
            tag: '보험',
            topic: '파일럿 주제',
            marks: ['none', 'none', 'none', 'none', 'named'],
          },
          {
            q: 'Framingham 근처에서 당일 진료 되는 곳',
            tag: '지역 검색',
            marks: ['none', 'none', 'named', 'none', 'named'],
          },
          {
            q: '신규 환자는 예약 몇 분 전에 도착해야 하나요?',
            tag: '방문 준비',
            topic: '파일럿 주제',
            marks: ['none', 'none', 'none', 'none', 'none'],
          },
        ],
        markLabels: { cited: '출처', named: '언급', none: '없음' },
        legend: {
          cited: '답변이 우리 웹사이트를 근거로 연결함',
          named: '답변에 클리닉 이름이 나옴',
        },
      },
    },
    audit: {
      heading: 'AI가 클리닉을 고를 때\n확인하는 네 가지',
      lead: '무료 진단에서는 구글과 AI가 지금 우리 웹사이트를 어떻게 읽고 있는지, 무엇부터 고치면 되는지를 한 장으로 정리해 드립니다.',
      link: { label: '진단 항목 자세히 보기', slug: 'contact' },
      doc: {
        ariaLabel: '웹사이트 노출 진단서 가상 예시',
        title: '웹사이트 노출 진단서',
        meta: 'Riverbend Family Clinic  2026년 11월 10일',
        badge: '가상 예시',
        items: [
          {
            title: '크롤러가 읽을 수 있는가',
            scope: '검색 로봇과 AI 크롤러 접근, 색인, 사이트맵',
            finding: '진료 시간과 위치가 예약 위젯 안에만 있어 크롤러가 읽지 못합니다.',
            status: '보완 필요',
            tone: 'warn',
          },
          {
            title: '어떤 클리닉인지 분명한가',
            scope: '진료 과목, 보험, 진료 시간, 구조화 데이터',
            finding: '웹사이트의 보험 목록이 Google 비즈니스 프로필과 다릅니다.',
            status: '보통',
            tone: 'neutral',
          },
          {
            title: '환자 질문에 답하는가',
            scope: '접수 데스크로 들어오는 질문에 바로 답하는 글',
            finding: '가장 자주 받는 질문 10개 중 4개는 웹사이트에 답이 없습니다.',
            status: '보완 필요',
            tone: 'warn',
          },
          {
            title: '다른 곳에서도 확인되는가',
            scope: 'Google 비즈니스 프로필, 의료 디렉터리, 리뷰',
            finding: 'Google, Healthgrades, Zocdoc에 등록된 이름, 주소, 전화번호가 일치합니다.',
            status: '양호',
            tone: 'pass',
          },
        ],
        next: {
          label: '먼저 할 일',
          text: '진료 시간과 위치를 페이지 본문에 글로 적고, 보험과 신규 환자 질문부터 답합니다.',
        },
      },
    },
    steps: {
      heading: '의료진이 승인하기 전에는\n아무것도 올라가지 않습니다',
      lead: '환자 정보를 뺀 질문으로 초안을 씁니다. 확인되지 않은 내용은 지어내지 않고 클리닉에 다시 여쭙니다.',
      items: [
        {
          role: 'zicks',
          title: '무료 노출 진단',
          body: '크롤러가 웹사이트를 읽을 수 있는지, AI가 지금 우리 클리닉을 어떻게 답하는지 확인합니다.',
          kind: 'tool',
        },
        {
          role: 'zicks',
          title: '환자 질문으로 초안 작성',
          body: `직원들이 가장 자주 답하는 질문을 골라 FAQ 글 ${N.clinicFaqDrafts}편과 소셜 게시물 ${N.clinicSocialDrafts}건을 준비합니다.`,
          kind: 'tool',
        },
        {
          role: '담당 의료진',
          title: '의료 내용 검수',
          body: '지정하신 의료진이 의료 내용을 하나하나 승인합니다. 승인받지 않은 글은 게시하지 않습니다.',
          kind: 'review',
        },
        {
          role: '클리닉 팀',
          title: '게시와 결과 확인',
          body: '게시는 클리닉에서 직접 합니다. 파일럿이 끝나면 글 조회수, 예약 링크 클릭처럼 미리 합의한 지표를 보고합니다.',
          kind: 'team',
        },
      ],
    },
    proof: {
      heading: '의사가 만든 팀이\n자사 건강 앱에서 먼저 해 봤습니다',
      lead: 'MoDoc AI는 의사인 김명찬 대표(MC Kim, MD)가 창업했습니다. 의사가 검수한 답변 2,400개 이상으로 소아 발열 앱 FeverCoach를 운영하고, 그 블로그의 성과를 매주 측정합니다.',
      link: { label: '팀 소개 보기', slug: 'cases' },
      stats: [
        {
          label: 'Google 검색 클릭',
          value: '2,910',
          change: '11주 전 460에서',
          source: '출처: Google Search Console',
        },
        {
          label: 'Google AI 답변 노출',
          value: '98.1K',
          change: '3개월 누적, 하루 약 300에서 3,500으로',
          source: '출처: Google Search Console',
        },
        {
          label: '외부에서 링크하는 도메인',
          value: '631',
          change: '약 4개월 전 160에서',
          source: '출처: 외부 링크 분석 도구',
        },
      ],
      note: '측정 기간은 2026년 6월부터 10월까지입니다. FeverCoach는 자사 제품입니다. 이 수치는 고객 사례가 아니며, 클리닉의 성과를 약속하지 않습니다.',
    },
    pricing: {
      heading: '30일 파일럿 하나로\n시작합니다',
      lead: '비용이 드는 작업을 시작하기 전에 주제, 참고 자료, 검수자, 시작일을 먼저 정합니다.',
      price: P.clinicPilot,
      priceNote: US_PRICING.asOf.ko,
      button: { label: '무료 진단부터 받기', slug: 'contact' },
      includedTitle: '포함',
      included: [
        `자주 받는 환자 질문으로 쓴 FAQ 글 초안 ${N.clinicFaqDrafts}편`,
        `그 글을 바탕으로 만든 소셜 게시물 초안 ${N.clinicSocialDrafts}건`,
        '시작 전 현황 점검과, 웹사이트 데이터로 정리한 종료 리포트',
      ],
      excludedTitle: '포함하지 않는 것',
      excluded: '웹사이트 개편, 광고 집행, 번역, 영상 제작',
      afterTitle: '파일럿이 끝난 뒤',
      after: `콘텐츠가 더 필요하면 월 ${P.clinicMonthly} 안팎으로 FAQ 초안 ${N.monthlyFaqDrafts}편, 소셜 초안 ${N.monthlySocialDrafts}건, 월간 리포트를 협의할 수 있습니다. 파일럿은 자동으로 연장되지 않습니다.`,
    },
    bottomCta: {
      heading: '접수 데스크에서 매일\n반복하는 설명이 있나요?',
      lead: '웹사이트 주소, 자주 받는 환자 질문 하나, 검수하실 분을 이메일로 알려 주세요. 맞는 서비스인지, 무료 진단과 파일럿 범위는 어떻게 되는지 MC가 직접 답해 드립니다. 한국어와 영어 모두 가능합니다.',
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '가격 보기', slug: 'pricing' },
      note: {
        before: '클리닉이 아니어도 괜찮습니다. ',
        link: { label: '클리닉이 아닌 팀을 위한 구성', slug: 'services', hash: 'other-teams' },
        after: '도 있습니다.',
      },
    },
  },

  how: {
    metaTitle: '진행 방식 | zicks 미국 클리닉 서비스',
    metaDescription:
      '무료 진단과 범위 합의, 승인된 자료로 초안 작성, 의료진 승인, 클리닉 게시와 리포트까지 네 단계로 진행합니다.',
    hero: {
      title: '먼저 검수하고,\n결과는 있는 그대로 봅니다',
      lead: '모든 작업은 클리닉이 실제로 받는 질문에서 시작합니다. 의료 내용의 승인은 끝까지 클리닉에 두고, 미리 합의한 웹사이트 지표를 그대로 보고합니다.',
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '서비스 보기', slug: 'services' },
    },
    stepsTable: {
      heading: '네 단계로 진행합니다',
      lead: '확인되지 않은 정보는 지어내지 않고 표시해 두며, 초안과 수정 이력을 모두 남깁니다.',
      headers: ['단계', '하는 일', '담당', '결과물'],
      rows: [
        {
          title: '무료 진단과 범위 합의',
          body: '크롤러 접근, 페이지 정보, 그리고 ChatGPT, Claude, Gemini, Perplexity의 현재 답변을 확인합니다. 그다음 주제, 참고 자료, 검수자, 일정을 함께 정합니다.',
          owner: 'zicks와 클리닉',
          output: '진단서 한 장, 합의한 범위',
          kind: 'tool',
        },
        {
          title: '승인된 자료로 초안 작성',
          body: '환자 정보를 뺀 반복 질문이나 이미 승인된 설명 자료를 읽기 쉬운 글로 옮깁니다.',
          owner: 'zicks',
          output: 'FAQ 글과 소셜 게시물 초안',
          kind: 'tool',
        },
        {
          title: '지정 검수자의 승인',
          body: '담당 의료진이 내용의 정확성을 확인하고, 게시 전에 필요한 수정을 요청합니다. 승인받지 않은 글은 게시하지 않습니다.',
          owner: '담당 의료진',
          output: '승인과 수정 기록',
          kind: 'review',
        },
        {
          title: '게시와 리포트 확인',
          body: '승인된 글은 클리닉이 직접 게시합니다. 글 조회수, 문의 링크 클릭처럼 합의한 웹사이트 데이터를 함께 확인합니다.',
          owner: '클리닉 팀',
          output: '종료 리포트',
          kind: 'team',
        },
      ],
    },
    inputs: {
      heading: '이것만 있으면\n시작할 수 있습니다',
      lead: '완성된 콘텐츠 기획서는 필요 없습니다. 오른쪽 둘 중 하나만 있어도 파일럿 범위를 정할 수 있습니다.',
      items: [
        {
          title: '반복되는 환자 질문',
          body: '접수 데스크나 의료진이 되풀이해서 답하는 방문 전 안내, 준비 사항, 진료 후 질문입니다. 환자 정보는 빼고 보내 주세요.',
        },
        {
          title: '이미 승인된 설명 자료',
          body: '기존 안내문이나 의료진이 써 둔 설명입니다. 구조가 잡힌 웹 글과 소셜 게시물로 옮깁니다.',
        },
      ],
    },
    principles: {
      heading: '모든 프로젝트에서 지키는 세 가지',
      lead: '클리닉이 원래 하던 검수 절차에 맞춰 일합니다.',
      items: [
        {
          title: '자료에서 시작합니다',
          body: '반복되는 질문이나 승인된 설명 자료를 받아서 시작합니다. 빠진 정보는 채워 넣지 않고 표시해 둡니다.',
        },
        {
          title: '승인은 클리닉에 둡니다',
          body: '저희는 초안을 준비하고 수정 이력을 남깁니다. 지정하신 검수자가 승인한 뒤에 클리닉이 게시합니다.',
        },
        {
          title: '잴 수 있는 것만 약속합니다',
          body: '글 조회수, 문의 링크 클릭처럼 확인할 수 있는 지표를 미리 정합니다. 환자 수나 매출과는 따로 보고합니다.',
        },
      ],
    },
    compare: {
      heading: '일반적인 월 계약 대행과 다른 점',
      headers: ['항목', '일반적인 콘텐츠 대행', 'zicks 파일럿'],
      rows: [
        {
          topic: '주제와 정확성',
          legacy: '대행사가 주제를 정합니다.',
          zicks: '클리닉이 승인한 자료로 씁니다. 빠진 사실은 지어내지 않고 표시합니다.',
        },
        {
          topic: '게시 권한',
          legacy: '대행사가 정해진 일정대로 게시합니다.',
          zicks: '의료진이 정확성을 승인하고, 클리닉이 직접 게시합니다.',
        },
        {
          topic: '계약과 보고',
          legacy: '매달 이어지는 월 계약입니다.',
          zicks: '파일럿 하나로 끝나며 자동 연장이 없습니다. 조회수와 클릭은 매출과 따로 보고합니다.',
        },
      ],
    },
    faq: {
      heading: '자주 묻는 질문',
      items: [
        {
          q: '의료 내용의 정확성은 누가 승인하나요?',
          a: '지정하신 의료진이 의료 내용을 승인합니다. 클리닉의 승인 없이는 아무것도 게시하지 않습니다.',
        },
        {
          q: '환자 정보를 보내야 하나요?',
          a: '아니요. 환자 정보는 빼고 보내 주세요. 클리닉 파일럿은 환자 정보를 뺀 반복 질문만으로 진행합니다.',
        },
        {
          q: '검색 순위나 AI 인용을 보장하나요?',
          a: '보장하지 않습니다. 검색 순위, AI 인용, 문의 건수, 매출은 약속하지 않습니다. 대신 글 조회수나 문의 링크 클릭처럼 확인할 수 있는 지표를 시작 전에 합의합니다.',
        },
        {
          q: '파일럿이 끝나면 어떻게 되나요?',
          a: '자동으로 연장되지 않습니다. 결과물과 리포트를 먼저 보신 뒤, 월간 콘텐츠 운영이 필요한지 결정하시면 됩니다.',
        },
      ],
    },
    bottomCta: {
      heading: '어떤 결과물을 받게 되는지\n구체적으로 확인해 보세요',
      lead: '파일럿의 범위를 살펴보거나, 한 장짜리 무료 진단으로 먼저 시작하셔도 됩니다.',
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '서비스 보기', slug: 'services' },
    },
  },

  services: {
    metaTitle: '서비스 | zicks 미국 클리닉 서비스',
    metaDescription: `무료 노출 진단, 30일 환자 질문 콘텐츠 파일럿(${P.clinicPilot}), 파일럿 뒤 선택하는 월간 콘텐츠 운영. 범위 밖의 일과 보장하지 않는 것을 먼저 적어 둡니다.`,
    hero: {
      title: '무료 진단으로 시작해\n파일럿 하나에 집중합니다',
      lead: '주제, 참고 자료, 검수자, 일정은 비용이 드는 작업을 시작하기 전에 모두 정합니다.',
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '가격 보기', slug: 'pricing' },
    },
    roles: {
      heading: '파일럿을 정하기 전에\n지금 상태부터 봅니다',
      lead: '웹사이트 주소와 반복되는 질문 하나를 보내 주세요. 크롤러 접근과 페이지 구조, 그리고 ChatGPT, Claude, Gemini, Perplexity가 지금 우리 클리닉을 어떻게 설명하는지 확인합니다. 파일럿은 잘 맞는 경우에만 권해 드립니다.',
      caption: '누가 무엇을 맡는지',
      headers: ['하는 일', '담당'],
      rows: [
        { task: '크롤러 접근과 AI 노출 무료 진단', owner: 'zicks' },
        { task: '글과 소셜 게시물 초안 작성', owner: 'zicks' },
        { task: '의료 내용의 정확성 승인', owner: '클리닉 검수자', client: true },
        { task: '웹사이트에 게시', owner: '클리닉 팀', client: true },
      ],
      note: '트래킹 설정과 분석 계정 접근 권한은 따로 합의합니다.',
    },
    offers: {
      heading: '범위가 정해진 두 가지 구성',
      lead: '구성마다 받게 되는 결과물과 범위 밖의 일을 분명히 적어 둡니다.',
      items: [
        {
          title: '환자 질문 콘텐츠 파일럿',
          meta: '클리닉 대상, 30일',
          summary: '반복되는 환자 질문을 의료진이 승인한 FAQ 글과 소셜 게시물로 만듭니다.',
          points: [
            `환자 정보를 뺀 반복 질문으로 쓴 FAQ 글 초안 ${N.clinicFaqDrafts}편`,
            `그 글을 바탕으로 만든 소셜 게시물 초안 ${N.clinicSocialDrafts}건`,
            '시작 전 현황 점검과, 웹사이트 데이터로 정리한 종료 리포트',
            '의료 내용은 의료진이 승인하고, 게시는 클리닉이 직접',
          ],
          foot: { label: '범위 밖', text: '웹사이트 개편, 광고 집행, 번역, 영상 제작' },
        },
        {
          title: '월간 콘텐츠 운영',
          meta: '파일럿을 마친 뒤, 선택',
          summary: '파일럿 결과물을 확인하신 뒤에만 시작합니다. 파일럿에서 자동으로 넘어가지 않습니다.',
          points: [
            `매달 의료진 승인을 거치는 FAQ 글 초안 ${N.monthlyFaqDrafts}편`,
            `매달 소셜 게시물 초안 ${N.monthlySocialDrafts}건`,
            '월간 웹사이트 데이터 리포트',
          ],
        },
      ],
      other: {
        id: 'other-teams',
        title: '클리닉이 아닌 팀이라면',
        body: '믿을 수 있는 글로 고객의 눈에 띄고 싶은 팀을 위한 구성입니다. 고객이 자주 묻는 것을 담당자가 검수한 글로 정리합니다.',
        rows: [
          {
            label: '포함',
            value: `고객 질문에 답하는 글 ${N.nonClinicArticles}편, 필요하면 설명을 붙인 화면 캡처, 담당자 의견을 한 번에 모아 반영하는 수정 1회`,
          },
          { label: '참고 가격', value: `${P.nonClinicPilot}, 주제 1개 기준` },
        ],
        link: { label: '이 구성으로 문의하기', slug: 'contact' },
      },
    },
    boundaries: {
      heading: '약속하지 않는 것과\n대신 보고하는 것',
      notTitle: '약속하지 않습니다',
      notItems: [
        'Google 순위, AI 검색 인용, 환자 수, 문의 건수, 매출',
        '승인받지 않은 의료 조언, 환자 진료 기록이 필요한 작업',
      ],
      yesTitle: '합의하고 전달합니다',
      yesItems: [
        '범위가 정해진 초안, 수정 기록, 클리닉이 바로 게시할 수 있게 정리한 전달 자료',
        '글 조회수, 문의 링크 클릭처럼 확인할 수 있는 웹사이트 지표. 매출과는 따로 보고합니다.',
      ],
      note: '범위를 분명히 해 두면 검수하시는 분의 시간과 클리닉의 진료 기준을 함께 지킬 수 있습니다.',
    },
    bottomCta: {
      heading: '참고 가격과 조건을\n확인해 보세요',
      lead: '클리닉 파일럿과 월간 운영의 현재 참고 가격입니다. 어느 쪽도 자동으로 연장되지 않습니다.',
      primary: { label: '가격 보기', slug: 'pricing' },
      secondary: { label: '무료 진단 받기', slug: 'contact' },
    },
  },

  cases: {
    metaTitle: '팀 소개 | zicks 미국 클리닉 서비스',
    metaDescription:
      '소아 발열 앱 FeverCoach를 운영하는 의사 창업 팀 MoDoc AI가 만듭니다. FeverCoach 블로그에서 매주 기록한 수치와 이 사이트에 적용한 원칙.',
    hero: {
      title: '건강 앱을 직접 운영하는\n의사 창업 팀입니다',
      lead: 'MoDoc AI는 소아 발열 앱 FeverCoach를 운영하면서 zicks를 만들고 있습니다. 창업자는 의사인 김명찬 대표(MC Kim, MD)입니다. zicks의 파일럿은 도구와 사람의 검수를 함께 써서 진행하는, 범위가 정해진 서비스입니다.',
    },
    about: {
      heading: 'FeverCoach에서\n먼저 만든 방식입니다',
      lead: '클리닉에 콘텐츠 서비스를 제안하기 전에, 여러 언어로 제공하는 자사 소아 발열 앱에서 구조화된 초안 작성과 의사 검수 절차를 먼저 만들어 운영했습니다.',
      facts: [
        { term: '창업자', desc: '김명찬 대표 (Myeongchan Kim, MD). MoDoc AI, Inc.를 창업했습니다.' },
        {
          term: 'FeverCoach',
          desc: '의사들이 만든 소아 발열 앱입니다. MoDoc AI가 직접 운영합니다.',
          link: { label: 'fevercoach.us', href: 'https://www.fevercoach.us' },
        },
        { term: '답변 자료', desc: '의사가 검수한 답변 2,400개 이상을 자체 보유하고 있습니다.' },
      ],
    },
    metrics: {
      heading: 'FeverCoach 블로그에서 매주 기록한 수치',
      headers: ['지표', '이전', '이후', '기간', '출처'],
      rows: [
        { label: 'Google 검색 클릭', before: '460', after: '2,910', period: '11주', source: 'Google Search Console' },
        {
          label: 'Google AI 답변 노출 (하루 기준)',
          sub: '3개월 누적 98.1K',
          before: '약 300',
          after: '약 3,500',
          period: '3개월',
          source: 'Google Search Console',
        },
        { label: '외부에서 링크하는 도메인', before: '160', after: '631', period: '약 4개월', source: '외부 링크 분석 도구' },
      ],
      note: '측정 기간은 2026년 6월부터 10월까지입니다. FeverCoach는 자사 제품입니다. 이 수치는 고객 사례가 아니며, 클리닉의 성과를 약속하지 않습니다.',
    },
    site: {
      heading: '이 웹사이트도\n같은 원칙으로 만들었습니다',
      lead: '고객에게 권하는 기본기를 저희 사이트에 먼저 적용했습니다. 빠른 정적 HTML로 만들고, 크롤러에 열어 두고, 기계가 읽을 수 있는 정보를 넣었습니다.',
      items: [
        {
          title: '크롤러에 열려 있습니다',
          body: '정적 HTML(Astro)로 만들었고, robots.txt에서 Googlebot, GPTBot, ClaudeBot, PerplexityBot을 모두 허용합니다.',
          link: { label: 'robots.txt 보기', asset: '/robots.txt' },
        },
        {
          title: '조직과 서비스 정보를 구조화했습니다',
          body: '모든 페이지에 조직과 서비스 정보를 JSON-LD로 넣었습니다. 진행 방식 페이지에는 FAQ 정보도 함께 넣었고, 요약본인 llms.txt를 따로 둡니다.',
          link: { label: 'llms.txt 보기', asset: '/llms.txt' },
        },
        {
          title: '범위와 한계를 먼저 적습니다',
          body: '받게 되는 결과물, 검수자가 맡는 일, 보장하지 않는 결과를 처음부터 글로 분명히 적어 둡니다.',
        },
      ],
    },
    closing: {
      heading: '고객 작업은 서면 동의가\n있을 때만 공개합니다',
      lead: '고객의 이름, 주제, 리포트는 명시적인 서면 동의 없이 공개하지 않습니다. 사례를 보여 드리는 대신, 무료 진단으로 우리 웹사이트가 지금 어떻게 읽히는지 직접 확인하실 수 있습니다.',
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '가격 보기', slug: 'pricing' },
    },
  },

  pricing: {
    metaTitle: '가격 | zicks 미국 클리닉 서비스',
    metaDescription: `무료 노출 진단, 30일 클리닉 파일럿 ${P.clinicPilot}, 월간 콘텐츠 운영 월 ${P.clinicMonthly}. 범위를 먼저 합의하고, 자동 연장은 없습니다.`,
    hero: {
      title: '범위를 정하고 시작합니다.\n자동 연장은 없습니다.',
      lead: '주제, 참고 자료, 검수자, 일정을 먼저 합의한 뒤에 시작합니다. 아래는 2026년 11월 기준 참고 가격이며, 실제 금액은 범위와 함께 확정합니다.',
    },
    table: {
      heading: '구성과 참고 가격',
      headers: ['구성', '대상', '단위', '참고 가격'],
      rows: [
        { name: '무료 노출 진단', audience: '모든 클리닉', unit: '진단서 한 장', price: '무료' },
        {
          name: '환자 질문 콘텐츠 파일럿',
          sub: '클리닉은 여기서 시작합니다',
          audience: '클리닉',
          unit: '30일',
          price: P.clinicPilot,
          highlight: true,
        },
        {
          name: '월간 콘텐츠 운영',
          sub: '선택 사항',
          audience: '파일럿을 마친 클리닉',
          unit: '매월',
          price: P.clinicMonthly,
          per: ' / 월',
        },
        {
          name: '클리닉이 아닌 팀을 위한 파일럿',
          sub: '믿을 수 있는 글로 고객의 눈에 띄고 싶은 팀',
          audience: '클리닉 외 팀',
          unit: '주제 1개',
          price: P.nonClinicPilot,
        },
      ],
      note: '트래킹 설정, 분석 계정 접근 권한, 결과물의 맞춤 조정은 따로 합의합니다.',
    },
    plans: {
      heading: '구성별로 받게 되는 것',
      items: [
        {
          title: '환자 질문 콘텐츠 파일럿',
          summary: '반복되는 환자 질문을 의료진이 승인한 웹 페이지로 만들려는 클리닉에 맞습니다.',
          points: [
            `환자 정보를 뺀 질문으로 쓴 FAQ 글 초안 ${N.clinicFaqDrafts}편`,
            `그 글을 바탕으로 만든 소셜 게시물 초안 ${N.clinicSocialDrafts}건`,
            '시작 전 현황 점검과 종료 리포트',
            '의료진 승인 후 클리닉이 직접 게시',
          ],
          foot: { label: '제외', text: '웹사이트 개편, 광고 집행, 번역, 영상 제작' },
        },
        {
          title: '월간 콘텐츠 운영',
          summary: '파일럿 결과물을 먼저 확인하신 뒤, 매달 이어 가는 것이 도움이 될지 결정합니다.',
          points: [
            `매달 의료진 승인을 거치는 FAQ 글 초안 ${N.monthlyFaqDrafts}편`,
            `매달 소셜 게시물 초안 ${N.monthlySocialDrafts}건`,
            '월간 웹사이트 데이터 리포트',
          ],
          foot: { text: '파일럿에서 자동으로 넘어가지 않습니다. 원하실 때만 따로 시작합니다.' },
        },
      ],
    },
    flow: {
      heading: '첫 연락부터 종료 리포트까지',
      items: [
        {
          title: '무료 진단',
          body: '진단서를 받아 보고, 주제와 검수자, 일정을 확정합니다. 여기까지는 비용이 없습니다.',
          kind: 'tool',
        },
        { title: '초안 작성', body: '승인된 자료를 바탕으로 글과 소셜 게시물 초안을 준비합니다.', kind: 'tool' },
        { title: '의료진 검수', body: '담당 의료진이 확인하고, 수정 의견을 한 번에 모아 반영합니다.', kind: 'review' },
        {
          title: '게시와 종료 리포트',
          body: '클리닉이 게시하고, 종료 리포트를 함께 봅니다. 그다음은 자동으로 이어지지 않습니다.',
          kind: 'team',
        },
      ],
      promise: '파일럿은 자동으로 연장되지 않고, 범위는 시작 전에 합의하며, 환자 정보는 받지 않습니다.',
    },
    bottomCta: {
      heading: '지금 웹사이트가 어떻게 읽히는지\n먼저 확인해 보세요',
      lead: '웹사이트 주소와 환자들이 자주 묻는 질문 하나면 됩니다. 환자 개인정보는 빼고 보내 주세요.',
      primary: { label: '무료 진단 받기', slug: 'contact' },
      secondary: { label: '팀 소개 보기', slug: 'cases' },
    },
  },

  contact: {
    metaTitle: '무료 진단 받기 | zicks 미국 클리닉 서비스',
    metaDescription:
      '웹사이트 주소, 반복되는 환자 질문 하나, 검수하실 분을 이메일로 보내 주세요. 무료 진단서 한 장에 크롤러 접근, 페이지 정보, 지금의 AI 답변, 다음 단계를 정리해 드립니다.',
    hero: {
      title: '접수 데스크에서 매일\n반복하는 설명이 있나요?',
      lead: '웹사이트 주소, 반복되는 질문 하나, 검수하실 분을 이메일로 알려 주세요. 맞는 서비스인지, 무료 진단과 파일럿 범위는 어떻게 되는지 MC가 직접 답해 드립니다. 한국어와 영어 모두 가능합니다.',
      emailLabel: '이메일',
      composeLabel: '이메일 작성하기',
      copyLabel: '주소 복사',
      copiedLabel: '복사했습니다',
      composeNote: '작성하기를 누르면 아래 네 가지 항목이 미리 적힌 이메일 창이 열립니다.',
      mailSubject: 'zicks 무료 진단 문의',
      mailBody:
        '클리닉 이름과 웹사이트 주소:\n\n원하시는 것 (무료 진단, 클리닉 파일럿, 그 밖의 문의):\n\n반복해서 받는 환자 질문 하나:\n\n검수와 게시를 맡으실 분:\n\n환자 개인정보는 적지 말아 주세요.',
    },
    box: {
      title: '이메일에는 이 네 가지만 적어 주세요',
      items: [
        '클리닉 이름과 웹사이트 주소',
        '원하시는 것. 무료 진단, 클리닉 파일럿, 그 밖의 문의 가운데 하나',
        '반복해서 받는 환자 질문 하나',
        '검수와 게시를 맡으실 분',
      ],
      note: '환자 개인정보는 적지 말아 주세요.',
      reviewerLabel: '답변하는 사람',
      reviewerName: '김명찬 대표 (MC Kim, MD)',
      reviewerInfo: 'MoDoc AI, Inc. 창업자\n163 Highland Ave #1015, Needham, MA 02494',
    },
    audit: {
      heading: '무료 진단서 한 장에\n담기는 것',
      lead: '웹사이트 주소와 반복되는 질문 하나를 보내 주시면 이 한 장을 정리해 보내 드립니다.',
      headers: ['항목', '확인하는 내용'],
      rows: [
        {
          title: '크롤러와 색인 접근',
          detail: 'robots.txt와 사이트맵을 보고, 주요 검색 로봇과 AI 봇이 막혀 있지 않은지 확인합니다.',
        },
        {
          title: '조직과 페이지 정보',
          detail: '페이지 제목과 설명문, 구조화 데이터(JSON-LD)가 제대로 들어가 있는지 봅니다.',
        },
        {
          title: '지금의 AI 답변',
          detail: 'ChatGPT, Claude, Gemini, Perplexity가 우리 분야의 예시 질문에 지금 어떻게 답하는지 기록합니다.',
        },
        {
          title: '다음 단계 제안',
          detail: '바로 고칠 수 있는 것을 정리하고, 파일럿이 맞는 상황인지 알려 드립니다.',
        },
      ],
      note: '비용이 드는 작업은 범위를 합의한 뒤에만 시작합니다. 파일럿은 자동으로 연장되지 않습니다. 순위, 인용, 매출은 보장하지 않습니다.',
    },
  },
};
