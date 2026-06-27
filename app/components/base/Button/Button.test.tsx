import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Button from './Button'

describe('Button', () => {
  it('ボタンを表示する', () => {
    render(<Button>ボタン</Button>)

    expect(screen.getByRole('button', { name: 'ボタン' })).toBeInTheDocument()
  })
})
