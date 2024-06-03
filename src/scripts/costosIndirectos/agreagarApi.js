import '../mockapi/mandar'
import { mandarMockApi } from '../mockapi/mandar';

const URLMP = "https://664a2109a300e8795d41126f.mockapi.io/api/1/costosindirectos";

const form = document.getElementById('costoForm');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  let lotes = {
      
      "tipoCosto": document.getElementById('nombre-costo').value,
      "valor": document.getElementById('valor-costo').value,
      "descripcion": document.getElementById('descripcion-costo').value,
     
  };

  mandarMockApi(URLMP, lotes, form);
});
