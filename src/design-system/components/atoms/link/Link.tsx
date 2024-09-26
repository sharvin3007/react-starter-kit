import { LinkComponentProps } from './Link.types'

import './Link.css'
export const LinkComponent = ({
  href,
  children,
  target,
  linkVariant,
  dataTestid,
  disabled,
  ...props
}: LinkComponentProps) => {
  const linkStyle = linkVariant === 'primary' ? 'link--primary' : 'link--secondary'
  const isDisabledLink = disabled ? 'disabled' : ''

  return (
    <a
      aria-disabled={disabled}
      className={'link ' + linkStyle + ' ' + isDisabledLink}
      data-testid={dataTestid}
      target={target}
      href={href}
      {...props}
    >
      {children}
    </a>
  )
}
