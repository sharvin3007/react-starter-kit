import { useWindowSize } from '@src/utils/hooks/useWindowSize'

import { ButtonProps } from './Button.types'

import './button.css'

export const Button = ({
  backgroundColor,
  fullWidthOnMobile,
  isLoading,
  isDisabled,
  label,
  primary,
  size,
  ...props
}: ButtonProps) => {
  const windowSize = useWindowSize()

  const mode = primary ? 'button--primary' : isDisabled ? 'button--disabled' : 'button--secondary'

  const isSmallScreen = windowSize.width !== undefined && windowSize.width < 768
  const isFullWidth = fullWidthOnMobile && isSmallScreen

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={['button', `button--${size}`, mode, isFullWidth ? ' is-full-width' : ''].join(' ')}
      style={{ backgroundColor }}
      type="button"
    >
      {isLoading ? 'Loading...' : label}
    </button>
  )
}
