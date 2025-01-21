import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
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
            '/src/components/recommendations/ArticleRecommendations.tsx',
            '/src/services/recommendationService.ts'
          ]
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    },
    chunkSizeWarningLimit: 800,
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react']
  }
});
