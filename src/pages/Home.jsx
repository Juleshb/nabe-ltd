import { Link } from 'react-router-dom'
import { ServiceIcon } from '../components/BrandElements'

const families = [
  {
    label: 'Design',
    intro: 'Spaces, structure and interiors, planned as one drawing set.',
    items: [
      {
        icon: 'architecture',
        title: 'Architectural Design',
        text: 'Drawings, planning and design coordination.',
      },
      {
        icon: 'interior',
        title: 'Interior Design',
        text: 'Space planning, furniture and finishing.',
      },
      {
        icon: 'structure',
        title: 'Structural Design & Analysis',
        text: 'Assessment and construction drawings.',
      },
    ],
  },
  {
    label: 'Construction',
    intro: 'Site delivery, systems and the people who run the programme.',
    items: [
      {
        icon: 'building',
        title: 'Building Construction',
        text: 'Execution, supervision and coordination.',
      },
      {
        icon: 'maintenance',
        title: 'Building Maintenance & Renovation',
        text: 'Renovation, maintenance and fit-out.',
      },
      {
        icon: 'hvac',
        title: 'Air Conditioning and Ventilation',
        text: 'Comfort, air quality and mechanical services.',
      },
      {
        icon: 'people',
        title: 'Project Management',
        text: 'Planning, BoQ, cost and site leadership.',
      },
    ],
  },
  {
    label: 'Survey, permits & advice',
    intro: 'The measurements, papers and counsel a project needs to proceed.',
    items: [
      {
        icon: 'survey',
        title: 'Topographical and Surveying',
        text: 'Land survey, setting-out and levels.',
      },
      {
        icon: 'permits',
        title: 'Construction Permits',
        text: 'Permit drawings and documentation.',
      },
      {
        icon: 'consult',
        title: 'Consultancy and Advice',
        text: 'Feasibility and professional advice.',
      },
    ],
  },
]

const mandates = [
  ['Quality construction', 'Work that meets approved designs, standards, budgets and programmes.'],
  ['Accurate surveying', 'Measurements, setting-out and calculations you can build from.'],
  ['Innovative design', 'Functional, safe and sustainable architectural and structural work.'],
  ['Professional integrity', 'Transparent communication and ethical client relationships.'],
  ['Public safety', 'Protect workers, clients, communities and the public on every site.'],
  ['Sustainable delivery', 'Durable, resource-efficient buildings and infrastructure.'],
]

const news = [
  {
    tag: 'Profile',
    title: 'NABE company profile and corporate framework',
    text: 'The practice is set up to deliver construction, design, surveying and consultancy across Rwanda.',
  },
  {
    tag: 'Practice',
    title: 'Qualified personnel on every commission',
    text: 'Regulated work is undertaken by appropriately qualified staff within the company’s authorized scope.',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <p className="hero-kicker">Engineering practice</p>
          <h1>Building trust through engineering excellence.</h1>
          <p className="lead">
            National Benchmark Engineering Ltd is an engineering and construction
            company in Rwanda. We deliver professional, reliable and
            cost-effective solutions from survey and design through construction
            and finishing.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-gold" to="/contact">
              Start a project →
            </Link>
            <Link className="btn btn-ghost" to="/about">
              About the practice
            </Link>
          </div>
        </div>
      </section>

      <section className="section overlap">
        <div className="wrap">
          <div className="home-services">
            <header className="home-services-head">
              <div>
                <p className="eyebrow">Services</p>
                <h2>Collected under one practice.</h2>
                <p>
                  Design, construction, surveying, permits, consultancy and
                  mechanical services — one team, one project cycle.
                </p>
              </div>
              <Link className="btn btn-navy" to="/services">
                View all services
              </Link>
            </header>
            <div className="service-families">
              {families.map((family) => (
                <article className="service-family" key={family.label}>
                  <p className="service-family-label">{family.label}</p>
                  <p className="service-family-intro">{family.intro}</p>
                  <ul>
                    {family.items.map((item) => (
                      <li key={item.title}>
                        <ServiceIcon name={item.icon} />
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head center">
            <h2>Our core practice</h2>
            <p>
              We maintain professional standards in design, measurement and
              construction — with work undertaken by qualified personnel and
              within authorized scope.
            </p>
          </div>
          <div className="mandate">
            {mandates.map(([title, text], i) => (
              <article className="mandate-card" key={title}>
                <span className="idx">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section news-band">
        <div className="wrap">
          <div className="section-head">
            <h2>Latest updates</h2>
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <article className="news-card" key={item.title}>
                <span className="eyebrow">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="verify">
        <div className="wrap verify-inner">
          <div>
            <h2>Start a conversation with NABE</h2>
            <p>
              Call +250 781 126 059 or send a brief for construction, design,
              surveying or consultancy.
            </p>
          </div>
          <Link className="btn btn-gold" to="/contact">
            Contact the practice
          </Link>
        </div>
      </section>
    </>
  )
}

