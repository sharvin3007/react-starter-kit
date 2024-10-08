import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LandingPage, PlaygroundPage } from '@src/pages'

import { Routes as Paths } from './Routes'

export const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Landing} element={<LandingPage />} />
        <Route path={Paths.Playground} element={<PlaygroundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
