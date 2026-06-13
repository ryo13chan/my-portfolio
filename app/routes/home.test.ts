import { describe, expect, it } from 'vitest'
import type { Route } from './+types/home'
import { meta } from './home'

describe('home route meta', () => {
  it('title と description を返す', () => {
    const result = meta({} as Route.MetaArgs)

    expect(result).toContainEqual({ title: 'Home | my-portfolio' })
    expect(result).toContainEqual({
      name: 'description',
      content: 'my-portfolio のトップページ',
    })
  })
})
