import{r as c,c as y,a as s,F as i,b as n,w as m,o as _,t as o,d as x,v as w}from"./app-CWskywPc.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u={setup(){const l=c([]);c({views_1_day:0,views_weekly:0,views_monthly:0,views_yearly:0,views_all_time:0,likes_1_day:0,likes_weekly:0,likes_monthly:0,likes_yearly:0,likes_all_time:0,comments_1_day:0,comments_weekly:0,comments_monthly:0,comments_yearly:0,comments_all_time:0,shares_1_day:0,shares_weekly:0,shares_monthly:0,shares_yearly:0,shares_all_time:0,followers_1_day:0,followers_weekly:0,followers_monthly:0,followers_yearly:0,followers_all_time:0});const r=async()=>{try{const p=await(await fetch("/analytics/data")).json();l.value=p}catch(t){console.error("Error fetching analytics data:",t)}},b=t=>new Date(t).toLocaleDateString(),d=t=>t.replace(/_/g," ").replace(/\b\w/g,p=>p.toUpperCase());return r(),{analyticsData:l,formatDate:b,formatLabel:d}}},k={class:"p-6"},v={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},D=["for"],g=["id","onUpdate:modelValue"],S={class:"overflow-x-auto"},F={class:"min-w-full bg-white border border-gray-200"},L={class:"border-b px-4 py-2"},V={class:"border-b px-4 py-2"},A={class:"border-b px-4 py-2"},M={class:"border-b px-4 py-2"},C={class:"border-b px-4 py-2"},T={class:"border-b px-4 py-2"},W={class:"border-b px-4 py-2"},Y={class:"border-b px-4 py-2"},B={class:"border-b px-4 py-2"},U={class:"border-b px-4 py-2"},E={class:"border-b px-4 py-2"},j={class:"border-b px-4 py-2"},I={class:"border-b px-4 py-2"},N={class:"border-b px-4 py-2"},$={class:"border-b px-4 py-2"},q={class:"border-b px-4 py-2"},z={class:"border-b px-4 py-2"},G={class:"border-b px-4 py-2"},H={class:"border-b px-4 py-2"},J={class:"border-b px-4 py-2"},K={class:"border-b px-4 py-2"},O={class:"border-b px-4 py-2"},P={class:"border-b px-4 py-2"},Q={class:"border-b px-4 py-2"},R={class:"border-b px-4 py-2"},X={class:"border-b px-4 py-2"};function Z(l,r,b,d,t,p){return _(),y("div",k,[r[3]||(r[3]=s("h1",{class:"text-2xl font-bold mb-4"},"Social Analytics Data",-1)),s("form",{onSubmit:r[0]||(r[0]=m((...e)=>l.submitForm&&l.submitForm(...e),["prevent"])),class:"mb-6"},[s("div",v,[(_(!0),y(i,null,n(l.formData,(e,a)=>(_(),y("div",{key:a,class:"flex flex-col"},[s("label",{for:a,class:"font-semibold"},o(d.formatLabel(a)),9,D),x(s("input",{type:"number",id:a,"onUpdate:modelValue":h=>l.formData[a]=h,class:"border rounded px-2 py-1"},null,8,g),[[w,l.formData[a],void 0,{number:!0}]])]))),128))]),r[1]||(r[1]=s("button",{type:"submit",class:"bg-red text-white px-4 py-2 rounded hover:bg-green-600 mt-4"}," Submit Data ",-1))],32),s("div",S,[s("table",F,[r[2]||(r[2]=s("thead",null,[s("tr",null,[s("th",{class:"border-b px-4 py-2"},"Date"),s("th",{class:"border-b px-4 py-2"},"Views (1 Day)"),s("th",{class:"border-b px-4 py-2"},"Views (Weekly)"),s("th",{class:"border-b px-4 py-2"},"Views (Monthly)"),s("th",{class:"border-b px-4 py-2"},"Views (Yearly)"),s("th",{class:"border-b px-4 py-2"},"Views (All Time)"),s("th",{class:"border-b px-4 py-2"},"Likes (1 Day)"),s("th",{class:"border-b px-4 py-2"},"Likes (Weekly)"),s("th",{class:"border-b px-4 py-2"},"Likes (Monthly)"),s("th",{class:"border-b px-4 py-2"},"Likes (Yearly)"),s("th",{class:"border-b px-4 py-2"},"Likes (All Time)"),s("th",{class:"border-b px-4 py-2"},"Comments (1 Day)"),s("th",{class:"border-b px-4 py-2"},"Comments (Weekly)"),s("th",{class:"border-b px-4 py-2"},"Comments (Monthly)"),s("th",{class:"border-b px-4 py-2"},"Comments (Yearly)"),s("th",{class:"border-b px-4 py-2"},"Comments (All Time)"),s("th",{class:"border-b px-4 py-2"},"Shares (1 Day)"),s("th",{class:"border-b px-4 py-2"},"Shares (Weekly)"),s("th",{class:"border-b px-4 py-2"},"Shares (Monthly)"),s("th",{class:"border-b px-4 py-2"},"Shares (Yearly)"),s("th",{class:"border-b px-4 py-2"},"Shares (All Time)"),s("th",{class:"border-b px-4 py-2"},"Followers (1 Day)"),s("th",{class:"border-b px-4 py-2"},"Followers (Weekly)"),s("th",{class:"border-b px-4 py-2"},"Followers (Monthly)"),s("th",{class:"border-b px-4 py-2"},"Followers (Yearly)"),s("th",{class:"border-b px-4 py-2"},"Followers (All Time)")])],-1)),s("tbody",null,[(_(!0),y(i,null,n(d.analyticsData,e=>(_(),y("tr",{key:e.id,class:"hover:bg-gray-50"},[s("td",L,o(d.formatDate(e.date)),1),s("td",V,o(e.views_1_day),1),s("td",A,o(e.views_weekly),1),s("td",M,o(e.views_monthly),1),s("td",C,o(e.views_yearly),1),s("td",T,o(e.views_all_time),1),s("td",W,o(e.likes_1_day),1),s("td",Y,o(e.likes_weekly),1),s("td",B,o(e.likes_monthly),1),s("td",U,o(e.likes_yearly),1),s("td",E,o(e.likes_all_time),1),s("td",j,o(e.comments_1_day),1),s("td",I,o(e.comments_weekly),1),s("td",N,o(e.comments_monthly),1),s("td",$,o(e.comments_yearly),1),s("td",q,o(e.comments_all_time),1),s("td",z,o(e.shares_1_day),1),s("td",G,o(e.shares_weekly),1),s("td",H,o(e.shares_monthly),1),s("td",J,o(e.shares_yearly),1),s("td",K,o(e.shares_all_time),1),s("td",O,o(e.followers_1_day),1),s("td",P,o(e.followers_weekly),1),s("td",Q,o(e.followers_monthly),1),s("td",R,o(e.followers_yearly),1),s("td",X,o(e.followers_all_time),1)]))),128))])])])])}const os=f(u,[["render",Z],["__scopeId","data-v-6c3d0fa8"]]);export{os as default};