import NavbarSection from '../sections/NavbarSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'
import './ServicesPage.css'

function ServicesPage({ viewModel }) {
  const { brand, navigation, locale, services, contact, footer } = viewModel

  return (
    <main className="site-shell services-shell">
      <section className="navbar-section">
        <NavbarSection brand={brand} navigation={navigation} locale={locale} />
      </section>

      <section className="services-hero" aria-label="Services intro">
        <div className="services-hero-lines" aria-hidden="true" />
        <div className="services-hero-content">
          <h1 className="services-hero-title">{services.title}</h1>
          <p className="services-hero-subtitle">{services.subtitle}</p>
          <p className="services-hero-contact">{services.contactLine}</p>
        </div>
      </section>

      <section className="services-grid" aria-label="Services list">
        {services.cards.map((card) => (
          <article className="services-card" key={card.title}>
            <img
              src={card.image}
              alt={card.imageAlt ?? card.title}
              className="services-card-image"
              loading="lazy"
            />
            <div className="services-card-overlay" aria-hidden="true" />
            <h2 className="services-card-title">{card.title}</h2>
          </article>
        ))}
      </section>

      <ContactSection section={contact} />

      <FooterSection section={footer} />
    </main>
  )
}

export default ServicesPage
