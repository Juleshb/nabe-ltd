const people = [
  {
    name: 'Eng. Tuyisingize Emmanuel',
    role: 'Chief Executive Officer',
    mark: 'TE',
    photo: '/team/Eng._Tuyisingize_Emmanuel.jpg',
    focus: 'Practice direction, client relationships and delivery across the full project cycle.',
    featured: true,
  },
  {
    name: 'Eng. Niyinzima Patrick',
    role: 'Architecture and Design',
    mark: 'NP',
    focus: 'Architectural planning, technical drawings and design coordination.',
  },
  {
    name: 'Eng. Nyirahabineza Colethe',
    role: 'Environmental Management · Site Engineer',
    mark: 'NC',
    photo: '/team/Eng_Nyirahabineza_colethe.jpg',
    focus: 'Site engineering, environmental controls and safe delivery on the ground.',
  },
  {
    name: 'Eng. Abayisenga Salvator',
    role: 'Topographic and Land Surveying',
    mark: 'AS',
    photo: '/team/Eng._Abayisenga_Salvator.jpg',
    focus: 'Survey data, setting-out and measurements that construction can follow.',
  },
  {
    name: 'Eng. Irikumwenatwe Peter',
    role: 'Air Conditioning and Ventilation',
    mark: 'IP',
    photo: '/team/Eng._Irikumwenatwe_Peter.jpg',
    focus: 'Mechanical services for comfort, air quality and building performance.',
  },
  {
    name: 'Eng. Ishimwe Blese',
    role: 'Plumbing',
    mark: 'IB',
    photo: '/team/Eng._Ishimwe_Blese.jpg',
    focus: 'Water supply, drainage and sanitary systems for buildings.',
  },
  {
    name: 'Hakizimana Die Done',
    role: 'Electricity',
    mark: 'HD',
    photo: '/team/Hakizimana_Die_Done.jpg',
    focus: 'Power distribution, lighting and electrical installation on site.',
  },
]

function PersonCard({ person, index, featured }) {
  return (
    <article className={`person${featured ? ' is-featured' : ''}${person.photo ? ' has-photo' : ''}`}>
      <div className="person-media">
        {person.photo ? (
          <img
            className="person-photo"
            src={person.photo}
            alt={person.name}
          />
        ) : (
          <div className="person-fallback" aria-hidden="true">
            <span>{person.mark}</span>
          </div>
        )}
        <span className="person-idx">{String(index).padStart(2, '0')}</span>
      </div>
      <div className="person-copy">
        <p className="person-role">{person.role}</p>
        <h3>{person.name}</h3>
        <span className="person-rule" aria-hidden="true" />
        <p className="person-focus">{person.focus}</p>
      </div>
    </article>
  )
}

export default function Team() {
  const principal = people.find((p) => p.featured)
  const leads = people.filter((p) => !p.featured)

  return (
    <>
      <section className="page-hero leadership-hero">
        <div className="wrap">
          <p className="eyebrow">Leadership</p>
          <h1>The people who hold the work.</h1>
          <p>
            A proposed structure for delivery. Early on, one professional may
            cover more than one role as capacity grows.
          </p>
          <dl className="lead-stats">
            <div>
              <dt>7</dt>
              <dd>Named professionals</dd>
            </div>
            <div>
              <dt>6</dt>
              <dd>Technical disciplines</dd>
            </div>
            <div>
              <dt>1</dt>
              <dd>Integrated practice</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section leadership-body">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Principal</p>
            <h2>Practice leadership</h2>
          </div>
          <PersonCard person={principal} index={1} featured />
        </div>
      </section>

      <section className="section leadership-body" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Discipline leads</p>
            <h2>Specialists across the project cycle</h2>
          </div>
          <div className="team">
            {leads.map((person, i) => (
              <PersonCard
                person={person}
                index={i + 2}
                key={person.name}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
