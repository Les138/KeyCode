import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Tarjeta from './components/Tarjeta.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarjeta apellido='Moreno' nombre='Leslye' edad={34} genero />
    <Tarjeta nombre='Arturo' apellido='Lopez' edad={14} />
    <Tarjeta nombre='Leonor' apellido='Garcia' edad={67} genero />
    <Tarjeta nombre='Jose' apellido='Moreno' edad={64} />
    <App />
  </StrictMode>,
)
