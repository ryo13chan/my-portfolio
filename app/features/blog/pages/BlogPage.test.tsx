import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import BlogPage from './BlogPage'

describe('BlogPage', () => {
  it('見出しを表示する', () => {
    render(<BlogPage />)

    expect(screen.getByRole('heading', { name: 'Blog' })).toBeInTheDocument()
  })
})
