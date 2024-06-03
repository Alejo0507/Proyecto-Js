import { mandarMockApi } from '../mockapi/mandar';
import { calcularGastosMaterialesLote, actualizarMateriaPrimaAPI } from '../calculos/restarMP';
import { prendas } from '../prendasMokapi';
import { calcularManoDeObraPorLote } from '../calculos/lote/formulas';

const URLMP = "https://66586d8e5c36170526486c75.mockapi.io/lotes";
const URLSalario = "https://665630689f970b3b36c49525.mockapi.io/manoDeObra";

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
    const salarioPorHora = salarioData[0].salarioPorHora; // Suponiendo que el salario está en la primera posición del arreglo

    // Calcular los gastos de materiales para el lote de prendas
    const gastosMaterialesLote = calcularGastosMaterialesLote([producto], cantidad);
    
    // Calcular el costo de la mano de obra por lote
    const costoMOlote = calcularManoDeObraPorLote(horastrabajadas, salarioPorHora);

    // Actualizar los datos de materia prima en la API Mock
    await actualizarMateriaPrimaAPI(gastosMaterialesLote);

    // Mandar el lote de prendas a la API Mock
    mandarMockApi(URLMP, { producto, cantidad, baseasignacion, horastrabajadas, costoMOlote }, form);
  } catch (error) {
    console.error('Error:', error);
  }
});
function calcularHorasTrabajadas(producto, cantidad) {
  // Buscar la prenda seleccionada
  const prenda = prendas.find(p => p.nombre === producto);
  console.log("Prenda:", prenda); // Agregar este console.log para depurar
  if (prenda && prenda.horas) {
    // Si se encontró la prenda y tiene la propiedad 'horas', calcular las horas trabajadas
    return prenda.horas * cantidad;
  } else {
    // Si no se encontró la prenda o no tiene la propiedad 'horas', devolver 0 horas
    return 0;
  }
}
