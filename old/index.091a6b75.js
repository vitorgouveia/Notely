function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire9116;function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire9116=r),r.register("kyEFX",(function(t,o){var n,r;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"k2Uek":"index.091a6b75.js","cE9FN":"serviceWorker.js"}'));class l{onClick(e,t){e.onclick=()=>t()}hideModal(){this.modal.style.display="none"}showModal(){this.modal.style.display="block"}constructor(){i(this,"openModalButton",document.querySelector(".modal-button")),i(this,"closeModalButton",document.querySelector(".close")),i(this,"modal",document.querySelector(".modal")),i(this,"window",window),this.onClick(this.openModalButton,(()=>this.showModal())),this.onClick(this.closeModalButton,(()=>this.hideModal())),this.window.onclick=({target:e})=>{e==this.modal&&this.hideModal()}}}class a{setTheme(e){this.theme=e,localStorage.setItem("theme",e),document.body.setAttribute("data-theme",e)}cycle(){const e=Object.keys(this.availableThemes),t=document.body.getAttribute("data-theme")||this.defaultTheme;let o=e.indexOf(t)+1;return o===e.length&&(o=0),this.setTheme(e[o]),e[o]}constructor(e){i(this,"theme","red"),i(this,"defaultTheme","red"),i(this,"availableThemes",{red:"red",yellow:"yellow",green:"green"});let t=e;this.availableThemes[e]||(t=this.defaultTheme),this.setTheme(t)}}class s{createTodo(e,t,o){const n=document.querySelector("ul"),r=this.createElement("li"),i=this.createElement("input"),l=this.createElement("label"),a=t||(new Date).getTime().toString();return i.checked=o||!1,i.setAttribute("type","checkbox"),i.id=a,l.setAttribute("for",a),l.innerText=e,null==n||n.appendChild(r),r.appendChild(i),r.appendChild(l),{todoID:a}}createElement(e){return document.createElement(e)}loadTodos(){return localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")||""):[]}saveTodo(e,t,o){const n=[...this.loadTodos(),{ID:t,name:e,checked:o||!1}];localStorage.setItem("todo",JSON.stringify(n))}changeTodo(e){const t=this.loadTodos(),o=t.find((t=>t.ID===e)),n=[...t.filter((t=>t.ID!==e)),{ID:e,name:o.name,checked:!o.checked}].sort(((e,t)=>parseFloat(e.ID)-parseFloat(t.ID)));localStorage.setItem("todo",JSON.stringify(n))}constructor(){i(this,"form",document.querySelector("form")),i(this,"todoInput",document.querySelector("#todo")),i(this,"modal",document.querySelector(".modal"));this.loadTodos().map((({name:e,ID:t,checked:o})=>{this.createTodo(e,t,o)}));document.querySelectorAll('input[type="checkbox"]').forEach((e=>{e.addEventListener("change",(e=>{const t=e;this.changeTodo(t.target.id)}))})),this.form.addEventListener("submit",(e=>{e.preventDefault(),this.modal.style.display="none";const t=this.todoInput.value,{todoID:o}=this.createTodo(t);this.saveTodo(t,o),this.todoInput.value=""}))}}document.addEventListener("DOMContentLoaded",(()=>{new l,new s;const e=localStorage.getItem("theme");new a(e).cycle()}));var d;d=new URL(r("kyEFX").resolve("cE9FN"),import.meta.url).toString(),"serviceWorker"in navigator&&window.addEventListener("load",(async()=>{try{const e=await navigator.serviceWorker.register(d);console.log(e)}catch(e){console.log(e)}}));
//# sourceMappingURL=index.091a6b75.js.map