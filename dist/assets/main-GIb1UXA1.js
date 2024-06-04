var V=Object.defineProperty;var G=(e,o,t)=>o in e?V(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var h=(e,o,t)=>(G(e,typeof o!="symbol"?o+"":o,t),t);import{s as C,i as M,x as L}from"./tablaObra-Bc559MfO.js";const J=(e,o)=>e/o,O=(e,o)=>e/o*100+"%",A=(e,o)=>e-o,F=(e,o)=>e/o;document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("calcular-productividad"),o=document.querySelector("calc-eficiencia").shadowRoot,t=o.getElementById("myModal"),a=o.getElementById("closeModalBtn"),n=o.getElementById("calcForm"),r=o.getElementById("form-container"),s=o.getElementById("resultado-container"),c=o.getElementById("resultado");e.addEventListener("click",()=>{t.style.display="flex"}),a.addEventListener("click",()=>{t.style.display="none",n.reset(),r.style.display="block",s.style.display="none"}),n.addEventListener("submit",u=>{u.preventDefault();const d=o.getElementById("total").value;o.getElementById("horas").value;const p=o.getElementById("costos").value,i=o.getElementById("defectos").value,m=A(d,i),l=F(m,p),f=O(i,d);console.log(f),r.style.display="none",s.style.display="flex",c.textContent=l.toFixed(2)})});const K="https://664a2109a300e8795d41126f.mockapi.io/api/1/costosindirectos",Q=(e,o)=>e/o;async function U(){try{const e=await fetch(K,{method:"GET"});if(!e.ok)throw new Error("Error al obtener los datos de la API");const o=await e.json();let t=0;for(const a of o){const n=parseFloat(a.valor);t+=isNaN(n)?0:n}return console.log("La suma de todos los valores es:",t),t}catch(e){throw console.error("Error:",e),e}}const W=(e,o)=>e*o,X=(e,o,t)=>e*o*t,Y=(e,o,t)=>e+o+t,Z=(e,o)=>e*o,_=e=>e.toLocaleString("es-CO",{style:"currency",currency:"COP"}).replace(/COP\s/,""),$=(e,o,t)=>{fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(o)}).then(a=>{if(a.ok)return a.json()}).catch(a=>{console.log("No se pudo enviar los datos")}),t.reset()};let b,x,E;const ee="https://665630689f970b3b36c49525.mockapi.io/manoDeObra";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("calc-eficiencia").shadowRoot;e.getElementById("calcForm").addEventListener("submit",()=>{b=e.getElementById("total").value,x=e.getElementById("costos").value,E=e.getElementById("defectos").value});const t=document.getElementById("calcularManoDeObra"),a=document.querySelector("calc-obra").shadowRoot,n=a.getElementById("myModal"),r=a.getElementById("closeModalBtn"),s=a.getElementById("calcForm"),c=a.getElementById("form-container"),u=a.getElementById("resultado-container"),d=a.getElementById("resultado");t.addEventListener("click",()=>{n.style.display="flex"}),r.addEventListener("click",()=>{n.style.display="none",s.reset(),c.style.display="block",u.style.display="none"}),s.addEventListener("submit",p=>{p.preventDefault();const i=a.getElementById("totalEmpleados").value,m=a.getElementById("salarioBase").value,l=a.getElementById("horasTrabajadas").value,f=a.getElementById("beneficios").value,y=A(b,E),R=F(y,x),q=J(x,b),I=Q(m,l),w=X(I,l,i),D=W(f,i);U().then(g=>{console.log(g);const N=O(E,b),T=Y(w,D,g),H=Z(l,i);c.style.display="none",u.style.display="flex",d.textContent=_(T),fetch(ee,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({empleados:i,productividadEfectiva:y,costosOperativosUnd:q,tasaDeDefectos:N,eficienciaOperativa:R,salarioPorHora:I,horasTrabajadas:H,costosIndirectosTotales:g,beneficiosTotales:D,salarioTotal:w,manoDeObraTotal:T})}).then(v=>{if(v.ok)return v.json()}).catch(v=>{console.log("No se pudo enviar los datos")})}).catch(g=>{console.error("Error al calcular costos indirectos totales:",g)})})});const oe="https://665630689f970b3b36c49525.mockapi.io/materiaPrima",j=document.getElementById("mpForm");j.addEventListener("submit",e=>{e.preventDefault();const o=document.getElementById("cantidad").value;let t={idMateriaPrima:document.getElementById("idMp").value,nombre:document.getElementById("nombre").value,fechaDeAdquisicion:document.getElementById("fechaAdqui").value,fechaDeVencimiento:document.getElementById("fechaVenci").value,costoUnidad:document.getElementById("costoUnidad").value,proveedor:document.getElementById("proveedor").value,descripcion:document.getElementById("descripcion").value,unidadMedida:document.getElementById("unidadMedida").value,cantidad:parseInt(o),categoria:document.getElementById("categoria").value,ubicacion:document.getElementById("ubicacion").value};$(oe,t,j)});const te=document.getElementById("inventario"),ae=document.getElementById("inventoryDiv"),ne=document.getElementById("prodDiv"),re=document.getElementById("prodDiv"),se=document.getElementById("mpForm");te.addEventListener("click",()=>{ae.style.display="none",ne.style.display="none",re.style.display="none",se.style.display="flex"});const ie=document.getElementById("produccion"),ce=document.getElementById("inventoryDiv"),le=document.getElementById("prodDiv"),de=document.getElementById("prodDiv"),ue=document.getElementById("productForm");ie.addEventListener("click",()=>{ce.style.display="none",le.style.display="none",de.style.display="none",ue.style.display="flex"});const pe=document.getElementById("Costos-indirectos"),me=document.getElementById("inventoryDiv"),fe=document.getElementById("prodDiv"),ge=document.getElementById("prodDiv"),ye=document.getElementById("costoForm");pe.addEventListener("click",()=>{me.style.display="none",fe.style.display="none",ge.style.display="none",ye.style.display="flex"});const B=[{nombre:"Camisa manga Larga",hilos:50,botones:6,telas:3,id:"1",horas:4,trabajadores:4},{nombre:"Camisa manga Corta",hilos:45,botones:6,telas:2,id:"2",horas:3,trabajadores:4},{nombre:"Vestido Largo",hilos:20,botones:1,telas:5,sierres:1,lentejuelas:100,cauchos:2,encajes:12,"costo-unidad":0,id:"6",horas:1,trabajadores:4},{nombre:"Vestido Corto",hilos:15,botones:1,telas:4,sierres:1,lentejuelas:50,cauchos:2,encajes:8,"costo-unidad":0,id:"4",horas:5,trabajadores:4},{nombre:"Pantalon de Vestir",hilos:20,botones:3,telas:3,sierres:1,cauchos:1,"costo-unidad":0,id:"5",horas:4,trabajadores:4},{nombre:"Pantalon de Jean",hilos:20,botones:1,telas:3,sierres:1,"costo-unidad":0,id:"6",horas:3,trabajadores:4},{nombre:"Short",hilos:12,botones:2,telas:2,sierres:1,id:"7",horas:2,trabajadores:4}],P="https://665630689f970b3b36c49525.mockapi.io/materiaPrima";function be(e,o){const t=B.find(n=>n.nombre===e);if(!t)throw new Error(`Producto "${e}" no encontrado.`);const a={};for(const n in t)n!=="nombre"&&n!=="id"&&n!=="costo-unidad"&&n!=="horas"&&n!=="trabajadores"&&(a[n]=t[n]*o);return console.log(a),a}async function ve(e){try{const o=await fetch(P);if(!o.ok)throw new Error("Error al obtener los datos de la API de materia prima");let t=await o.json();for(const a in e){let n=e[a],r=t.find(s=>s.categoria===a);for(;n>0&&r;)r.cantidad>=n?(r.cantidad-=n,n=0):(n-=r.cantidad,r.cantidad=0,r=t.find(s=>s.categoria===a&&s.cantidad>0));if(n>0){alert(`No hay suficiente stock de ${a} para la producción.`);break}r&&await fetch(`${P}/${r.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})}return console.log("Datos de materia prima actualizados correctamente."),!0}catch(o){return console.error("Error al actualizar la API de materia prima:",o.message),!1}}const he=(e,o,t)=>{const a=B.find(r=>r.nombre===e);if(!a)return console.error(`No se encontró la prenda para el producto ${e}`),0;let n=0;return Object.keys(a).forEach(r=>{r!=="nombre"&&r!=="id"&&r!=="horas"&&r!=="trabajadores"&&r!=="costo-unidad"&&(t[r]?n+=a[r]*o*t[r]:console.error(`No se encontró costo por unidad para ${r}`))}),n},xe=(e,o)=>e*o,Ee=(e,o)=>e/o,Be=(e,o)=>e*o,Ie="https://66586d8e5c36170526486c75.mockapi.io/lotes",we="https://665630689f970b3b36c49525.mockapi.io/manoDeObra",De="https://665630689f970b3b36c49525.mockapi.io/materiaPrima",k=document.getElementById("productForm");k.addEventListener("submit",async e=>{e.preventDefault();const o=document.getElementById("producto").value,t=parseInt(document.getElementById("cantidadproductos").value),a=document.getElementById("productosmes").value,n=await U();try{const r=Ee(n,a),s=r+"%";let c=je(o,t);console.log("Horas Trabajadas:",c);const u=Be(t,r),d=await fetch(we);if(!d.ok)throw new Error("Error al obtener el salario de la API");const p=await d.json(),i=p[p.length-1].salarioPorHora,m=await Te();console.log(m);const l=he(o,t,m),f=be(o,t);console.log("Gastos Materiales Lote:",l);const y=xe(c,i);await ve(f),$(Ie,{producto:o,cantidad:t,baseasignacion:a,horastrabajadas:c,costoMOlote:y,costoMPlote:l,tasaAsignacionTabla:s,costosidirectoslote:u},k)}catch(r){console.error("Error:",r)}});async function Te(){try{const e=await fetch(De);if(!e.ok)throw new Error("Error al obtener los costos de la API");const o=await e.json();console.log("Datos de la API de costos:",o);let t={};return o.forEach(a=>{const n=a.categoria.toLowerCase(),r=typeof a.costoUnidad=="string"?parseFloat(a.costoUnidad):a.costoUnidad;t[n]?t[n]+=r:t[n]=r}),console.log("Costos por categoría:",t),t}catch(e){throw console.error("Error al obtener los costos de la API:",e),e}}function je(e,o){const t=B.find(a=>a.nombre===e);return console.log("Prenda:",t),t&&t.horas?t.horas*o:0}document.getElementById("cantidadproductos");class S extends C{constructor(){super()}render(){return L`
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
        `}}h(S,"styles",M`
    #modalTitle {
        text-align: center;
    }

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
        
        display: none; 
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5); 
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
            text-align: center;
            height: 100%;
            font-size: 10px;
        }

        #modalTitle {
            font-size: 20px;
            text-align: center;
        }

        #enviar-form {
            padding: 5px 7px;
            border-radius: 4px;
            margin-top: 4px;
        }
    }
    `);customElements.define("calc-eficiencia",S);class z extends C{constructor(){super()}render(){return L`
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
        `}}h(z,"styles",M`
    #modalTitle {
        text-align: center;
    }

    
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
        
        display: none; 
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.5); 
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
            text-align: center;
            height: 100%;
            font-size: 10px;
        }

        #modalTitle {
            font-size: 20px;
            text-align: center;
        }

        #enviar-form {
            padding: 5px 7px;
            border-radius: 4px;
            margin-top: 4px;
        }
    }
    `);customElements.define("calc-obra",z);
