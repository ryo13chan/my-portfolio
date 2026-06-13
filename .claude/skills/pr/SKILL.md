---
name: pr
description: 現在のブランチを push して GitHub に Pull Request を作成する（gh CLI 使用）。ユーザーが「PRを作って」「プルリク出して」などと頼んだとき、または作業開始時に draft PR を先に作りたいときに使う。
---

# pr

`gh` CLI を使って Pull Request を作成・更新する。

## 前提

- `gh auth status` で認証済みであること（未認証ならユーザーに `gh auth login` を案内する）。
- `main` 以外のブランチにいること（`main` なら先に `/commit` skill 等でブランチを切る）。

## 作業開始時に PR を先に作る（PR-first / draft）

新しい作業を始めるときは、最初に draft PR を作っておくと変更を早期に可視化できる。

1. `/commit` skill のルールに従ってブランチを切る（`main` 直コミット禁止 / 末尾 `_MMDD`）。
2. 最初のコミットを作る（まだ実装が無ければ、関連する小さな変更や雛形でよい）。
3. push して draft PR を作成する:
   ```
   git push -u origin <branch>
   gh pr create --draft --base main --title "<作業内容>" --body "<概要>"
   ```
4. 以降はそのブランチにコミットを重ねていく（push すれば PR に自動反映）。
5. 完成したら draft を解除: `gh pr ready`

## 完成済みの変更で PR を作る

1. コミットが済んでいることを確認する（未コミットなら `/commit` skill を使う）。
2. push して PR を作成する:
   ```
   git push -u origin <branch>
   gh pr create --base main --title "<タイトル>" --body "<本文>"
   ```

## PR 本文の体裁

- 「## 概要」と「## 変更点」を含め、変更内容を簡潔にまとめる。
- 本文末尾に次の行を付ける:
  ```
  🤖 Generated with [Claude Code](https://claude.com/claude-code)
  ```

## 作成後

- 出力された PR の URL をユーザーに報告する。
- マージはユーザーが明示的に頼んだときのみ行う。
