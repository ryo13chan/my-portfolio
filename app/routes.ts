import { index, type RouteConfig, route } from '@react-router/dev/routes'

export default [
  index('routes/home/home.tsx'),
  route('about', 'routes/about/about.tsx'),
  route('tools', 'routes/tools/tools.tsx'),
  route('blog', 'routes/blog/blog.tsx'),
] satisfies RouteConfig
