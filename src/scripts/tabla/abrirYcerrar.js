const infButton = document.getElementById('informeuno');
const infSec1 = document.getElementById('info1');
const infSec2 = document.getElementById('info2');
const infSec3 = document.getElementById('info3');

// SHADOW ROOT ELEMENTO
const tablaRoot = document.querySelector('tabla-informe').shadowRoot;
const tabla = tablaRoot.getElementById('tablaMp');
const searchInput = tablaRoot.getElementById('searchInput');

infButton.addEventListener('click', () => {
    infSec1.style.display = "none";
    infSec2.style.display = "none";
    infSec3.style.display = "none";
    tabla.style.display = "flex";
    searchInput.style.display = "flex";
})
