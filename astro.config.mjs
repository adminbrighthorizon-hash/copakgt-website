import { defineConfig } from 'astro/config';

const BASE = process.env.ASTRO_BASE || '/';
const SITE = process.env.ASTRO_SITE || 'https://your-cloudflare-domain.pages.dev';

export default defineConfig({
  site: SITE,
  base: BASE,
});