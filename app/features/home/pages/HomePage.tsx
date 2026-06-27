import { Link } from 'react-router'
import Button from '~/components/base/Button'

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-slate-800">Home</h1>
      <Link to="/about" className="mt-4 inline-block text-blue-600 underline">
        About へ
      </Link>
      <div className="mt-4">
        <Button>ボタン</Button>
      </div>

      {/* TODO: sticky ヘッダーのスクロール確認用の仮コンテンツ。本実装時に削除する */}
      <div className="mt-8 flex h-[150vh] items-start rounded bg-slate-100 p-4 text-slate-500">
        スクロール確認用の仮コンテンツ（本実装時に削除）
      </div>
    </div>
  )
}
