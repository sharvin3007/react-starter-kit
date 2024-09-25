import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomePage, LandingPage } from '../pages'

import { Routes as Paths } from './Routes'

export const RouterWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Landing} element={<LandingPage />} />
        <Route path={Paths.Home} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
