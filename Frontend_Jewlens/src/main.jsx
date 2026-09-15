import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartContexts from './context/CartContexts.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartContexts>
      <App />
    </CartContexts>
          
  
  </BrowserRouter>
)

