import { LitElement, html, css } from "lit";

export class calculadoraManoDeObra extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
    .input-container{
        border-radius:5px;
        height:25px;
        margin:10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;

        label {
            align-self: left;
            text: left;
            justify-self: start;
            width: 300px;
        }

        input {
            width: 230px;
            border-radius: 6px;
        }
        
    }
   
    .modal {
        
        display: none; /* Ocultar modal por defecto */
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro */
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .modal-content {
        color:white;
        border-radius:20px;
    
        background: linear-gradient(
            to bottom right,
            rgb(141, 30, 168),
            rgba(120, 50, 100)  
          );
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 60%;
        height: 60%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        animation-name: modalopen;
        animation-duration: 0.4s;
    }
    @keyframes modalopen {
        from {opacity: 0}
        to {opacity: 1}
    }
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    #resultado-container {
        display: none;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        p {
            font-size: 40px;
        }
    }

    #calcForm {
        display: flex;
        flex-direction: column;
        align-items: center;
        text: center;
        justify-content: center;
    }

    #enviar-form {
        margin-top: 4rem;
    }

    `

    


    render() {
        return html`
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span id="closeModalBtn" class="close">&times;</span>
                <p>
                    <h1>Calcular costos de mano de obra</h1>
                    <div id="form-container">
                        <form id="calcForm">
                            <div class="input-container">
                                <label for="totalEmpleados">Cantidad de empleados</label>
                                <input type="number" id="totalEmpleados" name="totalEmpleados">
                            </div>

                            <div class="input-container">
                                <label for="salarioBase">Salario base</label>
                                <input type="number" id="salarioBase" name="salarioBase">
                            </div>

                            <div class="input-container">
                                <label for="horasTrabajadas">Horas trabajadas</label>
                                <input type="number" id="horasTrabajadas" name="horasTrabajadas">
                            </div>

                            <div class="input-container">
                                <label for="beneficios">Beneficios y prestaciones por empleado</label>
                                <input type="number" id="beneficios" name="beneficios">
                            </div>

                            <input type="submit" id="enviar-form">
                        </form>
                    </div>

                    <div id="resultado-container">

                        <h1>Su empresa tiene un total de costos de mano de obra de:</h1>
                        <p><span id="resultado">0</span></p>
                        <button id="volverACalcular">Volver a calcular</button>
                    </div>
                </p>
            </div>
        </div>
        `
    }
}

customElements.define('calc-obra', calculadoraManoDeObra)