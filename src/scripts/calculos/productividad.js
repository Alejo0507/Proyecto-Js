document.addEventListener('DOMContentLoaded', () => {

    // DECLARACIÓN DE CONSTANTES
    const calcularButton = document.getElementById('calcular-productividad');
    const cRoot = document.querySelector('calculadora-elemento').shadowRoot; // ShadowRoot del elemento calculadora
    const modal = cRoot.getElementById('myModal');
    const closeModalButton = cRoot.getElementById('closeModalBtn');
    const calcForm = cRoot.getElementById('calcForm');
    const formContainer = cRoot.getElementById('form-container');
    const resultContainer = cRoot.getElementById('resultado-container');
    const resultado = cRoot.getElementById('resultado');

    
    //Función para calcular la productividad
    const calculoProductividad = (cantidadTotalProductos, horasTotalesDeProd) => {
        return (cantidadTotalProductos / horasTotalesDeProd)
    }

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
        let resultadoCalc = calculoProductividad(productosTotales, horasTotales);

        formContainer.style.display = "none";
        resultContainer.style.display = "flex";
    
        resultado.textContent = resultadoCalc


    })
    
    

})
