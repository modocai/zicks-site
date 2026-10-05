# zicks-site

zicks (모닥에이아이코리아) 의 공식 사이트. **정적 사이트 예시**이기도 하다: Astro 로 빌드해 무료 호스팅(GitHub Pages)에 올리고, 모든 AI 크롤러에 열어 둔다.

- 빌드: `npm ci && npm run build` → `dist/`
- 로컬 확인: `npm run dev`
- 배포: `main` 에 푸시하면 GitHub Actions 가 Pages 로 배포 (`.github/workflows/deploy.yml`). 저장소 Settings → Pages → Source 를 "GitHub Actions" 로 한 번 설정.
- 도메인: `public/CNAME` = zicks.modoc-ai.com. DNS 에 CNAME `zicks` → `<org>.github.io` 추가 뒤 Pages 설정에서 custom domain 입력. 연결 전에는 `SITE_URL` 변수로 임시 주소를 넣는다.
- GEO 요소: `public/robots.txt`(AI 봇 전부 허용), `public/llms.txt`, 페이지마다 Organization · Service JSON-LD, `/how/` 에 FAQPage, 사이트맵 자동.
- 수치는 `zicks/tenants/fevercoach/facts.yaml` 의 allowed 항목만 쓴다. 숫자를 바꾸려면 거기부터.
- 호스팅 비용 0원. Cloudflare Pages 로 옮겨도 같은 `dist/` 를 그대로 올리면 된다.
