import type { Meta, StoryObj } from '@storybook/react-vite'
import Heading from './Heading'

const meta = {
  title: 'Components/Base/Heading',
  component: Heading,
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

// h1〜h6 を一覧で並べて見比べられる
export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {([1, 2, 3, 4, 5, 6] as const).map((level) => (
        <Heading key={level} level={level}>
          Heading {level}
        </Heading>
      ))}
    </div>
  ),
}
