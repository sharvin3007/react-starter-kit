export interface User {
  description?: string
  email?: string
  name: string
}

export interface HeaderProps {
  isSticky?: boolean
  user?: User
  onLogin?: () => void
  onLogout?: () => void
  onCreateAccount?: () => void
}
