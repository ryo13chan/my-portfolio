import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import AboutPage from './AboutPage'

describe('AboutPage', () => {
  it('見出しと Home へのリンクを表示する', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home へ' })).toHaveAttribute(
      'href',
      '/',
    )
  })
})
