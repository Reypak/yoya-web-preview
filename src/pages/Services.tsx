import { Link } from 'react-router'
import Icon from '../components/Icon'
import { SERVICES } from '../content'

function Services() {
  return (
    <>
      <section className="hero hero--page">
        <div className="hero__bg" aria-hidden="true" />
        <div className="container hero__inner">
          <p className="eyebrow">Our Services</p>
          <h1>
            Technology that delivers <span className="gradient">value</span>
          </h1>
          <p className="hero__lead">
            From revenue management to AI and cyber security, we build and integrate the systems that help
            organisations collect revenue, serve customers and stay accountable.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <ul className="service-list">
            {SERVICES.map((s, i) => (
              <li key={s.title} className="card service">
                <span className="card__icon">
                  <Icon d={s.icon} />
                </span>
                <div>
                  <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section--cta">
        <div className="cta">
          <h2>Not sure which solution fits?</h2>
          <p>Tell us about your challenge and we will recommend the right mix of services.</p>
          <Link to="/#contact" className="btn btn--light">
            Talk to an expert
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
