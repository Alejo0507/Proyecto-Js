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

    return gastosTotales;
}

export function actualizarMateriaPrimaAPI(gastosMaterialesTotales) {
    return fetch('https://665630689f970b3b36c49525.mockapi.io/materiaPrima')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al obtener los datos de materia prima de la API');
            }
        })
        .then(materiaPrima => {
            let gastosRestantes = { ...gastosMaterialesTotales };
            let materialFaltante = null;

            materiaPrima.forEach(item => {
                for (const categoria in gastosRestantes) {
                    if (categoria !== 'horas' && categoria !== 'trabajadores' && item.categoria.toLowerCase() === categoria && gastosRestantes[categoria] > 0) {
                        const cantidadARestar = Math.min(gastosRestantes[categoria], parseInt(item.cantidad));
                        item.cantidad -= cantidadARestar;
                        gastosRestantes[categoria] -= cantidadARestar;

                        if (gastosRestantes[categoria] === 0) {
                            delete gastosRestantes[categoria];
                        }
                        break;
                    }
                }
            });

            // Verificar si hay algún material con stock insuficiente
            for (const categoria in gastosRestantes) {
                materialFaltante = categoria;
                break; // Detener después de encontrar un material con stock insuficiente
            }

            // Si hay material con stock insuficiente, mostrar un mensaje y detener la ejecución
            if (materialFaltante) {
                alert(`No hay suficiente stock de ${materialFaltante} para la producción.`);
                return Promise.reject(new Error(`Stock insuficiente de ${materialFaltante}`)); // Rechazar la promesa si hay stock insuficiente
            }

            // Si no hay stock insuficiente, preparar las promesas para actualizar el inventario
            const updatePromises = materiaPrima.map(item => {
                const data = JSON.stringify(item);
                console.log('Datos a enviar en PUT:', data);

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
