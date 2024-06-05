import '../abrirFunction'
import { abrirTabla } from '../abrirFunction';
// Terminado
const tablaRoot = document.querySelector('tabla-obra').shadowRoot;
const tablaObra = tablaRoot.getElementById('tablaO');
const infButton = document.getElementById('informecuatro');

infButton.addEventListener('click', () => {abrirTabla(tablaObra)});