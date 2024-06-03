var Me=Object.defineProperty;var De=(n,e,t)=>e in n?Me(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var L=(n,e,t)=>(De(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Ue=(n,e)=>n/e,me=(n,e)=>n/e*100+"%",fe=(n,e)=>n-e,ye=(n,e)=>n/e;document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("calcular-productividad"),e=document.querySelector("calc-eficiencia").shadowRoot,t=e.getElementById("myModal"),o=e.getElementById("closeModalBtn"),s=e.getElementById("calcForm"),i=e.getElementById("form-container"),r=e.getElementById("resultado-container"),l=e.getElementById("resultado");n.addEventListener("click",()=>{t.style.display="flex"}),o.addEventListener("click",()=>{t.style.display="none",s.reset(),i.style.display="block",r.style.display="none"}),s.addEventListener("submit",a=>{a.preventDefault();const d=e.getElementById("total").value;e.getElementById("horas").value;const u=e.getElementById("costos").value,c=e.getElementById("defectos").value,m=fe(d,c),h=ye(m,u),f=me(c,d);console.log(f),i.style.display="none",r.style.display="flex",l.textContent=h.toFixed(2)})});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,W=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),ee=new WeakMap;let ge=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(W&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&ee.set(t,e))}return e}toString(){return this.cssText}};const ke=n=>new ge(typeof n=="string"?n:n+"",void 0,J),ve=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((o,s,i)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[i+1],n[0]);return new ge(t,n,J)},je=(n,e)=>{if(W)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const o=document.createElement("style"),s=D.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,n.appendChild(o)}},te=W?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return ke(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Le,defineProperty:He,getOwnPropertyDescriptor:Re,getOwnPropertyNames:Ne,getOwnPropertySymbols:ze,getPrototypeOf:Fe}=Object,g=globalThis,oe=g.trustedTypes,qe=oe?oe.emptyScript:"",H=g.reactiveElementPolyfillSupport,B=(n,e)=>n,V={toAttribute(n,e){switch(e){case Boolean:n=n?qe:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},be=(n,e)=>!Le(n,e),se={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:be};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&He(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:i}=Re(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get(){return s==null?void 0:s.call(this)},set(r){const l=s==null?void 0:s.call(this);i.call(this,r),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;const e=Fe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){const t=this.properties,o=[...Ne(t),...ze(t)];for(const s of o)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[t,o]of this.elementProperties){const s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)t.unshift(te(s))}else e!==void 0&&t.push(te(e));return t}static _$Eu(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return je(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostConnected)==null?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var o;return(o=t.hostDisconnected)==null?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){var i;const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const r=(((i=o.converter)==null?void 0:i.toAttribute)!==void 0?o.converter:V).toAttribute(t,o.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){var i;const o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)==null?void 0:i.fromAttribute)!==void 0?r.converter:V;this._$Em=s,this[s]=l.fromAttribute(t,r.type),this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??be)(this[e],t))return;this.P(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,r]of s)r.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(o=this._$EO)==null||o.forEach(s=>{var i;return(i=s.hostUpdate)==null?void 0:i.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdated)==null?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[B("elementProperties")]=new Map,E[B("finalized")]=new Map,H==null||H({ReactiveElement:E}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,U=P.trustedTypes,ne=U?U.createPolicy("lit-html",{createHTML:n=>n}):void 0,$e="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,Ee="?"+y,Ve=`<${Ee}>`,$=document,C=()=>$.createComment(""),I=n=>n===null||typeof n!="object"&&typeof n!="function",_e=Array.isArray,We=n=>_e(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",R=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ie=/-->/g,re=/>/g,v=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ae=/'/g,le=/"/g,Ae=/^(?:script|style|textarea|title)$/i,Je=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),xe=Je(1),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ce=new WeakMap,b=$.createTreeWalker($,129);function Se(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ne!==void 0?ne.createHTML(e):e}const Ke=(n,e)=>{const t=n.length-1,o=[];let s,i=e===2?"<svg>":"",r=w;for(let l=0;l<t;l++){const a=n[l];let d,u,c=-1,m=0;for(;m<a.length&&(r.lastIndex=m,u=r.exec(a),u!==null);)m=r.lastIndex,r===w?u[1]==="!--"?r=ie:u[1]!==void 0?r=re:u[2]!==void 0?(Ae.test(u[2])&&(s=RegExp("</"+u[2],"g")),r=v):u[3]!==void 0&&(r=v):r===v?u[0]===">"?(r=s??w,c=-1):u[1]===void 0?c=-2:(c=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?v:u[3]==='"'?le:ae):r===le||r===ae?r=v:r===ie||r===re?r=w:(r=v,s=void 0);const h=r===v&&n[l+1].startsWith("/>")?" ":"";i+=r===w?a+Ve:c>=0?(o.push(d),a.slice(0,c)+$e+a.slice(c)+y+h):a+y+(c===-2?l:h)}return[Se(n,i+(n[t]||"<?>")+(e===2?"</svg>":"")),o]};class T{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let i=0,r=0;const l=e.length-1,a=this.parts,[d,u]=Ke(e,t);if(this.el=T.createElement(d,o),b.currentNode=this.el.content,t===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=b.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith($e)){const m=u[r++],h=s.getAttribute(c).split(y),f=/([.?@])?(.*)/.exec(m);a.push({type:1,index:i,name:f[2],strings:h,ctor:f[1]==="."?Ze:f[1]==="?"?Qe:f[1]==="@"?Xe:k}),s.removeAttribute(c)}else c.startsWith(y)&&(a.push({type:6,index:i}),s.removeAttribute(c));if(Ae.test(s.tagName)){const c=s.textContent.split(y),m=c.length-1;if(m>0){s.textContent=U?U.emptyScript:"";for(let h=0;h<m;h++)s.append(c[h],C()),b.nextNode(),a.push({type:2,index:++i});s.append(c[m],C())}}}else if(s.nodeType===8)if(s.data===Ee)a.push({type:2,index:i});else{let c=-1;for(;(c=s.data.indexOf(y,c+1))!==-1;)a.push({type:7,index:i}),c+=y.length-1}i++}}static createElement(e,t){const o=$.createElement("template");return o.innerHTML=e,o}}function x(n,e,t=n,o){var r,l;if(e===A)return e;let s=o!==void 0?(r=t._$Co)==null?void 0:r[o]:t._$Cl;const i=I(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),i===void 0?s=void 0:(s=new i(n),s._$AT(n,t,o)),o!==void 0?(t._$Co??(t._$Co=[]))[o]=s:t._$Cl=s),s!==void 0&&(e=x(n,s._$AS(n,e.values),s,o)),e}class Ge{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=((e==null?void 0:e.creationScope)??$).importNode(t,!0);b.currentNode=s;let i=b.nextNode(),r=0,l=0,a=o[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new O(i,i.nextSibling,this,e):a.type===1?d=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(d=new Ye(i,this,e)),this._$AV.push(d),a=o[++l]}r!==(a==null?void 0:a.index)&&(i=b.nextNode(),r++)}return b.currentNode=$,s}p(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class O{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=x(this,e,t),I(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):We(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==p&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T($.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=T.createElement(Se(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(t);else{const r=new Ge(s,this),l=r.u(this.options);r.p(t),this.T(l),this._$AH=r}}_$AC(e){let t=ce.get(e.strings);return t===void 0&&ce.set(e.strings,t=new T(e)),t}k(e){_e(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const i of e)s===t.length?t.push(o=new O(this.S(C()),this.S(C()),this,this.options)):o=t[s],o._$AI(i),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}_$AI(e,t=this,o,s){const i=this.strings;let r=!1;if(i===void 0)e=x(this,e,t,0),r=!I(e)||e!==this._$AH&&e!==A,r&&(this._$AH=e);else{const l=e;let a,d;for(e=i[0],a=0;a<i.length-1;a++)d=x(this,l[o+a],t,a),d===A&&(d=this._$AH[a]),r||(r=!I(d)||d!==this._$AH[a]),d===p?e=p:e!==p&&(e+=(d??"")+i[a+1]),this._$AH[a]=d}r&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ze extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Qe extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Xe extends k{constructor(e,t,o,s,i){super(e,t,o,s,i),this.type=5}_$AI(e,t=this){if((e=x(this,e,t,0)??p)===A)return;const o=this._$AH,s=e===p&&o!==p||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==p&&(o===p||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ye{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}}const N=P.litHtmlPolyfillSupport;N==null||N(T,O),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.1.3");const et=(n,e,t)=>{const o=(t==null?void 0:t.renderBefore)??e;let s=o._$litPart$;if(s===void 0){const i=(t==null?void 0:t.renderBefore)??null;o._$litPart$=s=new O(e.insertBefore(C(),i),i,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _ extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=et(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return A}}var he;_._$litElement$=!0,_.finalized=!0,(he=globalThis.litElementHydrateSupport)==null||he.call(globalThis,{LitElement:_});const z=globalThis.litElementPolyfillSupport;z==null||z({LitElement:_});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");class we extends _{constructor(){super()}render(){return xe`
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
        `}}L(we,"styles",ve`
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
    `);customElements.define("calc-eficiencia",we);class Be extends _{constructor(){super()}render(){return xe`
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
        `}}L(Be,"styles",ve`
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

    `);customElements.define("calc-obra",Be);const tt="https://664a2109a300e8795d41126f.mockapi.io/api/1/costosindirectos",ot=(n,e)=>n/e;async function st(){try{const n=await fetch(tt,{method:"GET"});if(!n.ok)throw new Error("Error al obtener los datos de la API");const e=await n.json();let t=0;for(const o of e){const s=parseFloat(o.valor);t+=isNaN(s)?0:s}return console.log("La suma de todos los valores es:",t),t}catch(n){throw console.error("Error:",n),n}}const nt=(n,e)=>n*e,it=(n,e,t)=>n*e*t,rt=(n,e,t)=>n+e+t,at=(n,e)=>n*e,lt=n=>n.toLocaleString("es-CO",{style:"currency",currency:"COP"}).replace(/COP\s/,""),K=(n,e,t)=>{fetch(n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(o=>{if(o.ok)return o.json()}).catch(o=>{console.log("No se pudo enviar los datos")}),t.reset()};let M,F,q;const ct="https://665630689f970b3b36c49525.mockapi.io/manoDeObra";document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("calc-eficiencia").shadowRoot;n.getElementById("calcForm").addEventListener("submit",()=>{M=n.getElementById("total").value,F=n.getElementById("costos").value,q=n.getElementById("defectos").value});const t=document.getElementById("calcularManoDeObra"),o=document.querySelector("calc-obra").shadowRoot,s=o.getElementById("myModal"),i=o.getElementById("closeModalBtn"),r=o.getElementById("calcForm"),l=o.getElementById("form-container"),a=o.getElementById("resultado-container"),d=o.getElementById("resultado");t.addEventListener("click",()=>{s.style.display="flex"}),i.addEventListener("click",()=>{s.style.display="none",r.reset(),l.style.display="block",a.style.display="none"}),r.addEventListener("submit",u=>{u.preventDefault();const c=o.getElementById("totalEmpleados").value,m=o.getElementById("salarioBase").value,h=o.getElementById("horasTrabajadas").value,f=o.getElementById("beneficios").value,G=fe(M,q),Ce=ye(G,F),Ie=Ue(F,M),Z=ot(m,h),Q=it(Z,h,c),X=nt(f,c);st().then(S=>{console.log(S);const Te=me(q,M),Y=rt(Q,X,S),Oe=at(h,c);l.style.display="none",a.style.display="flex",d.textContent=lt(Y),fetch(ct,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({empleados:c,productividadEfectiva:G,costosOperativosUnd:Ie,tasaDeDefectos:Te,eficienciaOperativa:Ce,salarioPorHora:Z,horasTrabajadas:Oe,costosIndirectosTotales:S,beneficiosTotales:X,salarioTotal:Q,manoDeObraTotal:Y})}).then(j=>{if(j.ok)return j.json()}).catch(j=>{console.log("No se pudo enviar los datos")})}).catch(S=>{console.error("Error al calcular costos indirectos totales:",S)})})});const dt="https://665630689f970b3b36c49525.mockapi.io/materiaPrima",de=document.getElementById("mpForm");de.addEventListener("submit",n=>{n.preventDefault();let e={idMateriaPrima:document.getElementById("idMp").value,nombre:document.getElementById("nombre").value,fechaDeAdquisicion:document.getElementById("fechaAdqui").value,fechaDeVencimiento:document.getElementById("fechaVenci").value,costoUnidad:document.getElementById("costoUnidad").value,proveedor:document.getElementById("proveedor").value,descripcion:document.getElementById("descripcion").value,unidadMedida:document.getElementById("unidadMedida").value,cantidad:document.getElementById("cantidad").value,categoria:document.getElementById("categoria").value,ubicacion:document.getElementById("ubicacion").value};K(dt,e,de)});const ut=document.getElementById("inventario"),pt=document.getElementById("inventoryDiv"),ht=document.getElementById("prodDiv"),mt=document.getElementById("prodDiv"),ft=document.getElementById("mpForm");ut.addEventListener("click",()=>{pt.style.display="none",ht.style.display="none",mt.style.display="none",ft.style.display="flex"});const yt=document.getElementById("produccion"),gt=document.getElementById("inventoryDiv"),vt=document.getElementById("prodDiv"),bt=document.getElementById("prodDiv"),$t=document.getElementById("productForm");yt.addEventListener("click",()=>{gt.style.display="none",vt.style.display="none",bt.style.display="none",$t.style.display="flex"});const Et=document.getElementById("Costos-indirectos"),_t=document.getElementById("inventoryDiv"),At=document.getElementById("prodDiv"),xt=document.getElementById("prodDiv"),St=document.getElementById("costoForm");Et.addEventListener("click",()=>{_t.style.display="none",At.style.display="none",xt.style.display="none",St.style.display="flex"});const Pe=[{nombre:"Camisa manga Larga",hilos:50,botones:6,telas:3,id:"1",horas:4,trabajadores:4},{nombre:"Camisa manga Corta",hilos:45,botones:6,telas:2,id:"2",horas:3,trabajadores:4},{nombre:"Vestido Largo",hilos:20,botones:1,telas:5,sierres:1,lentejuelas:100,cauchos:2,encajes:12,"costo-unidad":0,id:"6",horas:1,trabajadores:4},{nombre:"Vestido Corto",hilos:15,botones:1,telas:4,sierres:1,lentejuelas:50,cauchos:2,encajes:8,"costo-unidad":0,id:"4",horas:5,trabajadores:4},{nombre:"Pantalon de Vestir",hilos:20,botones:3,telas:3,sierres:1,cauchos:1,"costo-unidad":0,id:"5",horas:4,trabajadores:4},{nombre:"Pantalon de Jean",hilos:20,botones:1,telas:3,sierres:1,"costo-unidad":0,id:"6",horas:3,trabajadores:4},{nombre:"Short",hilos:12,botones:2,telas:2,sierres:1,id:"7",horas:2,trabajadores:4}];function wt(n,e){let t={};return n.forEach(o=>{const s=Pe.find(i=>i.nombre===o);if(s)for(const i in s)i!=="nombre"&&i!=="id"&&i!=="costo-unidad"&&i!=="horas"&&i!=="trabajadores"&&(t.hasOwnProperty(i)||(t[i]=0),t[i]+=s[i]*e)}),t}function Bt(n){return fetch("https://665630689f970b3b36c49525.mockapi.io/materiaPrima").then(e=>{if(e.ok)return e.json();throw new Error("Error al obtener los datos de materia prima de la API")}).then(e=>{let t={...n},o=null;e.forEach(i=>{for(const r in t)if(r!=="horas"&&r!=="trabajadores"&&i.categoria.toLowerCase()===r&&t[r]>0){const l=Math.min(t[r],parseInt(i.cantidad));i.cantidad-=l,t[r]-=l,t[r]===0&&delete t[r];break}});for(const i in t){o=i;break}if(o)return alert(`No hay suficiente stock de ${o} para la producción.`),Promise.reject(new Error(`Stock insuficiente de ${o}`));const s=e.map(i=>{const r=JSON.stringify(i);return console.log("Datos a enviar en PUT:",r),fetch(`https://665630689f970b3b36c49525.mockapi.io/materiaPrima/${i.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:r}).then(l=>{if(l.ok)console.log(`Datos de materia prima con id ${i.id} actualizados correctamente`);else return l.json().then(a=>{throw console.error(`Error al actualizar los datos de materia prima con id ${i.id}:`,a),new Error(`Error al actualizar los datos de materia prima con id ${i.id}`)})}).catch(l=>{throw console.error("Ocurrió un error:",l),l})});return Promise.all(s)}).catch(e=>(console.error("Ocurrió un error:",e),Promise.reject(e)))}const Pt=(n,e)=>n*e,Ct="https://66586d8e5c36170526486c75.mockapi.io/lotes",It="https://665630689f970b3b36c49525.mockapi.io/manoDeObra",ue=document.getElementById("productForm");ue.addEventListener("submit",async n=>{n.preventDefault();const e=document.getElementById("producto").value,t=parseInt(document.getElementById("cantidadproductos").value),o=document.getElementById("productosmes").value;try{let s=Tt(e,t);console.log("Horas Trabajadas:",s);const i=await fetch(It);if(!i.ok)throw new Error("Error al obtener el salario de la API");const r=await i.json(),l=r[r.length-1].salarioPorHora,a=wt([e],t),d=Pt(s,l);await Bt(a),K(Ct,{producto:e,cantidad:t,baseasignacion:o,horastrabajadas:s,costoMOlote:d},ue)}catch(s){console.error("Error:",s)}});function Tt(n,e){const t=Pe.find(o=>o.nombre===n);return console.log("Prenda:",t),t&&t.horas?t.horas*e:0}document.getElementById("cantidadproductos");const Ot="https://664a2109a300e8795d41126f.mockapi.io/api/1/costosindirectos",pe=document.getElementById("costoForm");pe.addEventListener("submit",n=>{n.preventDefault();let e={tipoCosto:document.getElementById("nombre-costo").value,valor:document.getElementById("valor-costo").value,descripcion:document.getElementById("descripcion-costo").value};K(Ot,e,pe)});
