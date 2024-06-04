import { prendas } from "../prendasMokapi";


export function calcularGastosMaterialesLote(nombresPrendas, cantidad) {
    let gastosTotales = {};

    nombresPrendas.forEach(nombre => {
        const prenda = prendas.find(p => p.nombre === nombre);
        if (prenda) {
            for (const categoria in prenda) {
                if (categoria !== 'nombre' && categoria !== 'id' && categoria !== 'costo-unidad' && categoria !== 'horas' && categoria !== 'trabajadores') {
                    // Verificar si la categoría ya existe en los gastos totales, si no, inicializarla
                    if (!gastosTotales.hasOwnProperty(categoria)) {
                        gastosTotales[categoria] = 0;
                    }
                    // Sumar el gasto de la categoría por la cantidad de prendas
                    gastosTotales[categoria] += prenda[categoria] * cantidad;
                }
            }
        }
    });
|
    return gastosTotales;
}export  async function actualizarMateriaPrimaAPI(gastosMaterialesTotales) {
    return fetch('https://665630689f970b3b36c49525.mockapi.io/materiaPrima')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al obtener los datos de materia prima de la API');
            }
        })
        .then(materiaPrima => {
            // Restar los gastos de materiales del inventario
            materiaPrima.forEach(item => {
                for (const categoria in gastosMaterialesTotales) {
                    if (categoria !== 'horas' && categoria !== 'trabajadores' && item.categoria.toLowerCase() === categoria) {
                        const cantidadARestar = Math.min(gastosMaterialesTotales[categoria], parseInt(item.cantidad));
                        item.cantidad -= cantidadARestar;
                        gastosMaterialesTotales[categoria] -= cantidadARestar;
                    }
                }
            });

            // Preparar las promesas para actualizar el inventario
            const updatePromises = materiaPrima.map(item => {
                const data = JSON.stringify(item);
                return fetch(`https://665630689f970b3b36c49525.mockapi.io/materiaPrima/${item.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: data
                })
                .then(response => {
                    if (response.ok) {
                        console.log(`Datos de materia prima con id ${item.id} actualizados correctamente`);
                    } else {
                        return response.json().then(errorData => {
                            console.error(`Error al actualizar los datos de materia prima con id ${item.id}:`, errorData);
                            throw new Error(`Error al actualizar los datos de materia prima con id ${item.id}`);
                        });
                    }
                })
                .catch(error => {
                    console.error('Ocurrió un error:', error);
                    throw error;
                });
            });

            // Esperar a que todas las promesas de actualización se completen antes de continuar
            return Promise.all(updatePromises);
        })
        .catch(error => {
            console.error('Ocurrió un error:', error);
            return Promise.reject(error);
        });
}
