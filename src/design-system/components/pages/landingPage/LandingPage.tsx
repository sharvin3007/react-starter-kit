import { BaseLayout } from '../../templates/baseLayout'

import { LandingPageProps } from './LandingPage.types'

export const LandingPage = ({ isPrimaryBanner, primaryBanner, secondaryBanner, children }: LandingPageProps) => {
  return (
    <BaseLayout dataTestid="landing-page" banner={isPrimaryBanner ? primaryBanner : secondaryBanner}>
      {children}
    </BaseLayout>
  )
}
