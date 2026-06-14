import type { Meta, StoryObj } from '@storybook/react-vite'
import Avatar from './Avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { src: '/avatar.jpg', alt: 'Ryo', fallback: 'R', className: 'size-12' },
}

export const Fallback: Story = {
  args: { src: '', alt: 'No image', fallback: 'R', className: 'size-12' },
}
