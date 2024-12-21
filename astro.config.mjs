// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme:  "tokyo-night"
    },
  },
  site: "https://natefu.xyz",
  integrations: [tailwind(), sitemap()],
});
