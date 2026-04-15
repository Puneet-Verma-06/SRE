function TailorMadeSection({ section }) {
  const targetImageUrl =
    'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/KROENERT-Header-medizin-pharma-medical-pharma.png'

  const {
    title = 'Tailor-made coating lines.',
    description =
      'SRE is a leader in the development and manufacture of state-of-the-art line solutions that maximise your productivity, increase your process reliability and ensure the highest quality in the long term. Together, we create the basis for your sustainable competitive advantage.',
    buttonLabel = 'About',
    buttonHref = '#',
    image = 'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/KROENERT-Header-medizin-pharma-medical-pharma.png',
    imageAlt = 'Medical and pharma coating line image',
  } = section ?? {}

  const mediaAnimation = image === targetImageUrl ? 'fade-down-right' : undefined

  return (
    <section className="tailor-section" aria-label="Tailor-made coating lines">
      <div className="tailor-section-media-wrap">
        {image ? (
          <img
            className="tailor-section-media"
            src={image}
            alt={imageAlt}
            loading="lazy"
            data-aos={mediaAnimation}
          />
        ) : null}
      </div>

      <div className="tailor-section-content-wrap">
        <div className="tailor-section-content">
          <h2 className="tailor-section-title">{title}</h2>
          <p className="tailor-section-description">{description}</p>

          <a className="tailor-section-cta" href={buttonHref} aria-label={buttonLabel}>
            <span>{buttonLabel}</span>
            <span className="tailor-section-cta-arrow" aria-hidden="true">
              {'->'}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TailorMadeSection
