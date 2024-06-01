import '../mockapi/mandar'
import { mandarMockApi } from '../mockapi/mandar';

const URLMP = "https://66586d8e5c36170526486c75.mockapi.io/lotes";

const form = document.getElementById('productForm');

form.addEventListener('submit', (event) => {
  event.preventDefault()
  let lotes = {
      
      "producto": document.getElementById('producto').value,
      "cantidad": document.getElementById('cantidadproductos').value,
     
  };

  mandarMockApi(URLMP, lotes, form);
});
