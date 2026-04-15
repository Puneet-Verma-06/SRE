function ValuesIcon({ icon }) {
  if (icon === 'gear') {
    return (
      <svg viewBox="0 0 24 24" className="values-item-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.08-.98l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.6-.22l-2.49 1a7.3 7.3 0 0 0-1.7-.98l-.38-2.65a.5.5 0 0 0-.5-.42h-4a.5.5 0 0 0-.5.42L9.1 5.07c-.61.24-1.18.56-1.7.95l-2.5-1a.5.5 0 0 0-.6.22l-2 3.46a.5.5 0 0 0 .12.64l2.12 1.65c-.05.33-.08.66-.08.99s.03.65.08.97L2.42 14.6a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .6.22l2.5-1c.52.39 1.09.71 1.7.95l.38 2.65a.5.5 0 0 0 .5.42h4a.5.5 0 0 0 .5-.42l.38-2.65c.61-.24 1.18-.56 1.7-.95l2.49 1a.5.5 0 0 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.1-1.62zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z"
        />
      </svg>
    )
  }

  if (icon === 'people') {
    return (
      <svg viewBox="0 0 24 24" className="values-item-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 11a3.5 3.5 0 1 0-2.47-5.97A3.5 3.5 0 0 0 16 11zm-8 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0 2c-2.66 0-8 1.34-8 4v2h10v-2c0-1.1.38-2.1 1.08-2.93A12.7 12.7 0 0 0 8 13zm8 0c-.29 0-.62.02-.97.05A4.9 4.9 0 0 1 17 17v2h7v-2c0-2.66-5.34-4-8-4z"
        />
      </svg>
    )
  }

  if (icon === 'bulb') {
    return (
      <svg viewBox="0 0 24 24" className="values-item-icon" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2a7 7 0 0 0-4 12.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26A7 7 0 0 0 12 2zm2 18H10a2 2 0 0 0 4 0z"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="values-item-icon" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.1 21.35 10.65 20C5.4 15.36 2 12.27 2 8.5A5.5 5.5 0 0 1 7.5 3C9.24 3 10.91 3.81 12 5.09A5.87 5.87 0 0 1 16.5 3 5.5 5.5 0 0 1 22 8.5c0 3.77-3.4 6.86-8.65 11.5z"
      />
    </svg>
  )
}

function ValuesSection({ section }) {
  const { title = 'OUR VALUES', items = [] } = section ?? {}

  return (
    <section className="values-section" aria-label="Our values">
      <div className="values-lines values-lines-top" aria-hidden="true"></div>
      <div className="values-lines values-lines-bottom" aria-hidden="true"></div>

      <div className="values-inner">
        <h2 className="values-title">{title}</h2>

        <div className="values-grid">
          {items.map((item) => (
            <article className="values-item" key={item.title}>
              <ValuesIcon icon={item.icon} />
              <h3 className="values-item-title">{item.title}</h3>
              <p className="values-item-text">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
