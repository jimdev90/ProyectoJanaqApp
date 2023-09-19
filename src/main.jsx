import React from 'react'
import ReactDOM from 'react-dom/client'
import JanaqApp from './JanaqApp.jsx'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <JanaqApp />
    </BrowserRouter>
  </React.StrictMode>,
)
