import { Link } from 'react-router'
import Heading from '~/components/base/Heading'

export default function AboutPage() {
  return (
    <div className="p-8">
      <Heading level={1}>About</Heading>
      <Link to="/" className="mt-4 inline-block text-blue-600 underline">
        Home へ
      </Link>
    </div>
  )
}
