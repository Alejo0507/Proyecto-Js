var gt=Object.defineProperty;var vt=(i,t,e)=>t in i?gt(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var k=(i,t,e)=>(vt(i,typeof t!="symbol"?t+"":t,e),e);import"./boostrap-7eaMPqHh.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,V=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),J=new WeakMap;let lt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&J.set(e,t))}return t}toString(){return this.cssText}};const At=i=>new lt(typeof i=="string"?i:i+"",void 0,W),O=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((o,s,n)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[n+1],i[0]);return new lt(e,i,W)},wt=(i,t)=>{if(V)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const o=document.createElement("style"),s=B.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=e.cssText,i.appendChild(o)}},K=V?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return At(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xt,defineProperty:_t,getOwnPropertyDescriptor:kt,getOwnPropertyNames:Et,getOwnPropertySymbols:Pt,getPrototypeOf:It}=Object,f=globalThis,G=f.trustedTypes,St=G?G.emptyScript:"",z=f.reactiveElementPolyfillSupport,P=(i,t)=>i,Y={toAttribute(i,t){switch(t){case Boolean:i=i?St:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},dt=(i,t)=>!xt(i,t),Q={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:dt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),f.litPropertyMetadata??(f.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,e);s!==void 0&&_t(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){const{get:s,set:n}=kt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return s==null?void 0:s.call(this)},set(r){const c=s==null?void 0:s.call(this);n.call(this,r),this.requestUpdate(t,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Q}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=It(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,o=[...Et(e),...Pt(e)];for(const s of o)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[o,s]of e)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const s=this._$Eu(e,o);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)e.unshift(K(s))}else t!==void 0&&e.push(K(t));return e}static _$Eu(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostConnected)==null?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var o;return(o=e.hostDisconnected)==null?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EC(t,e){var n;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:Y).toAttribute(e,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){var n;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:Y;this._$Em=s,this[s]=c.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??dt)(this[t],e))return;this.P(t,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,o){this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,r]of this._$Ep)this[n]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,r]of s)r.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(o=this._$EO)==null||o.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[P("elementProperties")]=new Map,w[P("finalized")]=new Map,z==null||z({ReactiveElement:w}),(f.reactiveElementVersions??(f.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,N=I.trustedTypes,X=N?N.createPolicy("lit-html",{createHTML:i=>i}):void 0,ct="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,ht="?"+m,Ct=`<${ht}>`,A=document,S=()=>A.createComment(""),C=i=>i===null||typeof i!="object"&&typeof i!="function",pt=Array.isArray,Ut=i=>pt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",L=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,g=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,st=/"/g,ut=/^(?:script|style|textarea|title)$/i,Tt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),$=Tt(1),x=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),it=new WeakMap,v=A.createTreeWalker(A,129);function bt(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(t):t}const Mt=(i,t)=>{const e=i.length-1,o=[];let s,n=t===2?"<svg>":"",r=E;for(let c=0;c<e;c++){const a=i[c];let h,d,l=-1,b=0;for(;b<a.length&&(r.lastIndex=b,d=r.exec(a),d!==null);)b=r.lastIndex,r===E?d[1]==="!--"?r=tt:d[1]!==void 0?r=et:d[2]!==void 0?(ut.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=g):d[3]!==void 0&&(r=g):r===g?d[0]===">"?(r=s??E,l=-1):d[1]===void 0?l=-2:(l=r.lastIndex-d[2].length,h=d[1],r=d[3]===void 0?g:d[3]==='"'?st:ot):r===st||r===ot?r=g:r===tt||r===et?r=E:(r=g,s=void 0);const u=r===g&&i[c+1].startsWith("/>")?" ":"";n+=r===E?a+Ct:l>=0?(o.push(h),a.slice(0,l)+ct+a.slice(l)+m+u):a+m+(l===-2?c:u)}return[bt(i,n+(i[e]||"<?>")+(t===2?"</svg>":"")),o]};class U{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let n=0,r=0;const c=t.length-1,a=this.parts,[h,d]=Mt(t,e);if(this.el=U.createElement(h,o),v.currentNode=this.el.content,e===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=v.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ct)){const b=d[r++],u=s.getAttribute(l).split(m),M=/([.?@])?(.*)/.exec(b);a.push({type:1,index:n,name:M[2],strings:u,ctor:M[1]==="."?Nt:M[1]==="?"?Ot:M[1]==="@"?Dt:D}),s.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:n}),s.removeAttribute(l));if(ut.test(s.tagName)){const l=s.textContent.split(m),b=l.length-1;if(b>0){s.textContent=N?N.emptyScript:"";for(let u=0;u<b;u++)s.append(l[u],S()),v.nextNode(),a.push({type:2,index:++n});s.append(l[b],S())}}}else if(s.nodeType===8)if(s.data===ht)a.push({type:2,index:n});else{let l=-1;for(;(l=s.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:n}),l+=m.length-1}n++}}static createElement(t,e){const o=A.createElement("template");return o.innerHTML=t,o}}function _(i,t,e=i,o){var r,c;if(t===x)return t;let s=o!==void 0?(r=e._$Co)==null?void 0:r[o]:e._$Cl;const n=C(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),n===void 0?s=void 0:(s=new n(i),s._$AT(i,e,o)),o!==void 0?(e._$Co??(e._$Co=[]))[o]=s:e._$Cl=s),s!==void 0&&(t=_(i,s._$AS(i,t.values),s,o)),t}class Bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,s=((t==null?void 0:t.creationScope)??A).importNode(e,!0);v.currentNode=s;let n=v.nextNode(),r=0,c=0,a=o[0];for(;a!==void 0;){if(r===a.index){let h;a.type===2?h=new T(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new Ht(n,this,t)),this._$AV.push(h),a=o[++c]}r!==(a==null?void 0:a.index)&&(n=v.nextNode(),r++)}return v.currentNode=A,s}p(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class T{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,o,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_(this,t,e),C(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ut(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==p&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=U.createElement(bt(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(e);else{const r=new Bt(s,this),c=r.u(this.options);r.p(e),this.T(c),this._$AH=r}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new U(t)),e}k(t){pt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const n of t)s===e.length?e.push(o=new T(this.S(S()),this.S(S()),this,this.options)):o=e[s],o._$AI(n),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class D{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}_$AI(t,e=this,o,s){const n=this.strings;let r=!1;if(n===void 0)t=_(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==x,r&&(this._$AH=t);else{const c=t;let a,h;for(t=n[0],a=0;a<n.length-1;a++)h=_(this,c[o+a],e,a),h===x&&(h=this._$AH[a]),r||(r=!C(h)||h!==this._$AH[a]),h===p?t=p:t!==p&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}r&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nt extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ot extends D{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Dt extends D{constructor(t,e,o,s,n){super(t,e,o,s,n),this.type=5}_$AI(t,e=this){if((t=_(this,t,e,0)??p)===x)return;const o=this._$AH,s=t===p&&o!==p||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==p&&(o===p||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){_(this,t)}}const R=I.litHtmlPolyfillSupport;R==null||R(U,T),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.1.3");const qt=(i,t,e)=>{const o=(e==null?void 0:e.renderBefore)??t;let s=o._$litPart$;if(s===void 0){const n=(e==null?void 0:e.renderBefore)??null;o._$litPart$=s=new T(t.insertBefore(S(),n),n,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class y extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=qt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}var at;y._$litElement$=!0,y.finalized=!0,(at=globalThis.litElementHydrateSupport)==null||at.call(globalThis,{LitElement:y});const Z=globalThis.litElementPolyfillSupport;Z==null||Z({LitElement:y});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");async function H(i){try{const t=await fetch(i);if(!t.ok)throw new Error("Error al obtener los datos de la API");return await t.json()}catch(t){throw console.error("Error al obtener los datos:",t),t}}const j="https://665630689f970b3b36c49525.mockapi.io/materiaPrima";class mt extends y{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await H(j),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${j}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}editarElemento(t){const e=this.datosAPI.find(u=>u.id===t),o=prompt("Ingrese el nuevo nombre:",e.nombre);let s;for(;;)if(s=prompt("Ingrese la nueva fecha de adquisicion (YYYY-MM-DD):",e.fechaDeAdquisicion),s!==null&&!isNaN(Date.parse(s))){s=new Date(s).toISOString().split("T")[0];break}else alert("Por favor ingrese una fecha válida en formato YYYY-MM-DD.");let n;for(;;)if(n=prompt("Ingrese la nueva fecha de vencimiento (YYYY-MM-DD):",e.fechaVencimiento),n!==null&&!isNaN(Date.parse(n))){n=new Date(n).toISOString().split("T")[0];break}else alert("Por favor ingrese una fecha válida en formato YYYY-MM-DD.");let r;for(;;)if(r=prompt("Ingrese el nuevo costo por unidad:",e.costoUnidad),r!==null&&!isNaN(r)&&r.trim()!==""){r=parseFloat(r);break}else alert("Por favor ingrese un número válido para el costoUnidad.");const c=prompt("Ingrese el nuevo proveedor:",e.proveedor),a=prompt("Ingrese la nueva descripcion:",e.descripcion),h=prompt("Ingrese la nueva unidad de medida:",e.unidadMedida);let d;for(;;)if(d=prompt("Ingrese la nueva cantidad:",e.cantidad),d!==null&&!isNaN(d)&&d.trim()!==""){d=parseFloat(d);break}else alert("Por favor ingrese un número válido para el cantidad.");const l=prompt("Ingrese la nueva categoría:",e.categoria),b=prompt("Ingrese la nueva ubicacion:",e.ubicacion);o===null||s===null||(e.nombre=o,e.fechaDeAdquisicion=s,e.fechaVencimiento=n,e.costoUnidad=r,e.proveedor=c,e.descripcion=a,e.unidadMedida=h,e.cantidad=d,e.categoria=l,e.ubicacion=b,fetch(`${j}/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(u=>{if(!u.ok)throw new Error("No se pudo actualizar el elemento en el mock API");this.fetchDataFromAPI()}).catch(u=>{console.error("Error al actualizar el elemento en el mock API:",u)}))}render(){return $`
            
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

                ${this.datosAPI.map(t=>$`
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
        `}}k(mt,"styles",O`
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
    
   
    
    `);customElements.define("tabla-informe",mt);const rt="https://66586d8e5c36170526486c75.mockapi.io/lotes";class ft extends y{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await H(rt),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${rt}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}render(){return $`
            
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
                ${this.datosAPI.map(t=>$`
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
        `}}k(ft,"styles",O`
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


   
    
    `);customElements.define("tabla-informe-lote",ft);const F="https://664a2109a300e8795d41126f.mockapi.io/api/1/costosindirectos";class yt extends y{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await H(F),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${F}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}editarElemento(t){const e=this.datosAPI.find(r=>r.id===t),o=prompt("Ingrese el nuevo tipo de costo:",e.tipoCosto);let s;for(;;)if(s=prompt("Ingrese el nuevo valor:",e.valor),s!==null&&!isNaN(s)&&s.trim()!==""){s=parseFloat(s);break}else alert("Por favor ingrese un número válido para el valor.");const n=prompt("Ingrese la nueva descripcion:",e.descripcion);s===null||o===null||n===null||(e.tipoCosto=o,e.valor=s,e.descripcion=n,fetch(`${F}/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(r=>{if(!r.ok)throw new Error("No se pudo actualizar el elemento en el mock API");this.fetchDataFromAPI()}).catch(r=>{console.error("Error al actualizar el elemento en el mock API:",r)}))}render(){return $`

            
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
                ${this.datosAPI.map(t=>$`
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
        `}}k(yt,"styles",O`
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

   
    
    `);customElements.define("tabla-informe-costo",yt);const nt="https://665630689f970b3b36c49525.mockapi.io/manoDeObra";class $t extends y{constructor(){super(),this.datosAPI=[]}connectedCallback(){super.connectedCallback(),this.fetchDataFromAPI()}async fetchDataFromAPI(){try{this.datosAPI=await H(nt),this.requestUpdate()}catch(t){console.error("Error al obtener los datos:",t)}}eliminarElemento(t){const e=[...this.datosAPI];this.datosAPI=this.datosAPI.filter(o=>o.id!==t),this.requestUpdate(),fetch(`${nt}/${t}`,{method:"DELETE"}).then(o=>{if(!o.ok)throw new Error("No se pudo eliminar el elemento del mock API");this.requestUpdate()}).catch(o=>{console.error("Error al eliminar el elemento del mock API:",o),this.datosAPI=e,this.requestUpdate()})}render(){return $`
            
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

                ${this.datosAPI.map(t=>$`
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
        `}}k($t,"styles",O`
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


   
    
    `);customElements.define("tabla-obra",$t);const q=i=>{const t=document.getElementById("info1"),e=document.getElementById("info2"),o=document.getElementById("info3");t.style.display="none",e.style.display="none",o.style.display="none",i.style.display="flex"},zt=document.querySelector("tabla-informe").shadowRoot,Lt=zt.getElementById("tablaMp"),Rt=document.getElementById("informeuno");Rt.addEventListener("click",()=>{q(Lt)});const Zt=document.getElementById("informedos"),jt=document.querySelector("tabla-informe-lote").shadowRoot,Ft=jt.getElementById("tablaL");Zt.addEventListener("click",()=>{q(Ft)});const Yt=document.getElementById("informetres"),Vt=document.querySelector("tabla-informe-costo").shadowRoot,Wt=Vt.getElementById("TablaC");Yt.addEventListener("click",()=>{q(Wt)});const Jt=document.querySelector("tabla-obra").shadowRoot,Kt=Jt.getElementById("tablaO"),Gt=document.getElementById("informecuatro");Gt.addEventListener("click",()=>{q(Kt)});
