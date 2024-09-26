import type { Meta, StoryObj } from '@storybook/react'
import { expect, fn, userEvent, within } from '@storybook/test'

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
    label: 'Primary Button',
    isDisabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const canvasButton = canvas.getByText('Primary Button')
    await expect(canvasButton).toBeInTheDocument()
    await userEvent.click(canvasButton)
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
}

export const Loader: Story = {
  args: {
    isLoading: true,
    size: 'small',
    label: 'Loader Button',
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    size: 'large',
    label: 'Disabled Button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const canvasButton = canvas.getByText('Disabled Button')
    await expect(canvasButton).toBeInTheDocument()
    await expect(canvasButton).toBeDisabled()
  },
}
