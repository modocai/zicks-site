import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 주소 구조(시장+언어)는 src/i18n/config.ts 에서 관리한다.
export default defineConfig({
  site: process.env.SITE_URL || 'https://zicks.modoc-ai.com',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
