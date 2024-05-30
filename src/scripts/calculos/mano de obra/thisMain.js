import './formulas'
import { calcularBeneficiosTotales, calcularCostosTotales, calcularSalarioPorHora, calcularSalarioTotal } from './formulas';

document.addEventListener('DOMContentLoaded', () => {

    // DECLARACIÓN DE CONSTANTES
    const calcularButton = document.getElementById('calcularManoDeObra');
    const cRoot = document.querySelector('calc-obra').shadowRoot; // ShadowRoot del elemento calculadora
    const modal = cRoot.getElementById('myModal');
    const closeModalButton = cRoot.getElementById('closeModalBtn');
    const calcForm = cRoot.getElementById('calcForm');
    const formContainer = cRoot.getElementById('form-container');
    const resultContainer = cRoot.getElementById('resultado-container');
    const resultado = cRoot.getElementById('resultado');

    
    // Función para aparecer modal al dar click
    calcularButton.addEventListener('click', () => {
        modal.style.display = "flex";
    })
    
    //Función para cerrar modal al dar click en la x
    closeModalButton.addEventListener('click', () => {
        modal.style.display = "none";
        calcForm.reset()
        formContainer.style.display = "block";
        resultContainer.style.display = "none";
    })

    calcForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const empleados = cRoot.getElementById('totalEmpleados').value;
        const salarioBase = cRoot.getElementById('salarioBase').value;
        const horas = cRoot.getElementById('horasTrabajadas').value;
        const beneficios = cRoot.getElementById('beneficios').value;

        const salarioPorHora = calcularSalarioPorHora(salarioBase,horas);
        const salarioTotal = calcularSalarioTotal(salarioPorHora,horas,empleados);
        const beneficiosTotales = calcularBeneficiosTotales(beneficios,empleados);
        
        const costoManoDeObraTotal = calcularCostosTotales(salarioTotal,beneficiosTotales,0);
    

        formContainer.style.display = "none";
        resultContainer.style.display = "flex";
        
        resultado.textContent = costoManoDeObraTotal.toFixed(2);
    })
    
    

})