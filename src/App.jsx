import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Identity from './pages/Identity'
import './brand.css'

const titles = {
  '/': 'National Benchmark Engineering Ltd',
  '/about': 'About | National Benchmark Engineering Ltd',
  '/services': 'Services | National Benchmark Engineering Ltd',
  '/identity': 'Brand Identity | National Benchmark Engineering Ltd',
  '/team': 'Team | National Benchmark Engineering Ltd',
  '/contact': 'Contact | National Benchmark Engineering Ltd',
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname] || titles['/']
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <ScrollToTop />
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/identity" element={<Identity />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
