import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './components/ThemeSwitcher/ThemeProvider.jsx'; 
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);