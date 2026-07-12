import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import HomePage from './HomePage'

describe('HomePage', () => {
  it('ウェルカム見出しと自己紹介文を表示する', () => {
    render(<HomePage />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: "Welcome to Ryo's Portfolio!",
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('はじめまして。')).toBeInTheDocument()
    expect(
      screen.getByText('当サイトはエンジニアとしてのポートフォリオです。'),
    ).toBeInTheDocument()
  })
})
