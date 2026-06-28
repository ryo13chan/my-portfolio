import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import { NAV_ITEMS } from '~/config/nav'
import MobileNav from './MobileNav'

const meta = {
  title: 'Components/Layout/MobileNav',
  component: MobileNav,
  // 実際のヘッダーと同じ NAV_ITEMS を使う（項目を増やせば story にも自動反映）
  args: { items: NAV_ITEMS },
  decorators: [
    // NavLink を使うのでルーターコンテキストを与える
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof MobileNav>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
