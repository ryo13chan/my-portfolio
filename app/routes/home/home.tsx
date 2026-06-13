import { pageTitle, SITE_NAME } from '~/config/site'
import HomePage from '~/features/home/pages/HomePage'
import type { Route } from './+types/home'

export function meta(_: Route.MetaArgs) {
  return [
    { title: pageTitle('Home') },
    { name: 'description', content: `${SITE_NAME} のトップページ` },
  ]
}

export default function HomeRoute() {
  return <HomePage />
}
