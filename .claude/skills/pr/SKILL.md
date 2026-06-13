---
name: pr
description: 現在のブランチを push して GitHub に Pull Request を作成する（gh CLI 使用）。ユーザーが「PRを作って」「プルリク出して」などと頼んだとき、または変更を PR にまとめたいときに使う。
---

# pr

`gh` CLI を使って Pull Request を作成・更新する。

## 前提

- `gh auth status` で認証済みであること（未認証ならユーザーに `gh auth login` を案内する）。
- `main` 以外のブランチにいること（`main` なら先に `/commit` skill 等でブランチを切る）。

## 基本：完成した変更を ready PR で作る（デフォルト）

一度の作業で仕上げた変更は、draft を挟まず通常（ready）の PR を作る。

1. コミットが済んでいることを確認する（未コミットなら `/commit` skill を使う）。
2. push して PR を作成する:
   ```
   git push -u origin <branch>
   gh pr create --base main --title "<タイトル>" --body "<本文>"
   ```

## 例外：長めの作業は draft で先に作る

複数回に分けて進める長めの作業のときだけ、最初に draft PR を立てて途中経過を可視化する。

1. `/commit` skill のルールに従ってブランチを切り、最初のコミットを作る。
2. push して draft PR を作成する:
   ```
   git push -u origin <branch>
   gh pr create --draft --base main --title "<作業内容>" --body "<概要>"
   ```
3. コミットを重ねていき（push すれば PR に反映）、完成したら draft を解除: `gh pr ready`

## PR 本文の体裁

- 「## 概要」と「## 変更点」を含め、変更内容を簡潔にまとめる。
- 本文末尾に次の行を付ける:
  ```
  🤖 Generated with [Claude Code](https://claude.com/claude-code)
  ```

## 作成後

- 出力された PR の URL をユーザーに報告する。
- マージはユーザーが明示的に頼んだときのみ行う。
