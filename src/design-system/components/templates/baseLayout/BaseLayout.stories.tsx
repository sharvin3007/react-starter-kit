import { Meta, StoryObj } from '@storybook/react'

import { BaseLayout } from './BaseLayout'
import { DummyPageContent, DummyPageWithStickyNavigation } from './baseLayout.stories.data'

const meta = {
  title: 'Templates/Base Layout',
  component: BaseLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BaseLayout>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultLayout: Story = {
  args: DummyPageContent,
}

export const LayoutWithStickyNavigation: Story = {
  args: {
    ...DummyPageWithStickyNavigation,
    isStickyNavigation: true,
    dataTestid: 'long-content',
  },
}
