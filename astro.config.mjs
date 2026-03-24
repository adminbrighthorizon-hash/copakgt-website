import { defineConfig } from 'astro/config';

const PROD_BASE = process.env.ASTRO_BASE || '/copakgt-website/';
const SITE = process.env.ASTRO_SITE || 'https://adminbrighthorizon-hash.github.io';

export default defineConfig({
	site: SITE,
	base: PROD_BASE,
});