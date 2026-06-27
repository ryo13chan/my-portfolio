import { Menu } from 'lucide-react'
import { NavLink } from 'react-router'
import Button from '~/components/Button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '~/components/ui/sheet'

type NavItem = {
  /** リンクの表示ラベル */
  label: string
  /** 遷移先パス */
  to: string
}

type MobileNavProps = {
  /** ナビゲーション項目 */
  items: NavItem[]
}

/** モバイル用のハンバーガーメニュー（Sheet で開くナビ）。 */
export default function MobileNav({ items }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="メニューを開く">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        {/* 画面には出さず、スクリーンリーダー用にのみタイトルを持たせる */}
        <SheetTitle className="sr-only">メニュー</SheetTitle>
        <nav className="mt-12 flex flex-col gap-1 px-4">
          {items.map((item) => (
            <SheetClose asChild key={item.to}>
              <NavLink
                to={item.to}
                className="rounded px-2 py-2 text-lg hover:bg-muted"
              >
                {item.label}
              </NavLink>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
