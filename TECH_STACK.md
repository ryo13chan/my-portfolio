# 技術構成 (Tech Stack)

このポートフォリオサイトで使用している技術構成をまとめたドキュメントです。
構成に変更があった場合は、このファイルを更新してください。

---

## 概要

| 区分 | 技術 |
| --- | --- |
| フレームワーク | React 19 |
| 言語 | TypeScript 6 |
| ビルドツール | Vite 8 |
| Linter | ESLint 10 |
| ランタイム | Node.js v24.16.0 (LTS "Krypton") |

---

## フロントエンド

- **React** `^19.2.6` — UI ライブラリ
- **React DOM** `^19.2.6` — DOM レンダリング

## 言語・型

- **TypeScript** `~6.0.2`
- **@types/react** `^19.2.14`
- **@types/react-dom** `^19.2.3`
- **@types/node** `^24.12.3`

## ビルド・開発環境

- **Vite** `^8.0.12` — 開発サーバー / バンドラー
- **@vitejs/plugin-react** `^6.0.1` — React 向け Vite プラグイン
- **Node.js** `v24.16.0`（LTS "Krypton" / `.node-version` で固定、fnm で管理）

## Lint / コード品質

- **ESLint** `^10.3.0`
- **@eslint/js** `^10.0.1`
- **typescript-eslint** `^8.59.2`
- **eslint-plugin-react-hooks** `^7.1.1`
- **eslint-plugin-react-refresh** `^0.5.2`
- **globals** `^17.6.0`

---

## npm スクリプト

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバー起動 (Vite) |
| `npm run build` | 型チェック (`tsc -b`) 後にビルド |
| `npm run lint` | ESLint 実行 |
| `npm run preview` | ビルド結果のプレビュー |

---

## ディレクトリ構成

```
my-portfolio/
├── public/          # 静的ファイル (favicon, icons など)
├── src/
│   ├── assets/      # 画像 (hero.png, logo など)
│   ├── App.tsx      # ルートコンポーネント
│   ├── main.tsx     # エントリーポイント
│   ├── App.css
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json    # プロジェクト参照 (app / node に分割)
├── eslint.config.js
└── package.json
```
