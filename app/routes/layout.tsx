import { Outlet } from 'react-router'
import Header from '~/components/layout/Header'

// 全ページ共通のレイアウト（パスを持たない layout ルート）。
// root.tsx は HTML ドキュメントの殻、ここはアプリの見た目の骨格を担う。
export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
