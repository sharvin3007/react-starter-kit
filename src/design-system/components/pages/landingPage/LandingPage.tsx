import { BaseLayout } from '@src/design-system/components/templates'

import { LandingPageProps } from './LandingPage.types'

export const LandingPage = ({ isPrimaryBanner, primaryBanner, secondaryBanner, children }: LandingPageProps) => {
  return (
    <BaseLayout dataTestid="landing-page" isStickyNavigation banner={isPrimaryBanner ? primaryBanner : secondaryBanner}>
      {children}
    </BaseLayout>
  )
}
