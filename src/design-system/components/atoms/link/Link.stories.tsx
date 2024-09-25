import { Meta, StoryObj } from '@storybook/react'

import { LinkComponent } from './Link'

const meta = {
  title: 'atoms/Link',
  component: LinkComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof LinkComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    href: '#',
    children: 'Test Link',
    linkVariant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    href: '#',
    children: 'Test Link',
    linkVariant: 'secondary',
  },
}

export const Disabled: Story = {
  args: {
    href: '#',
    children: 'Test Link',
    linkVariant: 'secondary',
    disabled: true,
  },
}
