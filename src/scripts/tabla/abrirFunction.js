export const abrirTabla = (tabla) => {
    const infSec1 = document.getElementById('info1');
    const infSec2 = document.getElementById('info2');
    const infSec3 = document.getElementById('info3');

    infSec1.style.display = "none";
    infSec2.style.display = "none";
    infSec3.style.display = "none";
    tabla.style.display = "flex";
}


