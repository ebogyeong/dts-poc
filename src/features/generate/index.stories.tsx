import type { Meta, StoryObj } from '@storybook/react'

import { Tab } from '.'

const meta: Meta<typeof Tab> = {
  component: Tab,
  title: 'features/generate',
  tags: ['autodocs'],
  argTypes: {}
}
export default meta

type Story = StoryObj<typeof Tab>

export const Default: Story = {
  args: {}
}
