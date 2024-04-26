import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl'; // Importa el plugin glsl

export default defineConfig({
  plugins: [
    react(),
    glsl() // Agrega el plugin glsl a la lista de plugins
  ]
});