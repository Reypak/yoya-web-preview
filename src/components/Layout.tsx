import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router'
import logo from '../assets/logo.svg'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/#services', label: 'Services' },
  { to: '/#contact', label: 'Contact' },
]

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="YOYA Technologies" width="144" height="50" />
    </Link>
  )
}

function Layout() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll to the hash target after navigating, or to the top on a new page.
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <Logo />
          <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
            {NAV.map((n) =>
              n.to.includes('#') ? (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
                  {n.label}
                </Link>
              ) : (
                <NavLink key={n.to} to={n.to} end onClick={() => setOpen(false)}>
                  {n.label}
                </NavLink>
              ),
            )}
            <Link to="/#contact" className="btn btn--primary btn--sm" onClick={() => setOpen(false)}>
              Get in touch
            </Link>
          </nav>
          <button
            type="button"
            className="nav__toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <Logo />
          <p>© {new Date().getFullYear()} YOYA Technologies Ltd. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Layout
