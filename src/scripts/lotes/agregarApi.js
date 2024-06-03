import { mandarMockApi } from '../mockapi/mandar';
import { calcularGastosMaterialesLote, actualizarMateriaPrimaAPI } from '../calculos/restarMP';

const URLMP = "https://66586d8e5c36170526486c75.mockapi.io/lotes";

const form = document.getElementById('productForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();


  const producto = document.getElementById('producto').value;
  const cantidad = parseInt(document.getElementById('cantidadproductos').value); 

  try {

    const gastosMaterialesLote = calcularGastosMaterialesLote([producto], cantidad);


    await actualizarMateriaPrimaAPI(gastosMaterialesLote);


    mandarMockApi(URLMP, { producto, cantidad }, form);
  } catch (error) {
    console.error('Error:', error);
  }
});
