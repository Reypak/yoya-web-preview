import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import Icon from '../components/Icon'
import { MISSION, PARTNERS, SERVICES, VISION } from '../content'

// Eagerly import every partner logo so Vite fingerprints and bundles them.
const partnerImgs = import.meta.glob('../assets/partners/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const FEATURED = SERVICES.slice(0, 6)

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

function Home() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // No backend yet: wire this up to an API or form service.
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <>
      <section className="hero hero--split">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__inner">
          <p className="eyebrow">
            <span className="eyebrow__dot" /> Revenue administration, reimagined
          </p>
          <h1>
            Delivering <span className="gradient">value</span> together
          </h1>
          <p className="hero__lead">
            We build trusted software and ICT solutions that help organisations across Africa collect revenue
            efficiently, serve customers better and stay accountable.
          </p>
          <div className="hero__cta">
            <Link to="/#contact" className="btn btn--primary">
              Start a project
            </Link>
            <Link to="/services" className="btn btn--ghost">
              Explore services
            </Link>
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
            {FEATURED.map((s) => (
              <li key={s.title} className="card">
                <span className="card__icon">
                  <Icon d={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ul>
          <div className="section__more">
            <Link to="/services" className="btn btn--ghost">
              View all {SERVICES.length} services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="about">
        <div className="container about">
          <div>
            <p className="eyebrow">About us</p>
            <h2>Transforming revenue administration in Africa</h2>
            <p className="about__text">
              YOYA Technologies builds trusted software and ICT solutions that help organisations collect revenue
              efficiently and account for every shilling.
            </p>
            <Link to="/about" className="btn btn--ghost about__more">
              Learn more about us
            </Link>
          </div>
          <div className="values">
            <div className="value">
              <h3>Our Vision</h3>
              <p>{VISION}</p>
            </div>
            <div className="value">
              <h3>Our Mission</h3>
              <p>{MISSION}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="process">
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

      <section className="section section--alt partners" id="partners">
        <div className="container partners__head">
          <p className="eyebrow">Trusted by</p>
          <h2>Partners &amp; clients who rely on us</h2>
        </div>
        {/* Duplicate the list for a seamless infinite scroll */}
        <div className="marquee" aria-label="Partner logos">
          <ul className="marquee__track" aria-hidden="false">
            {[...PARTNERS, ...PARTNERS].map((p, i) => {
              const src = partnerImgs[`../assets/partners/${p.file}`]
              return (
                <li key={i} className="marquee__item">
                  <img src={src} alt={p.name} />
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="container">
        <div className="cta">
          <h2>Ready to deliver value together?</h2>
          <p>Tell us about your project and we will get back to you within one business day.</p>
          <Link to="/#contact" className="btn btn--light">
            Let’s talk
          </Link>
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
    </>
  )
}

export default Home
