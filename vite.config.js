// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';


export default defineConfig({
  server: {
    host: true, 
    port: 3000,
    open: '/src/pages/index.html',
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.js'), // Ruta de tu archivo main.js que importa y registra los componentes
      }
    }
  }
});

