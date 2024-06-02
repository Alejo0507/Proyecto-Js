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

    eliminarElemento(id) {
        // Backup por si ocurre un error no se elimine de la tabla 
        const datosAPIBackup = [...this.datosAPI];
    
        this.datosAPI = this.datosAPI.filter(item => item.id !== id);
        this.requestUpdate();
    
        
        fetch(`${URLMP}/${id}`, {
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

            this.datosAPI = datosAPIBackup;
            this.requestUpdate(); // Actualizar la tabla para restaurar los datos
        });
    }

    editarElemento(id) {
  
        const elementoAEditar = this.datosAPI.find(item => item.id === id);
        
        const nombre = prompt("Ingrese el nuevo nombre:", elementoAEditar.nombre);
        // Validación de que el prompt reciba una fecha valida
        let fechaAdquisicion;
        while (true) {
            fechaAdquisicion = prompt("Ingrese la nueva fecha de adquisicion (YYYY-MM-DD):", elementoAEditar.fechaDeAdquisicion);
            if (fechaAdquisicion !== null && !isNaN(Date.parse(fechaAdquisicion))) { // Si le fecha ingresada es valida
                fechaAdquisicion = new Date(fechaAdquisicion).toISOString().split('T')[0]; 
                break;
            } else {
                alert("Por favor ingrese una fecha válida en formato YYYY-MM-DD.");
            }
        }

        let fechaVencimiento;
        while (true) {
            fechaVencimiento = prompt("Ingrese la nueva fecha de vencimiento (YYYY-MM-DD):", elementoAEditar.fechaVencimiento);
            if (fechaVencimiento !== null && !isNaN(Date.parse(fechaVencimiento))) {
                fechaVencimiento = new Date(fechaVencimiento).toISOString().split('T')[0];
                break;
            } else {
                alert("Por favor ingrese una fecha válida en formato YYYY-MM-DD.");
            }
        }

        let costoUnidad;
        while (true) {
            costoUnidad = prompt("Ingrese el nuevo costo por unidad:", elementoAEditar.costoUnidad);
            if (costoUnidad !== null && !isNaN(costoUnidad) && costoUnidad.trim() !== "") {
                costoUnidad = parseFloat(costoUnidad);
                break;
            } else {
                alert("Por favor ingrese un número válido para el costoUnidad.");
            }
        }
        
        const proveedor = prompt("Ingrese el nuevo proveedor:", elementoAEditar.proveedor);
        const descripcion = prompt("Ingrese la nueva descripcion:", elementoAEditar.descripcion);
        const unidadMedida = prompt("Ingrese la nueva unidad de medida:", elementoAEditar.unidadMedida);

        let cantidad;
        while (true) {
            cantidad = prompt("Ingrese la nueva cantidad:", elementoAEditar.cantidad);
            if (cantidad !== null && !isNaN(cantidad) && cantidad.trim() !== "") {
                cantidad = parseFloat(cantidad);
                break;
            } else {
                alert("Por favor ingrese un número válido para el cantidad.");
            }
        }
        
        const categoria = prompt("Ingrese la nueva categoría:", elementoAEditar.categoria);
        const ubicacion = prompt("Ingrese la nueva ubicacion:", elementoAEditar.ubicacion);
        
        
        

        if (nombre === null || fechaAdquisicion === null) {
            return;
        }
        
        // Actualiza los datos del elemento
        elementoAEditar.nombre = nombre;
        elementoAEditar.fechaDeAdquisicion = fechaAdquisicion;
        elementoAEditar.fechaVencimiento = fechaVencimiento;
        elementoAEditar.costoUnidad = costoUnidad;
        elementoAEditar.proveedor = proveedor;
        elementoAEditar.descripcion = descripcion;
        elementoAEditar.unidadMedida = unidadMedida;
        elementoAEditar.cantidad = cantidad;
        elementoAEditar.categoria = categoria;
        elementoAEditar.ubicacion = ubicacion;

       
        
        // Envía una solicitud PUT al servidor para actualizar el elemento
        fetch(`${URLMP}/${id}`, {
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
            // Si la respuesta es exitosa, actualiza la tabla o la vista para reflejar los cambios
            this.fetchDataFromAPI(); // Vuelve a obtener los datos del API para refrescar la tabla
        })
        .catch(error => {
            console.error('Error al actualizar el elemento en el mock API:', error);
            // Manejar el error según sea necesario
        });
    }

    render() {
        return html`
            
            <table id="tablaMp">

        
                <tr>
                    <th style="position: sticky; top: 0;">Id</th>
                    <th style="position: sticky; top: 0;">Nombre</th>
                    <th style="position: sticky; top: 0;">Fecha adquisicion</th>
                    <th style="position: sticky; top: 0;">Fecha vencimiento</th>
                    <th style="position: sticky; top: 0;">Costo unidad</th>
                    <th style="position: sticky; top: 0;">Proveedor</th>
                    <th style="position: sticky; top: 0;">Descripcion</th>
                    <th style="position: sticky; top: 0;">Unidad de medida</th>
                    <th style="position: sticky; top: 0;">Stock</th>
                    <th style="position: sticky; top: 0;">Categoria</th>
                    <th style="position: sticky; top: 0;">Ubicacion</th>
                    <th style="position: sticky; top: 0;">Acciones</th>
                </tr>

                ${this.datosAPI.map(item => html`
                    <tr>
                        <td>${item.idMateriaPrima}</td>
                        <td>${item.nombre}</td>
                        <td>${item.fechaDeAdquisicion}</td>
                        <td>${item.fechaVencimiento}</td>
                        <td>${item.costoUnidad}</td>
                        <td>${item.proveedor}</td>
                        <td>${item.descripcion}</td>
                        <td>${item.unidadMedida}</td>
                        <td>${item.cantidad}</td>
                        <td>${item.categoria}</td>
                        <td>${item.ubicacion}</td>
                        <td id="actionButtons">
                            <button @click=${() => this.editarElemento(item.id)} id="editButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f8f00"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></button> 
                            <button @click=${() => this.eliminarElemento(item.id)} id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                
                        </td>
                    
                    </tr>
                `)}

            </table>
        `;
    }
}

customElements.define('tabla-informe', tablaInforme);