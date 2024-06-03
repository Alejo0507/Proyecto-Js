import { mandarMockApi } from '../mockapi/mandar';
import { calcularGastosMaterialesLote, actualizarMateriaPrimaAPI } from '../calculos/restarMP';

const URLMP = "https://66586d8e5c36170526486c75.mockapi.io/lotes";

const form = document.getElementById('productForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Obtener los valores del formulario
  const producto = document.getElementById('producto').value;
  const cantidad = parseInt(document.getElementById('cantidadproductos').value); // Convertir a número

  try {
    // Calcular los gastos de materiales para el lote de prendas
    const gastosMaterialesLote = calcularGastosMaterialesLote([producto], cantidad);

    // Actualizar los datos de materia prima en la API Mock
    await actualizarMateriaPrimaAPI(gastosMaterialesLote);

    // Mandar el lote de prendas a la API Mock
    mandarMockApi(URLMP, { producto, cantidad }, form);
  } catch (error) {
    console.error('Error:', error);
  }
});
