export type NavItem = {
  /** リンクの表示ラベル */
  label: string
  /** 遷移先パス */
  to: string
}

/**
 * ヘッダーのナビゲーション項目。ここに追加すれば、
 * Header（PC のインラインナビ / モバイルの MobileNav）と
 * MobileNav の Storybook の両方に自動反映される。
 */
export const NAV_ITEMS: NavItem[] = [
  { label: 'About', to: '/about' },
  { label: 'Works', to: '/works' },
  { label: 'Tools', to: '/tools' },
  { label: 'Blog', to: '/blog' },
]
