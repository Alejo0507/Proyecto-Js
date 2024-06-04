import { prendas } from "../prendasMokapi";
const URLMP = "https://665630689f970b3b36c49525.mockapi.io/materiaPrima";

// Función para calcular los gastos de materiales
export function calcularGastosMaterialesLote1(nombreProducto, cantidad) {
    const producto = prendas.find(p => p.nombre === nombreProducto);
    if (!producto) {
        throw new Error(`Producto "${nombreProducto}" no encontrado.`);
    }

    const gastosTotales = {};
    for (const material in producto) {
        if (material !== 'nombre' && material !== 'id' && material !== 'costo-unidad' && material !== 'horas' && material !== 'trabajadores') {
            // Aquí, material es la categoría
            gastosTotales[material] = producto[material] * cantidad;
        }
    }
    console.log(gastosTotales);
    return gastosTotales;
}



export async function actualizarMateriaPrimaAPI(gastosMateriales) {
    try {
        // Obtener los datos actuales de la API de materia prima
        const response = await fetch(URLMP);
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API de materia prima');
        }
        let materiaPrima = await response.json();

        // Actualizar los datos de materia prima con los gastos de materiales
        for (const categoria in gastosMateriales) {
            const cantidadGastada = gastosMateriales[categoria];
            // Buscar el elemento correspondiente en los datos de materia prima
            const material = materiaPrima.find(item => item.categoria === categoria);
            if (material) {
                // Restar la cantidad gastada del stock actual
                material.cantidad -= cantidadGastada;
                // Actualizar el elemento en la API
                await fetch(`${URLMP}/${material.idMateriaPrima}`, { // Corrección aquí
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(material)
                });
            } else {
                console.error(`No se encontró la categoría "${categoria}" en los datos de materia prima.`);
            }
        }

        console.log('Datos de materia prima actualizados correctamente.');
        return true;
    } catch (error) {
        console.error('Error al actualizar la API de materia prima:', error.message);
        return false;
    }
}
