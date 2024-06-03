import './formulas'
import '../../formatearMoneda'
import { calcularBeneficiosTotales, calcularCostosIndirectosTotales, calcularCostosTotales, calcularHorasTotales, calcularSalarioPorHora, calcularSalarioTotal } from './formulas';
import { pasarAMoneda } from '../../formatearMoneda';
import { mandarMockApi } from '../../mockapi/mandar';
import { calcularCostosUnd, calcularTasaDefectos, calcularEficienciaOperativa, calcularProduccionEfectiva } from '../formulas';


let productosTotales, horasTotales, costosTotales, prodDefectuosos;
const URLO = "https://665630689f970b3b36c49525.mockapi.io/manoDeObra"


document.addEventListener('DOMContentLoaded', () => {
    
    const efRoot = document.querySelector('calc-eficiencia').shadowRoot; // ShadowRoot del elemento calculadora
    const calcEfForm = efRoot.getElementById('calcForm');
    calcEfForm.addEventListener('submit', () => {
        productosTotales = efRoot.getElementById('total').value;
        costosTotales = efRoot.getElementById('costos').value;
        prodDefectuosos = efRoot.getElementById('defectos').value;
        
    })

    
    
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
        
        const prodEfectiva = calcularProduccionEfectiva(productosTotales, prodDefectuosos);
        const eficienciaOp = calcularEficienciaOperativa(prodEfectiva, costosTotales);
        const tasaDeDefectos = calcularTasaDefectos(prodDefectuosos, productosTotales);
        const costosUnd = calcularCostosUnd(costosTotales,productosTotales);
        
        const salarioPorHora = calcularSalarioPorHora(salarioBase,horas);
        const salarioTotal = calcularSalarioTotal(salarioPorHora,horas,empleados);
        const beneficiosTotales = calcularBeneficiosTotales(beneficios,empleados);
        const costosIndirectosTotales = calcularCostosIndirectosTotales()
        
        .then(costosIndirectosTotales => {
            console.log(costosIndirectosTotales);
            const tasaDeDefectos = calcularTasaDefectos(prodDefectuosos,productosTotales)
            
            const costoManoDeObraTotal = calcularCostosTotales(salarioTotal,beneficiosTotales,costosIndirectosTotales);
            const horasTotales = calcularHorasTotales(horas, empleados);
            formContainer.style.display = "none";
            resultContainer.style.display = "flex";

            resultado.textContent = pasarAMoneda(costoManoDeObraTotal);

            let datosMockApi = {
                "empleados" : empleados,
                "productividadEfectiva" :  prodEfectiva,
                "costosOperativosUnd" : costosUnd,
                "tasaDeDefectos" : tasaDeDefectos,
                "eficienciaOperativa" : eficienciaOp,
                "salarioPorHora" : salarioPorHora,
                "horasTrabajadas" : horasTotales,
                "costosIndirectosTotales" : costosIndirectosTotales,
                "beneficiosTotales" : beneficiosTotales,
                "salarioTotal" : salarioTotal,
                "manoDeObraTotal" : costoManoDeObraTotal
            }

            fetch(URLO, {
                method: 'POST',
                headers: {'content-type':'application/json'},

                body: JSON.stringify(datosMockApi)
              }).then(res => {
                if (res.ok) {
                    return res.json();
                }
        
              }).catch(error => {
                console.log('No se pudo enviar los datos')
              });
        })
        .catch(error => {
            console.error('Error al calcular costos indirectos totales:', error);
        });
});

})