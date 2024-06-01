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

        #tablaMp {
            display: none;
            flex-direction: column
            z-index: 30;
            width: 100%;;
            height: 30rem;
            overflow: scroll;
            justify-self: center;         
        }

        tbody, thead {
            z-index: 30;
        }

        td, th {
            border: 1px solid rgb(204, 200, 200);
            text-align: left;
            padding: 8px 15px;
            background-color: salmon;
            color: white;

        }

        td {
            max-width: 300px; /* Establece la altura máxima */
            overflow-y: auto; /* Agrega un scrollbar vertical si es necesario */
        }

        input {
            display: none;
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

    handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase(); // Obtén el valor del campo de búsqueda y conviértelo a minúsculas
        this.filteredData = this.datosAPI.filter(item =>
            item.idMateriaPrima.toLowerCase().includes(searchTerm) || // Filtra por ID
            item.nombre.toLowerCase().includes(searchTerm) // Filtra por nombre
        );
        this.requestUpdate(); // Actualiza la tabla con los resultados filtrados
    }

    render() {
        return html`
            <input type="text" id="searchInput" @input="${this.handleSearch}">
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