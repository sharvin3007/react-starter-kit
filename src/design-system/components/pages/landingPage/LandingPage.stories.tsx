import { Meta, StoryObj } from '@storybook/react'

import { LandingPage } from './LandingPage'
import { PrimaryBanner, SecondaryBanner } from './landingPage.stories.data'

const meta = {
  title: 'Pages/Landing Page',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LandingPage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: PrimaryBanner,
}

export const Secondary: Story = {
  args: SecondaryBanner,
}
