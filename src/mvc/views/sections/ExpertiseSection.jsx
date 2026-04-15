function ExpertiseSection({ section }) {
  const {
    leadLine = 'EXPERTISE,',
    middleLine = 'INNOVATION,',
    endPrefix = 'PASSION',
    endHighlight = 'SINCE 1903',
    image,
    imageAlt = 'Industrial machine detail',
  } = section ?? {}

  return (
    <section className="expertise-section" aria-label="Company expertise section">
      <div className="expertise-section-panel">
        <div className="expertise-section-glow" aria-hidden="true"></div>

        <div className="expertise-section-content">
          <h2 className="expertise-section-title">
            <span className="expertise-section-title-line">{leadLine}</span>
            <span className="expertise-section-title-line">{middleLine}</span>
            <span className="expertise-section-title-line">
              {endPrefix}{' '}
              <span className="expertise-section-title-highlight">{endHighlight}</span>
            </span>
          </h2>
        </div>
      </div>

      {image ? (
        <div className="expertise-section-image-wrap">
          <img className="expertise-section-image" src={image} alt={imageAlt} loading="lazy" />
        </div>
      ) : null}
    </section>
  )
}

export default ExpertiseSection
