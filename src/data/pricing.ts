/**
 * 가격과 기본 산출물 수량 단일 관리 파일 (Single Source of Truth)
 * - 미국(us-en, us-ko)은 US_PRICING, 한국(kr)은 KR_PRICING을 쓴다.
 * - 아래 값만 바꾸면 홈, 서비스, 가격 페이지 본문과 메타 설명이 함께 바뀐다.
 * - 가안 기간 동안 JSON-LD 구조화 코드에는 Offer/price 를 넣지 않는다.
 */

function addCommas(n: number): string {
  return String(Math.trunc(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatKrw(won: number): string {
  return `${addCommas(won)}원`;
}

export function formatManwon(won: number): string {
  if (won % 10_000 !== 0) {
    throw new Error(`formatManwon expects multiples of 10,000 KRW, got ${won}`);
  }
  return `${addCommas(won / 10_000)}만원`;
}

export function formatUsd(usd: number): string {
  return `US$${addCommas(usd)}`;
}

const EN_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

/** 영어 문장 속 수량 (10 이하는 단어로) */
export function enCount(n: number, capitalize = false): string {
  const word = EN_WORDS[n] ?? String(n);
  return capitalize ? word[0]!.toUpperCase() + word.slice(1) : word;
}

const usRaw = {
  clinicPilot: 1_250,
  clinicMonthly: 2_500,
  nonClinicPilot: 2_500,
  clinicFaqDrafts: 2,
  clinicSocialDrafts: 4,
  monthlyFaqDrafts: 4,
  monthlySocialDrafts: 8,
  nonClinicArticles: 3,
} as const;

export const US_PRICING = {
  ...usRaw,
  asOf: {
    en: 'Reference fee as of Nov 2026, agreed per scope',
    ko: '2026년 11월 기준 참고 가격이며, 범위에 따라 조정됩니다',
  },
  formatted: {
    clinicPilot: formatUsd(usRaw.clinicPilot),
    clinicMonthly: formatUsd(usRaw.clinicMonthly),
    nonClinicPilot: formatUsd(usRaw.nonClinicPilot),
  },
} as const;

const krRaw = {
  asOfLabel: '2026년 11월 기준, 범위 협의 후 확정',
  planA: 3_000_000,
  planB: 2_500_000,
  planCMonthly: 2_500_000,
  monthlyArticles: 12,
  optDiscoveryMonthly: 500_000,
  optMaintMin: 150_000,
  optMaintMax: 250_000,
  hostingWpMinMan: 3,
  hostingWpMaxMan: 6,
  hostingStaticMaxMan: 3,
} as const;

const krFirstMonthAC = krRaw.planA + krRaw.planCMonthly;
const krThreeMonthsTotal = krRaw.planA + krRaw.planB + krRaw.planCMonthly * 3;
const krThreeMonthsArticles = krRaw.monthlyArticles * 3;

export const KR_PRICING = {
  ...krRaw,
  firstMonthAC: krFirstMonthAC,
  threeMonthsTotal: krThreeMonthsTotal,
  threeMonthsArticles: krThreeMonthsArticles,
  formatted: {
    planA: formatKrw(krRaw.planA),
    planAMan: formatManwon(krRaw.planA),
    planB: formatKrw(krRaw.planB),
    planBMan: formatManwon(krRaw.planB),
    planCMonthly: `월 ${formatKrw(krRaw.planCMonthly)}`,
    planCMonthlyMan: `월 ${formatManwon(krRaw.planCMonthly)}`,
    optDiscovery: `월 ${formatKrw(krRaw.optDiscoveryMonthly)}`,
    optMaintRange: `월 ${addCommas(krRaw.optMaintMin)}~${formatKrw(krRaw.optMaintMax)}`,
    firstMonthACMan: formatManwon(krFirstMonthAC),
    threeMonthsTotalMan: formatManwon(krThreeMonthsTotal),
    hostingNote: `워드프레스 월 ${krRaw.hostingWpMinMan}~${krRaw.hostingWpMaxMan}만원, 정적 사이트 월 0~${krRaw.hostingStaticMaxMan}만원(고객 명의)`,
  },
} as const;
