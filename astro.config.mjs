import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  publicDir: 'assets',
  site: 'https://xn----7sbbbir1cgntjm6e1e.xn--p1ai/',
  base: '/',
  server: {
    host: true,
    port: 4321,
  },
});
