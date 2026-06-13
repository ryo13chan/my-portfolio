# CLAUDE.md

このファイルは Claude Code がこのプロジェクトで作業する際のガイドです。
※ 他の md に書いてある内容は重複させず、このファイルは小さく保つこと。

## プロジェクト概要

`my-portfolio` — Vite + React 19 + TypeScript で構築したポートフォリオサイト。
技術構成・開発コマンドの詳細は [TECH_STACK.md](TECH_STACK.md) を参照。

- 技術構成（依存パッケージ・バージョン・ツール・Node バージョン）に変更があったら、必ず [TECH_STACK.md](TECH_STACK.md) を更新すること。

## Git 運用ルール

- **`main` ブランチに直接コミットしないこと。** 作業前に必ず新しいブランチを切る。
- コミットは無理に1つにまとめず、関心ごとが異なる変更は論理単位ごとに分割する。
- ブランチ命名規則・コミット手順の詳細は `/commit` skill を使う（`.claude/skills/commit/`）。
