# 技術構成 (Tech Stack)

このポートフォリオサイトで使用している技術構成をまとめたドキュメントです。
構成に変更があった場合は、このファイルを更新してください。

---

## 概要

| 区分 | 技術 |
| --- | --- |
| フレームワーク | React Router 7（framework mode） |
| UI ライブラリ | React 19 |
| レンダリング | SSG（全ルート prerender、静的ホスティング） |
| 言語 | TypeScript 6 |
| ビルドツール | Vite 8 |
| スタイリング | Tailwind CSS 4 |
| テスト | Vitest 4 + Testing Library |
| Lint / Format | Biome 2 |
| ランタイム | Node.js v24.16.0 (LTS "Krypton") |
| パッケージ管理 | pnpm 11 (corepack で固定) |

---

## フロントエンド / ルーティング

- **React Router** `^7.17.0` — framework mode（ファイルベースルーティング・SSG）。ルート定義は `app/routes.ts`、共通レイアウトは `app/root.tsx`
- **@react-router/dev** `^7.17.0` — Vite プラグイン・CLI（dev/build/typegen）
- **@react-router/node** / **@react-router/serve** `^7.17.0` — Node ランタイム（ビルド・prerender 用）
- **isbot** `^5.1.42` — ボット判定
- **React** `^19.2.6` / **React DOM** `^19.2.6` — UI ライブラリ
- **レンダリング**: `react-router.config.ts` で `ssr: false` + `prerender: true`。全ルートをビルド時に静的 HTML 化（SSG）

## スタイリング

- **Tailwind CSS** `^4.3.0` — ユーティリティファースト CSS
- **@tailwindcss/vite** `^4.3.0` — Vite プラグイン（`vite.config.ts` で読み込み、`app/app.css` で `@import "tailwindcss"`）

## 言語・型

- **TypeScript** `~6.0.2`
- **@types/react** `^19.2.14`
- **@types/react-dom** `^19.2.3`
- **@types/node** `^24.12.3`

## ビルド・開発環境

- **Vite** `^8.0.12` — 開発サーバー / バンドラー（React Router プラグイン経由）
- **Node.js** `v24.16.0`（LTS "Krypton" / `.node-version` で固定、fnm で管理）
- **pnpm** `11.6.0` — パッケージマネージャ（`package.json` の `packageManager` で固定、corepack 経由）

## テスト

- **Vitest** `^4.1.8` — テストランナー（設定は `vitest.config.ts`。テスト専用に `@vitejs/plugin-react` + `jsdom` を使用）
- **@testing-library/react** `^16.3.2` / **@testing-library/jest-dom** `^6.9.1` / **@testing-library/user-event** `^14.6.1` — コンポーネントテスト
- テストは `app/**/*.{test,spec}.{ts,tsx}` に配置

## Lint / Format

- **Biome** `^2.4.16` — Lint と Format を一手に担うツール（設定は `biome.json`）。`.gitignore` を尊重して `build` / `.react-router` を除外

---

## スクリプト

| コマンド | 内容 |
| --- | --- |
| `pnpm install` | 依存パッケージのインストール |
| `pnpm run dev` | 開発サーバー起動 (React Router + Vite) |
| `pnpm run build` | 本番ビルド（全ルートを prerender して `build/client` に出力） |
| `pnpm run typecheck` | 型生成 (`react-router typegen`) 後に `tsc` で型チェック |
| `pnpm run lint` | Biome で Lint |
| `pnpm run format` | Biome で整形（書き込み） |
| `pnpm run check` | Biome で Lint + 整形 + import 整理（書き込み） |
| `pnpm run test` | Vitest でテスト実行（1回） |
| `pnpm run test:watch` | Vitest をウォッチモードで実行 |

---

## ディレクトリ構成

```
my-portfolio/
├── public/                 # 静的ファイル (favicon など)
├── app/
│   ├── routes/             # ページ (home.tsx, about.tsx など)
│   ├── routes.ts           # ルート定義
│   ├── root.tsx            # 共通レイアウト (html/head/body)
│   └── app.css             # Tailwind の読み込み
├── react-router.config.ts  # framework mode 設定 (SSG)
├── vite.config.ts
├── tsconfig.json
├── biome.json
└── package.json
```

> ビルド成果物は `build/client/`（静的ファイル）。型生成は `.react-router/`（いずれも Git 管理外）。
