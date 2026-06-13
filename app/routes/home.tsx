import HomePage from '~/features/home/pages/HomePage'
import type { Route } from './+types/home'

export function meta(_: Route.MetaArgs) {
  return [
    { title: 'Home | my-portfolio' },
    { name: 'description', content: 'my-portfolio のトップページ' },
  ]
}

export default function HomeRoute() {
  return <HomePage />
}
