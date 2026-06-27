import { SITE_NAME, pageTitle } from '~/config/site'
import WorksPage from '~/features/works/pages/WorksPage'
import type { Route } from './+types/works'

export function meta(_: Route.MetaArgs) {
  return [
    { title: pageTitle('Works') },
    { name: 'description', content: `${SITE_NAME} の作品集` },
  ]
}

export default function WorksRoute() {
  return <WorksPage />
}
