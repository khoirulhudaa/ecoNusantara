import{j as s,s as A,b as E,u as F,r as l,L as j,e as _}from"./index-B_rvA406.js";import{P as O,j as Q,k as X}from"./footer-57v-LkC2.js";import{K as U}from"./kalimantanmap-vyMQwHAy.js";import{S as f,C as w,K as v,R as V,N,J as y,a as Z,W as Y,D as ee}from"./wisata-CNmKyAyv.js";import{S as se}from"./sumateramap-0zKn6efc.js";/* empty css                */const re="/assets/sulawesi-BN944Wv_.webp",k="/assets/rajaampat1-R5hTWtsN.jpeg",ae="/assets/rajaampat2-dEbXIpKh.jpeg",S="/assets/toba1-DScQcgq1.jpeg",te="/assets/toba2-BDzaeWHE.jpeg",D="/assets/bromo1-BweF_Bqh.jpeg",oe="/assets/bromo2-BDOSmZSv.jpeg",B="/assets/we1-D8HJOgSY.jpeg",le="/assets/we2-lpFZu2Qs.jpeg",C="/assets/candi1-9sprrt_3.jpeg",ne="/assets/candi2-BDeLD-QP.jpeg",K="/assets/derawan1-Dosn3JJ8.jpeg",ie="/assets/derawan2-v_HGeqPz.jpeg",R="/assets/jahe1a-DQIojqic.jpeg",ce="/assets/jahe2b-hjMtkI3e.jpeg",pe="/assets/sereh2-BKyupVdI.jpeg",W="/assets/kunyit1-uL_-36cI.jpeg",be="/assets/kunyit2-BhoePdaV.jpeg",xe="/assets/cabai2-CxFEq48U.jpeg",he="/assets/kemiri2-CefXtkof.jpeg",L="/assets/sate1-D5ftQ0S8.jpeg",de="/assets/sate2-DG-Lgbqm.jpeg",n="/assets/batagor1-DqWsqcHm.jpeg",me="/assets/batagor2-CcO-E-MD.jpeg",ue="/assets/rendang2-B7lEZ-W8.jpeg",ge="/assets/nasgor2-CpK1Nd2z.jpeg",I="/assets/sotoayam1-BZ481t5X.jpeg",je="/assets/sotoayam2-iIzSOQPa.jpeg",$="/assets/betawi1-SCGr0KPb.jpeg",fe="/assets/betawi2-jlVUVWt9.jpeg",J="/assets/lengko1-aHtkqK4T.jpeg",we="/assets/lengko2-BwmHuCXs.jpeg",M="/assets/bakso1-DR7DTBya.jpeg",ve="/assets/bakso2-DIjMCXJ-.jpeg",q="/assets/gudeg1-bMxXIOOU.jpeg",Ne="/assets/gudeg2-D3qMUvBK.jpeg",P="/assets/madura1-B8D52WdC.jpeg",ye="/assets/madura2-BbsoGPTR.jpeg",ke=()=>s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"absolute w-[350px] h-[120%] border-[4px] border-slate-600 left-20 top-0 border-t-0 border-b-0 lg:left-[180px] border-opacity-[0.3] border-dashed"}),s.jsx("div",{className:"absolute w-screen h-[1px] border-[2px] border-slate-600 left-[0px] bottom-14 lg:bottom-[30%] border-opacity-[0.3] border-dashed"}),s.jsx("div",{className:"absolute w-screen lg:flex hidden h-[1px] border-[2px] border-slate-600 left-[0px] top-[30%] border-opacity-[0.3] border-dashed"})]}),Se=()=>s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"absolute w-[350px] h-[650px] border-[4px] border-white border-y-0 left-20 lg:left-[-180px] border-opacity-[0.3] border-dashed"}),s.jsx("div",{className:"absolute w-screen h-[5px] border-[2px] border-white left-[0px] top-[100px] border-opacity-[0.3] border-dashed"}),s.jsx("div",{className:"absolute w-screen h-[1px] lg:flex hidden border-[2px] border-white left-[0px] top-[50%] border-opacity-[0.3] border-dashed"}),s.jsx("div",{className:"absolute w-screen h-[5px] border-[2px] border-white left-[0px] bottom-[60px] border-opacity-[0.2] border-dashed"}),s.jsx("div",{className:"absolute w-[350px] h-[650px] border-[4px] border-white right-20 lg:right-[-120px] border-opacity-[0.2] border-dashed"})]}),i=[{"Derawan Islands":[K,ie,K],"Candi Borobudur":[C,ne,C],"Danau Toba":[S,te,S],"Pulau Weh":[B,le,B],"Raja Ampat":[k,ae,k],"Gunung Bromo":[D,oe,D],Jahe:[R,ce,R],Sereh:[f,pe,f],Kunyit:[W,be,W],Cabai:[w,xe,w],Kemiri:[v,he,v],"Sate Lilit":[L,de,L],Batagor:[n,me,n],Rendang:[V,ue,n],"Nasi Goreng":[N,ge,N],"Soto Ayam":[I,je,I],"Soto Betawi":[$,fe,$],"Nasi Lengko":[J,we,J],"Bakso Malang":[M,ve,M],Gudeg:[q,Ne,q],"Sate Madura":[P,ye,P]}],Le=()=>{var x,h,d,m,u,g;const c=A.getState().Information.information;console.log(c);const z=E(),G=F(),[a,o]=l.useState("deskripsi"),[e,H]=l.useState(null),[T,p]=l.useState(!1);l.useEffect(()=>{H(c),window.scrollTo(0,0),p(!1)},[e,T]);const b=r=>{z(`/detail-card/${r==null?void 0:r.nama}`),G(_(r)),p(!0)};return s.jsxs("div",{className:"flex flex-col",children:[s.jsxs("div",{className:"relative w-full overflow-hidden flex h-[100vh]",children:[s.jsxs("div",{className:`relative w-1/2 pl-10 ${(e==null?void 0:e.type)==="Wisata"?"bg-blue-600 text-white":"bg-white text-slate-800"} border-b-[3px] border-b-slate-300 border-dashed`,children:[(e==null?void 0:e.type)==="Wisata"?s.jsx(Se,{}):s.jsx(ke,{}),s.jsx(j,{to:"/",children:s.jsx("h1",{className:"relative top-7 font-bold text-[24px] z-[333]",children:"ecoNusantara 🗺️"})}),s.jsxs("div",{className:"relative text-[6.4em] h-full flex flex-col justify-center font-extrabold mt-[-20px]",children:[s.jsx("h2",{className:`${(e==null?void 0:e.type)==="Wisata"?"text-white":"text-blue-500"} mb-2 w-[90%]`,children:e==null?void 0:e.nama}),s.jsx("h2",{className:"mb-2",children:(e==null?void 0:e.type)==="Rempah"?"Rempah Nusantara":(e==null?void 0:e.type)==="Kuliner"?"Kuliner":"Wisata"})]})]}),s.jsxs("div",{className:`w-1/2 relative flex justify-center right-0 ${(e==null?void 0:e.type)==="Wisata"?"border-t-0 border-l-0 border-r-0 border-b-slate-400 border-[2px] border-dashed":"border-t-0 border-l-0 border-r-0 border-b-white-400 border-[2px] border-b-dashed"}`,children:[(e==null?void 0:e.type)==="Wisata"?s.jsx("img",{src:(e==null?void 0:e.pulau)==="Sumatera"?se:(e==null?void 0:e.pulau)==="Jawa"?y:(e==null?void 0:e.pulau)==="Kalimantan"?U:(e==null?void 0:e.pulau)==="Sulawesi"?re:O,className:"h-auto w-full flex justify-center items-ecnter object-contain brightness-50",alt:"image"}):s.jsx("img",{src:e==null?void 0:e.gambar,className:"h-full w-full object-cover brightness-50",alt:"image"}),s.jsxs("ul",{className:"absolute text-[17px] top-3 right-0 pt-5 pr-10 flex gap-5 text-white cursor-pointer",children:[s.jsx(j,{to:"/",children:s.jsx("li",{className:"ml-8",children:"Beranda"})}),s.jsx("a",{href:"#informasi",children:s.jsx("li",{className:"ml-8",children:"Informasi"})}),s.jsx("a",{href:"#daftar",children:s.jsx("li",{className:"ml-8",children:"Daftar Rempah"})})]}),s.jsx("div",{className:"flex absolute top-1/2 transform translate-y-[-50%] w-full px-16 justify-around items-center",children:(h=(x=i==null?void 0:i[0])==null?void 0:x[e==null?void 0:e.nama])==null?void 0:h.map((r,t)=>s.jsx("img",{className:"object-cover w-[26%] h-[140px] border-dashed border-2 rounded-lg",src:r,alt:"image"},t))})]})]}),s.jsxs("div",{children:[(e==null?void 0:e.type)==="Rempah"?s.jsxs("div",{className:"px-10 mt-14 flex gap-3",id:"informasi",children:[s.jsx("button",{onClick:()=>o("deskripsi"),className:`w-1/3 ${a==="deskripsi"?"bg-blue-500 text-white":"bg-gray-300 text-slate-500"} border-0 outline-0 rounded-s-full h-max py-4 font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`,children:"Deskripsi"}),s.jsx("button",{onClick:()=>o("sejarah"),className:`w-1/3 ${a==="sejarah"?"bg-blue-500 text-white":"bg-gray-300 text-slate-500"} border-0 outline-0 font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`,children:"Sejarah"}),s.jsx("button",{onClick:()=>o("menanam"),className:`w-1/3 ${a==="menanam"?"bg-blue-500 text-white":"bg-gray-300 text-slate-500"} border-0 outline-0 rounded-r-full font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`,children:"Cara Menanam"})]}):(e==null?void 0:e.type)==="Kuliner"?s.jsxs("div",{className:"px-10 mt-14 flex gap-3",id:"informasi",children:[s.jsx("button",{onClick:()=>o("deskripsi"),className:`w-1/2 ${a==="deskripsi"?"bg-blue-500 text-white":"bg-gray-300 text-slate-500"} border-0 outline-0 rounded-s-full h-max py-4 font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`,children:"Deskripsi"}),s.jsx("button",{onClick:()=>o("resep"),className:`w-1/2 ${a==="resep"?"bg-blue-500 text-white":"bg-gray-300 text-slate-500"} border-0 outline-0 rounded-r-full font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`,children:"Resep"})]}):s.jsxs("div",{className:"px-10 mt-14 flex gap-3",id:"informasi",children:[s.jsx("button",{onClick:()=>o("deskripsi"),className:`w-1/3 ${a==="deskripsi"?"bg-blue-500 text-white":"bg-gray-300 text-slate-500"} rounded-s-full h-max py-4 font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`,children:"Deskripsi"}),s.jsx("button",{onClick:()=>o("sejarah"),className:`w-1/3 ${a==="sejarah"?"bg-blue-500 text-white":"bg-gray-300 text-slate-500"} border-0 outline-0 text-black font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`,children:"Sejarah"}),s.jsx("button",{onClick:()=>o("biaya"),className:`w-1/3 ${a==="biaya"?"bg-blue-500 text-white":"bg-gray-300 text-slate-500"} border-0 outline-0 rounded-r-full text-black font-normal cursor-pointer hover:brightness-[90%] active:scale-[0.98]`,children:"Biaya Akomodasi"})]}),a==="biaya"?s.jsxs("table",{className:"relative w-[92%] text-left px-6 oerflow-hidden rounded-lg h-max mx-auto mb-12 mt-16",children:[s.jsx("thead",{className:"rounded-[16px]",children:(d=e==null?void 0:e.header)==null?void 0:d.map((r,t)=>s.jsx("th",{className:"border-slate-600 bg-slate-200 text-slate-900 px-6 text-slate-600 font-normal border",children:r},t))}),s.jsx("tbody",{children:(m=e==null?void 0:e.body)==null?void 0:m.map((r,t)=>s.jsxs("tr",{children:[s.jsx("td",{className:"px-6",children:r==null?void 0:r.name}),s.jsx("td",{className:"px-6",children:r==null?void 0:r.value})]},t))})]}):s.jsx("div",{className:"custom-content px-12 py-14",dangerouslySetInnerHTML:{__html:a==="sejarah"?e==null?void 0:e.history:a==="resep"?e==null?void 0:e.recept:a==="build"?e==null?void 0:e.build:e==null?void 0:e.description}})]}),s.jsxs("div",{id:"daftar",className:"relative w-screen h-max pt-4 mt-12 pl-4 lg:pl-12 pb-0",children:[s.jsx("img",{src:y,className:"absolute scale-[1.6] top-[-30px] right-0 opacity-[0.1] z-[-1]",alt:"Jawa"}),s.jsx("div",{className:"rounded-full text-white mb-4 bg-blue-400 w-max py-3 px-6",children:(e==null?void 0:e.nama)==="Rempah-rempah"?"Nusa2 - Cita Rasa Rempah":(e==null?void 0:e.nama)==="Kuliner Nusantara"?"Nusa3 - Selera Khas Nusantara":"Nusa1 - Wisata Populer Nusantara"}),s.jsxs("h2",{className:"font-bold hidden lg:flex items-center text-[36px]",children:["🏔️ ",s.jsx("span",{className:"relative top-1 ml-3",children:(e==null?void 0:e.type)==="Rempah"?"Aneka Ragam Rempah":(e==null?void 0:e.type)==="Kuliner"?"Kuliner Lokal Nusantara":"Rekomendasi 6 Wisata Nusantara"})]}),s.jsx("div",{className:"w-full pr-6 pb-5 overflow-x-auto items-center",children:s.jsx("div",{className:"w-max flex justify-between items-center mt-12",children:(e==null?void 0:e.type)==="Kuliner"?(u=Z)==null?void 0:u.map((r,t)=>s.jsxs("div",{className:"relative w-[140px] h-[300px] mr-12 rounded-full bg-white shadow-lg py-4 before:absolute before:w-full before:h-[80%] before:bg-blue-600 before:bottom-0 before:left-0 before:rounded-tl-full before:rounded-tr-full overflow-hidden before:bg-opacity-[0.2] border-[2px] border-dashed border-blue-400 text-center flex flex-col items-center justify-between",children:[s.jsx("div",{className:"relative border border-white w-[60px] h-[60px] bg-white rounded-full overflow-hidden bg-contain",children:s.jsx("img",{src:r==null?void 0:r.gambar,alt:"ikon-kategori",loading:"lazy",className:"rounded-full h-full"})}),s.jsxs("div",{children:[s.jsx("p",{children:r==null?void 0:r.nama}),s.jsx("small",{children:r==null?void 0:r.lokasi})]}),s.jsx("div",{onClick:()=>b(r),className:"relative w-[60px] h-[60px] bg-blue-600 rounded-full text-white flex items-center justify-center cursor-pointer active:scale-[0.98] hoveer:brightness-[90%]",children:s.jsx(Q,{})})]},t)):(g=(e==null?void 0:e.type)==="Wisata"?Y:ee)==null?void 0:g.map((r,t)=>s.jsxs("div",{className:"w-[340px] h-[440px] mr-6 bg-white overflow-hidden border border-slate-300 shadow-lg rounded-[20px]",children:[s.jsxs("div",{className:"relative w-full overflow-hidden h-[50%]",children:[s.jsx("div",{className:"absolute z-[9999] rounded-full top-4 right-4 bg-white text-blue-600 border border-white px-5 py-2 w-max h-max text-[14px] flex items-center justify-center",children:s.jsx("p",{children:"Liburan"})}),s.jsx("img",{src:r==null?void 0:r.gambar,alt:"Wisata",loading:"lazy",className:"hover:scale-[1.2] duration-[1s] h-full w-full"})]}),s.jsxs("div",{className:"w-full flex flex-col items-end justify-between h-[50%] pt-2",children:[s.jsxs("div",{className:"w-full h-[100%] p-4",children:[s.jsx("h2",{className:"font-bold text-[22px] mb-2",children:r==null?void 0:r.nama}),s.jsx("p",{className:"leading-loose text-slate-500 text-[14px]",children:r==null?void 0:r.lokasi})]}),s.jsx("div",{onClick:()=>{b(r)},className:"w-full flex items-center text-center justify-center py-5 bg-blue-600 text-white cursor-pointer hover:brightness-[90%] duration-200",children:"Lihat Selengkapnya"})]})]},t))})})]}),s.jsx(X,{})]})};export{Le as default};
