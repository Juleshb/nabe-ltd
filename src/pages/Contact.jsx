import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Contact</p>
          <h1>Bring the brief. We will set the benchmark.</h1>
          <p>
            Share a project outline for construction, design, surveying or
            consultancy. Visit us in Rubavu, Mahoko, in front of Reverend
            Coffee.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <h2 className="display" style={{ fontSize: '2rem' }}>
              Rubavu office
            </h2>
            <p className="muted">
              National Benchmark Engineering Ltd
              <br />
              Rubavu, Mahoko
              <br />
              In front of Reverend Coffee
              <br />
              <a href="tel:+250781126059">+250 781 126 059</a>
              <br />
              info@nabe.rw
            </p>
            <p className="muted" style={{ marginTop: '1.4rem' }}>
              Precision in design, excellent in construction.
            </p>
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
              Service of interest
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Construction</option>
                <option>Architecture & structure</option>
                <option>Interior design</option>
                <option>Topographical and surveying</option>
                <option>Construction permits</option>
                <option>Consultancy and advice</option>
                <option>Project management</option>
                <option>Air conditioning and ventilation</option>
              </select>
            </label>
            <label>
              Project notes
              <textarea name="message" required />
            </label>
            <button className="btn btn-navy" type="submit">
              Send enquiry
            </button>
            {sent ? (
              <p className="success" role="status">
                Thank you. This form is a front-end prototype — connect it to
                email for live enquiries.
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </>
  )
}
