# my-portfolio

Ryo's Portfolio サイト。Vite + React Router 7（framework mode・SSG）+ TypeScript で構築。

- 技術構成の詳細：[docs/TECH_STACK.md](docs/TECH_STACK.md)
- コード構成・コンポーネント作成ルール：[docs/COMPONENTS.md](docs/COMPONENTS.md)

## 必要要件

- Node.js（バージョンは [.node-version](.node-version) で固定）
- pnpm（corepack 経由。バージョンは `package.json` の `packageManager` で固定）

## セットアップ

```bash
pnpm install
```

## 開発コマンド

| コマンド | 内容 |
| --- | --- |
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | 本番ビルド（全ルートを SSG で prerender） |
| `pnpm typecheck` | 型チェック |
| `pnpm test` | テスト（Vitest） |
| `pnpm lint` / `pnpm format` / `pnpm check` | Biome（Lint / 整形 / 一括チェック&修正） |
| `pnpm storybook` | Storybook（コンポーネントカタログ）起動 |

## ツール

Lint / Format は **Biome** に一本化（ESLint・Prettier は不使用）。設定は [biome.json](biome.json)。

## エディタ（VSCode）

`.vscode/` に設定を同梱：

- 保存時に Biome で自動フォーマット＋import 整理（`.vscode/settings.json`）
- 推奨拡張機能（`.vscode/extensions.json`）：Biome / Tailwind CSS IntelliSense / Vitest。VSCode で開くとインストールを促されます。
