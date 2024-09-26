import type { Meta, StoryObj } from '@storybook/react'
import { fn, userEvent, within } from '@storybook/test'

import { Header } from './Header'

const meta = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    isSticky: false,
  },
}

export const LoggedOut: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = canvas.getByRole('button', { name: /Log in/i })
    await userEvent.click(loginButton)
  },
}
