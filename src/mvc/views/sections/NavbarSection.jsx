import { useEffect, useState } from 'react'

const MOBILE_NAV_BREAKPOINT = 768
const PRIMARY_NAV_ID = 'site-primary-navigation'

function NavbarSection({ brand, navigation }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_NAV_BREAKPOINT) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('mobile-nav-open', isMobileMenuOpen)

    return () => {
      document.body.classList.remove('mobile-nav-open')
    }
  }, [isMobileMenuOpen])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand-wrap" href="#/" aria-label={`${brand.name} home`} onClick={closeMobileMenu}>
        <img className="brand-wrap-logo" src={brand.logoImage} alt={`${brand.name} logo`} loading="eager" />
      </a>

      <nav
        id={PRIMARY_NAV_ID}
        className={`top-nav${isMobileMenuOpen ? ' is-open' : ''}`}
        aria-label="Primary navigation"
      >
        <ul className="top-nav-list">
          {navigation.map((item) => (
            <li className="top-nav-list-item" key={item.label}>
              <a className="top-nav-list-item-link" href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`menu-toggle-btn${isMobileMenuOpen ? ' is-open' : ''}`}
        type="button"
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-controls={PRIMARY_NAV_ID}
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
      >
        <span className="menu-toggle-bar" aria-hidden="true" />
        <span className="menu-toggle-bar" aria-hidden="true" />
        <span className="menu-toggle-bar" aria-hidden="true" />
      </button>
    </header>
  )
}

export default NavbarSection
