import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

// テスト専用の設定。本番の reactRouter() プラグインは読み込まず、
// React 変換のみ @vitejs/plugin-react で行う。
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // tsconfig の paths "~/*" -> "app/*" に合わせる
      '~': fileURLToPath(new URL('./app', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['app/**/*.{test,spec}.{ts,tsx}'],
  },
})
