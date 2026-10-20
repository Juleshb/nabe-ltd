import Logo, { TAGLINE, Monogram } from '../components/Logo'
import LogoDownloads from '../components/LogoDownloads'
import {
  ElementBuildings,
  ElementCrane,
  ElementCurve,
  ServiceIcon,
} from '../components/BrandElements'

const colors = [
  { name: 'Deep Charcoal', hex: '#203231', use: 'Primary. Logo ink, headers, vehicles.' },
  { name: 'Burgundy', hex: '#702838', use: 'Accent. Crane hook, curve, Engineering Ltd.' },
  { name: 'Chocolate Brown', hex: '#604633', use: 'Secondary. Supporting graphics.' },
  { name: 'Warm Off-White', hex: '#F4F1EB', use: 'Background. Stationery and website.' },
]

const elements = [
  { title: 'NB Monogram', text: 'N + B locked as one mark — National Benchmark.', icon: 'mono' },
  { title: 'Construction Crane', text: 'Delivery, site work and building in progress.', icon: 'crane' },
  { title: 'Buildings', text: 'Three rising bars: growth, structure, skyline.', icon: 'buildings' },
  { title: 'Dynamic Curve', text: 'Progress and a solid foundation under every job.', icon: 'curve' },
]

const services = [
  ['building', 'Building Construction'],
  ['architecture', 'Architectural Design'],
  ['interior', 'Interior Design'],
  ['structure', 'Structural Design & Analysis'],
  ['survey', 'Topographical Surveying'],
  ['permits', 'Construction Permits & Consultancy'],
  ['maintenance', 'Building Maintenance & Renovation'],
  ['people', 'Project Management & Technical Advice'],
]

export default function Identity() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Brand identity</p>
          <h1>National Benchmark Engineering Ltd</h1>
          <p className="tagline" style={{ color: 'var(--sand)', marginTop: '0.8rem' }}>
            “{TAGLINE}”
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid-2">
          <div>
            <p className="eyebrow">The mark</p>
            <h2 className="display">Emblem. Name. Explanation.</h2>
            <p className="muted">
              The lockup follows a professional-body layout: a circular
              construction emblem, the short name NABE, then the legal name
              stacked beside it.
            </p>
            <p className="muted" style={{ marginTop: '1rem' }}>
              The circle holds buildings and a crane — design and construction.
              NABE is National Benchmark Engineering. The line under the name is
              the tagline: “{TAGLINE}”.
            </p>
          </div>
          <div className="lockup-stage lockup-light">
            <Logo size="lg" variant="onLight" showTagline />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Logo system</p>
            <h2>Lockups</h2>
          </div>
          <div className="lockup-grid">
            <figure className="lockup-stage lockup-light">
              <Logo size="lg" variant="onLight" showTagline />
              <figcaption>Primary — on paper</figcaption>
            </figure>
            <figure className="lockup-stage lockup-dark">
              <Logo size="lg" variant="onDark" showTagline />
              <figcaption>Reverse — on dark</figcaption>
            </figure>
            <figure className="lockup-stage lockup-light">
              <Monogram variant="onLight" size={120} />
              <figcaption>Emblem — colour</figcaption>
            </figure>
            <figure className="lockup-stage lockup-dark">
              <Monogram variant="onDark" size={120} />
              <figcaption>Emblem — reverse</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <LogoDownloads />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Brand colours</p>
            <h2>Corporate palette</h2>
          </div>
          <div className="swatches">
            {colors.map((c) => (
              <article className="swatch" key={c.hex}>
                <div className="swatch-chip" style={{ background: c.hex }} />
                <h3>{c.name}</h3>
                <p className="mono">{c.hex}</p>
                <p className="muted">{c.use}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Brand elements</p>
            <h2>The parts of the mark.</h2>
          </div>
          <div className="elements">
            {elements.map((item) => (
              <article className="element" key={item.title}>
                {item.icon === 'mono' ? <Monogram variant="onLight" size={72} /> : null}
                {item.icon === 'crane' ? <ElementCrane /> : null}
                {item.icon === 'buildings' ? <ElementBuildings /> : null}
                {item.icon === 'curve' ? <ElementCurve /> : null}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Our services</p>
            <h2>Eight lines of practice.</h2>
          </div>
          <div className="service-grid">
            {services.map(([icon, title]) => (
              <article className="service-cell" key={title}>
                <ServiceIcon name={icon} color="#F4F1EB" accent="#702838" />
                <h3>{title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Applications</p>
            <h2>How the brand appears.</h2>
          </div>
          <div className="stationery">
            <article className="letterhead" aria-label="Letterhead mockup">
              <header>
                <Logo size="sm" variant="onLight" />
                <span className="mono">Kigali, Rwanda</span>
              </header>
              <div className="letter-rule" />
              <p className="muted">
                Dear Client,
                <br />
                <br />
                Thank you for inviting National Benchmark Engineering Ltd to
                submit this brief. Precision in design, excellent in
                construction.
              </p>
              <footer>“{TAGLINE}”</footer>
            </article>

            <article className="biz-card" aria-label="Business card mockup">
              <div className="card-face card-front card-corner" style={{ background: '#fff', color: '#203231' }}>
                <Logo size={40} variant="onLight" />
                <p className="tagline">“{TAGLINE}”</p>
              </div>
              <div className="card-face card-back" style={{ background: '#203231', color: '#F4F1EB' }}>
                <p className="card-name" style={{ fontFamily: 'Montserrat, sans-serif', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                  Eng. Tuyisingize Emmanuel
                </p>
                <p className="mono">Chief Executive Officer</p>
                <p className="muted" style={{ color: '#d7cdc4' }}>
                  +250 781 126 059
                  <br />
                  info@nbengineering.rw
                  <br />
                  Kigali, Rwanda
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
