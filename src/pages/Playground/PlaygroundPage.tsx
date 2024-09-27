import { useTheme } from '@src/providers/ThemeProvider'

import '@src/globalStyles/global.css'

export const PlaygroundPage = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`playground-container ${theme}`}>
      <h1>Welcome to the Playground</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
