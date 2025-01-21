import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    base: '/',
    define: {
      'process.env': env
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': [
              'react',
              'react-dom',
              'react-router-dom',
              'firebase/app',
              'firebase/auth',
              'firebase/firestore',
              'firebase/storage'
            ],
            'admin': [
              '/src/components/admin/CommentModeration.tsx',
              '/src/components/admin/StatsDashboard.tsx',
              '/src/components/admin/CategoryManager.tsx'
            ],
            'search': [
              '/src/components/search/AdvancedSearch.tsx',
              '/src/services/searchService.ts'
            ],
            'recommendations': [
              '/src/components/recommendations/ArticleRecommendations.tsx'
            ]
          },
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]'
        }
      },
      sourcemap: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false,
          drop_debugger: true
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    server: {
      port: 3000,
      host: true
    },
    preview: {
      port: 3000,
      host: true
    }
  }
});
