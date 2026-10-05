import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// 도메인 연결 전에는 GitHub Pages 주소, 연결 뒤 https://zicks.modoc-ai.com 으로 바꾼다.
export default defineConfig({
  site: process.env.SITE_URL || 'https://zicks.modoc-ai.com',
  base: process.env.BASE_PATH || '/',   // 도메인 연결 전 github.io 미리보기는 /zicks-site
  integrations: [sitemap()],
  build: { format: 'directory' },
});
