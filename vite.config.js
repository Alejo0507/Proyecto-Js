// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,  // Esto permite que el servidor escuche en todas las interfaces de red
    port: 3000   // Puedes cambiar el puerto si es necesario
  }
});
