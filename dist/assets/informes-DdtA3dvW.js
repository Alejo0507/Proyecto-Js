var B=Object.defineProperty;var q=(i,t,e)=>t in i?B(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var c=(i,t,e)=>(q(i,typeof t!="symbol"?t+"":t,e),e);import"./boostrap-7eaMPqHh.js";import{s as h,i as p,x as n}from"./lit-element-vPvpt891.js";async function b(i){try{const t=await fetch(i);if(!t.ok)throw new Error("Error al obtener los datos de la API");return await t.json()}catch(t){throw console.error("Error al obtener los datos:",t),t}}const m="https://665630689f970b3b36c49525.mockapi.io/materiaPrima";class g extends h{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await b(m),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${m}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}editarElemento(t){const e=this.datosAPI.find(l=>l.id===t),o=prompt("Ingrese el nuevo nombre:",e.nombre);let a;for(;;)if(a=prompt("Ingrese la nueva fecha de adquisicion (YYYY-MM-DD):",e.fechaDeAdquisicion),a!==null&&!isNaN(Date.parse(a))){a=new Date(a).toISOString().split("T")[0];break}else alert("Por favor ingrese una fecha válida en formato YYYY-MM-DD.");let s;for(;;)if(s=prompt("Ingrese la nueva fecha de vencimiento (YYYY-MM-DD):",e.fechaVencimiento),s!==null&&!isNaN(Date.parse(s))){s=new Date(s).toISOString().split("T")[0];break}else alert("Por favor ingrese una fecha válida en formato YYYY-MM-DD.");let r;for(;;)if(r=prompt("Ingrese el nuevo costo por unidad:",e.costoUnidad),r!==null&&!isNaN(r)&&r.trim()!==""){r=parseFloat(r);break}else alert("Por favor ingrese un número válido para el costoUnidad.");const I=prompt("Ingrese el nuevo proveedor:",e.proveedor),E=prompt("Ingrese la nueva descripcion:",e.descripcion),P=prompt("Ingrese la nueva unidad de medida:",e.unidadMedida);let d;for(;;)if(d=prompt("Ingrese la nueva cantidad:",e.cantidad),d!==null&&!isNaN(d)&&d.trim()!==""){d=parseFloat(d);break}else alert("Por favor ingrese un número válido para el cantidad.");const A=prompt("Ingrese la nueva categoría:",e.categoria),$=prompt("Ingrese la nueva ubicacion:",e.ubicacion);o===null||a===null||(e.nombre=o,e.fechaDeAdquisicion=a,e.fechaVencimiento=s,e.costoUnidad=r,e.proveedor=I,e.descripcion=E,e.unidadMedida=P,e.cantidad=d,e.categoria=A,e.ubicacion=$,fetch(`${m}/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(l=>{if(!l.ok)throw new Error("No se pudo actualizar el elemento en el mock API");this.fetchDataFromAPI()}).catch(l=>{console.error("Error al actualizar el elemento en el mock API:",l)}))}render(){return n`
            
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

                ${this.datosAPI.map(t=>n`
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
        `}}c(g,"styles",p`
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
    
   
    
    `);customElements.define("tabla-informe",g);const f="https://66586d8e5c36170526486c75.mockapi.io/lotes";class k extends h{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await b(f),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${f}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}render(){return n`
            
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
                ${this.datosAPI.map(t=>n`
                    <tr>
                        <td style="z-index:3; ">${t.id}</td>
                        <td style="z-index:3; ">${t.cantidad}</td>
                        <td style="z-index:3; ">${t.producto}</td>
                        <td style="z-index:3; ">${t.horastrabajadas}</td>
                        <td style="z-index:3; ">${t.baseasignacion}</td>
                        <td style="z-index:3; ">${t.costoMPlote}</td>
                        <td style="z-index:3; ">${t.costoMOlote}</td>
                        <td style="z-index:3; ">${t.tasaasignacionCI}</td>
                        <td style="z-index:3; ">${t.costosidirectoslote}</td>
                        <td style="z-index:3; " id="actionButtons">
                            <button id="editButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f8f00"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></button> 
                            <button @click=${()=>this.eliminarElemento(t.id)} id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                        </td>
                    
                    </tr>
                `)}

            </table>
        `}}c(k,"styles",p`
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


   
    
    `);customElements.define("tabla-informe-lote",k);const y="https://664a2109a300e8795d41126f.mockapi.io/api/1/costosindirectos";class x extends h{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await b(y),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${y}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}editarElemento(t){const e=this.datosAPI.find(r=>r.id===t),o=prompt("Ingrese el nuevo tipo de costo:",e.tipoCosto);let a;for(;;)if(a=prompt("Ingrese el nuevo valor:",e.valor),a!==null&&!isNaN(a)&&a.trim()!==""){a=parseFloat(a);break}else alert("Por favor ingrese un número válido para el valor.");const s=prompt("Ingrese la nueva descripcion:",e.descripcion);a===null||o===null||s===null||(e.tipoCosto=o,e.valor=a,e.descripcion=s,fetch(`${y}/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(r=>{if(!r.ok)throw new Error("No se pudo actualizar el elemento en el mock API");this.fetchDataFromAPI()}).catch(r=>{console.error("Error al actualizar el elemento en el mock API:",r)}))}render(){return n`

            
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
                ${this.datosAPI.map(t=>n`
                    <tr>
                        <td style="z-index:3; ">${t.id}</td>
                        <td style="z-index:3; ">${t.tipoCosto}</td>
                        <td style="z-index:3; ">${t.valor}</td>
                        <td style="z-index:3; ">${t.descripcion}</td>
                        <td style="z-index:3; " id="actionButtons">
                            <button @click=${()=>this.editarElemento(t.id)} id="editButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f8f00"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></button> 
                            <button @click=${()=>this.eliminarElemento(t.id)} id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                        </td>
                    
                    </tr>
                `)}

            </table>
        `}}c(x,"styles",p`
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
    @media(max-height:800px){
        #TablaC{
            height:20rem;
        }
    }

   
    
    `);customElements.define("tabla-informe-costo",x);const v="https://665630689f970b3b36c49525.mockapi.io/manoDeObra";class w extends h{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await b(v),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${v}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}render(){return n`
            
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

                ${this.datosAPI.map(t=>n`
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
        `}}c(w,"styles",p`
    /* Contenedor de la tabla */
    #tablaO {

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


   
    
    `);customElements.define("tabla-obra",w);const u=i=>{const t=document.getElementById("info1"),e=document.getElementById("info2"),o=document.getElementById("info3");t.style.display="none",e.style.display="none",o.style.display="none",i.style.display="flex"},M=document.querySelector("tabla-informe").shadowRoot,C=M.getElementById("tablaMp"),T=document.getElementById("informeuno");T.addEventListener("click",()=>{u(C)});const D=document.getElementById("informedos"),z=document.querySelector("tabla-informe-lote").shadowRoot,Z=z.getElementById("tablaL");D.addEventListener("click",()=>{u(Z)});const U=document.getElementById("informetres"),L=document.querySelector("tabla-informe-costo").shadowRoot,O=L.getElementById("TablaC");U.addEventListener("click",()=>{u(O)});const N=document.querySelector("tabla-obra").shadowRoot,S=N.getElementById("tablaO"),Y=document.getElementById("informecuatro");Y.addEventListener("click",()=>{u(S)});
