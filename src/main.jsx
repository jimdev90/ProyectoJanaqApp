import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { RoutesComponent} from "./layouts/Routes";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <RoutesComponent />
    </BrowserRouter>
  </React.StrictMode>,
)
