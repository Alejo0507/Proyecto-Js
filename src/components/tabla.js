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

        
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Fecha adquisicion</th>
                    <th>Fecha vencimiento</th>
                    <th>Costo unidad</th>
                    <th>Proveedor</th>
                    <th>Descripcion</th>
                    <th>Unidad de medida</th>
                    <th>Stock</th>
                    <th>Categoria</th>
                    <th>Ubicacion</th>
                    <th>Acciones</th>
                </tr>

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
                            <button id="editButton">Editar</button> 
                            <button id="deleteButton">Delete</button>
                
                        </td>
                    
                    </tr>
                `)}

            </table>
        `;
    }
}

customElements.define('tabla-informe', tablaInforme);