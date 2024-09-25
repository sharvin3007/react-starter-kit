import { ReactNode } from 'react'

export interface BaseLayoutProps {
  banner?: ReactNode
  isStickyNavigation?: boolean
  children: ReactNode
  childrenClassName?: string
  className?: string
  dataTestid?: string
}
