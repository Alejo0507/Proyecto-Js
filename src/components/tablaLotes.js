import { LitElement, html, css } from "lit";
import { fetchData } from "../scripts/mockapi/obtenerDatos";
import '../scripts/mockapi/obtenerDatos';
const URLL = "https://66586d8e5c36170526486c75.mockapi.io/lotes";
//terminado
export class tablaInformeLote extends LitElement {
    constructor() {
        super();
        this.datosAPI = []; 
    }
    static styles = css`
    /* Contenedor de la tabla */
    #tablaL {
        
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
    
    
    #tablaL::-webkit-scrollbar {
        width: 12px; 
        
    }
  
    
    #tablaL::-webkit-scrollbar-track {
        border-radius: 10px;
        
        background-color: #ae4bc7;
    }
    
    #tablaL::-webkit-scrollbar-thumb {
        background: rgb(113, 24, 134);
         border: 3px solid #ae4bc7;
        border-radius: 10px; 
    }
    
    #tablaL::-webkit-scrollbar-thumb:hover {
        background: #fff; 
    }
    #tablaL::-webkit-scrollbar-corner {
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
    @media(max-height:800px){
        #tablaL{
            height:20rem;
        }
    }


   
    
    `

    connectedCallback() {
        super.connectedCallback();
        this.fetchDataFromAPI(); // Llama a la función para obtener los datos de la API
    }

    async fetchDataFromAPI() {
        try {
            this.datosAPI = await fetchData(URLL); // Llama a fetchData y pasa la URL como argumento
            this.requestUpdate(); // Actualiza el componente para renderizar las filas
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    }
    
    eliminarElemento(id) {
        // Guardar una copia de respaldo de los datos antes de actualizar la tabla
        const datosAPIBackup = [...this.datosAPI];
    
        this.datosAPI = this.datosAPI.filter(item => item.id !== id);
        this.requestUpdate();
    
        // Enviar solicitud de eliminación al mock API
        fetch(`${URLL}/${id}`, {
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


    render() {
        return html`
            
            <table id="tablaL">

        
                <tr>
                    <th  style="position: sticky; top: 0;">Id</th>
                    <th  style="position: sticky; top: 0;">Cantidad</th>
                    <th  style="position: sticky; top: 0;">Producto</th>
                    <th  style="position: sticky; top: 0;">Horas trabajadas</th>
                    <th  style="position: sticky; top: 0;">Productos fabricados / Mes</th>
                    <th  style="position: sticky; top: 0;">Costo Materia prima / Lote</th>
                    <th  style="position: sticky; top: 0;">Costo Mano de obra / Lote</th>
                    <th  style="position: sticky; top: 0;">% Costos indirectos</th>
                    <th  style="position: sticky; top: 0;">Costos indirectos / Lote</th>
                    <th  style="position: sticky; top: 0;">Acciones</th>
                </tr>

                <!-- Cuerpo de la tabla -->

                <!-- Renderiza las filas basadas en los datos de la API -->
                ${this.datosAPI.map(item => html`
                    <tr>
                        <td style="z-index:3; ">${item.id}</td>
                        <td style="z-index:3; ">${item.cantidad}</td>
                        <td style="z-index:3; ">${item.producto}</td>
                        <td style="z-index:3; ">${item.horastrabajadas}</td>
                        <td style="z-index:3; ">${item.baseasignacion}</td>
                        <td style="z-index:3; ">${item.costoMPlote}</td>
                        <td style="z-index:3; ">${item.costoMOlote}</td>
                        <td style="z-index:3; ">${item.tasaAsignacionTabla}</td>
                        <td style="z-index:3; ">${item.costosidirectoslote}</td>
                        <td style="z-index:3; " id="actionButtons">
                            <button id="editButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f8f00"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></button> 
                            <button @click=${() => this.eliminarElemento(item.id)} id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                        </td>
                    
                    </tr>
                `)}

            </table>
        `;
    }
}

customElements.define('tabla-informe-lote', tablaInformeLote);