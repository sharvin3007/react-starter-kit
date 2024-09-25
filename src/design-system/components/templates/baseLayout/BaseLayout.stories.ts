import { Meta, StoryObj } from '@storybook/react'

import { BaseLayout } from './BaseLayout'
import { BaseLayoutBanner, DummyPageContent } from './baseLayout.stories.data'

const meta = {
  title: 'Templates/BaseLayout',
  component: BaseLayout,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BaseLayout>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultLayout: Story = {
  args: {
    banner: BaseLayoutBanner.title,
    children: DummyPageContent,
    dataTestid: 'default',
  },
}

export const LayoutWithChildren: Story = {
  args: {
    banner: BaseLayoutBanner.title,
    children: DummyPageContent,
    dataTestid: 'children',
  },
}

export const EmptyLayout: Story = {
  args: {
    banner: BaseLayoutBanner.title,
    children: null,
    dataTestid: 'empty',
  },
}

export const CustomClassNameLayout: Story = {
  args: {
    banner: BaseLayoutBanner.title,
    children: DummyPageContent,
    className: 'custom-class-name',
    dataTestid: 'custom-classname',
  },
}
