import{d as u,H as i,o as t,c as s,a as c,t as d,m,L as p,r as _,y as g,v as f}from"./app-CWskywPc.js";const y={class:"text-sm text-red-600 dark:text-red-400"},S={__name:"InputError",props:{message:{type:String}},setup(e){return(a,r)=>u((t(),s("div",null,[c("p",y,d(e.message),1)],512)),[[i,e.message]])}},k={class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},v={key:0},x={key:1},V={__name:"InputLabel",props:{value:{type:String}},setup(e){return(a,r)=>(t(),s("label",k,[e.value?(t(),s("span",v,d(e.value),1)):(t(),s("span",x,[m(a.$slots,"default")]))]))}},M={__name:"TextInput",props:{modelValue:{type:String,required:!0},modelModifiers:{}},emits:["update:modelValue"],setup(e,{expose:a}){const r=p(e,"modelValue"),o=_(null);return g(()=>{o.value.hasAttribute("autofocus")&&o.value.focus()}),a({focus:()=>o.value.focus()}),(b,n)=>u((t(),s("input",{class:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600","onUpdate:modelValue":n[0]||(n[0]=l=>r.value=l),ref_key:"input",ref:o},null,512)),[[f,r.value]])}};export{V as _,M as a,S as b};
