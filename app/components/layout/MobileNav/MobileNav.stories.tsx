import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import MobileNav from './MobileNav'

const meta = {
  title: 'Components/Layout/MobileNav',
  component: MobileNav,
  args: {
    items: [
      { label: 'About', to: '/about' },
      { label: 'Tools', to: '/tools' },
      { label: 'Blog', to: '/blog' },
    ],
  },
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
