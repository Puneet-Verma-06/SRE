import { useEffect, useMemo, useState } from 'react'
import NavbarSection from '../sections/NavbarSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'
import './PackagingPage.css'

function PackagingPage({ viewModel }) {
  const { brand, navigation, locale, packaging, contact, footer } = viewModel
  const machineNames = packaging.machineNames ?? (packaging.examples ?? []).map((machine) => machine.title)
  const [hoveredMachine, setHoveredMachine] = useState(null)

  const machineImageByName = useMemo(
    () =>
      Object.fromEntries(
        (packaging.examples ?? []).map((machine) => [
          machine.title,
          {
            image: machine.image,
            imageAlt: machine.imageAlt ?? machine.title,
          },
        ])
      ),
    [packaging.examples]
  )

  useEffect(() => {
    const sources = [packaging.image, ...(packaging.examples ?? []).map((machine) => machine.image)].filter(
      Boolean
    )

    sources.forEach((src) => {
      const preloadImage = new window.Image()
      preloadImage.src = src
    })
  }, [packaging.image, packaging.examples])

  const hoverTuningByMachineName = {
    'Metalized Paper Coating Machine': { objectPosition: 'center 50%', scale: 1 },
    'Registered UV Coating Machine': { objectPosition: 'center 50%', scale: 1 },
  }

  const activeMachine = hoveredMachine ? machineImageByName[hoveredMachine] : null
  const heroImage = activeMachine?.image ?? packaging.image
  const heroImageAlt = activeMachine?.imageAlt ?? packaging.imageAlt ?? packaging.title
  const activeHoverTuning = hoveredMachine ? hoverTuningByMachineName[hoveredMachine] : null
  const heroObjectPosition = activeHoverTuning?.objectPosition ?? 'center'
  const heroScale = activeHoverTuning?.scale ?? 1

  return (
    <main className="site-shell packaging-shell">
      <section className="navbar-section">
        <NavbarSection brand={brand} navigation={navigation} locale={locale} />
      </section>

      <section className="packaging-hero" aria-label="Packaging materials details">
        <div className="packaging-hero-lines" aria-hidden="true" />

        <div className="packaging-hero-panel">
          <div className="packaging-media-wrap">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="packaging-media"
              loading="eager"
              style={{ objectPosition: heroObjectPosition, transform: `scale(${heroScale})` }}
            />
          </div>

          <article className="packaging-content">
            <h1 className="packaging-title">{packaging.title}</h1>
            {machineNames.length > 0 ? (
              <ul
                className="packaging-machine-list"
                aria-label="Machine names"
                onMouseLeave={() => setHoveredMachine(null)}
              >
                {machineNames.map((machineName) => (
                  <li key={machineName}>
                    <button
                      type="button"
                      className={`packaging-machine-trigger${
                        hoveredMachine === machineName ? ' is-active' : ''
                      }`}
                      onMouseEnter={() => setHoveredMachine(machineName)}
                      onFocus={() => setHoveredMachine(machineName)}
                      onBlur={() => setHoveredMachine(null)}
                    >
                      {machineName}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="packaging-description">{packaging.description}</p>
            )}
            <a className="packaging-cta" href={packaging.buttonHref ?? '#'}>
              {packaging.buttonLabel}
              <span className="packaging-cta-arrow" aria-hidden="true">
                &#8594;
              </span>
            </a>
          </article>
        </div>
      </section>

      <section className="packaging-examples" aria-label="Examples of applications">
        <div className="packaging-examples-lines" aria-hidden="true" />

        <div className="packaging-examples-inner">
          <h2 className="packaging-examples-title">{packaging.examplesTitle}</h2>

          <div className="packaging-examples-grid">
            {(packaging.examples ?? []).map((item) => (
              <article className="packaging-example-card" key={item.title}>
                <img
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  className="packaging-example-image"
                  loading="lazy"
                />
                <div className="packaging-example-content">
                  <h3 className="packaging-example-title">{item.title}</h3>
                  {item.description ? (
                    <p className="packaging-example-description">{item.description}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection section={contact} />

      <FooterSection section={footer} />
    </main>
  )
}

export default PackagingPage
