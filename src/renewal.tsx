import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import WebsiteRenewal from './pages/WebsiteRenewal'
import './index.css'
// İki hizmet sayfası aynı görsel sistemi kullanır.
import './pages/corporate.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WebsiteRenewal />
  </StrictMode>,
)
