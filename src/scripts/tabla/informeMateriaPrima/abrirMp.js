import '../abrirFunction'
import { abrirTabla } from '../abrirFunction';

const tablaRoot = document.querySelector('tabla-informe').shadowRoot;
const tablaMateria = tablaRoot.getElementById('tablaMp');
const infButton = document.getElementById('informeuno');
// Terminado
infButton.addEventListener('click', () => {abrirTabla(tablaMateria)});