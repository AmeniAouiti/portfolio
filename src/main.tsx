import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'sonner'
import { LanguageProvider } from './i18n/LanguageContext'

document.documentElement.classList.remove('light')
document.documentElement.classList.add('dark')
try {
  localStorage.setItem('portfolio-theme', 'dark')
} catch {
  /* ignore */
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
      <Toaster position="top-center" richColors closeButton />
    </LanguageProvider>
  </StrictMode>,
)
