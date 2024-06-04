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
        main: resolve(__dirname, 'src/pages/index.html'),
        registro: resolve(__dirname, 'src/pages/registro.html'),
        calculador: resolve(__dirname, 'src/pages/calculador.html'),
        informes: resolve(__dirname, 'src/pages/informes.html'),
        mainjs: resolve(__dirname, 'src/main.js') // Agrega tu main.js aquí
      }
    }
  }
});










