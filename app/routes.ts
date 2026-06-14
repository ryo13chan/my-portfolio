import {
  index,
  layout,
  type RouteConfig,
  route,
} from '@react-router/dev/routes'

export default [
  layout('routes/layout.tsx', [
    index('routes/home/home.tsx'),
    route('about', 'routes/about/about.tsx'),
    route('tools', 'routes/tools/tools.tsx'),
    route('blog', 'routes/blog/blog.tsx'),
  ]),
] satisfies RouteConfig
