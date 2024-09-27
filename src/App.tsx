import { ThemeProvider } from '@src/providers/ThemeProvider'
import { RouterWrapper } from '@src/route'

import './App.css'

function App() {
  return (
    <ThemeProvider>
      <RouterWrapper />
    </ThemeProvider>
  )
}

export default App
