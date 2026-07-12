import { Outlet } from 'react-router'
import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'

/** 全ページ共通レイアウト（ヘッダー + ページ本体 + フッター）。 */
export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
