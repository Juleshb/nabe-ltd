import Logo, { TAGLINE, Monogram } from '../components/Logo'
import LogoDownloads from '../components/LogoDownloads'
import { ServiceIcon } from '../components/BrandElements'

const colors = [
  {
    name: 'Deep charcoal',
    hex: '#25282B',
    use: 'Primary — 60%. Wordmark, headers, vehicles. Strength and stability.',
  },
  {
    name: 'Champagne gold',
    hex: '#C6A66B',
    use: 'Accent — 10%. Helmet, house in the A, buttons. Precision and quality.',
  },
  {
    name: 'Off-white',
    hex: '#F2F2EF',
    use: 'Background — 30%. Paper, screens, stationery. Clarity and readability.',
  },
]

const elements = [
  { title: 'NABE wordmark', text: 'The short name is the logo — set in a high-contrast construction serif.', icon: 'word' },
  { title: 'House in the A', text: 'The A is a gable: roof and window stand for architecture and home.', icon: 'house' },
  { title: 'Safety helmet', text: 'A flat site helmet sits on the A — construction, people and care on site.', icon: 'hat' },
  { title: 'Gold on charcoal', text: 'Gold is reserved for the helmet and the house. Letters stay charcoal.', icon: 'gold' },
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
            <h2 className="display">Name. House. Helmet.</h2>
            <p className="muted">
              The proposed concept is kept, then drawn as a flat vector mark:
              NABE in charcoal, a gold gable in the letter A, and a gold helmet
              on the peak. No 3D shine, no photo texture — it has to hold at
              24 pixels and on a site board.
            </p>
            <p className="muted" style={{ marginTop: '1rem' }}>
              The house is design. The helmet is construction. Together they
              read National Benchmark Engineering. The legal name sits beside
              the wordmark. The line under the name is the tagline: “{TAGLINE}”.
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
              <figcaption>Icon — helmet and A</figcaption>
            </figure>
            <figure className="lockup-stage lockup-dark">
              <Monogram variant="onDark" size={120} />
              <figcaption>Icon — reverse</figcaption>
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
                {item.icon === 'word' ? <Logo lockup="wordmark" size={52} variant="onLight" /> : null}
                {item.icon === 'house' ? <Monogram variant="onLight" size={72} /> : null}
                {item.icon === 'hat' ? <Monogram variant="onLight" size={72} /> : null}
                {item.icon === 'gold' ? (
                  <span
                    className="element-swatch"
                    style={{ background: '#C6A66B' }}
                    aria-hidden="true"
                  />
                ) : null}
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
                <ServiceIcon name={icon} color="#F2F2EF" accent="#C6A66B" />
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
              <div className="card-face card-front card-corner" style={{ background: '#fff', color: '#25282B' }}>
                <Logo size={40} variant="onLight" />
                <p className="tagline">“{TAGLINE}”</p>
              </div>
              <div className="card-face card-back" style={{ background: '#25282B', color: '#F2F2EF' }}>
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
