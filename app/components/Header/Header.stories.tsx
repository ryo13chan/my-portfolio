import type { Meta, StoryObj } from '@storybook/react-vite'
import { MemoryRouter } from 'react-router'
import Header from './Header'

const meta = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    // Header は <Link> を使うのでルーターコンテキストを与える
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
