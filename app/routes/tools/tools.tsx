import { pageTitle, SITE_NAME } from '~/config/site'
import ToolsPage from '~/features/tools/pages/ToolsPage'
import type { Route } from './+types/tools'

export function meta(_: Route.MetaArgs) {
  return [
    { title: pageTitle('Tools') },
    { name: 'description', content: `${SITE_NAME} の便利ツール集` },
  ]
}

export default function ToolsRoute() {
  return <ToolsPage />
}
