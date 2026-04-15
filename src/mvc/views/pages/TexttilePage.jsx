import { useEffect, useMemo, useState } from 'react'
import NavbarSection from '../sections/NavbarSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'
import './TexttilePage.css'

function TexttilePage({ viewModel }) {
  const { brand, navigation, locale, texttile, contact, footer } = viewModel
  const machineNames = texttile.machineNames ?? (texttile.examples ?? []).map((machine) => machine.title)
  const [hoveredMachine, setHoveredMachine] = useState(null)

  const machineImageByName = useMemo(
    () =>
      Object.fromEntries(
        (texttile.examples ?? []).map((machine) => [
          machine.title,
          {
            image: machine.image,
            imageAlt: machine.imageAlt ?? machine.title,
          },
        ])
      ),
    [texttile.examples]
  )

  useEffect(() => {
    const sources = [texttile.image, ...(texttile.examples ?? []).map((machine) => machine.image)].filter(
      Boolean
    )

    sources.forEach((src) => {
      const preloadImage = new window.Image()
      preloadImage.src = src
    })
  }, [texttile.image, texttile.examples])

  const hoverTuningByMachineName = {
    'Hot Stamping Slitter': { objectPosition: 'center 48%', scale: 1 },
  }

  const activeMachine = hoveredMachine ? machineImageByName[hoveredMachine] : null
  const heroImage = activeMachine?.image ?? texttile.image
  const heroImageAlt = activeMachine?.imageAlt ?? texttile.imageAlt ?? texttile.title
  const activeHoverTuning = hoveredMachine ? hoverTuningByMachineName[hoveredMachine] : null
  const heroObjectPosition = activeHoverTuning?.objectPosition ?? 'center'
  const heroScale = activeHoverTuning?.scale ?? 1

  return (
    <main className="site-shell texttile-shell">
      <section className="navbar-section">
        <NavbarSection brand={brand} navigation={navigation} locale={locale} />
      </section>

      <section className="texttile-hero" aria-label="Texttile details">
        <div className="texttile-lines" aria-hidden="true" />

        <div className="texttile-media-wrap">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="texttile-media"
            loading="eager"
            style={{ objectPosition: heroObjectPosition, transform: `scale(${heroScale})` }}
          />
        </div>

        <article className="texttile-content">
          <h1 className="texttile-title">{texttile.title}</h1>
          {machineNames.length > 0 ? (
            <ul
              className="texttile-machine-list"
              aria-label="Machine names"
              onMouseLeave={() => setHoveredMachine(null)}
            >
              {machineNames.map((machineName) => (
                <li key={machineName}>
                  <button
                    type="button"
                    className={`texttile-machine-trigger${hoveredMachine === machineName ? ' is-active' : ''}`}
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
            <p className="texttile-description">{texttile.description}</p>
          )}
          <a className="texttile-cta" href={texttile.buttonHref ?? '#'}>
            {texttile.buttonLabel}
            <span className="texttile-cta-arrow" aria-hidden="true">
              &#8594;
            </span>
          </a>
        </article>
      </section>

      <section className="texttile-examples" aria-label="Examples of applications">
        <div className="texttile-examples-lines" aria-hidden="true" />

        <div className="texttile-examples-inner">
          <h2 className="texttile-examples-title">{texttile.examplesTitle}</h2>

          <div className="texttile-examples-grid">
            {(texttile.examples ?? []).map((item) => (
              <article className="texttile-example-card" key={item.title}>
                <img
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  className="texttile-example-image"
                  loading="lazy"
                />
                <div className="texttile-example-content">
                  <h3 className="texttile-example-title">{item.title}</h3>
                  <p className="texttile-example-description">{item.description}</p>
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

export default TexttilePage
