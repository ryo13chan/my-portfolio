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
| UI コンポーネント | shadcn/ui（radix ベース） |
| テスト | Vitest 4 + Testing Library |
| コンポーネントカタログ | Storybook 10 |
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

## UI コンポーネント（shadcn/ui）

- **shadcn/ui**（radix ベース）— `components.json` で設定、コンポーネントは `app/components/ui/` に取り込む
- 関連: `class-variance-authority` / `clsx` / `tailwind-merge`（`cn` ユーティリティは `app/lib/utils.ts`）/ `radix-ui` / `lucide-react`
- **方針（vendored）**: `app/components/ui/` の中身は**編集しない**（Biome 対象外。`includes` で除外）。更新は `npx shadcn@latest add <comp> --overwrite`。カスタムは自作ラッパー（`app/components/<Name>/`）から `className` / CSS 変数 / バリアントで行う
- テーマ（CSS 変数）と Tailwind ディレクティブは `app/app.css`。Biome は `css.parser.tailwindDirectives` を有効化して対応

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

## コンポーネントカタログ

- **Storybook** `^10.4.4`（`@storybook/react-vite`）— コンポーネントを画面上で確認するカタログ。設定は `.storybook/`
- **@storybook/addon-a11y** / **@storybook/addon-docs** — アクセシビリティ検査・ドキュメント
- story はコンポーネントに colocate（例: `app/components/Button/Button.stories.tsx`）
- `.storybook/main.ts` で RR の Vite プラグインを除外（Storybook と競合するため）、`preview.tsx` で `app/app.css`（Tailwind）を読み込み

## Lint / Format

- **Biome** `^2.4.16` — Lint と Format を一手に担うツール（設定は `biome.json`）。`.gitignore` を尊重して `build` / `.react-router` を除外

## CI / 依存管理

- **GitHub Actions**（`.github/workflows/ci.yml`）— PR/`main` push ごとに `biome ci` / `typecheck` / `test` / `build` を実行
- **Dependabot**（`.github/dependabot.yml`）— 依存パッケージと GitHub Actions を**週1**で更新。minor/patch はまとめて1 PR、major は個別 PR
- **Node 自動更新**（`.github/workflows/update-node.yml`）— **最新の Active LTS**（メジャー乗り換え含む）に `.node-version` を更新する PR を**週1**で作成（Dependabot は `.node-version` 非対応のため自前。ワークフロー内で検証してから PR）

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
| `pnpm run storybook` | Storybook 起動（http://localhost:6006） |
| `pnpm run build-storybook` | Storybook を静的ビルド（`storybook-static`） |

---

## ディレクトリ構成

```
my-portfolio/
├── public/                 # 静的ファイル (favicon など)
├── app/
│   ├── routes/             # ルートの配線（loader/meta + page を呼ぶ薄いラッパー）
│   │   ├── layout.tsx      #   全ページ共通レイアウト（layout ルート: Header + Outlet）
│   │   ├── home/           #   ルートごとにディレクトリ（home.tsx + home.test.ts）
│   │   ├── about/
│   │   ├── tools/
│   │   └── blog/
│   ├── features/           # 機能ごとにまとめる（フィーチャーベース）
│   │   ├── home/
│   │   │   ├── pages/      #   ページの中身 + テスト (HomePage.tsx / .test.tsx)
│   │   │   └── components/ #   (今後) その機能固有のコンポーネント
│   │   ├── about/
│   │   ├── works/          #   (仮ページ) 作品集
│   │   ├── tools/          #   (仮ページ) 便利ツール集
│   │   └── blog/           #   (仮ページ) ブログ
│   ├── components/          # アプリ共通のコンポーネント
│   │   ├── base/           #   汎用プリミティブ（コンポーネントごとにディレクトリ）
│   │   │   ├── Button/     #     Button.tsx / .test.tsx / .stories.tsx / index.ts
│   │   │   ├── Avatar/     #     ui/avatar のラッパー（src/alt/fallback/className）
│   │   │   └── Heading/    #     見出し h1〜h6（level prop・text-foreground でダーク対応）
│   │   ├── layout/         #   全ページ横断のレイアウトのガワ
│   │   │   ├── Header/     #     サイト共通ヘッダー（layout ルートで表示）
│   │   │   ├── MobileNav/  #     モバイル用ハンバーガーメニュー（Sheet）
│   │   │   └── ThemeToggle/ #    カラーモード切替（Light/Dark/System・localStorage 保持）
│   │   └── ui/             #   shadcn/ui（vendored・編集しない・Biome 対象外）
│   ├── config/             # サイト共通設定 (site.ts: SITE_NAME など)
│   ├── lib/                # 汎用ユーティリティ (utils.ts: cn など)
│   ├── routes.ts           # ルート定義
│   ├── root.tsx            # HTML ドキュメントの殻 (html/head/body)
│   └── app.css             # Tailwind + shadcn テーマ (CSS 変数)
├── .storybook/             # Storybook 設定 (main.ts / preview.tsx)
├── docs/                   # プロジェクトドキュメント (TECH_STACK.md)
├── components.json         # shadcn/ui 設定
├── react-router.config.ts  # framework mode 設定 (SSG)
├── vite.config.ts
├── tsconfig.json
├── biome.json
└── package.json
```

> ビルド成果物は `build/client/`（静的ファイル）。型生成は `.react-router/`（いずれも Git 管理外）。
>
> パスエイリアス `~/*` → `app/*`（例: `~/features/home/pages/HomePage`）。
>
> **役割分担**: `routes/` はルートの配線（`loader`/`meta` はここ）、`features/<name>/pages/` はページの中身（純粋な UI）でテストを colocate。`features/<name>/components/` は今後その機能固有の部品を置く。
>
> **ディレクトリ規約**: `routes/` も `components/` もルート/コンポーネントごとにディレクトリを分ける。`components/` は `~/` で import するためバレル `index.ts` を置く。`routes/` は `routes.ts` がファイルパスを直接指定して読み込む（ディレクトリ指定は不可）ため**バレルは不要**で、モジュール名は `home/home.tsx` のように書く。
