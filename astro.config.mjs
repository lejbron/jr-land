import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  publicDir: 'assets',
  base: '/jr-land',
  server: {
    host: true,
    port: 4321,
  },
});
