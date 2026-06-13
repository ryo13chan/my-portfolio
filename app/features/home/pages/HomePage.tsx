import { Link } from 'react-router'

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-slate-800">Home</h1>
      <Link to="/about" className="mt-4 inline-block text-blue-600 underline">
        About へ
      </Link>
    </div>
  )
}
