import{c as oe,g as ie,r as te,u as re,b as ae,k as se,j as v,l as ce}from"./index-J-x_ozPo.js";import{A as le,l as ue,m as de}from"./footer-A2EyQm3H.js";import{K as fe}from"./kalimantanmap-vyMQwHAy.js";var ne={exports:{}};(function(P,Z){(function(x,c){P.exports=c()})(oe,function(){return function(x){function c(n){if(i[n])return i[n].exports;var t=i[n]={exports:{},id:n,loaded:!1};return x[n].call(t.exports,t,t.exports,c),t.loaded=!0,t.exports}var i={};return c.m=x,c.c=i,c.p="dist/",c(0)}([function(x,c,i){function n(r){return r&&r.__esModule?r:{default:r}}var t=Object.assign||function(r){for(var j=1;j<arguments.length;j++){var z=arguments[j];for(var $ in z)Object.prototype.hasOwnProperty.call(z,$)&&(r[$]=z[$])}return r},f=i(1),y=(n(f),i(6)),a=n(y),p=i(7),s=n(p),u=i(8),l=n(u),b=i(9),O=n(b),S=i(10),Y=n(S),R=i(11),U=n(R),J=i(14),B=n(J),A=[],G=!1,h={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},E=function(){var r=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(r&&(G=!0),G)return A=(0,U.default)(A,h),(0,Y.default)(A,h.once),A},H=function(){A=(0,B.default)(),E()},o=function(){A.forEach(function(r,j){r.node.removeAttribute("data-aos"),r.node.removeAttribute("data-aos-easing"),r.node.removeAttribute("data-aos-duration"),r.node.removeAttribute("data-aos-delay")})},e=function(r){return r===!0||r==="mobile"&&O.default.mobile()||r==="phone"&&O.default.phone()||r==="tablet"&&O.default.tablet()||typeof r=="function"&&r()===!0},d=function(r){h=t(h,r),A=(0,B.default)();var j=document.all&&!window.atob;return e(h.disable)||j?o():(h.disableMutationObserver||l.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),h.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",h.easing),document.querySelector("body").setAttribute("data-aos-duration",h.duration),document.querySelector("body").setAttribute("data-aos-delay",h.delay),h.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?E(!0):h.startEvent==="load"?window.addEventListener(h.startEvent,function(){E(!0)}):document.addEventListener(h.startEvent,function(){E(!0)}),window.addEventListener("resize",(0,s.default)(E,h.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(E,h.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)(function(){(0,Y.default)(A,h.once)},h.throttleDelay)),h.disableMutationObserver||l.default.ready("[data-aos]",H),A)};x.exports={init:d,refresh:E,refreshHard:H}},function(x,c){},,,,,function(x,c){(function(i){function n(e,d,r){function j(m){var N=_,I=q;return _=q=void 0,C=m,k=e.apply(I,N)}function z(m){return C=m,w=setTimeout(K,d),F?j(m):k}function $(m){var N=m-M,I=m-C,ee=d-N;return D?H(ee,L-I):ee}function W(m){var N=m-M,I=m-C;return M===void 0||N>=d||N<0||D&&I>=L}function K(){var m=o();return W(m)?V(m):void(w=setTimeout(K,$(m)))}function V(m){return w=void 0,g&&_?j(m):(_=q=void 0,k)}function X(){w!==void 0&&clearTimeout(w),C=0,_=M=q=w=void 0}function Q(){return w===void 0?k:V(o())}function T(){var m=o(),N=W(m);if(_=arguments,q=this,M=m,N){if(w===void 0)return z(M);if(D)return w=setTimeout(K,d),j(M)}return w===void 0&&(w=setTimeout(K,d)),k}var _,q,L,k,w,M,C=0,F=!1,D=!1,g=!0;if(typeof e!="function")throw new TypeError(u);return d=p(d)||0,f(r)&&(F=!!r.leading,D="maxWait"in r,L=D?E(p(r.maxWait)||0,d):L,g="trailing"in r?!!r.trailing:g),T.cancel=X,T.flush=Q,T}function t(e,d,r){var j=!0,z=!0;if(typeof e!="function")throw new TypeError(u);return f(r)&&(j="leading"in r?!!r.leading:j,z="trailing"in r?!!r.trailing:z),n(e,d,{leading:j,maxWait:d,trailing:z})}function f(e){var d=typeof e>"u"?"undefined":s(e);return!!e&&(d=="object"||d=="function")}function y(e){return!!e&&(typeof e>"u"?"undefined":s(e))=="object"}function a(e){return(typeof e>"u"?"undefined":s(e))=="symbol"||y(e)&&h.call(e)==b}function p(e){if(typeof e=="number")return e;if(a(e))return l;if(f(e)){var d=typeof e.valueOf=="function"?e.valueOf():e;e=f(d)?d+"":d}if(typeof e!="string")return e===0?e:+e;e=e.replace(O,"");var r=Y.test(e);return r||R.test(e)?U(e.slice(2),r?2:8):S.test(e)?l:+e}var s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",l=NaN,b="[object Symbol]",O=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,R=/^0o[0-7]+$/i,U=parseInt,J=(typeof i>"u"?"undefined":s(i))=="object"&&i&&i.Object===Object&&i,B=(typeof self>"u"?"undefined":s(self))=="object"&&self&&self.Object===Object&&self,A=J||B||Function("return this")(),G=Object.prototype,h=G.toString,E=Math.max,H=Math.min,o=function(){return A.Date.now()};x.exports=t}).call(c,function(){return this}())},function(x,c){(function(i){function n(o,e,d){function r(g){var m=T,N=_;return T=_=void 0,M=g,L=o.apply(N,m)}function j(g){return M=g,k=setTimeout(W,e),C?r(g):L}function z(g){var m=g-w,N=g-M,I=e-m;return F?E(I,q-N):I}function $(g){var m=g-w,N=g-M;return w===void 0||m>=e||m<0||F&&N>=q}function W(){var g=H();return $(g)?K(g):void(k=setTimeout(W,z(g)))}function K(g){return k=void 0,D&&T?r(g):(T=_=void 0,L)}function V(){k!==void 0&&clearTimeout(k),M=0,T=w=_=k=void 0}function X(){return k===void 0?L:K(H())}function Q(){var g=H(),m=$(g);if(T=arguments,_=this,w=g,m){if(k===void 0)return j(w);if(F)return k=setTimeout(W,e),r(w)}return k===void 0&&(k=setTimeout(W,e)),L}var T,_,q,L,k,w,M=0,C=!1,F=!1,D=!0;if(typeof o!="function")throw new TypeError(s);return e=a(e)||0,t(d)&&(C=!!d.leading,F="maxWait"in d,q=F?h(a(d.maxWait)||0,e):q,D="trailing"in d?!!d.trailing:D),Q.cancel=V,Q.flush=X,Q}function t(o){var e=typeof o>"u"?"undefined":p(o);return!!o&&(e=="object"||e=="function")}function f(o){return!!o&&(typeof o>"u"?"undefined":p(o))=="object"}function y(o){return(typeof o>"u"?"undefined":p(o))=="symbol"||f(o)&&G.call(o)==l}function a(o){if(typeof o=="number")return o;if(y(o))return u;if(t(o)){var e=typeof o.valueOf=="function"?o.valueOf():o;o=t(e)?e+"":e}if(typeof o!="string")return o===0?o:+o;o=o.replace(b,"");var d=S.test(o);return d||Y.test(o)?R(o.slice(2),d?2:8):O.test(o)?u:+o}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},s="Expected a function",u=NaN,l="[object Symbol]",b=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,Y=/^0o[0-7]+$/i,R=parseInt,U=(typeof i>"u"?"undefined":p(i))=="object"&&i&&i.Object===Object&&i,J=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,B=U||J||Function("return this")(),A=Object.prototype,G=A.toString,h=Math.max,E=Math.min,H=function(){return B.Date.now()};x.exports=n}).call(c,function(){return this}())},function(x,c){function i(p){var s=void 0,u=void 0;for(s=0;s<p.length;s+=1)if(u=p[s],u.dataset&&u.dataset.aos||u.children&&i(u.children))return!0;return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function t(){return!!n()}function f(p,s){var u=window.document,l=n(),b=new l(y);a=s,b.observe(u.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function y(p){p&&p.forEach(function(s){var u=Array.prototype.slice.call(s.addedNodes),l=Array.prototype.slice.call(s.removedNodes),b=u.concat(l);if(i(b))return a()})}Object.defineProperty(c,"__esModule",{value:!0});var a=function(){};c.default={isSupported:t,ready:f}},function(x,c){function i(u,l){if(!(u instanceof l))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(c,"__esModule",{value:!0});var t=function(){function u(l,b){for(var O=0;O<b.length;O++){var S=b[O];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(l,S.key,S)}}return function(l,b,O){return b&&u(l.prototype,b),O&&u(l,O),l}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function u(){i(this,u)}return t(u,[{key:"phone",value:function(){var l=n();return!(!f.test(l)&&!y.test(l.substr(0,4)))}},{key:"mobile",value:function(){var l=n();return!(!a.test(l)&&!p.test(l.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),u}();c.default=new s},function(x,c){Object.defineProperty(c,"__esModule",{value:!0});var i=function(t,f,y){var a=t.node.getAttribute("data-aos-once");f>t.position?t.node.classList.add("aos-animate"):typeof a<"u"&&(a==="false"||!y&&a!=="true")&&t.node.classList.remove("aos-animate")},n=function(t,f){var y=window.pageYOffset,a=window.innerHeight;t.forEach(function(p,s){i(p,a+y,f)})};c.default=n},function(x,c,i){function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(c,"__esModule",{value:!0});var t=i(12),f=n(t),y=function(a,p){return a.forEach(function(s,u){s.node.classList.add("aos-init"),s.position=(0,f.default)(s.node,p.offset)}),a};c.default=y},function(x,c,i){function n(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(c,"__esModule",{value:!0});var t=i(13),f=n(t),y=function(a,p){var s=0,u=0,l=window.innerHeight,b={offset:a.getAttribute("data-aos-offset"),anchor:a.getAttribute("data-aos-anchor"),anchorPlacement:a.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(u=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(a=document.querySelectorAll(b.anchor)[0]),s=(0,f.default)(a).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":s+=a.offsetHeight/2;break;case"bottom-bottom":s+=a.offsetHeight;break;case"top-center":s+=l/2;break;case"bottom-center":s+=l/2+a.offsetHeight;break;case"center-center":s+=l/2+a.offsetHeight/2;break;case"top-top":s+=l;break;case"bottom-top":s+=a.offsetHeight+l;break;case"center-top":s+=a.offsetHeight/2+l}return b.anchorPlacement||b.offset||isNaN(p)||(u=p),s+u};c.default=y},function(x,c){Object.defineProperty(c,"__esModule",{value:!0});var i=function(n){for(var t=0,f=0;n&&!isNaN(n.offsetLeft)&&!isNaN(n.offsetTop);)t+=n.offsetLeft-(n.tagName!="BODY"?n.scrollLeft:0),f+=n.offsetTop-(n.tagName!="BODY"?n.scrollTop:0),n=n.offsetParent;return{top:f,left:t}};c.default=i},function(x,c){Object.defineProperty(c,"__esModule",{value:!0});var i=function(n){return n=n||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(n,function(t){return{node:t}})};c.default=i}])})})(ne);var me=ne.exports;const pe=ie(me),ge=()=>{const[P,Z]=te.useState(null),x=re(),c=ae(),i=se();te.useEffect(()=>{(async()=>{var f,y;pe.init();const t=await le.getAllArticle();Z((f=t==null?void 0:t.data)==null?void 0:f.data),console.log((y=t==null?void 0:t.data)==null?void 0:y.data)})()},[]);const n=t=>{x(ce(t)),c(`/detail-main-article/${t==null?void 0:t.name_article}}`)};return v.jsxs("div",{id:"article",className:`relative w-screen h-max ${i.pathname.includes("/detail-main-article")?"px-4 lg:px-12 pb-12 pt-0":"p-4 lg:p-12"}`,children:[v.jsx("img",{src:fe,className:"absolute scale-[1.6] top-0 right-0 opacity-[0.2] z-[-1]",alt:"Sumatera"}),i.pathname.includes("/detail-main-article")?null:v.jsxs(v.Fragment,{children:[v.jsx("div",{"data-aos":"fade-right",className:"rounded-full text-white mb-4 lg:text-[16px] text-[13px] bg-blue-400 w-max py-3 px-6",children:"Informasi Menarik Untuk Kamu"}),v.jsxs("h2",{"data-aos":"fade-right",className:"font-bold hidden lg:flex items-center text-[36px]",children:["📰 ",v.jsx("span",{className:"relative top-1 ml-3",children:"Artikel Seputar Nusantara"})]})]}),v.jsx("div",{className:"w-full flex z-[33] flex-col justify-between items-center mt-8",children:P&&(P==null?void 0:P.length)>0?P==null?void 0:P.map((t,f)=>v.jsxs("div",{"data-aos":"fade-right",className:"w-full min-h-[180px] my-3 border border-blue-600 border-dashed rounded-[12px] bg-white shadow-lg p-5",children:[v.jsxs("div",{className:"w-full h-[50%] flex items-center justify-between overflow-hidden text-left rounded-[8px]",children:[v.jsx("h3",{onClick:()=>n(t),className:"text-[16px] lg:text-[20px] cursor-pointer hover:text-blue-600 active:scale-[0.99] underline font-[500]",children:t==null?void 0:t.name_article}),v.jsx("div",{className:"rounded-[10px] text-[12px] w-max h-max px-4 py-2 hidden lg:flex items-center justify-center bg-green-600 text-white mr-4",children:v.jsx("p",{children:"Public"})})]}),v.jsxs("div",{className:"w-full flex flex-wrap mt-3 items-center",children:[v.jsxs("div",{className:"rounded-full lg:mb-0 mb-3 w-max h-max px-4 py-2 flex items-center justify-center bg-slate-200 text-slate-500 mr-3",children:[v.jsx(ue,{className:"mr-2"}),"  ",t==null?void 0:t.year]}),v.jsxs("div",{className:"rounded-full lg:mb-0 mb-3 max-w-[56%] h-max px-4 py-2 flex items-center justify-center bg-blue-200 text-blue-600 mr-4",children:[v.jsx(de,{className:"mr-2"}),v.jsx("p",{className:"max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap",children:"EcoNusantara Team"})]})]}),v.jsx("hr",{className:"mt-4"}),v.jsx("p",{className:"text-slate-500 mt-4 text-[14px] lg:text-[16px]",children:t==null?void 0:t.description}),v.jsx("div",{className:"w-full flex items-center",children:v.jsx("div",{className:"rounded-full w-max h-max px-4 py-2 flex items-center justify-center mt-5 bg-yellow-200 text-yellow-600 text-[12px]",children:v.jsx("p",{children:"Info Nusantara"})})})]},f)):null})]})};export{pe as A,ge as a};
