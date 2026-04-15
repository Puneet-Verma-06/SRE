import { useEffect, useMemo, useState } from 'react'
import NavbarSection from '../sections/NavbarSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'
import './PaperFinishingPage.css'

function PaperFinishingPage({ viewModel }) {
  const { brand, navigation, locale, paperFinishing, contact, footer } = viewModel
  const machineNames = paperFinishing.machineNames ?? []
  const [hoveredMachine, setHoveredMachine] = useState(null)

  const machineImageByName = useMemo(
    () =>
      Object.fromEntries(
        (paperFinishing.examples ?? []).map((machine) => [
          machine.title,
          {
            image: machine.image,
            imageAlt: machine.imageAlt ?? machine.title,
          },
        ])
      ),
    [paperFinishing.examples]
  )

  useEffect(() => {
    const sources = [paperFinishing.image, ...(paperFinishing.examples ?? []).map((machine) => machine.image)]
      .filter(Boolean)

    sources.forEach((src) => {
      const preloadImage = new window.Image()
      preloadImage.src = src
    })
  }, [paperFinishing.image, paperFinishing.examples])

  const hoverTuningByMachineName = {
    'Metalized Paper Coating Machine': { objectPosition: 'center 50%', scale: 1 },
    'Registered UV Coating Machine': { objectPosition: 'center 50%', scale: 1 },
  }

  const activeMachine = hoveredMachine ? machineImageByName[hoveredMachine] : null
  const heroImage = activeMachine?.image ?? paperFinishing.image
  const heroImageAlt = activeMachine?.imageAlt ?? paperFinishing.imageAlt ?? paperFinishing.title
  const activeHoverTuning = hoveredMachine ? hoverTuningByMachineName[hoveredMachine] : null
  const heroObjectPosition = activeHoverTuning?.objectPosition ?? 'center'
  const heroScale = activeHoverTuning?.scale ?? 1

  return (
    <main className="site-shell paper-finishing-shell">
      <section className="navbar-section">
        <NavbarSection brand={brand} navigation={navigation} locale={locale} />
      </section>

      <section className="paper-finishing-hero" aria-label="Paper finishing details">
        <div className="paper-finishing-lines" aria-hidden="true" />

        <div className="paper-finishing-media-wrap">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="paper-finishing-media"
            loading="eager"
            style={{ objectPosition: heroObjectPosition, transform: `scale(${heroScale})` }}
          />
        </div>

        <article className="paper-finishing-content">
          <h1 className="paper-finishing-title">{paperFinishing.title}</h1>
          {machineNames.length > 0 ? (
            <ul
              className="paper-finishing-machine-list"
              aria-label="Machine names"
              onMouseLeave={() => setHoveredMachine(null)}
            >
              {machineNames.map((machineName) => (
                <li key={machineName}>
                  <button
                    type="button"
                    className={`paper-finishing-machine-trigger${
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
            <p className="paper-finishing-description">{paperFinishing.description}</p>
          )}
          <a className="paper-finishing-cta" href={paperFinishing.buttonHref ?? '#'}>
            {paperFinishing.buttonLabel}
            <span className="paper-finishing-cta-arrow" aria-hidden="true">
              &#8594;
            </span>
          </a>
        </article>
      </section>

      <section className="paper-finishing-examples" aria-label="Examples of applications">
        <div className="paper-finishing-examples-lines" aria-hidden="true" />
        <div className="paper-finishing-examples-inner">
          <h2 className="paper-finishing-examples-title">{paperFinishing.examplesTitle}</h2>

          <div className="paper-finishing-examples-grid">
            {(paperFinishing.examples ?? []).map((item) => (
              <article className="paper-finishing-example-card" key={item.title}>
                <img
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  className="paper-finishing-example-image"
                  loading="lazy"
                />
                <div className="paper-finishing-example-content">
                  <h3 className="paper-finishing-example-title">{item.title}</h3>
                  {item.description ? (
                    <p className="paper-finishing-example-description">{item.description}</p>
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

export default PaperFinishingPage
