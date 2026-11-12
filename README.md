# zicks-site

`zicks` (`MoDoc AI` / 모닥에이아이코리아) 공식 사이트. **정적 사이트 GEO 예시**이기도 하다: Astro로 빌드해 무료 호스팅(GitHub Pages)에 올리고, 모든 검색엔진과 주요 AI 크롤러에 열어 둔다.

## 빠른 실행

- 설치 및 빌드(타입 검증 포함): `npm ci && npm run build` → `dist/`
- 로컬 개발 서버: `npm run dev`
- 다국어 사전 · 가격 데이터 타입 검증만 실행: `npm run check`
- 배포: `main`에 푸시하면 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로 빌드해 GitHub Pages에 배포한다.
- 도메인: `public/CNAME` = `zicks.modoc-ai.com` (연결 전 미리보기 시 `SITE_URL` · `BASE_PATH` 환경변수 지원).

## 다국어(i18n) 및 주소 구조

기본 도메인 루트(`/`)는 국제 공용어인 **영어(`en`, `x-default`)**이며, 추가 언어는 `/ko/`처럼 언어 코드 접두사로 대칭 구성된다.

- **영어 기본 (`/`)**: `/` · `/how/` · `/services/` · `/cases/` · `/pricing/` · `/contact/` (미국 클리닉 · 헬스케어 소프트웨어 유료 파일럿 및 무료 가시성 진단)
- **한국어 (`/ko/`)**: `/ko/` · `/ko/how/` · `/ko/services/` · `/ko/cases/` · `/ko/pricing/` · `/ko/contact/` (국내 AI native GEO · SEO 콘텐츠 운영)
- **이전 주소 호환 (`/en/`)**: 과거 공유된 `/en/` 및 `/en/#pilots` 링크는 자동으로 `/` 및 `/#pilots`로 이동한다 (`src/pages/en/index.astro`, 사이트맵 제외).

### 새 언어 추가 방법 (예: 스페인어 `es` 또는 일본어 `ja`)
1. `astro.config.mjs`와 `src/i18n/config.ts`의 `LOCALES` / `LOCALE_META`에 언어 코드를 추가한다.
2. `src/i18n/locales/<코드>.ts` 파일을 만들고 `LocaleDict` 타입에 맞춰 번역 문구를 채운 뒤 `src/i18n/index.ts`에 등록한다.
3. 페이지 파일을 새로 만들지 않아도 6개 경로, 상단 · 모바일 언어 전환기, `hreflang`, 사이트맵이 자동 생성된다 (`npm run check`로 누락 항목 검증).

## 운영 · 문구 수정 시 꼭 지킬 기준

- **가격 수정은 한 파일에서만**: 한/영 모든 금액과 기본 산출물 숫자는 **`src/data/pricing.ts`** 한 곳에서만 관리한다. 이 파일의 숫자만 바꾸면 홈(`/#pilots`), 서비스, 가격 페이지 본문과 합계가 함께 갱신된다. 가격이 확정되기 전(가안 기간)에는 JSON-LD 구조화 코드에 `Offer`/`price`를 넣지 않는다.
- **FeverCoach 사실 · 수치 기준 (`facts.yaml`)**: 자사 앱 FeverCoach 관련 수치와 표현은 반드시 `zicks/tenants/fevercoach/facts.yaml`의 `allowed` 항목만 사용한다.
  - 의사 표기는 `의사` / `physicians` / `physician-reviewed`만 허용한다 (`전문의`, `소아과`, `pediatricians`, `specialists`, `medical review board` 등 금지).
  - 검색 · 추천 순위 고정이나 매출 증가를 보장하는 문구는 쓰지 않는다.
- **GEO 자산 유지**: `public/robots.txt`(AI 크롤러 허용), `public/llms.txt`(영문 · 한국어 요약), 전 페이지 `Organization` · `Service` JSON-LD, `/how/` 및 `/ko/how/`의 `FAQPage` JSON-LD, 자동 생성 사이트맵(`sitemap-index.xml`).
