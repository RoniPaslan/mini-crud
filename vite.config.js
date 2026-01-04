import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/main.jsx'],
      refresh: false,
    }),
    react({
      refresh: false, 
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),
    },
  },
  build: {
    outDir: 'public/build',
    emptyOutDir: true,
    minify: 'esbuild',
  },
});
