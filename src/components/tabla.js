import { LitElement, html, css } from "lit";
import { fetchData } from "../scripts/mockapi/obtenerDatos";
import '../scripts/mockapi/obtenerDatos';
const URLMP = "https://665630689f970b3b36c49525.mockapi.io/materiaPrima";

export class tablaInforme extends LitElement {
    constructor() {
        super();
        this.datosAPI = []; 
    }
    static styles = css`
    /* Contenedor de la tabla */
    #tablaMp {
        
        display: none; 
        flex-direction: column;
        z-index: 30;
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
    
    
    #tablaMp::-webkit-scrollbar {
        width: 12px; 
        
    }
    
    #tablaMp::-webkit-scrollbar-track {
        border-radius: 10px;
        
        background-color: #ae4bc7;
    }
    
    #tablaMp::-webkit-scrollbar-thumb {
        background: rgb(113, 24, 134);
         border: 3px solid #ae4bc7;
        border-radius: 10px; 
    }
    
    #tablaMp::-webkit-scrollbar-thumb:hover {
        background: #fff; 
    }
    #tablaMp::-webkit-scrollbar-corner {
        display: none; 

    }
    #editButton , #deleteButton{
        border:none;
        cursor: pointer;
    }
    #editButton:hover{
        transform: scale(1.1);
    }
    #deleteButton:hover{
        transform: scale(1.1);
    }

   
    
    `

    connectedCallback() {
        super.connectedCallback();
        this.fetchDataFromAPI(); // Llama a la función para obtener los datos de la API
    }

    async fetchDataFromAPI() {
        try {
            this.datosAPI = await fetchData(URLMP); // Llama a fetchData y pasa la URL como argumento
            this.requestUpdate(); // Actualiza el componente para renderizar las filas
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }

    render() {
        return html`
            <table id="tablaMp">
                <!-- Encabezados de la tabla -->
        
                <tr>
                    <th  style="position: sticky; top: 0;">Id</th>
                    <th  style="position: sticky; top: 0;">Nombre</th>
                    <th  style="position: sticky; top: 0;">Fecha adquisicion</th>
                    <th  style="position: sticky; top: 0;">Fecha vencimiento</th>
                    <th  style="position: sticky; top: 0;">Costo unidad</th>
                    <th  style="position: sticky; top: 0;">Proveedor</th>
                    <th  style="position: sticky; top: 0;">Descripcion</th>
                    <th  style="position: sticky; top: 0;">Unidad de medida</th>
                    <th  style="position: sticky; top: 0;">Stock</th>
                    <th  style="position: sticky; top: 0;">Categoria</th>
                    <th  style="position: sticky; top: 0;">Ubicacion</th>
                    <th  style="position: sticky; top: 0;">Acciones</th>
                </tr>

                <!-- Cuerpo de la tabla -->

                <!-- Renderiza las filas basadas en los datos de la API -->
                ${this.datosAPI.map(item => html`
                    <tr>
                        <td>${item.idMateriaPrima}</td>
                        <td>${item.nombre}</td>
                        <td>${item.fechaDeAdquisicion}</td>
                        <td>${item.fechaDeVencimiento}</td>
                        <td>${item.costoUnidad}</td>
                        <td>${item.proveedor}</td>
                        <td>${item.descripcion}</td>
                        <td>${item.unidadMedida}</td>
                        <td>${item.cantidad}</td>
                        <td>${item.categoria}</td>
                        <td>${item.ubicacion}</td>
                        <td id="actionButtons">
                            <button id="editButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f8f00"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></button> 
                            <button id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg></button>
                
                        </td>
                    
                    </tr>
                `)}

            </table>
        `;
    }
}

customElements.define('tabla-informe', tablaInforme);