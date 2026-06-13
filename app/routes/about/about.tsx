import { pageTitle, SITE_NAME } from '~/config/site'
import AboutPage from '~/features/about/pages/AboutPage'
import type { Route } from './+types/about'

export function meta(_: Route.MetaArgs) {
  return [
    { title: pageTitle('About') },
    { name: 'description', content: `${SITE_NAME} の自己紹介ページ` },
  ]
}

export default function AboutRoute() {
  return <AboutPage />
}
