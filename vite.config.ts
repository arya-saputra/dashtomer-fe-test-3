import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

const env = loadEnv('production', process.cwd(), "");
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // isCustomElement: (tag) => tag.includes('greet-btn'),
          isCustomElement: () => false
        }
      },
      features: {
        customElement: false
      }
    }),
    vueJsx(),
    vueDevTools(),
  ],
  define: {
    "process.env": env,
  },
  build: {
    minify:false,
    lib: {
      entry: './src/main.web.ts',
      name: 'greet-btn',
      // the proper extensions will be added
      fileName: 'greeter-btn'
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
