import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ToolsPage from './ToolsPage'

describe('ToolsPage', () => {
  it('見出しを表示する', () => {
    render(<ToolsPage />)

    expect(screen.getByRole('heading', { name: 'Tools' })).toBeInTheDocument()
  })
})
