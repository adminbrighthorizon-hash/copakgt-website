import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// Cloudflare sets CF_PAGES=1 during builds; use root base for Cloudflare, subpath for GitHub Pages
const isCloudflare = process.env.CF_PAGES === '1' || process.env.ASTRO_BASE === '/';
const PROD_BASE = isCloudflare ? '/' : (process.env.ASTRO_BASE || '/copakgt-website/');
const SITE = isCloudflare
    ? (process.env.ASTRO_SITE || 'https://copakgt-website.pages.dev')
    : (process.env.ASTRO_SITE || 'https://adminbrighthorizon-hash.github.io');

export default defineConfig({
  site: SITE,
  base: PROD_BASE,
  adapter: cloudflare(),
});