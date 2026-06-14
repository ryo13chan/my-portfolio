import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// globals: false のため Testing Library の自動クリーンアップが効かない。
// テストごとにレンダリング結果を破棄して分離する。
afterEach(() => {
  cleanup()
})
