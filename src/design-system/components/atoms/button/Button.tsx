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
  const mode = primary ? 'button--primary' : isDisabled ? 'button--disabled' : 'button--secondary'
  const isFullWidth = fullWidthOnMobile && size === 'small'
  return (
    <button
      {...props}
      disabled={isDisabled}
      className={['button', `button--${size}`, mode, isFullWidth ? 'is-full-width' : null].join(' ')}
      style={{ backgroundColor }}
      type="button"
    >
      {isLoading ? 'Loading...' : label}
    </button>
  )
}
