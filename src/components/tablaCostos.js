import { LitElement, html, css } from "lit";
import { fetchData } from "../scripts/mockapi/obtenerDatos";
import '../scripts/mockapi/obtenerDatos';
const URLC = "https://664a2109a300e8795d41126f.mockapi.io/api/1/costosindirectos";

export class tablaInformeCosto extends LitElement {
    constructor() {
        super();
        this.datosAPI = []; 
    }
    static styles = css`
    /* Contenedor de la tabla */
    #TablaC {
        
        display: none; 
        flex-direction: column;
        width: 95%;
        height: 30rem;
        overflow: auto; 
        justify-self: center;          
    }
    
    /* Estilos para tbody y thead */
   

   
    th {
        position: sticky;
        text-align: left;
        padding: 10px 15px;
        background: linear-gradient(to right bottom, rgb(141, 30, 168), rgb(141, 30, 168));
        color: white;
    }
    td{
        
        boder-radius:10px;
        text-align: left;
        padding: 10px 15px;
        background-color: #efb7fd;
        color: rgb(141, 30, 168);
    }
    
    
    td {
        
        max-width: 300px; 
        overflow-y: auto; 
    }
    
    
    #TablaC::-webkit-scrollbar {
        width: 12px; 
        
    }
  
    
    #TablaC::-webkit-scrollbar-track {
        border-radius: 10px;
        
        background-color: #ae4bc7;
    }
    
    #TablaC::-webkit-scrollbar-thumb {
        background: rgb(113, 24, 134);
         border: 3px solid #ae4bc7;
        border-radius: 10px; 
    }
    
    #TablaC::-webkit-scrollbar-thumb:hover {
        background: #fff; 
    }
    #TablaC::-webkit-scrollbar-corner {
        display: none; 

    }
    #editButton , #deleteButton{
        border-radius:10px;
        border:none;
        cursor: pointer;
    }
    #editButton:hover{
        transform: scale(1.1);
        
    }
    #deleteButton:hover{
        transform: scale(1.1);
    }
    #modalDiv {
        display: none;
        position: absolute;
        top: 50%
        right: 50%;
        background-color: white;
        border-radius: 10px;
        width: 35rem;
        height: 30rem;
        z-index: 50;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.8); /* Fondo oscuro */
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;

    }
   
    
    `

    connectedCallback() {
        super.connectedCallback();
        this.fetchDataFromAPI(); 
    }

    async fetchDataFromAPI() {
        try {
            this.datosAPI = await fetchData(URLC); 
            this.requestUpdate(); 
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }
    
    eliminarElemento(id) {
        
        const datosAPIBackup = [...this.datosAPI];
    
        this.datosAPI = this.datosAPI.filter(item => item.id !== id);
        this.requestUpdate();
    
       
        fetch(`${URLC}/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo eliminar el elemento del mock API');
            }
            this.requestUpdate();
        })
        .catch(error => {
            console.error('Error al eliminar el elemento del mock API:', error);
            // En caso de error, restaurar los datos de respaldo
            this.datosAPI = datosAPIBackup;
            this.requestUpdate(); // Actualizar la tabla para restaurar los datos
        });
    }

    editarElemento(id) {

        const elementoAEditar = this.datosAPI.find(item => item.id === id);
        

        const tipoCosto = prompt("Ingrese el nuevo tipo de costo:", elementoAEditar.tipoCosto);
        const valor = prompt("Ingrese el nuevo valor:", elementoAEditar.valor);
        const descripcion = prompt("Ingrese la nueva descripcion:", elementoAEditar.descripcion);
        if (!isNaN(tipoCosto)) {
            // Convertir el input a un número
            let number = parseFloat(tipoCosto);
        } else {
            console.log("Entrada inválida. Por favor ingrese un número válido.");
        }
        
        if (valor === null || tipoCosto === null || descripcion === null) {
            return;
        }
        
        // Actualiza los datos del elemento
        elementoAEditar.tipoCosto = tipoCosto;
        elementoAEditar.valor = valor;
        elementoAEditar.descripcion = descripcion;

       
        
        // Envía una solicitud PUT al servidor para actualizar el elemento
        fetch(`${URLC}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(elementoAEditar)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo actualizar el elemento en el mock API');
            }

            this.fetchDataFromAPI(); 
        })
        .catch(error => {
            console.error('Error al actualizar el elemento en el mock API:', error);

        });


    }

    abrirModal(id) {

        const modal = this.shadowRoot.getElementById("modalDiv");

        modal.style.display = "flex";
        const tipoCostoInput = this.shadowRoot.getElementById("tipoCostoEdit");
        const valorInput = this.shadowRoot.getElementById("valorEdit");
        const descripcionInput = this.shadowRoot.getElementById("descripcionEdit");
        const elementoAEditar = this.datosAPI.find(item => item.id === id);

        tipoCostoInput.value = elementoAEditar.tipoCosto;
        valorInput.value = elementoAEditar.valor;
        descripcionInput.value = elementoAEditar.descripcion;
    }

    render() {
        return html`

            <div id="modalDiv" class="modal">
                <div class="modal-content">
                    <!-- Formulario -->
                    <form id="formularioEditar">
                        <label for="tipoCosto">Tipo de Costo:</label>
                        <input type="text" id="tipoCostoEdit" name="tipoCosto"><br>

                        <label for="valor">Valor:</label>
                        <input type="text" id="valorEdit" name="valor"><br>

                        <label for="descripcion">Descripción:</label>
                        <input type="text" id="descripcionEdit" name="descripcion"><br>

                        <button type="button" @click=${this.guardarEdicion}>Guardar</button>
                    </form>
                </div>
            </div>
            
            <table id="TablaC">

        
                <tr>
                    <th  style="position: sticky; top: 0;">Id</th>
                    <th  style="position: sticky; top: 0;">Tipo de Costo</th>
                    <th  style="position: sticky; top: 0;">Valor</th>
                    <th  style="position: sticky; top: 0;">Descripcion</th>
                    <th  style="position: sticky; top: 0;">Acciones</th>
                </tr>

                <!-- Cuerpo de la tabla -->

                <!-- Renderiza las filas basadas en los datos de la API -->
                ${this.datosAPI.map(item => html`
                    <tr>
                        <td style="z-index:3; ">${item.id}</td>
                        <td style="z-index:3; ">${item.tipoCosto}</td>
                        <td style="z-index:3; ">${item.valor}</td>
                        <td style="z-index:3; ">${item.descripcion}</td>
                        <td style="z-index:3; " id="actionButtons">
                            <button @click=${() => this.abrirModal(item.id)} id="editButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f8f00"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></button> 
                            <button @click=${() => this.eliminarElemento(item.id)} id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                        </td>
                    
                    </tr>
                `)}

            </table>
        `;
    }
}

customElements.define('tabla-informe-costo', tablaInformeCosto);