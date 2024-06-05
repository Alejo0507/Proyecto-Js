import '../abrirFunction'
import { abrirTabla } from '../abrirFunction';
// Terminado
const infButton3 = document.getElementById('informetres');
const costoRoot = document.querySelector('tabla-informe-costo').shadowRoot;
const tablacostos = costoRoot.getElementById('TablaC');

infButton3.addEventListener('click', () => {abrirTabla(tablacostos)});