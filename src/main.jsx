
import { createRoot } from 'react-dom/client'
import './index.css'
import './app.css'
import App from './App.jsx'
import { ThemeProvider } from './assets/components/contexts/theme-context.jsx'



createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
