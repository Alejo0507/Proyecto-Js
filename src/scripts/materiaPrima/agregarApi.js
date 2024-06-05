import '../mockapi/mandar'
import { mandarMockApi } from '../mockapi/mandar';
// Terminado
const URLMP = "https://665630689f970b3b36c49525.mockapi.io/materiaPrima";

const form = document.getElementById('mpForm');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const stock = document.getElementById('cantidad').value
  let materiaPrima = {
      "idMateriaPrima": document.getElementById('idMp').value,
      "nombre": document.getElementById('nombre').value,
      "fechaDeAdquisicion": document.getElementById('fechaAdqui').value,
      "fechaDeVencimiento": document.getElementById('fechaVenci').value,
      "costoUnidad": document.getElementById('costoUnidad').value,
      "proveedor": document.getElementById('proveedor').value,
      "descripcion": document.getElementById('descripcion').value,
      "unidadMedida": document.getElementById('unidadMedida').value,
      "cantidad": parseInt(stock),
      "categoria": document.getElementById('categoria').value,
      "ubicacion": document.getElementById('ubicacion').value,
  };

  mandarMockApi(URLMP, materiaPrima, form);
});


