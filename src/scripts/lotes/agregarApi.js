import { mandarMockApi } from '../mockapi/mandar';
import { calcularGastosMaterialesLote, actualizarMateriaPrimaAPI } from '../calculos/restarMP';
import { prendas } from '../prendasMokapi';

const URLMP = "https://66586d8e5c36170526486c75.mockapi.io/lotes";

const form = document.getElementById('productForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();


  const producto = document.getElementById('producto').value;
  const cantidad = document.getElementById('cantidadproductos').value;
  const baseasignacion=document.getElementById('productomes').value;

  try {

    const gastosMaterialesLote = calcularGastosMaterialesLote([producto], cantidad);


    await actualizarMateriaPrimaAPI(gastosMaterialesLote);

    // Mandar el lote de prendas a la API Mock
    mandarMockApi(URLMP, { producto, cantidad,baseasignacion }, form);
  } catch (error) {
    console.error('Error:', error);
  }
});
