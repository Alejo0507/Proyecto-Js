var N=Object.defineProperty;var V=(o,e,t)=>e in o?N(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var b=(o,e,t)=>(V(o,typeof e!="symbol"?e+"":e,t),t);import{s as C,i as M,x as L}from"./lit-element-CDBGQpi1.js";const J=(o,e)=>o/e,O=(o,e)=>o/e*100+"%",F=(o,e)=>o-e,$=(o,e)=>o/e;document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("calcular-productividad"),e=document.querySelector("calc-eficiencia").shadowRoot,t=e.getElementById("myModal"),n=e.getElementById("closeModalBtn"),r=e.getElementById("calcForm"),a=e.getElementById("form-container"),s=e.getElementById("resultado-container"),i=e.getElementById("resultado");o.addEventListener("click",()=>{t.style.display="flex"}),n.addEventListener("click",()=>{t.style.display="none",r.reset(),a.style.display="block",s.style.display="none"}),r.addEventListener("submit",c=>{c.preventDefault();const d=e.getElementById("total").value;e.getElementById("horas").value;const f=e.getElementById("costos").value,l=e.getElementById("defectos").value,y=F(d,l),u=$(y,f),g=O(l,d);console.log(g),a.style.display="none",s.style.display="flex",i.textContent=u.toFixed(2)})});class A extends C{constructor(){super()}render(){return L`
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span id="closeModalBtn" class="close">&times;</span>
                <p>
                    <h1 id="modalTitle">Calcular eficiencia operativa</h1>
                    <div id="form-container">
                        <form id="calcForm">
                            <div class="input-container">
                                <label for="totalProductos">Cantidad total de productos terminados</label>
                                <input type="number" id="total" name="totalProductos" required>
                            </div>

                            <div class="input-container">
                                <label for="horasTotProduct">Horas totales de producción</label>
                                <input type="number" id="horas" name="horasTotProduct" required>
                            </div>

                            <div class="input-container">
                                <label for="costosOperativosTotales">Costos operativos totales</label>
                                <input type="number" id="costos" name="costosOperativosTotales" required>
                            </div>

                            <div class="input-container">
                                <label for="productosDefectuosos">Número de productos defectuosos</label>
                                <input type="number" id="defectos" name="productosDefectuosos" required>
                            </div>

                            <input type="submit" id="enviar-form">
                        </form>
                    </div>

                    <div id="resultado-container">

                        <h1>Su empresa tiene una eficiencia operativa de:</h1>
                        <p><span id="resultado">0  </span> unidades/$</p>
                    </div>
                </p>
            </div>
        </div>
        `}}b(A,"styles",M`
    .input-container{
        border-radius:5px;
        height:25px;
        margin:10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;

        label {
            align-self: left;
            text: left;
            justify-self: start;
            width: 370px;
        }

        input {
            width: 230px;
            border-radius: 6px;
            align-self: right;
            justify-self: right;
        }
        
    }
   
    .modal {
        
        display: none; /* Ocultar modal por defecto */
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro */
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .modal-content {
        color:white;
        border-radius:20px;
       
        background: linear-gradient(
            to bottom right,
            rgb(141, 30, 168),
            rgba(120, 50, 100)  
          );
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 60%;
        height: 60%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        animation-name: modalopen;
        animation-duration: 0.4s;
    }
    @keyframes modalopen {
        from {opacity: 0}
        to {opacity: 1}
    }
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    #closeModalBtn{
        transition:0.5s ease;
        
    }
    #closeModalBtn:hover{
        color:red;
        
        transform: scale(1.5);
    }

    #resultado-container {
        display: none;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        p {
            font-size: 40px;
        }
    }

    #calcForm {
        display: flex;
        flex-direction: column;
        align-items: center;
        text: center;
        justify-content: center;
    }

    #enviar-form,#volverACalcular {
        color:white;
        font-size:1.2rem;
        border:none;
        margin-top: 2rem;
    }
    #enviar-form,#volverACalcular{
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #ae4bc7;
        transition: all 0.5s ease;
    }
    #enviar-form:hover,#volverACalcular:hover {
        color: rgb(141, 30, 168);
        background-color: #efb7fd;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
        cursor: pointer;
        }

    @media screen and (max-width: 1260px) {

        .input-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            font-size: 10px;
        }

        #modalTitle {
            font-size: 20px;
        }

        #enviar-form {
            padding: 5px 7px;
            border-radius: 4px;
            margin-top: 4px;
        }
    }
    `);customElements.define("calc-eficiencia",A);class S extends C{constructor(){super()}render(){return L`
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span id="closeModalBtn" class="close">&times;</span>
                <p>
                    <h1 id="modalTitle">Calcular costos de mano de obra</h1>
                    <div id="form-container">
                        <form id="calcForm">
                            <div class="input-container">
                                <label for="totalEmpleados">Cantidad de empleados</label>
                                <input type="number" id="totalEmpleados" name="totalEmpleados" required>
                            </div>

                            <div class="input-container">
                                <label for="salarioBase">Salario base</label>
                                <input type="number" id="salarioBase" name="salarioBase" required>
                            </div>

                            <div class="input-container">
                                <label for="horasTrabajadas">Horas trabajadas</label>
                                <input type="number" id="horasTrabajadas" name="horasTrabajadas" required>
                            </div>

                            <div class="input-container">
                                <label for="beneficios">Beneficios y prestaciones por empleado</label>
                                <input type="number" id="beneficios" name="beneficios" required>
                            </div>

                            <input type="submit" id="enviar-form">
                        </form>
                    </div>

                    <div id="resultado-container">

                        <h1>Su empresa tiene un total de costos de mano de obra de:</h1>
                        <p><span id="resultado">0</span></p>
                        <button id="volverACalcular">Volver a calcular</button>
                    </div>
                </p>
            </div>
        </div>
        `}}b(S,"styles",M`
    .input-container{
        border-radius:5px;
        height:25px;
        margin:10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;

        label {
            align-self: left;
            text: left;
            justify-self: start;
            width: 370px;
        }

        input {
            width: 230px;
            border-radius: 6px;
            align-self: right;
            justify-self: right;
        }
        
    }
   
    .modal {
        
        display: none; /* Ocultar modal por defecto */
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5); /* Fondo oscuro */
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .modal-content {
        color:white;
        border-radius:20px;
       
        background: linear-gradient(
            to bottom right,
            rgb(141, 30, 168),
            rgba(120, 50, 100)  
          );
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 60%;
        height: 60%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        animation-name: modalopen;
        animation-duration: 0.4s;
    }
    @keyframes modalopen {
        from {opacity: 0}
        to {opacity: 1}
    }
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    #closeModalBtn{
        transition:0.5s ease;
        
    }
    #closeModalBtn:hover{
        color:red;
        
        transform: scale(1.5);
    }

    #resultado-container {
        display: none;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        p {
            font-size: 40px;
        }
    }

    #calcForm {
        display: flex;
        flex-direction: column;
        align-items: center;
        text: center;
        justify-content: center;
    }

    #enviar-form,#volverACalcular {
        color:white;
        font-size:1.2rem;
        border:none;
        margin-top: 2rem;
    }
    #enviar-form,#volverACalcular{
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #ae4bc7;
        transition: all 0.5s ease;
    }
    #enviar-form:hover,#volverACalcular:hover {
        color: rgb(141, 30, 168);
        background-color: #efb7fd;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 20px;
        padding-bottom: 20px;
        cursor: pointer;
        }

    @media screen and (max-width: 1260px) {

        .input-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            font-size: 10px;
        }

        #modalTitle {
            font-size: 20px;
        }

        #enviar-form {
            padding: 5px 7px;
            border-radius: 4px;
            margin-top: 4px;
        }
    }

    `);customElements.define("calc-obra",S);const G="https://664a2109a300e8795d41126f.mockapi.io/api/1/costosindirectos",K=(o,e)=>o/e;async function Q(){try{const o=await fetch(G,{method:"GET"});if(!o.ok)throw new Error("Error al obtener los datos de la API");const e=await o.json();let t=0;for(const n of e){const r=parseFloat(n.valor);t+=isNaN(r)?0:r}return console.log("La suma de todos los valores es:",t),t}catch(o){throw console.error("Error:",o),o}}const W=(o,e)=>o*e,X=(o,e,t)=>o*e*t,Y=(o,e,t)=>o+e+t,Z=(o,e)=>o*e,_=o=>o.toLocaleString("es-CO",{style:"currency",currency:"COP"}).replace(/COP\s/,""),x=(o,e,t)=>{fetch(o,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(n=>{if(n.ok)return n.json()}).catch(n=>{console.log("No se pudo enviar los datos")}),t.reset()};let p,h,E;const ee="https://665630689f970b3b36c49525.mockapi.io/manoDeObra";document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("calc-eficiencia").shadowRoot;o.getElementById("calcForm").addEventListener("submit",()=>{p=o.getElementById("total").value,h=o.getElementById("costos").value,E=o.getElementById("defectos").value});const t=document.getElementById("calcularManoDeObra"),n=document.querySelector("calc-obra").shadowRoot,r=n.getElementById("myModal"),a=n.getElementById("closeModalBtn"),s=n.getElementById("calcForm"),i=n.getElementById("form-container"),c=n.getElementById("resultado-container"),d=n.getElementById("resultado");t.addEventListener("click",()=>{r.style.display="flex"}),a.addEventListener("click",()=>{r.style.display="none",s.reset(),i.style.display="block",c.style.display="none"}),s.addEventListener("submit",f=>{f.preventDefault();const l=n.getElementById("totalEmpleados").value,y=n.getElementById("salarioBase").value,u=n.getElementById("horasTrabajadas").value,g=n.getElementById("beneficios").value,B=F(p,E),R=$(B,h),q=J(h,p),I=K(y,u),D=X(I,u,l),j=W(g,l);Q().then(m=>{console.log(m);const U=O(E,p),k=Y(D,j,m),H=Z(u,l);i.style.display="none",c.style.display="flex",d.textContent=_(k),fetch(ee,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({empleados:l,productividadEfectiva:B,costosOperativosUnd:q,tasaDeDefectos:U,eficienciaOperativa:R,salarioPorHora:I,horasTrabajadas:H,costosIndirectosTotales:m,beneficiosTotales:j,salarioTotal:D,manoDeObraTotal:k})}).then(v=>{if(v.ok)return v.json()}).catch(v=>{console.log("No se pudo enviar los datos")})}).catch(m=>{console.error("Error al calcular costos indirectos totales:",m)})})});const oe="https://665630689f970b3b36c49525.mockapi.io/materiaPrima",w=document.getElementById("mpForm");w.addEventListener("submit",o=>{o.preventDefault();let e={idMateriaPrima:document.getElementById("idMp").value,nombre:document.getElementById("nombre").value,fechaDeAdquisicion:document.getElementById("fechaAdqui").value,fechaDeVencimiento:document.getElementById("fechaVenci").value,costoUnidad:document.getElementById("costoUnidad").value,proveedor:document.getElementById("proveedor").value,descripcion:document.getElementById("descripcion").value,unidadMedida:document.getElementById("unidadMedida").value,cantidad:document.getElementById("cantidad").value,categoria:document.getElementById("categoria").value,ubicacion:document.getElementById("ubicacion").value};x(oe,e,w)});const te=document.getElementById("inventario"),ae=document.getElementById("inventoryDiv"),ne=document.getElementById("prodDiv"),re=document.getElementById("prodDiv"),se=document.getElementById("mpForm");te.addEventListener("click",()=>{ae.style.display="none",ne.style.display="none",re.style.display="none",se.style.display="flex"});const ie=document.getElementById("produccion"),ce=document.getElementById("inventoryDiv"),le=document.getElementById("prodDiv"),de=document.getElementById("prodDiv"),ue=document.getElementById("productForm");ie.addEventListener("click",()=>{ce.style.display="none",le.style.display="none",de.style.display="none",ue.style.display="flex"});const me=document.getElementById("Costos-indirectos"),pe=document.getElementById("inventoryDiv"),fe=document.getElementById("prodDiv"),ye=document.getElementById("prodDiv"),ge=document.getElementById("costoForm");me.addEventListener("click",()=>{pe.style.display="none",fe.style.display="none",ye.style.display="none",ge.style.display="flex"});const z=[{nombre:"Camisa manga Larga",hilos:50,botones:6,telas:3,id:"1",horas:4,trabajadores:4},{nombre:"Camisa manga Corta",hilos:45,botones:6,telas:2,id:"2",horas:3,trabajadores:4},{nombre:"Vestido Largo",hilos:20,botones:1,telas:5,sierres:1,lentejuelas:100,cauchos:2,encajes:12,"costo-unidad":0,id:"6",horas:1,trabajadores:4},{nombre:"Vestido Corto",hilos:15,botones:1,telas:4,sierres:1,lentejuelas:50,cauchos:2,encajes:8,"costo-unidad":0,id:"4",horas:5,trabajadores:4},{nombre:"Pantalon de Vestir",hilos:20,botones:3,telas:3,sierres:1,cauchos:1,"costo-unidad":0,id:"5",horas:4,trabajadores:4},{nombre:"Pantalon de Jean",hilos:20,botones:1,telas:3,sierres:1,"costo-unidad":0,id:"6",horas:3,trabajadores:4},{nombre:"Short",hilos:12,botones:2,telas:2,sierres:1,id:"7",horas:2,trabajadores:4}];function ve(o,e){let t={};return o.forEach(n=>{const r=z.find(a=>a.nombre===n);if(r)for(const a in r)a!=="nombre"&&a!=="id"&&a!=="costo-unidad"&&a!=="horas"&&a!=="trabajadores"&&(t.hasOwnProperty(a)||(t[a]=0),t[a]+=r[a]*e)}),t}function be(o){return fetch("https://665630689f970b3b36c49525.mockapi.io/materiaPrima").then(e=>{if(e.ok)return e.json();throw new Error("Error al obtener los datos de materia prima de la API")}).then(e=>{let t={...o},n=null;e.forEach(a=>{for(const s in t)if(s!=="horas"&&s!=="trabajadores"&&a.categoria.toLowerCase()===s&&t[s]>0){const i=Math.min(t[s],parseInt(a.cantidad));a.cantidad-=i,t[s]-=i,t[s]===0&&delete t[s];break}});for(const a in t){n=a;break}if(n)return alert(`No hay suficiente stock de ${n} para la producción.`),Promise.reject(new Error(`Stock insuficiente de ${n}`));const r=e.map(a=>{const s=JSON.stringify(a);return console.log("Datos a enviar en PUT:",s),fetch(`https://665630689f970b3b36c49525.mockapi.io/materiaPrima/${a.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:s}).then(i=>{if(i.ok)console.log(`Datos de materia prima con id ${a.id} actualizados correctamente`);else return i.json().then(c=>{throw console.error(`Error al actualizar los datos de materia prima con id ${a.id}:`,c),new Error(`Error al actualizar los datos de materia prima con id ${a.id}`)})}).catch(i=>{throw console.error("Ocurrió un error:",i),i})});return Promise.all(r)}).catch(e=>(console.error("Ocurrió un error:",e),Promise.reject(e)))}const he=(o,e)=>o*e,Ee="https://66586d8e5c36170526486c75.mockapi.io/lotes",xe="https://665630689f970b3b36c49525.mockapi.io/manoDeObra",T=document.getElementById("productForm");T.addEventListener("submit",async o=>{o.preventDefault();const e=document.getElementById("producto").value,t=parseInt(document.getElementById("cantidadproductos").value),n=document.getElementById("productosmes").value;try{let r=Be(e,t);console.log("Horas Trabajadas:",r);const a=await fetch(xe);if(!a.ok)throw new Error("Error al obtener el salario de la API");const s=await a.json(),i=s[s.length-1].salarioPorHora,c=ve([e],t),d=he(r,i);await be(c),x(Ee,{producto:e,cantidad:t,baseasignacion:n,horastrabajadas:r,costoMOlote:d},T)}catch(r){console.error("Error:",r)}});function Be(o,e){const t=z.find(n=>n.nombre===o);return console.log("Prenda:",t),t&&t.horas?t.horas*e:0}document.getElementById("cantidadproductos");const Ie="https://664a2109a300e8795d41126f.mockapi.io/api/1/costosindirectos",P=document.getElementById("costoForm");P.addEventListener("submit",o=>{o.preventDefault();let e={tipoCosto:document.getElementById("nombre-costo").value,valor:document.getElementById("valor-costo").value,descripcion:document.getElementById("descripcion-costo").value};x(Ie,e,P)});
