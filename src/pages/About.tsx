import { Link } from 'react-router'
import { MISSION, VALUES, VISION } from '../content'
import onboarding from '../assets/images/yoyapay-onboarding.jpg'

function About() {
  return (
    <>
      <section className="hero hero--page">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__inner">
          <p className="eyebrow">About us</p>
          <h1>
            Trusted solutions for <span className="gradient">revenue</span> administration
          </h1>
          <p className="hero__lead">
            YOYA Technologies delivers innovative software and ICT applications that help organisations across Africa
            collect revenue efficiently and stay accountable.
          </p>
        </div>
      </section>

      <section className="container banner-wrap">
        <figure className="banner">
          <img src={onboarding} alt="Signing in to the YOYA Pay app" width={1080} height={576} />
        </figure>
      </section>

      <section className="vm">
        <div className="container">
          <article className="vm__row">
            <div className="vm__bar vm__bar--accent">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="29" cy="35" r="20" />
                <circle cx="29" cy="35" r="12" />
                <circle cx="29" cy="35" r="4" fill="currentColor" />
                <path d="M29 35L54 10M46 8v10h10" />
              </svg>
            </div>
            <div>
              <p className="vm__our">Our</p>
              <h2 className="vm__title">Mission</h2>
              <p className="vm__text">{MISSION}</p>
            </div>
          </article>

          <hr className="vm__divider" />

          <article className="vm__row">
            <div className="vm__bar vm__bar--blue">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M24 44c0-4-8-8-8-18a16 16 0 0 1 32 0c0 10-8 14-8 18zM25 52h14M27 58h10M32 2v4M8 12l3 3M56 12l-3 3M2 28h4M58 28h4" />
              </svg>
            </div>
            <div>
              <p className="vm__our">Our</p>
              <h2 className="vm__title">Vision</h2>
              <p className="vm__text">{VISION}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--alt" id="values">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Core Values</p>
            <h2>
              Every great team plays by a code. Ours is <span className="gradient">CRICKET</span>.
            </h2>
            <p>
              This acronym represents the values that guide our decisions, shape our culture, and define how we serve
              our clients. These principles are not just ideals — they are embedded in how we build, innovate,
              collaborate, and lead across Africa’s digital ecosystem.
            </p>
          </div>

          <p className="acronym" aria-hidden="true">
            {VALUES.map((v, i) => (
              <span key={i}>{v.letter}</span>
            ))}
          </p>

          <ul className="value-grid">
            {VALUES.map((v) => (
              <li key={v.title} className="card value-card">
                <span className="value-card__letter" aria-hidden="true">
                  {v.letter}
                </span>
                <h3>{v.title}</h3>
                {v.subtitle && <p className="value-card__sub">{v.subtitle}</p>}
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section--cta">
        <div className="cta">
          <h2>Let’s build Africa’s digital future together</h2>
          <p>Talk to us about modernising your revenue collection and accountability.</p>
          <Link to="/#contact" className="btn btn--light">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}

export default About
