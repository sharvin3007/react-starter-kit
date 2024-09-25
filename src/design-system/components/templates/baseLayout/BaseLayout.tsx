import { useState } from 'react'

import { Header } from '../../organisms'
import { User } from '../../organisms/header/Header.types'

import { BaseLayoutProps } from './BaseLayout.types'

import './baseLayout.css'

export const BaseLayout = ({ children, dataTestid }: BaseLayoutProps) => {
  const [user, setUser] = useState<User>()

  return (
    <>
      <Header
        user={user}
        onCreateAccount={() => setUser({ name: user?.name || 'Jane Doe' })}
        onLogin={() => setUser({ name: user?.name || 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
      />
      <section data-testid={dataTestid}>
        <div className="layout-center">{children}</div>
      </section>
    </>
  )
}
