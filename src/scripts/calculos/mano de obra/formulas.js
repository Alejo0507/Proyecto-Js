const URLC = "https://664a2109a300e8795d41126f.mockapi.io/api/1/costosindirectos";

// Función para calcular el salario x hora 

export const calcularSalarioPorHora = (salarioBase, horasTrabajadas) => {
    return (salarioBase / horasTrabajadas);
}

//Función para sacar costos indirectos totales

export async function calcularCostosIndirectosTotales() {
    try {
        const response = await fetch(URLC, {
            method: 'GET'
        });
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API');
        }
        
        const data = await response.json();

        // Sumar los valores
        let suma = 0;
        for (const item of data) {
            // Asegurarse de que 'valor' es un número
            const valor = parseFloat(item.valor);
            suma += isNaN(valor) ? 0 : valor;
        }
        
        console.log('La suma de todos los valores es:', suma);
        return suma;
    } catch (error) {
        console.error('Error:', error);
        throw error; 
    }
}


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

// Función para sacar las horas totales trabajadas 
export const calcularHorasTotales = (horas, empleados) => {
    return (horas * empleados);
}