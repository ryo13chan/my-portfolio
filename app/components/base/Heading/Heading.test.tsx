import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Heading from './Heading'

describe('Heading', () => {
  it('level に応じた見出しタグを出力する', () => {
    render(<Heading level={1}>タイトル</Heading>)

    const heading = screen.getByRole('heading', { level: 1, name: 'タイトル' })
    expect(heading.tagName).toBe('H1')
  })

  it('デフォルトは h2', () => {
    render(<Heading>見出し</Heading>)

    expect(screen.getByRole('heading', { name: '見出し' }).tagName).toBe('H2')
  })
})
