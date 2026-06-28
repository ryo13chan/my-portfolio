import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Heading from './Heading'

describe('Heading', () => {
  it('level に応じた見出しタグを出力する', () => {
    render(<Heading level={1}>タイトル</Heading>)

    const heading = screen.getByRole('heading', { level: 1, name: 'タイトル' })
    expect(heading.tagName).toBe('H1')
  })

  it('level=3 は h3 を出力する', () => {
    render(<Heading level={3}>小見出し</Heading>)

    expect(screen.getByRole('heading', { name: '小見出し' }).tagName).toBe('H3')
  })
})
