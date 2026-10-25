import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages project-site URL: /knowledgeverse/
  base: '/knowledgeverse/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
