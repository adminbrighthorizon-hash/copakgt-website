// @ts-check
import { defineConfig } from 'astro/config';

const astroSite = process.env.ASTRO_SITE;
const astroBase = process.env.ASTRO_BASE;

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: astroSite || undefined,
  base: astroBase || '/',
});