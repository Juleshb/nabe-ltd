export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Company profile</p>
          <h1>National Benchmark Engineering Ltd</h1>
          <p>
            An engineering and construction company committed to professional,
            innovative, reliable and cost-effective solutions across the built
            environment.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap grid-2">
          <div>
            <p className="eyebrow">Vision</p>
            <h2 style={{ fontSize: '2.4rem', margin: '0.7rem 0 1rem' }}>
              Leading and trusted in Rwanda and across Africa.
            </h2>
            <p style={{ color: 'var(--steel)' }}>
              Recognized for excellence, innovation, precision, sustainability
              and high-quality solutions that shape a better built environment.
              Clients should trust the brand for reliable designs, accurate
              measurements, quality construction and modern solutions.
            </p>
          </div>
          <div>
            <p className="eyebrow">Mission</p>
            <h2 style={{ fontSize: '2.4rem', margin: '0.7rem 0 1rem' }}>
              Integrated services, from planning to finishing.
            </h2>
            <p style={{ color: 'var(--steel)' }}>
              We provide engineering, architectural, construction, surveying and
              interior design services through technical expertise, modern
              technology, professional integrity and a commitment to quality,
              safety and customer satisfaction.
            </p>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Objectives</p>
            <h2>What we set out to deliver.</h2>
          </div>
          <ul className="list">
            <li>
              <strong>Quality construction</strong> — designs, technical
              standards, budgets and agreed schedules.
            </li>
            <li>
              <strong>Accuracy in engineering and surveying</strong> — equipment,
              calculations and modern technology.
            </li>
            <li>
              <strong>Innovative design</strong> — functional, safe, attractive
              and sustainable architectural, structural and interior work.
            </li>
            <li>
              <strong>Lasting client relationships</strong> — transparent
              communication, ethics and dependable service.
            </li>
            <li>
              <strong>Growth</strong> — partnerships in public and private
              sectors across Rwanda and beyond.
            </li>
            <li>
              <strong>Sustainable development</strong> — responsible materials,
              safe practice and durable infrastructure.
            </li>
            <li>
              <strong>Professional skills</strong> — training, software and
              development of young professionals.
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
