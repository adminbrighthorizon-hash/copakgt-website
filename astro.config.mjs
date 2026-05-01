import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

const isCloudflare = process.env.CF_PAGES === '1';

const PROD_BASE = isCloudflare
  ? '/'
  : (process.env.ASTRO_BASE || '/copakgt-website/');

const SITE = isCloudflare
  ? (process.env.ASTRO_SITE || 'https://copakgt-website.pages.dev')
  : (process.env.ASTRO_SITE || 'https://adminbrighthorizon-hash.github.io');

export default defineConfig({
  site: SITE,
  base: PROD_BASE,
  ...(isCloudflare
    ? {
        output: 'server',
        adapter: cloudflare(),
      }
    : {
        output: 'static',
      }),
});