var g=Object.defineProperty;var k=(n,t,e)=>t in n?g(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var l=(n,t,e)=>(k(n,typeof t!="symbol"?t+"":t,e),e);import{s as y,i as w,x as p}from"./lit-element-vPvpt891.js";import{f as I}from"./obtenerDatos-KJbPXA-C.js";const c="https://665630689f970b3b36c49525.mockapi.io/materiaPrima";class h extends y{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await I(c),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${c}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}editarElemento(t){const e=this.datosAPI.find(s=>s.id===t),o=prompt("Ingrese el nuevo nombre:",e.nombre);let i;for(;;)if(i=prompt("Ingrese la nueva fecha de adquisicion (YYYY-MM-DD):",e.fechaDeAdquisicion),i!==null&&!isNaN(Date.parse(i))){i=new Date(i).toISOString().split("T")[0];break}else alert("Por favor ingrese una fecha válida en formato YYYY-MM-DD.");let d;for(;;)if(d=prompt("Ingrese la nueva fecha de vencimiento (YYYY-MM-DD):",e.fechaDeVencimiento),d!==null&&!isNaN(Date.parse(d))){d=new Date(d).toISOString().split("T")[0];break}else alert("Por favor ingrese una fecha válida en formato YYYY-MM-DD.");let a;for(;;)if(a=prompt("Ingrese el nuevo costo por unidad:",e.costoUnidad),a!==null&&!isNaN(a)&&a.trim()!==""){a=parseFloat(a);break}else alert("Por favor ingrese un número válido para el costoUnidad.");const u=prompt("Ingrese el nuevo proveedor:",e.proveedor),m=prompt("Ingrese la nueva descripcion:",e.descripcion),b=prompt("Ingrese la nueva unidad de medida:",e.unidadMedida);let r;for(;;)if(r=prompt("Ingrese la nueva cantidad:",e.cantidad),r!==null&&!isNaN(r)&&r.trim()!==""){r=parseFloat(r);break}else alert("Por favor ingrese un número válido para el cantidad.");const f=prompt("Ingrese la nueva categoría:",e.categoria),v=prompt("Ingrese la nueva ubicacion:",e.ubicacion);o===null||i===null||(e.nombre=o,e.fechaDeAdquisicion=i,e.fechaDeVencimiento=d,e.costoUnidad=a,e.proveedor=u,e.descripcion=m,e.unidadMedida=b,e.cantidad=r,e.categoria=f,e.ubicacion=v,fetch(`${c}/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(s=>{if(!s.ok)throw new Error("No se pudo actualizar el elemento en el mock API");this.fetchDataFromAPI()}).catch(s=>{console.error("Error al actualizar el elemento en el mock API:",s)}))}render(){return p`
            
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

                ${this.datosAPI.map(t=>p`
                    <tr>
                        <td>${t.idMateriaPrima}</td>
                        <td>${t.nombre}</td>
                        <td>${t.fechaDeAdquisicion}</td>
                        <td>${t.fechaDeVencimiento}</td>
                        <td>${t.costoUnidad}</td>
                        <td>${t.proveedor}</td>
                        <td>${t.descripcion}</td>
                        <td>${t.unidadMedida}</td>
                        <td>${t.cantidad}</td>
                        <td>${t.categoria}</td>
                        <td>${t.ubicacion}</td>
                        <td id="actionButtons">
                            <button @click=${()=>this.editarElemento(t.id)} id="editButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f8f00"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></button> 
                            <button @click=${()=>this.eliminarElemento(t.id)} id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                
                        </td>
                    
                    </tr>
                `)}

            </table>
        `}}l(h,"styles",w`
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
    @media(max-height:800px){
        #tablaMp{
            height:20rem;
        }
    }
    
   
    
    `);customElements.define("tabla-informe",h);
