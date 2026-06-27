import { Link, NavLink } from 'react-router'
import Avatar from '~/components/base/Avatar'
import Button from '~/components/base/Button'
import MobileNav from '~/components/layout/MobileNav'
import ThemeToggle from '~/components/layout/ThemeToggle'

/** ヘッダーのナビ項目。PC のインラインナビとモバイルの MobileNav の両方で使う。 */
const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Works', to: '/works' },
  { label: 'Tools', to: '/tools' },
  { label: 'Blog', to: '/blog' },
]

/** 全ページ共通のヘッダー（左にアバター→Home、右に各ページへのナビ）。 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background px-6 py-4">
      <Link to="/" aria-label="Home">
        <Avatar src="/avatar.jpg" alt="Ryo" fallback="R" className="size-12" />
      </Link>
      <div className="flex items-center gap-1">
        {/* PC: インラインナビ */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button key={item.to} variant="ghost" asChild>
              <NavLink to={item.to}>{item.label}</NavLink>
            </Button>
          ))}
        </nav>
        {/* モバイル: ハンバーガーメニュー */}
        <div className="md:hidden">
          <MobileNav items={navItems} />
        </div>
        {/* 一番右: カラーモード切替 */}
        <ThemeToggle />
      </div>
    </header>
  )
}
