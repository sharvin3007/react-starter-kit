export interface ButtonProps {
  backgroundColor?: string
  fullWidthOnMobile?: boolean
  href?: string
  isDisabled?: boolean
  isLoading?: boolean
  label: string
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}
