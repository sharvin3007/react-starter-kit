import { useState } from 'react'

import { Header } from '../../organisms'
import { User } from '../../organisms/header/Header.types'

import { BaseLayoutProps } from './BaseLayout.types'

import './baseLayout.css'

export const BaseLayout = ({ banner, children, isStickyNavigation, dataTestid }: BaseLayoutProps) => {
  const [user, setUser] = useState<User>()

  return (
    <>
      <Header
        user={user}
        isSticky={isStickyNavigation}
        onCreateAccount={() => setUser({ name: user?.name || 'Sharvin' })}
        onLogin={() => setUser({ name: user?.name || 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
      />
      <section data-testid={dataTestid} className="layout">
        {banner && <div className="banner">{banner}</div>}
        <div className="layout-content">{children}</div>
      </section>
    </>
  )
}
