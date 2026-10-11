# zicks-site

zicks (모닥에이아이코리아) 의 공식 사이트. **정적 사이트 예시**이기도 하다: Astro 로 빌드해 무료 호스팅(GitHub Pages)에 올리고, 모든 AI 크롤러에 열어 둔다.

- 빌드: `npm ci && npm run build` → `dist/`
- 로컬 확인: `npm run dev`
- 배포: `main` 에 푸시하면 GitHub Actions 가 Pages 로 배포 (`.github/workflows/deploy.yml`). 저장소 Settings → Pages → Source 를 "GitHub Actions" 로 한 번 설정.
- 도메인: `public/CNAME` = zicks.modoc-ai.com. DNS 에 CNAME `zicks` → `<org>.github.io` 추가 뒤 Pages 설정에서 custom domain 입력. 연결 전에는 `SITE_URL` 변수로 임시 주소를 넣는다.
- GEO 요소: `public/robots.txt`(AI 봇 전부 허용), `public/llms.txt`, 페이지마다 Organization · Service JSON-LD, `/how/` 에 FAQPage, 사이트맵 자동.
- 수치는 `zicks/tenants/fevercoach/facts.yaml` 의 allowed 항목만 쓴다. 숫자를 바꾸려면 거기부터.
- 호스팅 비용 0원. Cloudflare Pages 로 옮겨도 같은 `dist/` 를 그대로 올리면 된다.

## 영어 서비스 페이지 (2026-10-10)

`feat/english-service-pilots` 브랜치의 `/en/`은 미국 영업에서 제시한 유료 서비스 범위를
설명한다. 클리닉 파일럿 $1,250, 소프트웨어 콘텐츠 파일럿 $2,500을 구분하고
`myeongchan@modoc-ai.com` 문의 링크를 제공한다. 한국어 페이지 상단과 하단에서 연결한다.
기존 한국어 가격·서비스 본문은 변경하지 않았다. 신규 계약이나 검증된 구매 수요는 아니다.

검증: Astro 빌드 7개 경로, diff whitespace 검사, 생성 HTML의 로컬 링크·상호 언어 링크·문의 목적지·사이트맵 검사 통과.
Aside에서 영어 첫 화면·가격 카드·문의/푸터 화면을 확인했다. Aside의 한국어 이동 후 빈 화면은
Chrome에서 재검증했고 한국어↔영어 왕복 탐색이 정상 동작했다. Chrome의 375×812 뷰포트에서
영어 전체 페이지를 시각 검수했으며 가격 카드·문의·푸터 잘림이 없었다. 검증 후 뷰포트를 복원했다.
