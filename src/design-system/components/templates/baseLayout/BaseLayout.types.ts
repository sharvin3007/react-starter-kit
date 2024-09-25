import { ReactNode } from 'react'

export interface BaseLayoutProps {
  banner?: ReactNode
  children: ReactNode
  childrenClassName?: string
  className?: string
  dataTestid?: string
}
