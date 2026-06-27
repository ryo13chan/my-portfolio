import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// globals: false のため Testing Library の自動クリーンアップが効かない。
// テストごとにレンダリング結果を破棄して分離する。
afterEach(() => {
  cleanup()
})

// jsdom は matchMedia を実装していないためモックする（常に light を返す）。
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
})
