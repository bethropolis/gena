import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://bethropolis.github.io',
  base: '/gena',
  integrations: [tailwind()]
});