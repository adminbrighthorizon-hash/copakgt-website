// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://gkakese.github.io",
  base: "/copakgt-website/",
  vite: {
    plugins: [tailwindcss()]
  }
});