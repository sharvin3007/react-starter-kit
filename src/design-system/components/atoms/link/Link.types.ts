import { ReactNode } from 'react'

export interface LinkComponentProps {
  children: ReactNode
  className?: string
  dataTestid?: string
  disabled?: boolean
  href?: string
  label?: string
  linkVariant?: 'primary' | 'secondary'
  target?: '_blank' | '_parent' | '_self' | '_top'
}
