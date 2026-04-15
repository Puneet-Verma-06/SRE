function FooterSection({ section }) {
  const {
    companyName = 'SRE',
    addressLines = ['Schuetzenstraße 105', '22761 Hamburg'],
    contactTitle = 'Contact',
    phone = '+49 40 853 93 01',
    email = 'info@kroenert.de',
    linkGroups = [],
    socials = [],
    copyright = '©2026 SRE',
    legalLinks = [],
  } = section ?? {}

  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer-main">
        <div className="site-footer-col">
          <p className="site-footer-heading">{companyName}</p>
          {addressLines.map((line) => (
            <p className="site-footer-text" key={line}>
              {line}
            </p>
          ))}
        </div>

        <div className="site-footer-col">
          <p className="site-footer-heading">{contactTitle}</p>
          <p className="site-footer-text">{phone}</p>
          <p className="site-footer-text">{email}</p>
        </div>

        {linkGroups.map((group) => (
          <div className="site-footer-col" key={group.title}>
            {group.links.map((link) => (
              <a className="site-footer-link" href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        ))}

        <div className="site-footer-col site-footer-socials">
          {socials.map((social) => (
            <a className="site-footer-link" href={social.href} key={social.label}>
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="site-footer-bottom">
        <p className="site-footer-copy">{copyright}</p>
        <div className="site-footer-legal">
          {legalLinks.map((link) => (
            <a className="site-footer-link" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
