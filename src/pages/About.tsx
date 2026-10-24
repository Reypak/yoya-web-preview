import { Link } from 'react-router'
import Icon from '../components/Icon'
import { MISSION, VALUES, VISION } from '../content'

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

      <section className="section section--tight">
        <div className="container purpose">
          <article className="purpose__card">
            <span className="card__icon">
              <Icon d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </span>
            <p className="eyebrow">Our Vision</p>
            <p className="purpose__text">{VISION}</p>
          </article>
          <article className="purpose__card purpose__card--accent">
            <span className="card__icon">
              <Icon d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </span>
            <p className="eyebrow">Our Mission</p>
            <p className="purpose__text">{MISSION}</p>
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
