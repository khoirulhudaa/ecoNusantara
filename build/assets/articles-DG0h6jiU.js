import{r,u as o,b as d,k as p,j as e,l as u}from"./index-C504AXkt.js";import{A as h,l as f,m as j}from"./footer-FRj1Cu3J.js";import{K as g}from"./kalimantanmap-vyMQwHAy.js";const v=()=>{const[s,n]=r.useState(null),c=o(),x=d(),a=p();r.useEffect(()=>{(async()=>{var t,i;const l=await h.getAllArticle();n((t=l==null?void 0:l.data)==null?void 0:t.data),console.log((i=l==null?void 0:l.data)==null?void 0:i.data)})()},[]);const m=l=>{c(u(l)),x(`/detail-main-article/${l==null?void 0:l.name_article}}`)};return e.jsxs("div",{id:"article",className:`relative w-screen h-max ${a.pathname.includes("/detail-main-article")?"px-4 lg:px-12 pb-12 pt-0":"p-4 lg:p-12"}`,children:[e.jsx("img",{src:g,className:"absolute scale-[1.6] top-0 right-0 opacity-[0.2] z-[-1]",alt:"Sumatera"}),a.pathname.includes("/detail-main-article")?null:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"rounded-full text-white mb-4 lg:text-[16px] text-[13px] bg-blue-400 w-max py-3 px-6",children:"Informasi Menarik Untuk Kamu"}),e.jsxs("h2",{className:"font-bold hidden lg:flex items-center text-[36px]",children:["🏔️ ",e.jsx("span",{className:"relative top-1 ml-3",children:"Artikel Seputar Nusantara"})]})]}),e.jsx("div",{className:"w-full flex z-[33] flex-col justify-between items-center mt-8",children:s&&(s==null?void 0:s.length)>0?s==null?void 0:s.map((l,t)=>e.jsxs("div",{className:"w-full min-h-[180px] my-3 border border-blue-600 border-dashed rounded-[12px] bg-white shadow-lg p-5",children:[e.jsxs("div",{className:"w-full h-[50%] flex items-center justify-between overflow-hidden text-left rounded-[8px]",children:[e.jsx("h3",{onClick:()=>m(l),className:"text-[16px] lg:text-[20px] cursor-pointer hover:text-blue-600 active:scale-[0.99] underline font-[500]",children:l==null?void 0:l.name_article}),e.jsx("div",{className:"rounded-[10px] text-[12px] w-max h-max px-4 py-2 hidden lg:flex items-center justify-center bg-green-600 text-white mr-4",children:e.jsx("p",{children:"Public"})})]}),e.jsxs("div",{className:"w-full flex flex-wrap mt-3 items-center",children:[e.jsxs("div",{className:"rounded-full lg:mb-0 mb-3 w-max h-max px-4 py-2 flex items-center justify-center bg-slate-200 text-slate-500 mr-3",children:[e.jsx(f,{className:"mr-2"}),"  ",l==null?void 0:l.year]}),e.jsxs("div",{className:"rounded-full lg:mb-0 mb-3 max-w-[56%] h-max px-4 py-2 flex items-center justify-center bg-blue-200 text-blue-600 mr-4",children:[e.jsx(j,{className:"mr-2"}),e.jsx("p",{className:"max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap",children:"EcoNusantara Team"})]})]}),e.jsx("hr",{className:"mt-4"}),e.jsx("p",{className:"text-slate-500 mt-4 text-[14px] lg:text-[16px]",children:l==null?void 0:l.description}),e.jsx("div",{className:"w-full flex items-center",children:e.jsx("div",{className:"rounded-full w-max h-max px-4 py-2 flex items-center justify-center mt-5 bg-yellow-200 text-yellow-600 text-[12px]",children:e.jsx("p",{children:"Info Nusantara"})})})]},t)):null})]})};export{v as A};
