import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Avatar from './Avatar'

describe('Avatar', () => {
  // jsdom では画像が読み込まれず radix はフォールバックを表示するため、
  // フォールバック文字で描画を確認する。
  it('fallback props を表示する', () => {
    render(<Avatar src="/avatar.jpg" alt="Ryo" fallback="R" />)

    expect(screen.getByText('R')).toBeInTheDocument()
  })
})
