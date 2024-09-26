import ViteSvg from '../../../../assets/vite.svg'
import { Button } from '../../atoms'

import { HeaderProps } from './Header.types'

import './header.css'

export const Header = ({ isSticky, user, onLogin, onLogout, onCreateAccount }: HeaderProps) => {
  return (
    <header className={isSticky ? 'sticky-header' : undefined}>
      <div className="header">
        <img src={ViteSvg} className="logo" alt="Vite logo" />
        <h1>React Starter Kit</h1>
        <div>
          {user ? (
            <>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={onLogin} label="Log in" />
              <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
            </>
          )}
        </div>
      </div>
    </header>
  )
}
