import{Q as v,T as x,c as l,a as s,g as r,u as t,h as n,f as m,d as k,H as V,i as c,I as _,w as h,o as u,l as b}from"./app-CWskywPc.js";import{a as p,b as g,_ as y}from"./TextInput-B8hzher1.js";import{P as w}from"./PrimaryButton-JvyTf9T-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={key:0},B={class:"mt-2 text-sm text-gray-800 dark:text-gray-200"},N={class:"mt-2 text-sm font-medium text-green-600 dark:text-green-400"},E={class:"flex items-center gap-4"},P={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},T={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:{type:Boolean},status:{type:String}},setup(d){const i=v().props.auth.user,a=x({name:i.name,email:i.email});return(f,e)=>(u(),l("section",null,[e[6]||(e[6]=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Profile Information "),s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Update your account's profile information and email address. ")],-1)),s("form",{onSubmit:e[2]||(e[2]=h(o=>t(a).patch(f.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[r(y,{for:"name",value:"Name"}),r(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:t(a).name,"onUpdate:modelValue":e[0]||(e[0]=o=>t(a).name=o),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),r(g,{class:"mt-2",message:t(a).errors.name},null,8,["message"])]),s("div",null,[r(y,{for:"email",value:"Email"}),r(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(a).email,"onUpdate:modelValue":e[1]||(e[1]=o=>t(a).email=o),required:"",autocomplete:"username"},null,8,["modelValue"]),r(g,{class:"mt-2",message:t(a).errors.email},null,8,["message"])]),d.mustVerifyEmail&&t(i).email_verified_at===null?(u(),l("div",S,[s("p",B,[e[4]||(e[4]=n(" Your email address is unverified. ")),r(t(b),{href:f.route("verification.send"),method:"post",as:"button",class:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"},{default:m(()=>e[3]||(e[3]=[n(" Click here to re-send the verification email. ")])),_:1},8,["href"])]),k(s("div",N," A new verification link has been sent to your email address. ",512),[[V,d.status==="verification-link-sent"]])])):c("",!0),s("div",E,[r(w,{disabled:t(a).processing},{default:m(()=>e[5]||(e[5]=[n("Save")])),_:1},8,["disabled"]),r(_,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:m(()=>[t(a).recentlySuccessful?(u(),l("p",P," Saved. ")):c("",!0)]),_:1})])],32)]))}};export{T as default};
