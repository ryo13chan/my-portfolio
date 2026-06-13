import { Link } from 'react-router'

export default function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-slate-800">About</h1>
      <Link to="/" className="mt-4 inline-block text-blue-600 underline">
        Home へ
      </Link>
    </div>
  )
}
