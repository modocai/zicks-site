/**
 * 한/영 가격 및 기본 산출물 단위 단일 관리 파일 (Single Source of Truth)
 * - 추후 가격 책정 프로세스 완료 시 아래 값만 수정하면
 *   홈(#pilots), 서비스, 가격 페이지 본문과 합계·메타 설명이 모두 함께 갱신됩니다.
 * - 가안 기간 동안 JSON-LD 구조화 코드에는 Offer/price 를 넣지 않습니다.
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

const koRaw = {
  asOfLabel: '2026년 11월 기준 · 범위 협의 후 확정',
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

const koFirstMonthAC = koRaw.planA + koRaw.planCMonthly;
const koThreeMonthsTotal = koRaw.planA + koRaw.planB + koRaw.planCMonthly * 3;
const koThreeMonthsArticles = koRaw.monthlyArticles * 3;

export const KO_PRICING = {
  ...koRaw,
  firstMonthAC: koFirstMonthAC,
  threeMonthsTotal: koThreeMonthsTotal,
  threeMonthsArticles: koThreeMonthsArticles,
  formatted: {
    planA: formatKrw(koRaw.planA),
    planAMan: formatManwon(koRaw.planA),
    planB: formatKrw(koRaw.planB),
    planBMan: formatManwon(koRaw.planB),
    planCMonthly: `월 ${formatKrw(koRaw.planCMonthly)}`,
    planCMonthlyMan: `월 ${formatManwon(koRaw.planCMonthly)}`,
    optDiscovery: `월 ${formatKrw(koRaw.optDiscoveryMonthly)}`,
    optMaintRange: `월 ${addCommas(koRaw.optMaintMin)}~${formatKrw(koRaw.optMaintMax)}`,
    firstMonthACMan: formatManwon(koFirstMonthAC),
    threeMonthsTotalMan: formatManwon(koThreeMonthsTotal),
    hostingNote: `워드프레스 월 ${koRaw.hostingWpMinMan}~${koRaw.hostingWpMaxMan}만원, 정적 사이트 월 0~${koRaw.hostingStaticMaxMan}만원(고객 명의)`,
  },
} as const;

const enRaw = {
  asOfLabel: 'Reference pricing as of Nov 2026 · agreed per scope',
  clinicPilot: 1_250,
  softwarePilot: 2_500,
  clinicMonthly: 2_500,
  clinicFaqDrafts: 'Two',
  clinicSocialDrafts: 'Four',
  softwareArticles: 'Three',
  softwareScreenshots: 'ten',
  monthlyFaqDrafts: 'four',
  monthlySocialDrafts: 'eight',
} as const;

export const EN_PRICING = {
  ...enRaw,
  formatted: {
    clinicPilot: formatUsd(enRaw.clinicPilot),
    softwarePilot: formatUsd(enRaw.softwarePilot),
    clinicMonthly: `${formatUsd(enRaw.clinicMonthly)} / month`,
    clinicMonthlyInline: `${formatUsd(enRaw.clinicMonthly)} per month`,
  },
} as const;
