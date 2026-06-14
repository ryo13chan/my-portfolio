import { pageTitle, SITE_NAME } from '~/config/site'
import BlogPage from '~/features/blog/pages/BlogPage'
import type { Route } from './+types/blog'

export function meta(_: Route.MetaArgs) {
  return [
    { title: pageTitle('Blog') },
    { name: 'description', content: `${SITE_NAME} のブログ` },
  ]
}

export default function BlogRoute() {
  return <BlogPage />
}
