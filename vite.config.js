// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';


export default defineConfig({
  server: {
    host: true, 
    port: 3000   
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        registro: resolve(__dirname, 'registro.html'),
        calculador: resolve(__dirname, 'calculador.html'),
        informes: resolve(__dirname, 'informes.html'),
      }
    }
  }
  
});

