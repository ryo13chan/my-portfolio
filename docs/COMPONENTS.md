# コンポーネント・コード構成ルール

新しいコンポーネントやページを作るときの規約。技術構成・ディレクトリ全体像は [TECH_STACK.md](TECH_STACK.md) を参照。

## ディレクトリの使い分け

- `app/features/<name>/pages/` — ページの中身とテスト（純粋な UI）
- `app/features/<name>/components/` — その機能固有のコンポーネント
- `app/components/` — アプリ共通のコンポーネント
  - 直下（`Button/` など）— 汎用プリミティブ
  - `layout/`（`Header/` など）— 全ページ横断のレイアウトのガワ
  - `ui/` — shadcn/ui（後述の vendored 方針）
- `app/routes/` — ルートの配線（薄いラッパー。`loader`/`meta` はここ）
- `app/config/` — サイト共通設定（`site.ts`）/ `app/lib/` — 汎用ユーティリティ（`utils.ts`）

## コンポーネントのファイル構成

- コンポーネントごとにディレクトリを分ける：`Button/Button.tsx` + `Button.test.tsx` + Storybook の `Button.stories.tsx` + バレル `index.ts`
- 利用側は default import（barrel 経由で `~/components/Button`）
- Storybook の story `title` はディレクトリ構造に合わせる（`app/components/` 配下のパスを反映）：`app/components/Button` → `Components/Button`、`app/components/layout/Header` → `Components/Layout/Header`

## ルートのファイル構成

- ルートごとにディレクトリ：`home/home.tsx` + `home.test.ts`
- `routes.ts` がパスを直接指定して読むためバレルは不要
- 全ページ共通レイアウトは layout ルート `app/routes/layout.tsx`（`root.tsx` は HTML ドキュメントの殻、layout はヘッダー等のガワ）

## shadcn/ui（vendored）

- `app/components/ui/` の中身は**編集しない**（Biome 対象外。更新は `npx shadcn@latest add <comp> --overwrite`）
- カスタムは `app/components/<Name>/` の自作ラッパーから `ui/` を使い、`className` / CSS 変数 / バリアントで行う
- **アプリコードは `ui/` を直接 import しない。** `app/components/<Name>/` のラッパー経由で使う（無ければラッパーを作る）。`ui/` を import するのはラッパー内だけ。
  - 狙い：`ui/` には story を置かない（vendored）ため、**ラッパー＋ story を作ることで、使っているコンポーネントを Storybook にカタログとして載せる**。素通しのラッパーでも、この目的のために作る。

## コメント / JSDoc

- インラインの `//` で「何のコンポーネントか／使い方」を羅列しない。説明が必要なら **JSDoc（`/** */`）** で簡潔に書く。
- props（型定義）には各プロパティに JSDoc を付ける（**意味**を書く。型をそのまま繰り返すだけのコメントは書かない）。
- 必要に応じて `@param` / `@default` / `@example` / `@see` などのタグを使う。
- 参考: <https://qiita.com/yasdtech/items/61b129994a5d81b5eb42>
