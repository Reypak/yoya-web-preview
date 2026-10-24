import { useEffect, useState, type FormEvent } from 'react'
import logo from './assets/logo.svg'
import './App.css'

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
]

const SERVICES = [
  {
    icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
    title: 'Software Development',
    text: 'Custom web and mobile applications built to scale with your business.',
  },
  {
    icon: 'M18 10h-1.3A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z',
    title: 'Cloud & DevOps',
    text: 'Secure, resilient infrastructure and automated delivery pipelines.',
  },
  {
    icon: 'M18 20V10M12 20V4M6 20v-6',
    title: 'Data & Analytics',
    text: 'Turn raw data into dashboards and insights that drive decisions.',
  },
  {
    icon: 'M12 2l9 4v6c0 5-3.5 9-9 10-5.5-1-9-5-9-10V6z',
    title: 'Cybersecurity',
    text: 'Proactive protection, audits and compliance for what matters most.',
  },
  {
    icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 8v4l3 2',
    title: 'IT Consulting',
    text: 'Clear technology roadmaps that align with your business goals.',
  },
  {
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8',
    title: 'Managed Support',
    text: 'Dependable 24/7 support so your teams can focus on growth.',
  },
]

const STATS = [
  { value: '150+', label: 'Projects delivered' },
  { value: '60+', label: 'Happy clients' },
  { value: '98%', label: 'Client retention' },
  { value: '24/7', label: 'Support available' },
]

const STEPS = [
  { title: 'Discover', text: 'We listen first, learning your goals, users and constraints.' },
  { title: 'Design', text: 'We shape a clear solution and plan with you, step by step.' },
  { title: 'Build', text: 'Iterative delivery with regular demos and transparent progress.' },
  { title: 'Grow', text: 'We launch, measure and keep improving alongside you.' },
]

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

function Logo() {
  return (
    <a href="#top" className="logo">
      <img src={logo} alt="YOYA Technologies" width="144" height="50" />
    </a>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // No backend yet: wire this up to an API or form service.
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`} id="top">
        <div className="container nav__inner">
          <Logo />
          <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
            <a href="#contact" className="btn btn--primary btn--sm" onClick={() => setOpen(false)}>
              Get in touch
            </a>
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
        <section className="hero">
          <div className="hero__bg" aria-hidden="true" />
          <div className="container hero__inner">
            <p className="eyebrow">YOYA Technologies</p>
            <h1>
              Delivering <span className="gradient">value</span> together
            </h1>
            <p className="hero__lead">
              We partner with ambitious businesses to design, build and run technology that moves them forward, with
              people-first service and measurable results.
            </p>
            <div className="hero__cta">
              <a href="#contact" className="btn btn--primary">
                Start a project
              </a>
              <a href="#services" className="btn btn--ghost">
                Explore services
              </a>
            </div>
            <ul className="stats">
              {STATS.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">What we do</p>
              <h2>Solutions built around your goals</h2>
              <p>From idea to long-term support, everything you need under one roof.</p>
            </div>
            <ul className="grid">
              {SERVICES.map((s) => (
                <li key={s.title} className="card">
                  <span className="card__icon">
                    <Icon d={s.icon} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--alt" id="about">
          <div className="container about">
            <div>
              <p className="eyebrow">About us</p>
              <h2>Technology is better when we build it together</h2>
              <p className="about__text">
                YOYA Technologies is a team of engineers, designers and strategists who believe the best results come
                from close collaboration. We treat your goals as ours, so every solution we deliver is practical,
                reliable and built to create lasting value.
              </p>
              <ul className="checks">
                <li>Transparent communication at every step</li>
                <li>Senior talent on every engagement</li>
                <li>Security and quality built in from day one</li>
              </ul>
            </div>
            <div className="values">
              {[
                ['Partnership', 'We succeed when you do.'],
                ['Integrity', 'Honest advice, even when it is hard.'],
                ['Excellence', 'Craft and care in all we ship.'],
              ].map(([t, d]) => (
                <div key={t} className="value">
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container">
            <div className="section__head">
              <p className="eyebrow">How we work</p>
              <h2>A simple, proven process</h2>
            </div>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="steps__num">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container">
          <div className="cta">
            <h2>Ready to deliver value together?</h2>
            <p>Tell us about your project and we will get back to you within one business day.</p>
            <a href="#contact" className="btn btn--light">
              Let’s talk
            </a>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s start the conversation</h2>
              <p className="about__text">Share a few details and our team will reach out shortly.</p>
              <ul className="contact__info">
                <li>
                  <a href="mailto:info@yoyatechnologies.com">info@yoyatechnologies.com</a>
                </li>
                <li>
                  <a href="tel:+256783870616">+256 783 870616</a>
                </li>
                <li>
                  <address>
                    Plot 38, Friendship Road, Ntinda
                    <br />
                    P.O. Box 121587, Kampala, Uganda
                  </address>
                </li>
              </ul>
            </div>
            <form className="form" onSubmit={onSubmit}>
              <label>
                Name
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                Email
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                How can we help?
                <textarea name="message" rows={4} required />
              </label>
              <button type="submit" className="btn btn--primary">
                Send message
              </button>
              {sent && (
                <p className="form__ok" role="status">
                  Thank you! We will be in touch soon.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <Logo />
          <p>© {new Date().getFullYear()} YOYA Technologies. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
