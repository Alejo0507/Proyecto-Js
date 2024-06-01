import { LitElement, html, css } from "lit";

export class tablaInforme extends LitElement {
    constructor() {
        super()
    }

    static styles = css`

    table {
        background-color: cyan;
        display: flex;
        flex-direction: column;
        
    }

        td {
            border: 1px solid rgb(204, 200, 200);
            text-align: left;
            padding: 8px 15px;
        }
    `

    render() {
        return html`
            <table class="table table-dark" >
                <thead >
                    <tr>
                        <th  scope="col">id</th>
                        <th  scope="col">Nombre</th>
                        <th  scope="col">Categoria</th>
                        <th  scope="col">proveedor</th>
                        <th  scope="col">valor unidad</th>
                        <th  scope="col">cantidad</th>
                        <th  scope="col">medida</th>
                        <th  scope="col">Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hola</td>
                        <td>Pepito</td>
                        <td>Perez</td>
                        <td>asdad</td>
                        <td>qqwe</td>
                        <td>asd</td>
                        <td>asd</td>
                        <td>asd</td>
                    </tr>
                </tbody>
            </table>
        
        `
    }
}

customElements.define('tabla-informe', tablaInforme);