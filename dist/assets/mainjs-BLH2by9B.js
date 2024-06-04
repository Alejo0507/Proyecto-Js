var Rt=Object.defineProperty;var Ft=(i,t,e)=>t in i?Rt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var $=(i,t,e)=>(Ft(i,typeof t!="symbol"?t+"":t,e),e);const Zt=(i,t)=>i/t,xt=(i,t)=>i/t*100+"%",Et=(i,t)=>i-t,At=(i,t)=>i/t;document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("calcular-productividad"),t=document.querySelector("calc-eficiencia").shadowRoot,e=t.getElementById("myModal"),o=t.getElementById("closeModalBtn"),s=t.getElementById("calcForm"),r=t.getElementById("form-container"),a=t.getElementById("resultado-container"),d=t.getElementById("resultado");i.addEventListener("click",()=>{e.style.display="flex"}),o.addEventListener("click",()=>{e.style.display="none",s.reset(),r.style.display="block",a.style.display="none"}),s.addEventListener("submit",n=>{n.preventDefault();const h=t.getElementById("total").value;t.getElementById("horas").value;const c=t.getElementById("costos").value,l=t.getElementById("defectos").value,u=Et(h,l),p=At(u,c),f=xt(l,h);console.log(f),r.style.display="none",a.style.display="flex",d.textContent=p.toFixed(2)})});const Vt="https://664a2109a300e8795d41126f.mockapi.io/api/1/costosindirectos",Yt=(i,t)=>i/t;async function wt(){try{const i=await fetch(Vt,{method:"GET"});if(!i.ok)throw new Error("Error al obtener los datos de la API");const t=await i.json();let e=0;for(const o of t){const s=parseFloat(o.valor);e+=isNaN(s)?0:s}return console.log("La suma de todos los valores es:",e),e}catch(i){throw console.error("Error:",i),i}}const Jt=(i,t)=>i*t,Wt=(i,t,e)=>i*t*e,Gt=(i,t,e)=>i+t+e,Kt=(i,t)=>i*t,Qt=i=>i.toLocaleString("es-CO",{style:"currency",currency:"COP"}).replace(/COP\s/,""),kt=(i,t,e)=>{fetch(i,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then(o=>{if(o.ok)return o.json()}).catch(o=>{console.log("No se pudo enviar los datos")}),e.reset()};let L,R,F;const Xt="https://665630689f970b3b36c49525.mockapi.io/manoDeObra";document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector("calc-eficiencia").shadowRoot;i.getElementById("calcForm").addEventListener("submit",()=>{L=i.getElementById("total").value,R=i.getElementById("costos").value,F=i.getElementById("defectos").value});const e=document.getElementById("calcularManoDeObra"),o=document.querySelector("calc-obra").shadowRoot,s=o.getElementById("myModal"),r=o.getElementById("closeModalBtn"),a=o.getElementById("calcForm"),d=o.getElementById("form-container"),n=o.getElementById("resultado-container"),h=o.getElementById("resultado");e.addEventListener("click",()=>{s.style.display="flex"}),r.addEventListener("click",()=>{s.style.display="none",a.reset(),d.style.display="block",n.style.display="none"}),a.addEventListener("submit",c=>{c.preventDefault();const l=o.getElementById("totalEmpleados").value,u=o.getElementById("salarioBase").value,p=o.getElementById("horasTrabajadas").value,f=o.getElementById("beneficios").value,O=Et(L,F),Nt=At(O,R),zt=Zt(R,L),et=Yt(u,p),ot=Wt(et,p,l),st=Jt(f,l);wt().then(I=>{console.log(I);const Ht=xt(F,L),it=Gt(ot,st,I),qt=Kt(p,l);d.style.display="none",n.style.display="flex",h.textContent=Qt(it),fetch(Xt,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({empleados:l,productividadEfectiva:O,costosOperativosUnd:zt,tasaDeDefectos:Ht,eficienciaOperativa:Nt,salarioPorHora:et,horasTrabajadas:qt,costosIndirectosTotales:I,beneficiosTotales:st,salarioTotal:ot,manoDeObraTotal:it})}).then(q=>{if(q.ok)return q.json()}).catch(q=>{console.log("No se pudo enviar los datos")})}).catch(I=>{console.error("Error al calcular costos indirectos totales:",I)})})});const te="https://665630689f970b3b36c49525.mockapi.io/materiaPrima",rt=document.getElementById("mpForm");rt.addEventListener("submit",i=>{i.preventDefault();const t=document.getElementById("cantidad").value;let e={idMateriaPrima:document.getElementById("idMp").value,nombre:document.getElementById("nombre").value,fechaDeAdquisicion:document.getElementById("fechaAdqui").value,fechaDeVencimiento:document.getElementById("fechaVenci").value,costoUnidad:document.getElementById("costoUnidad").value,proveedor:document.getElementById("proveedor").value,descripcion:document.getElementById("descripcion").value,unidadMedida:document.getElementById("unidadMedida").value,cantidad:parseInt(t),categoria:document.getElementById("categoria").value,ubicacion:document.getElementById("ubicacion").value};kt(te,e,rt)});const ee=document.getElementById("inventario"),oe=document.getElementById("inventoryDiv"),se=document.getElementById("prodDiv"),ie=document.getElementById("prodDiv"),re=document.getElementById("mpForm");ee.addEventListener("click",()=>{oe.style.display="none",se.style.display="none",ie.style.display="none",re.style.display="flex"});const ae=document.getElementById("produccion"),ne=document.getElementById("inventoryDiv"),le=document.getElementById("prodDiv"),de=document.getElementById("prodDiv"),ce=document.getElementById("productForm");ae.addEventListener("click",()=>{ne.style.display="none",le.style.display="none",de.style.display="none",ce.style.display="flex"});const he=document.getElementById("Costos-indirectos"),pe=document.getElementById("inventoryDiv"),ue=document.getElementById("prodDiv"),me=document.getElementById("prodDiv"),fe=document.getElementById("costoForm");he.addEventListener("click",()=>{pe.style.display="none",ue.style.display="none",me.style.display="none",fe.style.display="flex"});const Q=[{nombre:"Camisa manga Larga",hilos:50,botones:6,telas:3,id:"1",horas:4,trabajadores:4},{nombre:"Camisa manga Corta",hilos:45,botones:6,telas:2,id:"2",horas:3,trabajadores:4},{nombre:"Vestido Largo",hilos:20,botones:1,telas:5,sierres:1,lentejuelas:100,cauchos:2,encajes:12,"costo-unidad":0,id:"6",horas:1,trabajadores:4},{nombre:"Vestido Corto",hilos:15,botones:1,telas:4,sierres:1,lentejuelas:50,cauchos:2,encajes:8,"costo-unidad":0,id:"4",horas:5,trabajadores:4},{nombre:"Pantalon de Vestir",hilos:20,botones:3,telas:3,sierres:1,cauchos:1,"costo-unidad":0,id:"5",horas:4,trabajadores:4},{nombre:"Pantalon de Jean",hilos:20,botones:1,telas:3,sierres:1,"costo-unidad":0,id:"6",horas:3,trabajadores:4},{nombre:"Short",hilos:12,botones:2,telas:2,sierres:1,id:"7",horas:2,trabajadores:4}],at="https://665630689f970b3b36c49525.mockapi.io/materiaPrima";function be(i,t){const e=Q.find(s=>s.nombre===i);if(!e)throw new Error(`Producto "${i}" no encontrado.`);const o={};for(const s in e)s!=="nombre"&&s!=="id"&&s!=="costo-unidad"&&s!=="horas"&&s!=="trabajadores"&&(o[s]=e[s]*t);return console.log(o),o}async function ye(i){try{const t=await fetch(at);if(!t.ok)throw new Error("Error al obtener los datos de la API de materia prima");let e=await t.json();for(const o in i){let s=i[o],r=e.find(a=>a.categoria===o);for(;s>0&&r;)r.cantidad>=s?(r.cantidad-=s,s=0):(s-=r.cantidad,r.cantidad=0,r=e.find(a=>a.categoria===o&&a.cantidad>0));if(s>0){alert(`No hay suficiente stock de ${o} para la producción.`);break}r&&await fetch(`${at}/${r.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})}return console.log("Datos de materia prima actualizados correctamente."),!0}catch(t){return console.error("Error al actualizar la API de materia prima:",t.message),!1}}const ge=(i,t,e)=>{const o=Q.find(r=>r.nombre===i);if(!o)return console.error(`No se encontró la prenda para el producto ${i}`),0;let s=0;return Object.keys(o).forEach(r=>{r!=="nombre"&&r!=="id"&&r!=="horas"&&r!=="trabajadores"&&r!=="costo-unidad"&&(e[r]?s+=o[r]*t*e[r]:console.error(`No se encontró costo por unidad para ${r}`))}),s},ve=(i,t)=>i*t,$e=(i,t)=>i/t,xe=(i,t)=>i*t,Ee="https://66586d8e5c36170526486c75.mockapi.io/lotes",Ae="https://665630689f970b3b36c49525.mockapi.io/manoDeObra",we="https://665630689f970b3b36c49525.mockapi.io/materiaPrima",nt=document.getElementById("productForm");nt.addEventListener("submit",async i=>{i.preventDefault();const t=document.getElementById("producto").value,e=parseInt(document.getElementById("cantidadproductos").value),o=document.getElementById("productosmes").value,s=await wt();try{const r=$e(s,o),a=r+"%";let d=_e(t,e);console.log("Horas Trabajadas:",d);const n=xe(e,r),h=await fetch(Ae);if(!h.ok)throw new Error("Error al obtener el salario de la API");const c=await h.json(),l=c[c.length-1].salarioPorHora,u=await ke();console.log(u);const p=ge(t,e,u),f=be(t,e);console.log("Gastos Materiales Lote:",p);const O=ve(d,l);await ye(f),kt(Ee,{producto:t,cantidad:e,baseasignacion:o,horastrabajadas:d,costoMOlote:O,costoMPlote:p,tasaAsignacionTabla:a,costosidirectoslote:n},nt)}catch(r){console.error("Error:",r)}});async function ke(){try{const i=await fetch(we);if(!i.ok)throw new Error("Error al obtener los costos de la API");const t=await i.json();console.log("Datos de la API de costos:",t);let e={};return t.forEach(o=>{const s=o.categoria.toLowerCase(),r=typeof o.costoUnidad=="string"?parseFloat(o.costoUnidad):o.costoUnidad;e[s]?e[s]+=r:e[s]=r}),console.log("Costos por categoría:",e),e}catch(i){throw console.error("Error al obtener los costos de la API:",i),i}}function _e(i,t){const e=Q.find(o=>o.nombre===i);return console.log("Prenda:",e),e&&e.horas?e.horas*t:0}document.getElementById("cantidadproductos");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,X=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),lt=new WeakMap;let _t=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(X&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&lt.set(e,t))}return t}toString(){return this.cssText}};const Pe=i=>new _t(typeof i=="string"?i:i+"",void 0,tt),P=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,s,r)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new _t(e,i,tt)},Ie=(i,t)=>{if(X)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),s=j.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)}},dt=X?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Pe(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Be,defineProperty:Ce,getOwnPropertyDescriptor:Te,getOwnPropertyNames:Se,getOwnPropertySymbols:Me,getPrototypeOf:De}=Object,v=globalThis,ct=v.trustedTypes,Ue=ct?ct.emptyScript:"",Z=v.reactiveElementPolyfillSupport,C=(i,t)=>i,K={toAttribute(i,t){switch(t){case Boolean:i=i?Ue:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Pt=(i,t)=>!Be(i,t),ht={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:Pt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ht){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,e);s!==void 0&&Ce(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){const{get:s,set:r}=Te(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get(){return s==null?void 0:s.call(this)},set(a){const d=s==null?void 0:s.call(this);r.call(this,a),this.requestUpdate(t,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ht}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=De(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,o=[...Se(e),...Me(e)];for(const s of o)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,s]of e)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const s=this._$Eu(e,o);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(dt(s))}else t!==void 0&&e.push(dt(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ie(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){var r;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const a=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:K).toAttribute(e,o.type);this._$Em=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){var r;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=o.getPropertyOptions(s),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:K;this._$Em=s,this[s]=d.fromAttribute(e,a.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??Pt)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,a]of s)a.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],a)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[C("elementProperties")]=new Map,w[C("finalized")]=new Map,Z==null||Z({ReactiveElement:w}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,N=T.trustedTypes,pt=N?N.createPolicy("lit-html",{createHTML:i=>i}):void 0,It="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,Bt="?"+g,Oe=`<${Bt}>`,A=document,S=()=>A.createComment(""),M=i=>i===null||typeof i!="object"&&typeof i!="function",Ct=Array.isArray,Le=i=>Ct(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",V=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,mt=/>/g,x=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,bt=/"/g,Tt=/^(?:script|style|textarea|title)$/i,je=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),y=je(1),k=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),yt=new WeakMap,E=A.createTreeWalker(A,129);function St(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return pt!==void 0?pt.createHTML(t):t}const Ne=(i,t)=>{const e=i.length-1,o=[];let s,r=t===2?"<svg>":"",a=B;for(let d=0;d<e;d++){const n=i[d];let h,c,l=-1,u=0;for(;u<n.length&&(a.lastIndex=u,c=a.exec(n),c!==null);)u=a.lastIndex,a===B?c[1]==="!--"?a=ut:c[1]!==void 0?a=mt:c[2]!==void 0?(Tt.test(c[2])&&(s=RegExp("</"+c[2],"g")),a=x):c[3]!==void 0&&(a=x):a===x?c[0]===">"?(a=s??B,l=-1):c[1]===void 0?l=-2:(l=a.lastIndex-c[2].length,h=c[1],a=c[3]===void 0?x:c[3]==='"'?bt:ft):a===bt||a===ft?a=x:a===ut||a===mt?a=B:(a=x,s=void 0);const p=a===x&&i[d+1].startsWith("/>")?" ":"";r+=a===B?n+Oe:l>=0?(o.push(h),n.slice(0,l)+It+n.slice(l)+g+p):n+g+(l===-2?d:p)}return[St(i,r+(i[e]||"<?>")+(t===2?"</svg>":"")),o]};class D{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let r=0,a=0;const d=t.length-1,n=this.parts,[h,c]=Ne(t,e);if(this.el=D.createElement(h,o),E.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=E.nextNode())!==null&&n.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(It)){const u=c[a++],p=s.getAttribute(l).split(g),f=/([.?@])?(.*)/.exec(u);n.push({type:1,index:r,name:f[2],strings:p,ctor:f[1]==="."?He:f[1]==="?"?qe:f[1]==="@"?Re:z}),s.removeAttribute(l)}else l.startsWith(g)&&(n.push({type:6,index:r}),s.removeAttribute(l));if(Tt.test(s.tagName)){const l=s.textContent.split(g),u=l.length-1;if(u>0){s.textContent=N?N.emptyScript:"";for(let p=0;p<u;p++)s.append(l[p],S()),E.nextNode(),n.push({type:2,index:++r});s.append(l[u],S())}}}else if(s.nodeType===8)if(s.data===Bt)n.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(g,l+1))!==-1;)n.push({type:7,index:r}),l+=g.length-1}r++}}static createElement(t,e){const o=A.createElement("template");return o.innerHTML=t,o}}function _(i,t,e=i,o){var a,d;if(t===k)return t;let s=o!==void 0?(a=e._$Co)==null?void 0:a[o]:e._$Cl;const r=M(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((d=s==null?void 0:s._$AO)==null||d.call(s,!1),r===void 0?s=void 0:(s=new r(i),s._$AT(i,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=s:e._$Cl=s),s!==void 0&&(t=_(i,s._$AS(i,t.values),s,o)),t}class ze{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,s=((t==null?void 0:t.creationScope)??A).importNode(e,!0);E.currentNode=s;let r=E.nextNode(),a=0,d=0,n=o[0];for(;n!==void 0;){if(a===n.index){let h;n.type===2?h=new U(r,r.nextSibling,this,t):n.type===1?h=new n.ctor(r,n.name,n.strings,this,t):n.type===6&&(h=new Fe(r,this,t)),this._$AV.push(h),n=o[++d]}a!==(n==null?void 0:n.index)&&(r=E.nextNode(),a++)}return E.currentNode=A,s}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,s){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_(this,t,e),M(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Le(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==m&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=D.createElement(St(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const a=new ze(s,this),d=a.u(this.options);a.p(e),this.T(d),this._$AH=a}}_$AC(t){let e=yt.get(t.strings);return e===void 0&&yt.set(t.strings,e=new D(t)),e}k(t){Ct(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const r of t)s===e.length?e.push(o=new U(this.S(S()),this.S(S()),this,this.options)):o=e[s],o._$AI(r),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,r){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=m}_$AI(t,e=this,o,s){const r=this.strings;let a=!1;if(r===void 0)t=_(this,t,e,0),a=!M(t)||t!==this._$AH&&t!==k,a&&(this._$AH=t);else{const d=t;let n,h;for(t=r[0],n=0;n<r.length-1;n++)h=_(this,d[o+n],e,n),h===k&&(h=this._$AH[n]),a||(a=!M(h)||h!==this._$AH[n]),h===m?t=m:t!==m&&(t+=(h??"")+r[n+1]),this._$AH[n]=h}a&&!s&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class He extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}class qe extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==m)}}class Re extends z{constructor(t,e,o,s,r){super(t,e,o,s,r),this.type=5}_$AI(t,e=this){if((t=_(this,t,e,0)??m)===k)return;const o=this._$AH,s=t===m&&o!==m||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==m&&(o===m||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Fe{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){_(this,t)}}const Y=T.litHtmlPolyfillSupport;Y==null||Y(D,U),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.1.3");const Ze=(i,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let s=o._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;o._$litPart$=s=new U(t.insertBefore(S(),r),r,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class b extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ze(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return k}}var $t;b._$litElement$=!0,b.finalized=!0,($t=globalThis.litElementHydrateSupport)==null||$t.call(globalThis,{LitElement:b});const J=globalThis.litElementPolyfillSupport;J==null||J({LitElement:b});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");class Mt extends b{constructor(){super()}render(){return y`
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
        `}}$(Mt,"styles",P`
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
    `);customElements.define("calc-eficiencia",Mt);class Dt extends b{constructor(){super()}render(){return y`
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
        `}}$(Dt,"styles",P`
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
    `);customElements.define("calc-obra",Dt);async function H(i){try{const t=await fetch(i);if(!t.ok)throw new Error("Error al obtener los datos de la API");return await t.json()}catch(t){throw console.error("Error al obtener los datos:",t),t}}const W="https://665630689f970b3b36c49525.mockapi.io/materiaPrima";class Ut extends b{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await H(W),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${W}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}editarElemento(t){const e=this.datosAPI.find(p=>p.id===t),o=prompt("Ingrese el nuevo nombre:",e.nombre);let s;for(;;)if(s=prompt("Ingrese la nueva fecha de adquisicion (YYYY-MM-DD):",e.fechaDeAdquisicion),s!==null&&!isNaN(Date.parse(s))){s=new Date(s).toISOString().split("T")[0];break}else alert("Por favor ingrese una fecha válida en formato YYYY-MM-DD.");let r;for(;;)if(r=prompt("Ingrese la nueva fecha de vencimiento (YYYY-MM-DD):",e.fechaDeVencimiento),r!==null&&!isNaN(Date.parse(r))){r=new Date(r).toISOString().split("T")[0];break}else alert("Por favor ingrese una fecha válida en formato YYYY-MM-DD.");let a;for(;;)if(a=prompt("Ingrese el nuevo costo por unidad:",e.costoUnidad),a!==null&&!isNaN(a)&&a.trim()!==""){a=parseFloat(a);break}else alert("Por favor ingrese un número válido para el costoUnidad.");const d=prompt("Ingrese el nuevo proveedor:",e.proveedor),n=prompt("Ingrese la nueva descripcion:",e.descripcion),h=prompt("Ingrese la nueva unidad de medida:",e.unidadMedida);let c;for(;;)if(c=prompt("Ingrese la nueva cantidad:",e.cantidad),c!==null&&!isNaN(c)&&c.trim()!==""){c=parseFloat(c);break}else alert("Por favor ingrese un número válido para el cantidad.");const l=prompt("Ingrese la nueva categoría:",e.categoria),u=prompt("Ingrese la nueva ubicacion:",e.ubicacion);o===null||s===null||(e.nombre=o,e.fechaDeAdquisicion=s,e.fechaDeVencimiento=r,e.costoUnidad=a,e.proveedor=d,e.descripcion=n,e.unidadMedida=h,e.cantidad=c,e.categoria=l,e.ubicacion=u,fetch(`${W}/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(p=>{if(!p.ok)throw new Error("No se pudo actualizar el elemento en el mock API");this.fetchDataFromAPI()}).catch(p=>{console.error("Error al actualizar el elemento en el mock API:",p)}))}render(){return y`
            
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

                ${this.datosAPI.map(t=>y`
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
        `}}$(Ut,"styles",P`
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
    
   
    
    `);customElements.define("tabla-informe",Ut);const G="https://664a2109a300e8795d41126f.mockapi.io/api/1/costosindirectos";class Ot extends b{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await H(G),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${G}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}editarElemento(t){const e=this.datosAPI.find(a=>a.id===t),o=prompt("Ingrese el nuevo tipo de costo:",e.tipoCosto);let s;for(;;)if(s=prompt("Ingrese el nuevo valor:",e.valor),s!==null&&!isNaN(s)&&s.trim()!==""){s=parseFloat(s);break}else alert("Por favor ingrese un número válido para el valor.");const r=prompt("Ingrese la nueva descripcion:",e.descripcion);s===null||o===null||r===null||(e.tipoCosto=o,e.valor=s,e.descripcion=r,fetch(`${G}/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(a=>{if(!a.ok)throw new Error("No se pudo actualizar el elemento en el mock API");this.fetchDataFromAPI()}).catch(a=>{console.error("Error al actualizar el elemento en el mock API:",a)}))}render(){return y`

            
            <table id="TablaC">

        
                <tr>
                    <th  style="position: sticky; top: 0;">Id</th>
                    <th  style="position: sticky; top: 0;">Tipo de Costo</th>
                    <th  style="position: sticky; top: 0;">Valor</th>
                    <th  style="position: sticky; top: 0;">Descripcion</th>
                    <th  style="position: sticky; top: 0;">Acciones</th>
                </tr>


                ${this.datosAPI.map(t=>y`
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
        `}}$(Ot,"styles",P`
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

   
    
    `);customElements.define("tabla-informe-costo",Ot);const gt="https://66586d8e5c36170526486c75.mockapi.io/lotes";class Lt extends b{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await H(gt),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${gt}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}render(){return y`
            
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
                ${this.datosAPI.map(t=>y`
                    <tr>
                        <td style="z-index:3; ">${t.id}</td>
                        <td style="z-index:3; ">${t.cantidad}</td>
                        <td style="z-index:3; ">${t.producto}</td>
                        <td style="z-index:3; ">${t.horastrabajadas}</td>
                        <td style="z-index:3; ">${t.baseasignacion}</td>
                        <td style="z-index:3; ">${t.costoMPlote}</td>
                        <td style="z-index:3; ">${t.costoMOlote}</td>
                        <td style="z-index:3; ">${t.tasaAsignacionTabla}</td>
                        <td style="z-index:3; ">${t.costosidirectoslote}</td>
                        <td style="z-index:3; " id="actionButtons">
                            <button id="editButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f8f00"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg></button> 
                            <button @click=${()=>this.eliminarElemento(t.id)} id="deleteButton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                        </td>
                    
                    </tr>
                `)}

            </table>
        `}}$(Lt,"styles",P`
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


   
    
    `);customElements.define("tabla-informe-lote",Lt);const vt="https://665630689f970b3b36c49525.mockapi.io/manoDeObra";class jt extends b{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await H(vt),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${vt}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}render(){return y`
            
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

                ${this.datosAPI.map(t=>y`
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
        `}}$(jt,"styles",P`

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


   
    
    `);customElements.define("tabla-obra",jt);
