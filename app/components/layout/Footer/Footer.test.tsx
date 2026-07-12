import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GITHUB_URL, X_URL } from '~/config/site'
import Footer from './Footer'

describe('Footer', () => {
  it('GitHub / X への外部リンクとコピーライトを表示する', () => {
    render(<Footer />)

    const github = screen.getByRole('link', { name: 'GitHub' })
    expect(github).toHaveAttribute('href', GITHUB_URL)
    expect(github).toHaveAttribute('target', '_blank')

    expect(screen.getByRole('link', { name: 'X' })).toHaveAttribute(
      'href',
      X_URL,
    )

    expect(screen.getByText(/© \d{4} Ryo/)).toBeInTheDocument()
  })
})
