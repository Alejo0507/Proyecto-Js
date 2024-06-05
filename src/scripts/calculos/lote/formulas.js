import { prendas } from "../../prendasMokapi";
export const calcularGastosMaterialesLote = (producto, cantidad, costosPorUnidad) => {
    const prenda = prendas.find(p => p.nombre === producto);
    if (!prenda) {
      console.error(`No se encontró la prenda para el producto ${producto}`);
      return 0;
    }
  
    let gastoTotal = 0;
    Object.keys(prenda).forEach(material => {
      if (material !== "nombre" && material !== "id" && material !== "horas" && material !== "trabajadores" && material !== "costo-unidad") {
        if (costosPorUnidad[material]) {
          gastoTotal += prenda[material] * cantidad * costosPorUnidad[material];
        } else {
          console.error(`No se encontró costo por unidad para ${material}`);
        }
      }
    });
    return gastoTotal;
  };
// Función para calcular la mano de obra por lote 
export const calcularManoDeObraPorLote = (horasTrabajadas,salarioPorHora) => {
    return (horasTrabajadas * salarioPorHora);
}

// Función para calcular tasa de asignación de costos indirectos
export const calcularTasaDeIndirectos = (indirectosTotales, baseDeAsignacion) => {
    return ((indirectosTotales / baseDeAsignacion));
}

// Función para calcular el costo indirecto total asignado al lote
export const calcularIndirectoPorLote = (unidadesDelLote,tasaAsignacion) => {
    return (unidadesDelLote * tasaAsignacion)
}

// Terminado