import { ServiceIcon } from '../components/BrandElements'

const groups = [
  {
    icon: 'building',
    title: 'Building Construction',
    items: [
      'Building construction and project execution',
      'Construction supervision and project coordination',
    ],
  },
  {
    icon: 'architecture',
    title: 'Architectural Design',
    items: [
      'Architectural drawings and building planning',
      'Technical consultation and design coordination',
    ],
  },
  {
    icon: 'interior',
    title: 'Interior Design',
    items: [
      'Residential and commercial interior design',
      'Space planning, furniture and finishing',
    ],
  },
  {
    icon: 'structure',
    title: 'Structural Design & Analysis',
    items: [
      'Structural analysis and assessment',
      'Preparation of construction drawings',
    ],
  },
  {
    icon: 'survey',
    title: 'Topographical Surveying',
    items: [
      'Land and topographic surveying',
      'Construction setting-out and level surveys',
    ],
  },
  {
    icon: 'permits',
    title: 'Construction Permits & Consultancy',
    items: [
      'Assistance with building permit documentation',
      'Technical advice and feasibility support',
    ],
  },
  {
    icon: 'maintenance',
    title: 'Building Maintenance & Renovation',
    items: [
      'Building renovation and maintenance',
      'Interior renovation and fit-out coordination',
    ],
  },
  {
    icon: 'people',
    title: 'Project Management & Technical Advice',
    items: [
      'Project planning and coordination',
      'Cost estimates, BoQ and site leadership',
    ],
  },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Main services</p>
          <h1>One practice. Full project cycle.</h1>
          <p>
            Services are undertaken by qualified personnel and within authorized
            scope in Rwanda.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap cards">
          {groups.map((group, i) => (
            <article className="card" key={group.title}>
              <ServiceIcon name={group.icon} />
              <span className="idx">0{i + 1}</span>
              <h3>{group.title}</h3>
              <ul className="list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
