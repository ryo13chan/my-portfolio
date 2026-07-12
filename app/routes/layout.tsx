import { Outlet } from 'react-router'
import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'

/** 全ページ共通レイアウト（ヘッダー + ページ本体 + フッター）。 */
export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
