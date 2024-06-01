const infButton = document.getElementById('informeuno');
const infButtondos=document.getElementById('informedos');
const infSec1 = document.getElementById('info1');
const infSec2 = document.getElementById('info2');
const infSec3 = document.getElementById('info3');

// SHADOW ROOT ELEMENTO
const tablaRoot = document.querySelector('tabla-informe').shadowRoot;
const tablaLot=document.querySelector('tabla-informe-lote').shadowRoot;
const tabla = tablaRoot.getElementById('tablaMp');
const tablalot=document.getElementById('tablaL')
const searchInput = tablaRoot.getElementById('searchInput');

infButton.addEventListener('click', () => {
    infSec1.style.display = "none";
    infSec2.style.display = "none";
    infSec3.style.display = "none";
    tabla.style.display = "flex";
    searchInput.style.display = "flex";
})
infButtondos.addEventListener('click', () => {
    infSec1.style.display = "none";
    infSec2.style.display = "none";
    infSec3.style.display = "none";
    tablalot.style.display = "flex";
    searchInput.style.display = "flex";
   
})
