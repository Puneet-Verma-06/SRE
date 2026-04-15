import NavbarSection from '../sections/NavbarSection'
import VideoIntroSection from '../sections/VideoIntroSection'
import HeroSection from '../sections/HeroSection'
import ExpertiseSection from '../sections/ExpertiseSection'
import TailorMadeSection from '../sections/TailorMadeSection'
import ValuesSection from '../sections/ValuesSection'
import CareerSection from '../sections/CareerSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'
import '../../../App.css'

function HomePage({ viewModel }) {
  const homeSectors = viewModel.homeSectors ?? viewModel.sectors
  const textCards = (homeSectors.cards ?? []).filter((card) => card.type !== 'image')

  return (
    <main className="site-shell">
      <section className="navbar-section">
        <NavbarSection
          brand={viewModel.brand}
          navigation={viewModel.navigation}
          locale={viewModel.locale}
        />
      </section>

      <section className="hero-section">
        <VideoIntroSection />
      </section>

      <section className="hero-section">
        <HeroSection hero={viewModel.hero} />
      </section>

      <section className="hero-section next-hero-section">
        <HeroSection hero={viewModel.nextHero} />
      </section>

      <section className="hero-section next-hero-section">
        <HeroSection hero={viewModel.thirdHero} />
      </section>

      <ExpertiseSection section={viewModel.expertise} />

      <TailorMadeSection section={viewModel.tailorMade} />

      <section className="home-sectors" aria-label="Sectors list">
        <div className="home-sectors-grid">
          <article className="home-sectors-card home-sectors-card-intro" key="home-sectors-intro">
            <h2 className="home-sectors-title">{homeSectors.title}</h2>
            <p className="home-sectors-description">{homeSectors.subtitle}</p>
          </article>

          {textCards.map((card) => {
            const cardHref = card.href
            const cardAriaLabel = cardHref ? `Open ${card.title}` : undefined

            return (
              <article className="home-sectors-card home-sectors-card-text" key={card.title}>
                {cardHref ? (
                  <a className="home-sectors-link" href={cardHref} aria-label={cardAriaLabel}>
                    <h2 className="home-sectors-title">{card.title}</h2>
                    <p className="home-sectors-description">{card.description}</p>
                  </a>
                ) : (
                  <>
                    <h2 className="home-sectors-title">{card.title}</h2>
                    <p className="home-sectors-description">{card.description}</p>
                  </>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <ValuesSection section={viewModel.values} />

      <CareerSection section={viewModel.career} />

      <ContactSection section={viewModel.contact} />

      <FooterSection section={viewModel.footer} />
    </main>
  )
}

export default HomePage
