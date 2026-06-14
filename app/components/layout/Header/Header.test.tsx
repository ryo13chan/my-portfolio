import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import Header from './Header'

describe('Header', () => {
  it('Home へのアバターリンクと about / tools / blog のナビを表示する', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/',
    )
    expect(screen.getByRole('link', { name: 'about' })).toHaveAttribute(
      'href',
      '/about',
    )
    expect(screen.getByRole('link', { name: 'tools' })).toHaveAttribute(
      'href',
      '/tools',
    )
    expect(screen.getByRole('link', { name: 'blog' })).toHaveAttribute(
      'href',
      '/blog',
    )
  })
})
