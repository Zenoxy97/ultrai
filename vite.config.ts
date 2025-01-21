import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      react({
        jsxRuntime: 'classic',
        babel: {
          plugins: ['@babel/plugin-transform-react-jsx']
        }
      })
    ],
    base: './',
    define: {
      'process.env': env,
      'global': 'globalThis'
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        'react': resolve(__dirname, './node_modules/react'),
        'react-dom': resolve(__dirname, './node_modules/react-dom')
      }
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        '@radix-ui/react-toast',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'lucide-react'
      ],
      exclude: ['@radix-ui/react-presence']
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      manifest: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
        },
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react';
              }
              if (id.includes('firebase')) {
                return 'vendor-firebase';
              }
              if (id.includes('@radix-ui')) {
                return 'vendor-radix';
              }
              return 'vendor';
            }
            if (id.includes('/admin/')) {
              return 'admin';
            }
          },
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      },
      commonjsOptions: {
        include: [/node_modules/],
        transformMixedEsModules: true
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
    server: {
      port: 3000,
      host: true,
      fs: {
        strict: false
      }
    },
    preview: {
      port: 3000,
      host: true
    }
  }
});
