import { BaseLayout } from '../../templates/baseLayout'

import { HomePageProps } from './HomePage.types'

export const HomePage = ({ children }: HomePageProps) => {
  return (
    <BaseLayout dataTestid="home-page" banner="This is a home page banner">
      {children}
    </BaseLayout>
  )
}
