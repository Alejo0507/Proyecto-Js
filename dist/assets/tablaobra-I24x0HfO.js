var l=Object.defineProperty;var n=(e,t,o)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>(n(e,typeof t!="symbol"?t+"":t,o),o);import{s as c,i as h,x as i}from"./lit-element-vPvpt891.js";import{f as p}from"./obtenerDatos-KJbPXA-C.js";const r="https://665630689f970b3b36c49525.mockapi.io/manoDeObra";class d extends c{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await p(r),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const o=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(s=>s.id!==t),this.requestUpdate(),fetch(`${r}/${t}`,{method:"DELETE"}).then(s=>{if(!s.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(s=>{console.error("Error al eliminar el elemento del mock API:",s),this.datosAPI=o,this.requestUpdate()})}render(){return i`
            
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

                ${this.datosAPI.map(t=>i`
                    <tr>
                        <td style="z-index:3; ">${t.empleados}</td>
                        <td style="z-index:3; ">${t.productividadEfectiva}</td>
                        <td style="z-index:3; ">${t.costosOperativosUnd}</td>
                        <td style="z-index:3; ">${t.tasaDeDefectos}</td>
                        <td style="z-index:3; ">${t.eficienciaOperativa}</td>
                        <td style="z-index:3; ">${t.salarioPorHora}</td>
                        <td style="z-index:3; ">${t.horasTrabajadas}</td>
                        <td style="z-index:3; ">${t.costosIndirectosTotales}</td>
                        <td style="z-index:3; ">${t.beneficiosTotales}</td>
                        <td style="z-index:3; ">${t.salarioTotal}</td>
                        <td style="z-index:3; ">${t.manoDeObraTotal}</td>

                        <td style="z-index:3; " id="actionButtons">
                            <button @click=${()=>this.eliminarElemento(t.id)} id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                        </td>
                    
                    </tr>
                `)}

            </table>
        `}}a(d,"styles",h`

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


   
    
    `);customElements.define("tabla-obra",d);
