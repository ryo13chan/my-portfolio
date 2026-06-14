import { Link, NavLink } from 'react-router'
import Avatar from '~/components/Avatar'
import Button from '~/components/Button'

const navItems = [
  { label: 'About', to: '/about' },
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
      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <Button key={item.to} variant="ghost" asChild>
            <NavLink to={item.to}>{item.label}</NavLink>
          </Button>
        ))}
      </nav>
    </header>
  )
}
