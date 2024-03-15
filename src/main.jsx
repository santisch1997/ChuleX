import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './components/ThemeSwitcher/ThemeProvider.jsx'; // Importa el ThemeProvider
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envuelve tu aplicación con ThemeProvider */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);