var he=Object.defineProperty;var pe=(o,e,t)=>e in o?he(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var T=(o,e,t)=>(pe(o,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,q=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),F=new WeakMap;let te=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(q&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=F.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&F.set(t,e))}return e}toString(){return this.cssText}};const ue=o=>new te(typeof o=="string"?o:o+"",void 0,j),ie=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new te(t,o,j)},me=(o,e)=>{if(q)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=H.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,o.appendChild(s)}},V=q?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return ue(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:fe,defineProperty:$e,getOwnPropertyDescriptor:ye,getOwnPropertyNames:_e,getOwnPropertySymbols:ge,getPrototypeOf:be}=Object,$=globalThis,W=$.trustedTypes,Ae=W?W.emptyScript:"",B=$.reactiveElementPolyfillSupport,S=(o,e)=>o,z={toAttribute(o,e){switch(e){case Boolean:o=o?Ae:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},se=(o,e)=>!fe(o,e),K={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:se};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=K){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&$e(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=ye(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const c=i==null?void 0:i.call(this);r.call(this,n),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??K}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const e=be(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const t=this.properties,s=[..._e(t),...ge(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(V(i))}else e!==void 0&&t.push(V(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return me(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){var r;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const n=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:z).toAttribute(t,s.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){var r;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:z;this._$Em=i,this[i]=c.fromAttribute(t,n.type),this._$Em=null}}requestUpdate(e,t,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??se)(this[e],t))return;this.P(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(t)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[S("elementProperties")]=new Map,b[S("finalized")]=new Map,B==null||B({ReactiveElement:b}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis,N=w.trustedTypes,J=N?N.createPolicy("lit-html",{createHTML:o=>o}):void 0,oe="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,re="?"+f,ve=`<${re}>`,g=document,C=()=>g.createComment(""),P=o=>o===null||typeof o!="object"&&typeof o!="function",ne=Array.isArray,Ee=o=>ne(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",I=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,Z=/>/g,y=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,X=/"/g,ae=/^(?:script|style|textarea|title)$/i,xe=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),le=xe(1),v=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Y=new WeakMap,_=g.createTreeWalker(g,129);function ce(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return J!==void 0?J.createHTML(e):e}const Se=(o,e)=>{const t=o.length-1,s=[];let i,r=e===2?"<svg>":"",n=x;for(let c=0;c<t;c++){const a=o[c];let d,p,l=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===x?p[1]==="!--"?n=G:p[1]!==void 0?n=Z:p[2]!==void 0?(ae.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=y):p[3]!==void 0&&(n=y):n===y?p[0]===">"?(n=i??x,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,d=p[1],n=p[3]===void 0?y:p[3]==='"'?X:Q):n===X||n===Q?n=y:n===G||n===Z?n=x:(n=y,i=void 0);const m=n===y&&o[c+1].startsWith("/>")?" ":"";r+=n===x?a+ve:l>=0?(s.push(d),a.slice(0,l)+oe+a.slice(l)+f+m):a+f+(l===-2?c:m)}return[ce(o,r+(o[t]||"<?>")+(e===2?"</svg>":"")),s]};class U{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,n=0;const c=e.length-1,a=this.parts,[d,p]=Se(e,t);if(this.el=U.createElement(d,s),_.currentNode=this.el.content,t===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=_.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(oe)){const u=p[n++],m=i.getAttribute(l).split(f),O=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:O[2],strings:m,ctor:O[1]==="."?Ce:O[1]==="?"?Pe:O[1]==="@"?Ue:R}),i.removeAttribute(l)}else l.startsWith(f)&&(a.push({type:6,index:r}),i.removeAttribute(l));if(ae.test(i.tagName)){const l=i.textContent.split(f),u=l.length-1;if(u>0){i.textContent=N?N.emptyScript:"";for(let m=0;m<u;m++)i.append(l[m],C()),_.nextNode(),a.push({type:2,index:++r});i.append(l[u],C())}}}else if(i.nodeType===8)if(i.data===re)a.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf(f,l+1))!==-1;)a.push({type:7,index:r}),l+=f.length-1}r++}}static createElement(e,t){const s=g.createElement("template");return s.innerHTML=e,s}}function E(o,e,t=o,s){var n,c;if(e===v)return e;let i=s!==void 0?(n=t._$Co)==null?void 0:n[s]:t._$Cl;const r=P(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=E(o,i._$AS(o,e.values),i,s)),e}class we{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??g).importNode(t,!0);_.currentNode=i;let r=_.nextNode(),n=0,c=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new M(r,r.nextSibling,this,e):a.type===1?d=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(d=new Me(r,this,e)),this._$AV.push(d),a=s[++c]}n!==(a==null?void 0:a.index)&&(r=_.nextNode(),n++)}return _.currentNode=g,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class M{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),P(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==v&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ee(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==h&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(g.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=U.createElement(ce(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(t);else{const n=new we(i,this),c=n.u(this.options);n.p(t),this.T(c),this._$AH=n}}_$AC(e){let t=Y.get(e.strings);return t===void 0&&Y.set(e.strings,t=new U(e)),t}k(e){ne(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new M(this.S(C()),this.S(C()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(e,t=this,s,i){const r=this.strings;let n=!1;if(r===void 0)e=E(this,e,t,0),n=!P(e)||e!==this._$AH&&e!==v,n&&(this._$AH=e);else{const c=e;let a,d;for(e=r[0],a=0;a<r.length-1;a++)d=E(this,c[s+a],t,a),d===v&&(d=this._$AH[a]),n||(n=!P(d)||d!==this._$AH[a]),d===h?e=h:e!==h&&(e+=(d??"")+r[a+1]),this._$AH[a]=d}n&&!i&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ce extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class Pe extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class Ue extends R{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??h)===v)return;const s=this._$AH,i=e===h&&s!==h||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Me{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const k=w.litHtmlPolyfillSupport;k==null||k(U,M),(w.litHtmlVersions??(w.litHtmlVersions=[])).push("3.1.3");const Oe=(o,e,t)=>{const s=(t==null?void 0:t.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const r=(t==null?void 0:t.renderBefore)??null;s._$litPart$=i=new M(e.insertBefore(C(),r),r,void 0,t??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class A extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return v}}var ee;A._$litElement$=!0,A.finalized=!0,(ee=globalThis.litElementHydrateSupport)==null||ee.call(globalThis,{LitElement:A});const L=globalThis.litElementPolyfillSupport;L==null||L({LitElement:A});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");class D extends A{constructor(){super()}openModal(){const e=this.shadowRoot.getElementById("myModal");e.style.display="flex"}closeModal(){const e=this.shadowRoot.getElementById("myModal");e.style.display="none"}render(){return le`
        <button @click=${this.openModal} id="openModalBtn">Abrir Modal</button>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span @click=${this.closeModal} id="closeModalBtn" class="close">&times;</span>
                <p>
                    <h2>Gestión de materia prima</h2>
                        <form id="mpForm">

                            <label for="idmateria">Id Materia Prima:</label>
                            <input type="number" id="idmateria" name="idMateriaPrima" required><br><br>
                            
                            <label for="nombre">nombre</label>
                            <input type="text" id="nombre" name="nombre" required><br><br>
            
                            <label for="Descripcion">Descripcion:</label><br>
                            <textarea id="descripcion" name="descripcion" rows="4" cols="50" required></textarea><br><br>
                    
                            <label for="categoria">Categoria</label>
                            <input type="text" id="categoria" name="categoria" required><br><br>
                    
                            <label for="proveedor">proveedor</label>
                            <input type="text" id="proveedor" name="proveedor" required><br><br>
                    
                            <label for="costoUnidad">Costo por unidad</label>
                            <input type="number" id="costoUnidad" name="costoUnidad" required><br><br>
                    
                            <label for="medida">Unidad de medida</label>
                            <input type="text" id="medida" name="unidadDeMedida" required><br><br>
                    
                            <label for="stock">Cantidad de stock</label>
                            <input type="number" id="stock" name="stock" required><br><br>
                    
                            <label for="fechaIngreso">Fecha de adquisicion</label>
                            <input type="date" id="fechaIngreso" name="fechaIngreso" required><br><br>
                    
                            <label for="vencimiento">Fecha de vencimiento (si aplica)</label>
                            <input type="date" id="vencimiento" name="fechaVencimiento"><br><br>
                    
                            <label for="Ubicacion">Ubicacion en el almacen</label>
                            <input type="text" id="ubicacion" name="ubicacion" required><br><br>
                    
                            <label for="adicional">Notas adicionales</label>
                            <input type="text" id="adicional" name="adicional" required><br><br>
                    
                    
                            <input type="submit" value="Enviar">
                        </form>
                    </h2>
                </p>
            </div>
        </div>     
        `}}T(D,"properties",{}),T(D,"styles",ie`

    .modal-content {
        display: flex;
        align-items: center;
        flex-direction: column;

    }

    #calcProdForm {
        display: flex;
        gap: 20px;
    }

    .cantidad-productos-container, .horas-totales-container {
        display: flex;
        flex-direction: column;
        width: 20rem;
        align-items: center;
        gap: 5px;
        font-size: 20px;
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
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
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
    `);customElements.define("materia-form",D);document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("calcular-productividad"),e=document.querySelector("calc-productividad").shadowRoot,t=e.getElementById("myModal"),s=e.getElementById("closeModalBtn"),i=e.getElementById("calcForm"),r=e.getElementById("form-container"),n=e.getElementById("resultado-container"),c=e.getElementById("resultado");o.addEventListener("click",()=>{t.style.display="flex"}),s.addEventListener("click",()=>{t.style.display="none",i.reset(),r.style.display="block",n.style.display="none"}),i.addEventListener("submit",a=>{a.preventDefault(),e.getElementById("total").value,e.getElementById("horas").value,e.getElementById("costos").value,e.getElementById("defectuosos").value,r.style.display="none",n.style.display="flex",c.textContent=resultadoCalc})});class de extends A{constructor(){super()}render(){return le`
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span id="closeModalBtn" class="close">&times;</span>
                <p>
                    <h1>Calcular productividad</h1>
                    <form id="calcProdForm">
                        <div class="cantidad-productos-container">
                            <label for="totalProductos">Cantidad total de productos terminados</label>
                            <input type="number" name="totalProductos">
                        </div>

                        <div class="horas-totales-container">
                            <label for="horasTotProduct">Horas totales de producción</label>
                            <input type="number" name="horasTotProduct">
                        </div>

                    </form>
                </p>
            </div>
        </div>
        `}}T(de,"styles",ie`
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
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
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
    `);customElements.define("calc-eficiencia",de);document.getElementById("reg");document.getElementById("inf");
