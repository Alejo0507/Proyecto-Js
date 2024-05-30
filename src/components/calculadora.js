import { LitElement, html, css } from "lit";

export class calculadoraProductividad extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
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
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
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
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        p {
            font-size: 10rem;
            margin: 0;
            padding: 0;
        }
    }
    `

    mostrarResultado() {
        const resultContainer = this.shadowRoot.getElementById('resultado-container');
        resultContainer.style.display = "flex";
        this.shadowRoot.getElementById('form-container').style.display = "none"
    }


    render() {
        return html`
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span id="closeModalBtn" class="close">&times;</span>
                <p>
                    <div id="form-container">
                        <h1>Calcular productividad</h1>
                        <form id="calcForm">
                            <div class="cantidad-productos-container">
                                <label for="totalProductos">Cantidad total de productos terminados</label>
                                <input type="number" id="total" name="totalProductos" required>
                            </div>

                            <div class="horas-totales-container">
                                <label for="horasTotProduct">Horas totales de producción</label>
                                <input type="number" id="horas" name="horasTotProduct" required>
                            </div>

                            <input id="submit-calc" type="submit" value="Enviar">

                        </form>
                    </div>
                    <div id="resultado-container">
                        <h1>Productividad</h1>
                        <p id="resultado">0</p>
                        <button id="deNuevo">Volver a calcular</button>
                        <button id="salir">Salir</button>
                    </div>
                </p>
            </div>
        </div>
        `
    }
}

customElements.define('calculadora-elemento', calculadoraProductividad)