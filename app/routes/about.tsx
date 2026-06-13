import AboutPage from '~/features/about/pages/AboutPage'
import type { Route } from './+types/about'

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'About | my-portfolio' },
    { name: 'description', content: 'my-portfolio の自己紹介ページ' },
  ]
}

export default function AboutRoute() {
  return <AboutPage />
}
