import{c,e as u,h as d,f as m}from"./use-translate.789845f9.js";import{n as l,m as f,w as p}from"./with-install.c13b505f.js";import{e as n,z as S,C as x}from"./vue-libs.1dda7261.js";const[g,a]=c("loading"),v=Array(12).fill(null).map((e,r)=>n("i",{class:a("line",String(r+1))},null)),y=n("svg",{class:a("circular"),viewBox:"25 25 50 50"},[n("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]);var z=S({name:g,props:{size:l,type:f("circular"),color:String,vertical:Boolean,textSize:l,textColor:String},setup(e,{slots:r}){const s=x(()=>u({color:e.color},d(e.size))),i=()=>{var t;if(r.default)return n("span",{class:a("text"),style:{fontSize:m(e.textSize),color:(t=e.textColor)!=null?t:e.color}},[r.default()])};return()=>{const{type:t,vertical:o}=e;return n("div",{class:a([t,{vertical:o}])},[n("span",{class:a("spinner",t),style:s.value},[t==="spinner"?v:y]),i()])}}});const h=p(z);export{h as L};