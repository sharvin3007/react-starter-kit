import ViteSvg from '@src/assets/vite.svg'
import { Button } from '@src/design-system/components/atoms'

import { HeaderProps } from './Header.types'

import './header.css'

export const Header = ({ isSticky, user, onLogin, onLogout, onCreateAccount }: HeaderProps) => {
  return (
    <header className={isSticky ? 'sticky-header' : undefined}>
      <div className="header">
        <img src={ViteSvg} className="logo" alt="Vite logo" />
        <h1>React Starter Kit</h1>
        {user ? (
          <div className="user-content">
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button fullWidthOnMobile size="small" onClick={onLogout} label="Log out" />
          </div>
        ) : (
          <div className="button-container">
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </div>
        )}
      </div>
    </header>
  )
}
