import { ThemeProvider, useTheme } from '../../providers/ThemeProvider'

import './playgroundPage.css'

export const PlaygroundPage = () => {
  return (
    <ThemeProvider>
      <PlaygroundContent />
    </ThemeProvider>
  )
}

const PlaygroundContent = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`playground-container ${theme}`}>
      <h1>Welcome to the Playground</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
