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
    `

    


    render() {
        return html`
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span id="closeModalBtn" class="close">&times;</span>
                <p>
                    <h1>Calcular productividad</h1>
                    <form id="calcProdForm">
                        <div class="cantidad-productos-container">
                            <label for="totalProductos">Cantidad total de productos terminados</label>
                            <input type="number" name="totalProductos">
                        </div>

                        <div class="horas-totales-container">
                            <label for="horasTotProduct">Horas totales de producción</label>
                            <input type="number" name="horasTotProduct">
                        </div>

                    </form>
                </p>
            </div>
        </div>
        `
    }
}

customElements.define('calc-productividad', calculadoraProductividad)