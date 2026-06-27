import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import ThemeToggle from './ThemeToggle'

afterEach(() => {
  localStorage.clear()
  document.documentElement.className = ''
})

describe('ThemeToggle', () => {
  it('Dark を選ぶと dark クラスと localStorage に反映される', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)

    await user.click(
      screen.getByRole('button', { name: 'カラーモードを切り替える' }),
    )
    await user.click(await screen.findByRole('menuitemradio', { name: 'Dark' }))

    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
  })
})
