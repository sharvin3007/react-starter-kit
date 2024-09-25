import { Meta } from '@storybook/react'

import { LandingPage } from './LandingPage'

const meta = {
  title: 'Pages/LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LandingPage>

export default meta

export const Primary = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Landing page',
      },
    },
  },
}
