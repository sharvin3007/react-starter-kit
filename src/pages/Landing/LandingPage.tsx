import { useNavigate } from 'react-router-dom'

import { Button } from '../../design-system/components'
import { LandingPage as LandingPageComponent } from '../../design-system/components/pages/landingPage/LandingPage'
import { Routes as Paths } from '../../route/Routes'

import './landingPage.css'

export const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <LandingPageComponent
      isPrimaryBanner
      primaryBanner={
        <div className="banner">
          <p>This is the landing page banner</p>
        </div>
      }
    >
      <div>
        <Button label="Playground" primary size="large" onClick={() => navigate(Paths.Playground)} />
      </div>
      <h1>Hello, Welcome to the Starter Kit Project</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </LandingPageComponent>
  )
}
