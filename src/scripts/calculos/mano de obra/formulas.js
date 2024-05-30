// Función para calcular el salario x hora 

export const calcularSalarioPorHora = (salarioBase, horasTrabajadas) => {
    return (salarioBase / horasTrabajadas);
}

//Función para sacar beneficios totales



//Función para sacar costos indirectos totales


//Función para sacar beneficios totales
export const calcularBeneficiosTotales = (beneficioPorEmpleado, empleados) => {
    return (beneficioPorEmpleado * empleados);
}

//Función para sacar el salario total por empleados
export const calcularSalarioTotal = (salarioPorHora, horasTrabajadas, empleados) => {
    return ((salarioPorHora * horasTrabajadas) * empleados);
}

//Función para sumar todo y calcular el total de costos de mano de obra
export const calcularCostosTotales = (salarioTotal,beneficiosTotales,costosIndirectos) => {
    return (salarioTotal + beneficiosTotales + costosIndirectos);
}