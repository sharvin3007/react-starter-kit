import { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'

import { LinkComponent } from './Link'

const meta = {
  title: 'atoms/Link',
  component: LinkComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LinkComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    href: '#',
    children: 'Primary Link',
    linkVariant: 'primary',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const canvasLink = canvas.getByText('Primary Link')
    await expect(canvasLink).toBeInTheDocument()
    await expect(canvasLink).toHaveAttribute('href', '#')
    await expect(canvasLink).not.toBeDisabled()
    await expect(canvasLink).toHaveClass('link--primary')
    await expect(canvasLink).toHaveTextContent('Link')
  },
}

export const Secondary: Story = {
  args: {
    href: '#',
    children: 'Test Link',
    linkVariant: 'secondary',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    href: '#',
    children: 'Disabled Link',
    linkVariant: 'secondary',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const canvasLink = canvas.getByText('Disabled Link')
    await expect(canvasLink).toBeInTheDocument()
    await expect(canvasLink).toHaveClass('disabled')
    await expect(canvasLink).toHaveAttribute('aria-disabled', 'true')
  },
}
