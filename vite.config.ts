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
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      strictPort: true,
      historyApiFallback: true,
      headers: {
        'Content-Type': 'application/javascript',
        'X-Content-Type-Options': 'nosniff'
      },
      middlewareMode: false,
      fs: {
        strict: true,
        allow: ['./src']
      }
    },
    preview: {
      headers: {
        'Content-Type': 'application/javascript',
        'X-Content-Type-Options': 'nosniff'
      }
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
              '@tanstack/react-query',
              'date-fns'
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
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
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
    optimizeDeps: {
      exclude: ['lucide-react']
    }
  }
});
