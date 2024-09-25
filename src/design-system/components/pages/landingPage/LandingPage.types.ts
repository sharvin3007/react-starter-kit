import { ReactNode } from 'react'

export interface LandingPageProps {
  primaryBanner?: ReactNode
  secondaryBanner?: ReactNode
  isPrimaryBanner: boolean
  children: ReactNode
}
