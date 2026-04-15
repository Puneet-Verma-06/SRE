import NavbarSection from '../sections/NavbarSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'
import './SectorsPage.css'

function SectorsPage({ viewModel }) {
  const { brand, navigation, locale, sectors, contact, footer } = viewModel
  const cards = sectors.cards
  const targetImageUrl =
    'https://www.kroenert.de/en/wp-content/uploads/sites/2/2025/12/KROENERT-Header-medizin-pharma-medical-pharma.png'

  return (
    <main className="site-shell sectors-shell">
      <section className="navbar-section">
        <NavbarSection brand={brand} navigation={navigation} locale={locale} />
      </section>

      <section className="sectors-hero" aria-label="Sectors intro">
        <div className="sectors-hero-lines" aria-hidden="true" />
        <div className="sectors-hero-content">
          <h1 className="sectors-hero-title">{sectors.title}</h1>
          <p className="sectors-hero-subtitle">{sectors.subtitle}</p>
        </div>
      </section>

      <section className="sectors-mosaic" aria-label="Sectors list">
        {cards.map((card, index) => {
          if (card.type === 'image') {
            const imageAnimation = card.image === targetImageUrl ? 'fade-down-right' : undefined

            return (
              <figure className="sectors-tile sectors-tile-image" key={card.imageAlt ?? `image-${index}`}>
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="sectors-tile-img"
                  loading="lazy"
                  data-aos={imageAnimation}
                />
              </figure>
            )
          }

          const cardHref = card.href
          const cardAriaLabel = cardHref ? `Open ${card.title}` : undefined

          return (
            <article className="sectors-tile sectors-tile-text" key={card.title}>
              {cardHref ? (
                <a className="sectors-tile-link" href={cardHref} aria-label={cardAriaLabel}>
                  <h2 className="sectors-tile-title">{card.title}</h2>
                  <p className="sectors-tile-description">{card.description}</p>
                </a>
              ) : (
                <>
                  <h2 className="sectors-tile-title">{card.title}</h2>
                  <p className="sectors-tile-description">{card.description}</p>
                </>
              )}
            </article>
          )
        })}
      </section>

      <ContactSection section={contact} />

      <FooterSection section={footer} />
    </main>
  )
}

export default SectorsPage
