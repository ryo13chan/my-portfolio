import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { SITE_NAME } from '~/config/site'
import Header from './Header'

describe('Header', () => {
  it('サイト名のホームリンクと About / Works / Tools / Blog のナビを表示する', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    // jsdom は画像を読み込まず Avatar がフォールバックを出すため、サイト名を含むかで判定
    expect(
      screen.getByRole('link', { name: new RegExp(SITE_NAME) }),
    ).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '/about',
    )
    expect(screen.getByRole('link', { name: 'Works' })).toHaveAttribute(
      'href',
      '/works',
    )
    expect(screen.getByRole('link', { name: 'Tools' })).toHaveAttribute(
      'href',
      '/tools',
    )
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute(
      'href',
      '/blog',
    )
  })

  it('現在のページのナビに aria-current=page が付く', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(screen.getByRole('link', { name: 'Tools' })).not.toHaveAttribute(
      'aria-current',
    )
  })
})
