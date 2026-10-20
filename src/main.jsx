import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <a className="skip" href="#main">
      Skip to content
    </a>
    <App />
  </StrictMode>,
)
