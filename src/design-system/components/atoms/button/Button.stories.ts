import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from './Button'

const meta = {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    size: 'small',
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}

export const Loader: Story = {
  args: {
    isLoading: true,
    size: 'small',
    label: 'Button',
  },
}

export const FullWidth: Story = {
  args: {
    fullWidthOnMobile: true,
    size: 'small',
    label: 'Button',
  },
}
