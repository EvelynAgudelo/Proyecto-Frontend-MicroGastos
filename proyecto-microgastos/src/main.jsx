import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {routerProvider} from 'react-router-dom';
import { router } from './routes/routerApp.jsx';
import { Link } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

<routerProvider router={router} />;
<Link to="/Register">Registrarse</Link>


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

