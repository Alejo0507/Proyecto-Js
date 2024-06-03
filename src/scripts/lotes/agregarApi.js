import { mandarMockApi } from '../mockapi/mandar';
import { actualizarMateriaPrimaAPI } from '../calculos/restarMP';
import { prendas } from '../prendasMokapi';
import { calcularManoDeObraPorLote } from '../calculos/lote/formulas';
import { calcularGastosMaterialesLote } from '../calculos/lote/formulas';

const URLMP = "https://66586d8e5c36170526486c75.mockapi.io/lotes";
const URLSalario = "https://665630689f970b3b36c49525.mockapi.io/manoDeObra";
const URLCostos = "https://665630689f970b3b36c49525.mockapi.io/materiaPrima";

const form = document.getElementById('productForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Obtener los valores del formulario
  const producto = document.getElementById('producto').value;
  const cantidad = parseInt(document.getElementById('cantidadproductos').value); // Convertir a número
  const baseasignacion = document.getElementById('productosmes').value;

  try {
    // Calcular las horas trabajadas para la prenda seleccionada
    let horastrabajadas = calcularHorasTrabajadas(producto, cantidad);
    console.log("Horas Trabajadas:", horastrabajadas);

    // Obtener el salario desde la API
    const salarioResponse = await fetch(URLSalario);
    if (!salarioResponse.ok) {
      throw new Error('Error al obtener el salario de la API');
    }
    const salarioData = await salarioResponse.json();
    const salarioPorHora = salarioData[salarioData.length - 1].salarioPorHora;

    // Obtener los costos por unidad desde la API
    const costosPorUnidad = await obtenerCostosPorUnidad();
console.log(costosPorUnidad)
    // Calcular los gastos de materiales para el lote de prendas
    const costoMPlote = calcularGastosMaterialesLote(producto, cantidad, costosPorUnidad);
    console.log("Gastos Materiales Lote:", costoMPlote);

    // Calcular el costo de la mano de obra por lote
    const costoMOlote = calcularManoDeObraPorLote(horastrabajadas, salarioPorHora);

    // Actualizar los datos de materia prima en la API Mock
    await actualizarMateriaPrimaAPI(costoMPlote);

    // Mandar el lote de prendas a la API Mock
    mandarMockApi(URLMP, { producto, cantidad, baseasignacion, horastrabajadas, costoMOlote, costoMPlote }, form);
  } catch (error) {
    console.error('Error:', error);
  }
});
async function obtenerCostosPorUnidad() {
  try {
    const response = await fetch(URLCostos);
    if (!response.ok) {
      throw new Error('Error al obtener los costos de la API');
    }
    const data = await response.json();
    console.log("Datos de la API de costos:", data);

    let costosPorUnidad = {};
    data.forEach(item => {
      const categoria = item.categoria.toLowerCase(); // Convertir la categoría a minúsculas
      const costoUnidad = typeof item.costoUnidad === 'string' ? parseFloat(item.costoUnidad) : item.costoUnidad;
      if (!costosPorUnidad[categoria]) {
        costosPorUnidad[categoria] = costoUnidad;
      } else {
        // Si ya existe una entrada para esta categoría, sumar el costo por unidad
        costosPorUnidad[categoria] += costoUnidad;
      }
    });
    console.log("Costos por categoría:", costosPorUnidad);

    return costosPorUnidad;
  } catch (error) {
    console.error('Error al obtener los costos de la API:', error);
    throw error;
  }
}


function calcularHorasTrabajadas(producto, cantidad) {
  const prenda = prendas.find(p => p.nombre === producto);
  console.log("Prenda:", prenda);
  if (prenda && prenda.horas) {
    return prenda.horas * cantidad;
  } else {
    return 0;
  }
}
