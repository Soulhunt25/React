import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Context.Provider value = "Koi mil gyy">
        <App />
      </Context.Provider>
    </BrowserRouter>
  </StrictMode>
)
