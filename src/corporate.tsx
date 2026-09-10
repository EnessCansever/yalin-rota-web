import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CorporateWebsite from './pages/CorporateWebsite'
import './index.css'
import './pages/corporate.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CorporateWebsite />
  </StrictMode>,
)
