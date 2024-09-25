import { LandingPageProps } from './LandingPage.types'

export const PrimaryBanner: LandingPageProps = {
  isPrimaryBanner: true,
  primaryBanner: (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <p>This is the primary banner</p>
      <img src="https://via.placeholder.com/200x50" alt="placeholder" />
    </div>
  ),
  children: (
    <div className="primary-banner">
      <section>
        <h2>Welcome to Our Website's Primary Banner</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
      </section>
    </div>
  ),
}

export const SecondaryBanner: LandingPageProps = {
  isPrimaryBanner: false,
  secondaryBanner: (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <p>This is the secondary banner</p>
      <img src="https://via.placeholder.com/200x50" alt="placeholder" />
    </div>
  ),
  children: (
    <div className="secondary-banner">
      <section>
        <h2>Welcome to Our Website's Secondary Banner</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
      </section>
    </div>
  ),
}
