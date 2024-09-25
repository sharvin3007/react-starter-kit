import { Meta, StoryObj } from '@storybook/react'

import { HomePage as HomePageComponent } from './HomePage'

const meta = {
  title: 'Pages/Home Page',
  component: HomePageComponent,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HomePageComponent>

export default meta

type Story = StoryObj<typeof meta>

export const HomePage: Story = {
  args: {
    children: (
      <>
        <h1>This is a home page</h1>
        <p>This is a home page content</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </>
    ),
  },
}
