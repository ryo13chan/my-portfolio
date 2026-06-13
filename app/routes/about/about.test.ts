import { describe, expect, it } from 'vitest'
import type { Route } from './+types/about'
import { meta } from './about'

describe('about route meta', () => {
  it('title と description を返す', () => {
    const result = meta({} as Route.MetaArgs)

    expect(result).toContainEqual({ title: "About | Ryo's Portfolio" })
    expect(result).toContainEqual({
      name: 'description',
      content: "Ryo's Portfolio の自己紹介ページ",
    })
  })
})
