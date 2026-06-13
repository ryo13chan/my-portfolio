import type { Config } from '@react-router/dev/config'

export default {
  // 静的サイト生成（SSG）。サーバー無しで静的ホスティングに配置できる。
  ssr: false,
  // 既知の静的ルートをすべて事前レンダリング（ブログ記事など動的ルートは関数で返す）。
  prerender: true,
  // React Router v8 の新挙動を先取りで有効化（警告解消＋将来の移行を楽に）。
  future: {
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
    v8_passThroughRequests: true,
    v8_trailingSlashAwareDataRequests: true,
  },
} satisfies Config
