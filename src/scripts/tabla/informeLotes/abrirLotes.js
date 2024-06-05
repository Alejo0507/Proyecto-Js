import '../abrirFunction'
import { abrirTabla } from '../abrirFunction';

const infButton2 = document.getElementById('informedos');
const loteRoot = document.querySelector('tabla-informe-lote').shadowRoot;
const tablaLote = loteRoot.getElementById('tablaL');
// Terminado
infButton2.addEventListener('click', () => {abrirTabla(tablaLote)});