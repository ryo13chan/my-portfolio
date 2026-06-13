import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import Home from './home'

describe('Home', () => {
  it('見出しと About へのリンクを表示する', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About へ' })).toHaveAttribute(
      'href',
      '/about',
    )
  })
})
