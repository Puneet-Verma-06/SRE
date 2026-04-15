import SplitText from './SplitText'

function ContactSection({ section }) {
  const {
    title = 'CONTACT',
    subtitle = 'What can we do for you?',
    address = '',
    phone = '+49 40 853 93 01',
    phoneContacts = [],
    email = 'info@kroenert.de',
    privacyLabel = 'I have read and agree to the Privacy Policy.',
    submitLabel = 'Send',
  } = section ?? {}

  const resolvedPhoneContacts =
    phoneContacts.length > 0
      ? phoneContacts
      : phone
        ? [{ number: phone, label: phone }]
        : []

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="contact-section" aria-label="Contact form">
      <div className="contact-info-wrap">
        <div className="contact-curves" aria-hidden="true"></div>

        <div className="contact-info">
          <SplitText
            text={title}
            tag="h2"
            className="contact-title"
            delay={45}
            duration={1}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-80px"
            textAlign="left"
          />
          <p className="contact-subtitle">{subtitle}</p>

          {address ? <p className="contact-subtitle">{address}</p> : null}

          {resolvedPhoneContacts.map((contact) => {
            const dialNumber = contact.number.replace(/[^\d+]/g, '')
            const contactLabel = contact.label ?? `${contact.number}${contact.name ? ` ${contact.name}` : ''}`

            return (
              <a className="contact-link" href={`tel:${dialNumber}`} key={`${contact.number}-${contact.name ?? ''}`}>
                <span className="contact-link-icon" aria-hidden="true">
                  {'☎'}
                </span>
                <span>{contactLabel}</span>
              </a>
            )
          })}

          {email ? (
            <a className="contact-link" href={`mailto:${email}`}>
              <span className="contact-link-icon" aria-hidden="true">
                {'✉'}
              </span>
              <span>{email}</span>
            </a>
          ) : null}
        </div>
      </div>

      <div className="contact-form-wrap">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-grid contact-form-grid-top">
            <select className="contact-input" defaultValue="" aria-label="Salutation">
              <option value="" disabled>
                Salutation
              </option>
              <option value="mr">Mr.</option>
              <option value="ms">Ms.</option>
              <option value="other">Other</option>
            </select>
            <input className="contact-input" type="text" placeholder="First Name *" />
            <input className="contact-input" type="text" placeholder="Last Name *" />
          </div>

          <input className="contact-input contact-input-full" type="email" placeholder="Email Address *" />

          <div className="contact-form-grid">
            <input className="contact-input" type="text" placeholder="Company" />
            <input className="contact-input" type="text" placeholder="Company Address" />
          </div>

          <div className="contact-form-grid">
            <input className="contact-input" type="text" placeholder="Job Title" />
            <input className="contact-input" type="text" placeholder="Phone Number *" />
          </div>

          <textarea className="contact-textarea" rows={6} placeholder="Message *"></textarea>

          <label className="contact-privacy">
            <input type="checkbox" />
            <span>{privacyLabel}</span>
          </label>

          <button className="contact-submit" type="submit">
            {submitLabel}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
