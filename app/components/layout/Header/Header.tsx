import { Link, NavLink } from 'react-router'
import Avatar from '~/components/base/Avatar'
import Button from '~/components/base/Button'
import MobileNav from '~/components/layout/MobileNav'
import ThemeToggle from '~/components/layout/ThemeToggle'
import { NAV_ITEMS } from '~/config/nav'
import { SITE_NAME } from '~/config/site'

/** 全ページ共通のヘッダー（左にアバター→Home、右に各ページへのナビ）。 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background px-6 py-4">
      <Link to="/" className="flex items-center gap-4">
        {/* リンク名は隣の SITE_NAME になるため、画像は装飾扱い（alt=""） */}
        <Avatar src="/avatar.jpg" alt="" fallback="R" className="size-12" />
        <span className="font-semibold text-xl">{SITE_NAME}</span>
      </Link>
      <div className="flex items-center gap-1">
        {/* PC: インラインナビ */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Button key={item.to} variant="ghost" asChild>
              <NavLink to={item.to}>{item.label}</NavLink>
            </Button>
          ))}
        </nav>
        {/* モバイル: ハンバーガーメニュー */}
        <div className="md:hidden">
          <MobileNav items={NAV_ITEMS} />
        </div>
        {/* 一番右: カラーモード切替 */}
        <ThemeToggle />
      </div>
    </header>
  )
}
