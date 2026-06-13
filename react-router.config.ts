import type { Config } from '@react-router/dev/config'

export default {
  // 静的サイト生成（SSG）。サーバー無しで静的ホスティングに配置できる。
  ssr: false,
  // 既知の静的ルートをすべて事前レンダリング（ブログ記事など動的ルートは関数で返す）。
  prerender: true,
} satisfies Config
