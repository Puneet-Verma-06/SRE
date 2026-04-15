function CareerSection({ section }) {
  const targetCareerImageUrl =
    'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/07/kroenert-karriere.jpg'

  const {
    titleLineOne = 'Career at',
    titleLineTwo = 'SRE',
    description =
      'At SRE, we are a community, not just people who happen to work for the same company! Become part of the team!',
    buttonLabel = 'Career',
    buttonHref = '#',
    image = 'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/07/kroenert-karriere.jpg',
    imageAlt = 'Career at SRE',
  } = section ?? {}

  const mediaAnimation = image === targetCareerImageUrl ? 'fade-down-left' : undefined

  return (
    <section className="career-section" aria-label="Career at SRE">
      <div className="career-content-wrap">
        <div className="career-curves" aria-hidden="true"></div>

        <div className="career-content">
          <h2 className="career-title">
            <span>{titleLineOne}</span>
            <span>{titleLineTwo}</span>
          </h2>

          <p className="career-description">{description}</p>

          <a className="career-cta" href={buttonHref} aria-label={buttonLabel}>
            <span>{buttonLabel}</span>
            <span className="career-cta-arrow" aria-hidden="true">
              {'->'}
            </span>
          </a>
        </div>
      </div>

      <div className="career-media-wrap">
        {image ? (
          <img
            className="career-media"
            src={image}
            alt={imageAlt}
            loading="lazy"
            data-aos={mediaAnimation}
          />
        ) : null}
      </div>
    </section>
  )
}

export default CareerSection
