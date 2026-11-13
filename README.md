# zicks-site

`zicks` (`MoDoc AI` / 모닥에이아이코리아) 공식 사이트. **정적 사이트 GEO 예시**이기도 하다: Astro로 빌드해 정적 호스팅(Vercel)에 올리고, 모든 검색엔진과 주요 AI 크롤러에 열어 둔다.

## 빠른 실행

- 설치 및 빌드(타입 검증 포함): `npm ci && npm run build` → `dist/`
- 로컬 개발 서버: `npm run dev`
- 사전 · 가격 데이터 타입 검증만 실행: `npm run check`
- 배포: Vercel. `vercel.json`(이전 `/en/` 주소 301, 끝 슬래시 통일)과 `middleware.js`(한국 접속 리다이렉트)는 Vercel에서만 동작한다. GitHub Pages 워크플로(`.github/workflows/deploy.yml`)와 `public/CNAME`은 Vercel 전환을 마친 뒤 삭제한다.

## 시장과 언어별 주소 구조

시장(미국, 한국)과 언어를 함께 묶어 세 벌의 페이지를 만든다. 페이지는 `src/pages/[...path].astro` 하나가 모두 만든다.

| 시장 | 언어 | 경로 | 사전 |
|---|---|---|---|
| 미국 클리닉 | 영어 (`x-default`) | `/`, `/how/`, `/services/`, `/cases/`, `/pricing/`, `/contact/` | `src/i18n/locales/us-en.ts` |
| 미국 클리닉 | 한국어 | `/us/ko/` 아래 같은 6개 | `src/i18n/locales/us-ko.ts` |
| 한국 학원과 교육업체 | 한국어 | `/kr/` 아래 같은 6개 | `src/i18n/locales/kr.ts` |

- 미국 영어와 미국 한국어는 같은 서비스의 번역본이라 내용이 1:1로 대응한다. 한국은 별도 서비스다.
- 언어 전환은 같은 하위 페이지끼리, 시장 전환은 상대 시장의 홈으로 연결한다. 시장 전환 링크를 누르면 `zicks_market` 쿠키(1년)가 저장된다.
- 한국에서 루트(`/`)로 처음 들어오면 `/kr/`로 302 이동한다(`middleware.js`). 쿠키가 있거나 다른 경로면 이동하지 않는다. 브라우저 언어로는 이동하지 않고, 미국 영어 페이지 상단에 "한국어로 보기" 띠만 보여 준다.
- 미국용 언어를 추가할 때는 `src/i18n/config.ts`의 `MARKETS`와 `MARKET_META`에 `us-es`처럼 추가하고(`/us/es/`), `SiteDict` 타입에 맞춘 사전을 `src/i18n/index.ts`에 등록한다. 경로, 전환 버튼, `hreflang`, 사이트맵은 자동으로 따라온다.

## 운영 · 문구 수정 시 꼭 지킬 기준

- **가격 수정은 한 파일에서만**: 한/영 모든 금액과 기본 산출물 숫자는 **`src/data/pricing.ts`** 한 곳에서만 관리한다. 이 파일의 숫자만 바꾸면 홈(`/#pilots`), 서비스, 가격 페이지 본문과 합계가 함께 갱신된다. 가격이 확정되기 전(가안 기간)에는 JSON-LD 구조화 코드에 `Offer`/`price`를 넣지 않는다.
- **FeverCoach 사실 · 수치 기준 (`facts.yaml`)**: 자사 앱 FeverCoach 관련 수치와 표현은 반드시 `zicks/tenants/fevercoach/facts.yaml`의 `allowed` 항목만 사용한다.
  - 의사 표기는 `의사` / `physicians` / `physician-reviewed`만 허용한다 (`전문의`, `소아과`, `pediatricians`, `specialists`, `medical review board` 등 금지).
  - 검색 · 추천 순위 고정이나 매출 증가를 보장하는 문구는 쓰지 않는다.
- **GEO 자산 유지**: `public/robots.txt`(AI 크롤러 허용), `public/llms.txt`(시장별 요약), 전 페이지 `Organization` · `Service` JSON-LD, 세 시장 진행 방식 페이지(`/how/`, `/us/ko/how/`, `/kr/how/`)의 `FAQPage` JSON-LD, 자동 생성 사이트맵(`sitemap-index.xml`).
- **화면 규칙**: 스타일은 `src/styles/global.css`의 토큰과 클래스로만 쓴다(인라인 스타일 금지). 카드, 알약 모양 태그 대신 표와 구분선을 쓰고, 문구에 가운뎃점과 화살표 기호를 쓰지 않는다.
