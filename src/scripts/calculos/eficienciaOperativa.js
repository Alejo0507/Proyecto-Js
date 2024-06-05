import './formulas'
import { calcularEficienciaOperativa, calcularProduccionEfectiva, calcularTasaDefectos } from './formulas';
// Terminado
document.addEventListener('DOMContentLoaded', () => {

    // DECLARACIÓN DE CONSTANTES
    const calcularButton = document.getElementById('calcular-productividad');
    const cRoot = document.querySelector('calc-eficiencia').shadowRoot; // ShadowRoot del elemento calculadora
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
        const productosTotales = cRoot.getElementById('total').value;
        const horasTotales = cRoot.getElementById('horas').value;
        const costosTotales = cRoot.getElementById('costos').value;
        const prodDefectuosos = cRoot.getElementById('defectos').value;
        
        const prodEfectiva = calcularProduccionEfectiva(productosTotales,prodDefectuosos);
        const eficienciaOp = calcularEficienciaOperativa(prodEfectiva, costosTotales);
        const tasaDeDefectos = calcularTasaDefectos(prodDefectuosos, productosTotales);
        console.log(tasaDeDefectos);

        formContainer.style.display = "none";
        resultContainer.style.display = "flex";
        
        resultado.textContent = eficienciaOp.toFixed(2);
    })
})

