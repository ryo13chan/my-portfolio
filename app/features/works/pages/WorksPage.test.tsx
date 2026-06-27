import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import WorksPage from './WorksPage'

describe('WorksPage', () => {
  it('見出しを表示する', () => {
    render(<WorksPage />)

    expect(screen.getByRole('heading', { name: 'Works' })).toBeInTheDocument()
  })
})
