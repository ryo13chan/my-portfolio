import type { Meta, StoryObj } from '@storybook/react-vite'
import Heading from './Heading'

const meta = {
  title: 'Components/Base/Heading',
  component: Heading,
  args: { children: '見出しテキスト', level: 1 },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const H1: Story = { args: { level: 1 } }
export const H2: Story = { args: { level: 2 } }
export const H3: Story = { args: { level: 3 } }
