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
        mainjs: resolve(__dirname, 'src/main.js'),
        calcef: resolve(__dirname, 'src/components/calculadoraEficiencia.js'),
        manoobra: resolve(__dirname, 'src/components/manoDeObra.js'),
        tabla: resolve(__dirname, 'src/components/tabla.js'),
        tablacostos: resolve(__dirname, 'src/components/tablaCostos.js'),
        tablalotes: resolve(__dirname, 'src/components/tablaLotes.js'),
        tablaobra: resolve(__dirname, 'src/components/tablaObra.js'),
        maintablas: resolve(__dirname, 'src/scripts/mainTablas.js'),
      }
    }
  }
});










