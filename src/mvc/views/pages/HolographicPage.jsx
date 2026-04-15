import { useEffect, useMemo, useState } from 'react'
import NavbarSection from '../sections/NavbarSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'
import './HolographicPage.css'

function HolographicPage({ viewModel }) {
  const { brand, navigation, locale, holographic, contact, footer } = viewModel
  const machineNames = holographic.machineNames ?? (holographic.examples ?? []).map((machine) => machine.title)
  const [hoveredMachine, setHoveredMachine] = useState(null)

  const machineImageByName = useMemo(
    () =>
      Object.fromEntries(
        (holographic.examples ?? []).map((machine) => [
          machine.title,
          {
            image: machine.image,
            imageAlt: machine.imageAlt ?? machine.title,
          },
        ])
      ),
    [holographic.examples]
  )

  useEffect(() => {
    const sources = [holographic.image, ...(holographic.examples ?? []).map((machine) => machine.image)].filter(
      Boolean
    )

    sources.forEach((src) => {
      const preloadImage = new window.Image()
      preloadImage.src = src
    })
  }, [holographic.image, holographic.examples])

  const hoverTuningByMachineName = {
    'UV Holographic Coating Machine': { objectPosition: 'center 46%', scale: 1 },
  }

  const activeMachine = hoveredMachine ? machineImageByName[hoveredMachine] : null
  const heroImage = activeMachine?.image ?? holographic.image
  const heroImageAlt = activeMachine?.imageAlt ?? holographic.imageAlt ?? holographic.title
  const activeHoverTuning = hoveredMachine ? hoverTuningByMachineName[hoveredMachine] : null
  const heroObjectPosition = activeHoverTuning?.objectPosition ?? 'center'
  const heroScale = activeHoverTuning?.scale ?? 1

  return (
    <main className="site-shell holographic-shell">
      <section className="navbar-section">
        <NavbarSection brand={brand} navigation={navigation} locale={locale} />
      </section>

      <section className="holographic-hero" aria-label="Holographic details">
        <div className="holographic-lines" aria-hidden="true" />

        <div className="holographic-media-wrap">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="holographic-media"
            loading="eager"
            style={{ objectPosition: heroObjectPosition, transform: `scale(${heroScale})` }}
          />
        </div>

        <article className="holographic-content">
          <h1 className="holographic-title">{holographic.title}</h1>
          {machineNames.length > 0 ? (
            <ul
              className="holographic-machine-list"
              aria-label="Machine names"
              onMouseLeave={() => setHoveredMachine(null)}
            >
              {machineNames.map((machineName) => (
                <li key={machineName}>
                  <button
                    type="button"
                    className={`holographic-machine-trigger${
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
            <p className="holographic-description">{holographic.description}</p>
          )}
          <a className="holographic-cta" href={holographic.buttonHref ?? '#'}>
            {holographic.buttonLabel}
            <span className="holographic-cta-arrow" aria-hidden="true">
              &#8594;
            </span>
          </a>
        </article>
      </section>

      <section className="holographic-examples" aria-label="Examples of applications">
        <div className="holographic-examples-lines" aria-hidden="true" />

        <div className="holographic-examples-inner">
          <h2 className="holographic-examples-title">{holographic.examplesTitle}</h2>

          <div className="holographic-examples-grid">
            {(holographic.examples ?? []).map((item) => (
              <article className="holographic-example-card" key={item.title}>
                <img
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  className="holographic-example-image"
                  loading="lazy"
                />
                <div className="holographic-example-content">
                  <h3 className="holographic-example-title">{item.title}</h3>
                  <p className="holographic-example-description">{item.description}</p>
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

export default HolographicPage
