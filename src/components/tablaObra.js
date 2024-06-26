import { LitElement, html, css } from "lit";
import { fetchData } from "../scripts/mockapi/obtenerDatos";
import '../scripts/mockapi/obtenerDatos';
const URLO = "https://665630689f970b3b36c49525.mockapi.io/manoDeObra"
//terminado
export class tablaManoDeObra extends LitElement {
    constructor() {
        super();
        this.datosAPI = []; 
    }
    static styles = css`

    #tablaO {

        display: none; 
        flex-direction: column;
        width: 95%;
        height: 30rem;
        overflow: auto; 
        justify-self: center;         
    }
   

   
    th {
        position: sticky;
        text-align: center;
        padding: 10px 15px;
        background: linear-gradient(to right bottom, rgb(141, 30, 168), rgb(141, 30, 168));
        color: white;
    }
    td{
        
        boder-radius:10px;
        text-align: center;
        padding: 10px 15px;
        background-color: #efb7fd;
        color: rgb(141, 30, 168);
    }
    
    
    td {
        
        max-width: 300px; 
        overflow-y: auto; 
    }
    
    
    #tablaO::-webkit-scrollbar {
        width: 12px; 
        
    }
  
    
    #tablaO::-webkit-scrollbar-track {
        border-radius: 10px;
        
        background-color: #ae4bc7;
    }
    
    #tablaO::-webkit-scrollbar-thumb {
        background: rgb(113, 24, 134);
         border: 3px solid #ae4bc7;
        border-radius: 10px; 
    }
    
    #tablaO::-webkit-scrollbar-thumb:hover {
        background: #fff; 
    }
    #tablaO::-webkit-scrollbar-corner {
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
        #tablaO{
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
            this.datosAPI = await fetchData(URLO); // Llama a fetchData y pasa la URL como argumento
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
        fetch(`${URLO}/${id}`, {
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
            
            <table id="tablaO">

        
                <tr>
                    <th  style="position: sticky; top: 0;">Empleados</th>
                    <th  style="position: sticky; top: 0;">Productividad Efectiva</th>
                    <th  style="position: sticky; top: 0;">Costos unidad</th>
                    <th  style="position: sticky; top: 0;">Tasa de defectos</th>
                    <th  style="position: sticky; top: 0;">Eficiencia operativa</th>
                    <th  style="position: sticky; top: 0;">Salario por hora</th>
                    <th  style="position: sticky; top: 0;">Horas trabajadas</th>
                    <th  style="position: sticky; top: 0;">Costos indirectos</th>
                    <th  style="position: sticky; top: 0;">Beneficios totales</th>
                    <th  style="position: sticky; top: 0;">Salario total</th>
                    <th  style="position: sticky; top: 0;">Mano de obra total</th>
                    <th  style="position: sticky; top: 0;">Acciones</th>


                </tr>

                ${this.datosAPI.map(item => html`
                    <tr>
                        <td style="z-index:3; ">${item.empleados}</td>
                        <td style="z-index:3; ">${item.productividadEfectiva}</td>
                        <td style="z-index:3; ">${item.costosOperativosUnd}</td>
                        <td style="z-index:3; ">${item.tasaDeDefectos}</td>
                        <td style="z-index:3; ">${item.eficienciaOperativa}</td>
                        <td style="z-index:3; ">${item.salarioPorHora}</td>
                        <td style="z-index:3; ">${item.horasTrabajadas}</td>
                        <td style="z-index:3; ">${item.costosIndirectosTotales}</td>
                        <td style="z-index:3; ">${item.beneficiosTotales}</td>
                        <td style="z-index:3; ">${item.salarioTotal}</td>
                        <td style="z-index:3; ">${item.manoDeObraTotal}</td>

                        <td style="z-index:3; " id="actionButtons">
                            <button @click=${() => this.eliminarElemento(item.id)} id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                        </td>
                    
                    </tr>
                `)}

            </table>
        `;
    }
}

customElements.define('tabla-obra', tablaManoDeObra);