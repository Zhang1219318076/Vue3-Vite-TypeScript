import{e as t,r as e,m as n,w as s,a as o,i as a,b as c,t as r,g as u,d as i,n as l,f as p,h as f,j as d,k as h,l as y,o as v,c as m,p as b,_,u as g,q as j,s as $,v as O,x as P}from"./index-c601f9f3.js";
/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let S;const w=t=>S=t,x=Symbol();function E(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var k,I;(I=k||(k={})).direct="direct",I.patchObject="patch object",I.patchFunction="patch function";const N=()=>{};function C(t,e,n,s=N){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&u()&&i(o),o}function M(t,...e){t.slice().forEach((t=>{t(...e)}))}function A(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],o=t[n];E(o)&&E(s)&&t.hasOwnProperty(n)&&!a(s)&&!c(s)?t[n]=A(o,s):t[n]=s}return t}const F=Symbol();const{assign:q}=Object;function H(u,i,p={},f,d,h){let y;const v=q({actions:{}},p),m={deep:!0};let b,_,g,j=n([]),$=n([]);const O=f.state.value[u];let P;function S(t){let e;b=_=!1,"function"==typeof t?(t(f.state.value[u]),e={type:k.patchFunction,storeId:u,events:g}):(A(f.state.value[u],t),e={type:k.patchObject,payload:t,storeId:u,events:g});const n=P=Symbol();l().then((()=>{P===n&&(b=!0)})),_=!0,M(j,e,f.state.value[u])}h||O||(f.state.value[u]={}),e({});const x=N;function I(t,e){return function(){w(f);const n=Array.from(arguments),s=[],o=[];function a(t){s.push(t)}function c(t){o.push(t)}let r;M($,{args:n,name:t,store:J,after:a,onError:c});try{r=e.apply(this&&this.$id===u?this:J,n)}catch(i){throw M(o,i),i}return r instanceof Promise?r.then((t=>(M(s,t),t))).catch((t=>(M(o,t),Promise.reject(t)))):(M(s,r),r)}}const H={_p:f,$id:u,$onAction:C.bind(null,$),$patch:S,$reset:x,$subscribe(t,e={}){const n=C(j,t,e.detached,(()=>o())),o=y.run((()=>s((()=>f.state.value[u]),(n=>{("sync"===e.flush?_:b)&&t({storeId:u,type:k.direct,events:g},n)}),q({},m,e))));return n},$dispose:function(){y.stop(),j=[],$=[],f._s.delete(u)}},J=o(H);f._s.set(u,J);const W=f._e.run((()=>(y=t(),y.run((()=>i())))));for(const t in W){const e=W[t];if(a(e)&&(!a(B=e)||!B.effect)||c(e))h||(!O||E(z=e)&&z.hasOwnProperty(F)||(a(e)?e.value=O[t]:A(e,O[t])),f.state.value[u][t]=e);else if("function"==typeof e){const n=I(t,e);W[t]=n,v.actions[t]=e}}var z,B;return q(J,W),q(r(J),W),Object.defineProperty(J,"$state",{get:()=>f.state.value[u],set:t=>{S((e=>{q(e,t)}))}}),f._p.forEach((t=>{q(J,y.run((()=>t({store:J,app:f._a,pinia:f,options:v}))))})),O&&h&&p.hydrate&&p.hydrate(J.$state,O),b=!0,_=!0,J}const J=function(){const s=t(!0),o=s.run((()=>e({})));let a=[],c=[];const r=n({install(t){w(r),r._a=t,t.provide(x,r),t.config.globalProperties.$pinia=r,c.forEach((t=>a.push(t))),c=[]},use(t){return this._a?a.push(t):c.push(t),this},_p:a,_a:null,_e:s,_s:new Map,state:o});return r}(),W=function(t,e,s){let o,a;const c="function"==typeof e;function r(t,s){const r=p();(t=t||r&&h(x,null))&&w(t),(t=S)._s.has(o)||(c?H(o,e,a,t):function(t,e,s,o){const{state:a,actions:c,getters:r}=e,u=s.state.value[t];let i;i=H(t,(function(){u||(s.state.value[t]=a?a():{});const e=f(s.state.value[t]);return q(e,c,Object.keys(r||{}).reduce(((e,o)=>(e[o]=n(d((()=>{w(s);const e=s._s.get(t);return r[o].call(e,e)}))),e)),{}))}),e,s,0,!0),i.$reset=function(){const t=a?a():{};this.$patch((e=>{q(e,t)}))}}(o,a,t));return t._s.get(o)}return"string"==typeof t?(o=t,a=c?s:e):(a=t,o=t.id),r.$id=o,r}({id:"use-count",state:()=>({num:0}),getters:{},actions:{addNumber(){this.num+=1},delNumber(){this.num-=1}}});function z(){return W(J)}const B=_(y({__name:"HelloWorld",props:{msg:null},setup:t=>(e(0),(e,n)=>(v(),m("h1",null,b(t.msg),1)))}),[["__scopeId","data-v-6163ed5d"]]),D=y({name:"Index"}),G=y({...D,setup(t){const e=g(),n=async()=>{z().addNumber()},s=async()=>{z().delNumber()},o=async()=>{e.push({name:"index-about"})};return(t,e)=>(v(),m("div",null,[j(" home首页 "),$("div",null,[$("div",{onClick:n},"+"),$("div",null,b(O(z)().num),1),$("div",{onClick:s},"-")]),$("div",{onClick:o},"跳转about页面"),P(B,{msg:"123123"})]))}});export{G as default};