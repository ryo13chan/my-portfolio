import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'

/** localStorage に保存するキー。inline script（root.tsx）と一致させること。 */
export const THEME_STORAGE_KEY = 'theme'

/** 指定テーマを実際の見た目（html の dark クラス）に反映する。 */
export function applyTheme(theme: Theme) {
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', isDark)
}

/** カラーモード（light/dark/system）の取得・切替を行うフック。値は localStorage に保持。 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('system')

  // 初回マウントで保存値を読む（初期描画は inline script が既に dark クラスを当てている）
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null
    if (stored) setThemeState(stored)
  }, [])

  // system 選択時は OS のテーマ変更に追従する
  useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => applyTheme('system')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [theme])

  const setTheme = (next: Theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, next)
    applyTheme(next)
    setThemeState(next)
  }

  return { theme, setTheme }
}
