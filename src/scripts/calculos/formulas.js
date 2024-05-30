// Función para calcular la productividad
export const calculoProductividad = (cantidadTotalProductos, horasTotalesDeProd) => {
    return (cantidadTotalProductos / horasTotalesDeProd)
}

// Función para calcular los costos operativos por unidad
export const calcularCostosUnd = (costosTotales, cantidadTotalProductos) => {
    return (costosTotales / cantidadTotalProductos);
}

// Función para calcular la tasa de defectos
export const calcularTasaDefectos = (defectos, cantidadTotalProductos) => {
    return ((defectos / cantidadTotalProductos) * 100)
}

// FUnción para sacar la producción efectiva 
export const calcularProduccionEfectiva = (cantidadTotalProductos, defectos) => {
    return (cantidadTotalProductos - defectos);
}

// Función eficiencia operativa 
export const calcularEficienciaOperativa = (prodEfectiva, costosTotales) => {
    return (prodEfectiva / costosTotales);
}