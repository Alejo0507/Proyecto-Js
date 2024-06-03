// Función para calcular el costo de materia prima por lote
export const calcularCostoMateriaPorLote = (cantidadMp, costoPorUnidad) => {
    return (cantidadMp * costoPorUnidad);
}

// Función para calcular la mano de obra por lote 
export const calcularManoDeObraPorLote = (horasTrabajadas,salarioPorHora) => {
    return (horasTrabajadas * salarioPorHora);
}

// Función para calcular tasa de asignación de costos indirectos
export const calcularTasaDeIndirectos = (indirectosTotales, baseDeAsignacion) => {
    return (indirectosTotales / baseDeAsignacion);
}

// Función para calcular el costo indirecto total asignado al lote
export const calcularIndirectoPorLote = (unidadesDelLote,tasaAsignacion) => {
    return ((unidadesDelLote * tasaAsignacion) + "$")
}
