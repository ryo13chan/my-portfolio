import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import MobileNav from './MobileNav'

const items = [
  { label: 'About', to: '/about' },
  { label: 'Tools', to: '/tools' },
]

describe('MobileNav', () => {
  it('ハンバーガーを押すとナビ項目が表示される', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <MobileNav items={items} />
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('button', { name: 'メニューを開く' }))

    expect(await screen.findByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '/about',
    )
    expect(screen.getByRole('link', { name: 'Tools' })).toBeInTheDocument()
  })
})
