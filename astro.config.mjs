// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['monaco-editor']
    },
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0, // Ensures Monaco assets don't get inlined
    },
    resolve: {
      alias: {
        'vscode': 'monaco-editor/esm/vs/editor/editor.api'
      }
    }
  },

  adapter: vercel(),
});