import { LitElement, html, css } from "lit";


export class MateriaPrimaFormulario extends LitElement {
    static properties = {

    }

    constructor() {
        super();

    }

    static styles = css`

    .modal-content {
        display: flex;
        align-items: center;
        flex-direction: column;

    }

    #calcProdForm {
        display: flex;
        gap: 20px;
    }

    .cantidad-productos-container, .horas-totales-container {
        display: flex;
        flex-direction: column;
        width: 20rem;
        align-items: center;
        gap: 5px;
        font-size: 20px;
    }
    .modal {
        display: none; 
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5); 
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

    openModal() {
        const modal = this.shadowRoot.getElementById('myModal');
        modal.style.display = "flex";
    }

    closeModal() {
        const modal = this.shadowRoot.getElementById('myModal');
        modal.style.display = "none";
    }

    render() {
        return html`
        <button @click=${this.openModal} id="openModalBtn">Abrir Modal</button>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span @click=${this.closeModal} id="closeModalBtn" class="close">&times;</span>
                <p>
                    <h2>Gestión de materia prima</h2>
                        <form id="mpForm">

                            <label for="idmateria">Id Materia Prima:</label>
                            <input type="number" id="idmateria" name="idMateriaPrima" required><br><br>
                            
                            <label for="nombre">nombre</label>
                            <input type="text" id="nombre" name="nombre" required><br><br>
            
                            <label for="Descripcion">Descripcion:</label><br>
                            <textarea id="descripcion" name="descripcion" rows="4" cols="50" required></textarea><br><br>
                    
                            <label for="categoria">Categoria</label>
                            <input type="text" id="categoria" name="categoria" required><br><br>
                    
                            <label for="proveedor">proveedor</label>
                            <input type="text" id="proveedor" name="proveedor" required><br><br>
                    
                            <label for="costoUnidad">Costo por unidad</label>
                            <input type="number" id="costoUnidad" name="costoUnidad" required><br><br>
                    
                            <label for="medida">Unidad de medida</label>
                            <input type="text" id="medida" name="unidadDeMedida" required><br><br>
                    
                            <label for="stock">Cantidad de stock</label>
                            <input type="number" id="stock" name="stock" required><br><br>
                    
                            <label for="fechaIngreso">Fecha de adquisicion</label>
                            <input type="date" id="fechaIngreso" name="fechaIngreso" required><br><br>
                    
                            <label for="vencimiento">Fecha de vencimiento (si aplica)</label>
                            <input type="date" id="vencimiento" name="fechaVencimiento"><br><br>
                    
                            <label for="Ubicacion">Ubicacion en el almacen</label>
                            <input type="text" id="ubicacion" name="ubicacion" required><br><br>
                    
                            <label for="adicional">Notas adicionales</label>
                            <input type="text" id="adicional" name="adicional" required><br><br>
                    
                    
                            <input type="submit" value="Enviar">
                        </form>
                    </h2>
                </p>
            </div>
        </div>     
        `
    }

}

customElements.define('materia-form', MateriaPrimaFormulario)