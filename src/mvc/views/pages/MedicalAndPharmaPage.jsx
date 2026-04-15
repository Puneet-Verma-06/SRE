import { useEffect, useMemo, useState } from 'react'
import NavbarSection from '../sections/NavbarSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'
import './MedicalAndPharmaPage.css'

function MedicalAndPharmaPage({ viewModel }) {
  const { brand, navigation, locale, medicalAndPharma, contact, footer } = viewModel
  const machineNames = medicalAndPharma.machineNames ?? (medicalAndPharma.examples ?? []).map((machine) => machine.title)
  const [hoveredMachine, setHoveredMachine] = useState(null)

  const machineImageByName = useMemo(
    () =>
      Object.fromEntries(
        (medicalAndPharma.examples ?? []).map((machine) => [
          machine.title,
          {
            image: machine.image,
            imageAlt: machine.imageAlt ?? machine.title,
          },
        ])
      ),
    [medicalAndPharma.examples]
  )

  useEffect(() => {
    const sources = [medicalAndPharma.image, ...(medicalAndPharma.examples ?? []).map((machine) => machine.image)]
      .filter(Boolean)

    sources.forEach((src) => {
      const preloadImage = new window.Image()
      preloadImage.src = src
    })
  }, [medicalAndPharma.image, medicalAndPharma.examples])

  const hoverTuningByMachineName = {
    'Registered Embossing Machine': { objectPosition: 'center 48%', scale: 1 },
  }

  const activeMachine = hoveredMachine ? machineImageByName[hoveredMachine] : null
  const heroImage = activeMachine?.image ?? medicalAndPharma.image
  const heroImageAlt = activeMachine?.imageAlt ?? medicalAndPharma.imageAlt ?? medicalAndPharma.title
  const activeHoverTuning = hoveredMachine ? hoverTuningByMachineName[hoveredMachine] : null
  const heroObjectPosition = activeHoverTuning?.objectPosition ?? 'center'
  const heroScale = activeHoverTuning?.scale ?? 1

  return (
    <main className="site-shell medical-pharma-shell">
      <section className="navbar-section">
        <NavbarSection brand={brand} navigation={navigation} locale={locale} />
      </section>

      <section className="medical-pharma-hero" aria-label="Medical and pharma details">
        <div className="medical-pharma-lines" aria-hidden="true" />

        <div className="medical-pharma-panel">
          <div className="medical-pharma-media-wrap">
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="medical-pharma-media"
              loading="eager"
              style={{ objectPosition: heroObjectPosition, transform: `scale(${heroScale})` }}
            />
          </div>

          <article className="medical-pharma-content">
            <h1 className="medical-pharma-title">{medicalAndPharma.title}</h1>
            {machineNames.length > 0 ? (
              <ul
                className="medical-pharma-machine-list"
                aria-label="Machine names"
                onMouseLeave={() => setHoveredMachine(null)}
              >
                {machineNames.map((machineName) => (
                  <li key={machineName}>
                    <button
                      type="button"
                      className={`medical-pharma-machine-trigger${
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
              <p className="medical-pharma-description">{medicalAndPharma.description}</p>
            )}
            <a className="medical-pharma-cta" href={medicalAndPharma.buttonHref ?? '#'}>
              {medicalAndPharma.buttonLabel}
              <span className="medical-pharma-cta-arrow" aria-hidden="true">
                &#8594;
              </span>
            </a>
          </article>
        </div>
      </section>

      <section className="medical-pharma-examples" aria-label="Examples of applications">
        <div className="medical-pharma-examples-lines" aria-hidden="true" />

        <div className="medical-pharma-examples-inner">
          <h2 className="medical-pharma-examples-title">{medicalAndPharma.examplesTitle}</h2>

          <div className="medical-pharma-examples-grid">
            {(medicalAndPharma.examples ?? []).map((item) => (
              <article className="medical-pharma-example-card" key={item.title}>
                <img
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  className="medical-pharma-example-image"
                  loading="lazy"
                />
                <div className="medical-pharma-example-content">
                  <h3 className="medical-pharma-example-title">{item.title}</h3>
                  <p className="medical-pharma-example-description">{item.description}</p>
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

export default MedicalAndPharmaPage
