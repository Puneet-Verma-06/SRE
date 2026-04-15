import NavbarSection from '../sections/NavbarSection'
import ContactSection from '../sections/ContactSection'
import FooterSection from '../sections/FooterSection'

function ContactPage({ viewModel }) {
  const { brand, navigation, locale, contact, footer } = viewModel

  return (
    <main className="site-shell contact-page-shell">
      <section className="navbar-section">
        <NavbarSection brand={brand} navigation={navigation} locale={locale} />
      </section>

      <ContactSection section={contact} />

      <FooterSection section={footer} />
    </main>
  )
}

export default ContactPage
