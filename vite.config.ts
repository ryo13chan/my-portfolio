import { fileURLToPath } from 'node:url'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://reactrouter.com/start/framework/installation
export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    alias: {
      // tsconfig の paths "~/*" -> "app/*" に合わせる（dev/build 双方で解決）
      '~': fileURLToPath(new URL('./app', import.meta.url)),
    },
  },
})
