import type { ComponentProps, ElementType } from 'react'
import { cn } from '~/lib/utils'

type Level = 1 | 2 | 3 | 4 | 5 | 6

type HeadingProps = ComponentProps<'h2'> & {
  /** 見出しレベル（1〜6）→ h1〜h6 を出力する（必須・明示指定）。ページの主見出しは 1。 */
  level: Level
}

// レベルごとの既定サイズ（className で上書き可）
const sizeByLevel: Record<Level, string> = {
  1: 'text-3xl',
  2: 'text-2xl',
  3: 'text-xl',
  4: 'text-lg',
  5: 'text-base',
  6: 'text-sm',
}

/**
 * 見出し（h1〜h6）。色はテーマトークン（`text-foreground`）でダーク対応。
 * サイズは level の既定値を使い、`className` で上書きできる。
 */
export default function Heading({ level, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as ElementType
  return (
    <Tag
      className={cn('font-bold text-foreground', sizeByLevel[level], className)}
      {...props}
    />
  )
}
