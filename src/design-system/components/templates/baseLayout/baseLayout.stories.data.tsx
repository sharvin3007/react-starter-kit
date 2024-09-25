import { BaseLayoutProps } from './BaseLayout.types'

export const BaseLayoutBanner = {
  title: 'Banner',
  description: 'The banner is the top part of the page that contains the logo and navigation.',
}

export const DummyPageContent: BaseLayoutProps = {
  banner: 'This is the banner',
  children: (
    <div className="dummy-page-with-children">
      <h2>Child Elements</h2>
      <section>
        <h2>Welcome to Our Website</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
      </section>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  ),
}

export const DummyPageWithStickyNavigation: BaseLayoutProps = {
  banner: 'This is the banner',
  children: (
    <main style={{ marginTop: '20px', padding: '20px' }}>
      <section>
        <h2>Welcome to Our Website</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
      </section>

      <section>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
      </section>

      <section>
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
      </section>

      <section>
        <h2>More Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
      </section>

      <section>
        <h2>Even More Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Sed vitae nisi in nulla
          facilisis vulputate.
        </p>
      </section>
    </main>
  ),
}
