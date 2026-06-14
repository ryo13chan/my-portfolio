import { Link } from 'react-router'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Tools', to: '/tools' },
  { label: 'Blog', to: '/blog' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background px-6 py-4">
      <Link to="/" aria-label="Home">
        <Avatar>
          <AvatarImage src="/avatar.jpg" alt="Ryo" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>
      </Link>
      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <Button key={item.to} variant="ghost" asChild>
            <Link to={item.to}>{item.label}</Link>
          </Button>
        ))}
      </nav>
    </header>
  )
}
