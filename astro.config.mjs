import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  build: {
    assets: '_assets'
  },
  vite: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }
  }
});
