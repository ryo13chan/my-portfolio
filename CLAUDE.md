# CLAUDE.md

このファイルは Claude Code がこのプロジェクトで作業する際のガイドです。
※ 他の md に書いてある内容は重複させず、このファイルは小さく保つこと。

## プロジェクト概要

`my-portfolio` — Vite + React 19 + TypeScript で構築したポートフォリオサイト。
技術構成・開発コマンドの詳細は [TECH_STACK.md](docs/TECH_STACK.md) を参照。

- 技術構成（依存パッケージ・バージョン・ツール・Node バージョン）に変更があったら、必ず [TECH_STACK.md](docs/TECH_STACK.md) を更新すること。
- コードはフィーチャーベース構成：ページの中身とテストは `app/features/<name>/pages/`、機能固有の部品は `app/features/<name>/components/`、アプリ全体で使う汎用コンポーネントは `app/components/`（コンポーネントごとにディレクトリを分け、`Button/Button.tsx` + `Button.test.tsx` + Storybook の `Button.stories.tsx` + バレル `index.ts` の形）、`app/routes/` はルートの配線（ルートごとにディレクトリを分け、`home/home.tsx` + `home.test.ts` の形。`routes.ts` がパス直指定で読むためバレルは不要。薄いラッパー、`loader`/`meta` はここ）。詳細は [TECH_STACK.md](docs/TECH_STACK.md)。

## Git 運用ルール

- **すべての作業は必ず PR を通すこと（PR-first）。何か作業を始めるときは、何よりも先に新しいブランチを切り、PR を作成してから進める。** `main` への直接コミットや、PR を経由しない main への変更は禁止。
- PR は進行中は draft、完成したら ready にする。1コミットで完結する短い変更は、コミット後すぐ ready で作ってよい。
- コミットは無理に1つにまとめず、関心ごとが異なる変更は論理単位ごとに分割する。
- ブランチ作成・コミット手順は `/commit` skill、PR 作成は `/pr` skill を使う（`.claude/skills/`）。
