import { prendas } from "../prendasMokapi";
const URLMP = "https://665630689f970b3b36c49525.mockapi.io/materiaPrima";

export function calcularGastosMaterialesLote1(nombreProducto, cantidad) {
    const producto = prendas.find(p => p.nombre === nombreProducto);
    if (!producto) {
        throw new Error(`Producto "${nombreProducto}" no encontrado.`);
    }

    const gastosTotales = {};
    for (const material in producto) {
        if (material !== 'nombre' && material !== 'id' && material !== 'costo-unidad' && material !== 'horas' && material !== 'trabajadores') {
            gastosTotales[material] = producto[material] * cantidad;
        }
    }
    console.log(gastosTotales);
    return gastosTotales;
}

export async function actualizarMateriaPrimaAPI(gastosMateriales) {
    try {
        const response = await fetch(URLMP);
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API de materia prima');
        }
        let materiaPrima = await response.json();

        for (const categoria in gastosMateriales) {
            let cantidadGastada = gastosMateriales[categoria];
            let material = materiaPrima.find(item => item.categoria === categoria);

            while (cantidadGastada > 0 && material) {
                if (material.cantidad >= cantidadGastada) {
                    material.cantidad -= cantidadGastada;
                    cantidadGastada = 0; // Restante ya ha sido cubierto
                } else {
                    cantidadGastada -= material.cantidad;
                    material.cantidad = 0;

                    // Buscar otro material con la misma categoría
                    material = materiaPrima.find(item => item.categoria === categoria && item.cantidad > 0);
                }
            }

            if (cantidadGastada > 0) {
                alert(`No hay suficiente stock de ${categoria} para la producción.`);
            }

            if (material) {
                await fetch(`${URLMP}/${material.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(material)
                });
            }
        }

        console.log('Datos de materia prima actualizados correctamente.');
        return true;
    } catch (error) {
        console.error('Error al actualizar la API de materia prima:', error.message);
        return false;
    }
}
