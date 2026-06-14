import { Outlet } from 'react-router'
import Header from '~/components/layout/Header'

/** 全ページ共通レイアウト（ヘッダー + ページ本体）。 */
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
