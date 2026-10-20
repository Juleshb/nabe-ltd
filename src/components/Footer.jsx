import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Logo variant="onDark" size="sm" showTagline />
            <p style={{ marginTop: '1rem' }}>
              National Benchmark Engineering Ltd delivers professional
              engineering and construction services in Rwanda, in line with
              applicable professional standards.
            </p>
          </div>
          <div>
            <h4>Practice</h4>
            <p>
              <Link to="/about">About us</Link>
              <br />
              <Link to="/services">Our services</Link>
              <br />
              <Link to="/team">Leadership</Link>
              <br />
              <Link to="/contact">Contact</Link>
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              Kigali, Rwanda
              <br />
              <a href="tel:+250781126059">+250 781 126 059</a>
              <br />
              info@nabe.rw
            </p>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} National Benchmark Engineering Ltd</span>
          <span>Precision in design, excellent in construction.</span>
        </div>
      </div>
    </footer>
  )
}
