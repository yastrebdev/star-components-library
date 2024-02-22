import{j as L}from"./jsx-runtime-vNq4Oc-g.js";import{B as ne}from"./Button-Yd4SJNgF.js";import{I as se}from"./Icon-TQ-jYXSw.js";import{r as b,R as v}from"./index-4g5l5LRQ.js";function Ee(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Ee(e[t]))&&(s&&(s+=" "),s+=n)}else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}function F(){for(var e,t,n=0,s="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Ee(e))&&(s&&(s+=" "),s+=t);return s}const Z=e=>typeof e=="number"&&!isNaN(e),W=e=>typeof e=="string",M=e=>typeof e=="function",re=e=>W(e)||M(e)?e:null,de=e=>b.isValidElement(e)||W(e)||M(e)||Z(e);function we(e,t,n){n===void 0&&(n=300);const{scrollHeight:s,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=s+"px",a.transition=`all ${n}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)})})}function le(e){let{enter:t,exit:n,appendPosition:s=!1,collapse:a=!0,collapseDuration:c=300}=e;return function(o){let{children:E,position:f,preventExitTransition:_,done:d,nodeRef:C,isIn:I,playToast:w}=o;const g=s?`${t}--${f}`:t,u=s?`${n}--${f}`:n,T=b.useRef(0);return b.useLayoutEffect(()=>{const m=C.current,l=g.split(" "),r=y=>{y.target===C.current&&(w(),m.removeEventListener("animationend",r),m.removeEventListener("animationcancel",r),T.current===0&&y.type!=="animationcancel"&&m.classList.remove(...l))};m.classList.add(...l),m.addEventListener("animationend",r),m.addEventListener("animationcancel",r)},[]),b.useEffect(()=>{const m=C.current,l=()=>{m.removeEventListener("animationend",l),a?we(m,d,c):d()};I||(_?l():(T.current=1,m.className+=` ${u}`,m.addEventListener("animationend",l)))},[I]),v.createElement(v.Fragment,null,E)}}function fe(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const k=new Map;let ee=[];const pe=new Set,ke=e=>pe.forEach(t=>t(e)),Te=()=>k.size>0;function be(e,t){var n;if(t)return!((n=k.get(t))==null||!n.isToastActive(e));let s=!1;return k.forEach(a=>{a.isToastActive(e)&&(s=!0)}),s}function Ie(e,t){de(e)&&(Te()||ee.push({content:e,options:t}),k.forEach(n=>{n.buildToast(e,t)}))}function ge(e,t){k.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function Le(e){const{subscribe:t,getSnapshot:n,setProps:s}=b.useRef(function(c){const o=c.containerId||1;return{subscribe(E){const f=function(d,C,I){let w=1,g=0,u=[],T=[],m=[],l=C;const r=new Map,y=new Set,$=()=>{m=Array.from(r.values()),y.forEach(i=>i())},z=i=>{T=i==null?[]:T.filter(h=>h!==i),$()},x=i=>{const{toastId:h,onOpen:N,updateId:D,children:R}=i.props,Y=D==null;i.staleId&&r.delete(i.staleId),r.set(h,i),T=[...T,i.props.toastId].filter(j=>j!==i.staleId),$(),I(fe(i,Y?"added":"updated")),Y&&M(N)&&N(b.isValidElement(R)&&R.props)};return{id:d,props:l,observe:i=>(y.add(i),()=>y.delete(i)),toggle:(i,h)=>{r.forEach(N=>{h!=null&&h!==N.props.toastId||M(N.toggle)&&N.toggle(i)})},removeToast:z,toasts:r,clearQueue:()=>{g-=u.length,u=[]},buildToast:(i,h)=>{if((P=>{let{containerId:A,toastId:B,updateId:S}=P;const V=A?A!==d:d!==1,G=r.has(B)&&S==null;return V||G})(h))return;const{toastId:N,updateId:D,data:R,staleId:Y,delay:j}=h,q=()=>{z(N)},te=D==null;te&&g++;const O={...l,style:l.toastStyle,key:w++,...Object.fromEntries(Object.entries(h).filter(P=>{let[A,B]=P;return B!=null})),toastId:N,updateId:D,data:R,closeToast:q,isIn:!1,className:re(h.className||l.toastClassName),bodyClassName:re(h.bodyClassName||l.bodyClassName),progressClassName:re(h.progressClassName||l.progressClassName),autoClose:!h.isLoading&&(H=h.autoClose,Q=l.autoClose,H===!1||Z(H)&&H>0?H:Q),deleteToast(){const P=r.get(N),{onClose:A,children:B}=P.props;M(A)&&A(b.isValidElement(B)&&B.props),I(fe(P,"removed")),r.delete(N),g--,g<0&&(g=0),u.length>0?x(u.shift()):$()}};var H,Q;O.closeButton=l.closeButton,h.closeButton===!1||de(h.closeButton)?O.closeButton=h.closeButton:h.closeButton===!0&&(O.closeButton=!de(l.closeButton)||l.closeButton);let U=i;b.isValidElement(i)&&!W(i.type)?U=b.cloneElement(i,{closeToast:q,toastProps:O,data:R}):M(i)&&(U=i({closeToast:q,toastProps:O,data:R}));const X={content:U,props:O,staleId:Y};l.limit&&l.limit>0&&g>l.limit&&te?u.push(X):Z(j)?setTimeout(()=>{x(X)},j):x(X)},setProps(i){l=i},setToggle:(i,h)=>{r.get(i).toggle=h},isToastActive:i=>T.some(h=>h===i),getSnapshot:()=>l.newestOnTop?m.reverse():m}}(o,c,ke);k.set(o,f);const _=f.observe(E);return ee.forEach(d=>Ie(d.content,d.options)),ee=[],()=>{_(),k.delete(o)}},setProps(E){var f;(f=k.get(o))==null||f.setProps(E)},getSnapshot(){var E;return(E=k.get(o))==null?void 0:E.getSnapshot()}}}(e)).current;s(e);const a=b.useSyncExternalStore(t,n,n);return{getToastToRender:function(c){if(!a)return[];const o=new Map;return a.forEach(E=>{const{position:f}=E.props;o.has(f)||o.set(f,[]),o.get(f).push(E)}),Array.from(o,E=>c(E[0],E[1]))},isToastActive:be,count:a==null?void 0:a.length}}function Ne(e){const[t,n]=b.useState(!1),[s,a]=b.useState(!1),c=b.useRef(null),o=b.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:E,pauseOnHover:f,closeToast:_,onClick:d,closeOnClick:C}=e;var I,w;function g(){n(!0)}function u(){n(!1)}function T(r){const y=c.current;o.canDrag&&y&&(o.didMove=!0,t&&u(),o.delta=e.draggableDirection==="x"?r.clientX-o.start:r.clientY-o.start,o.start!==r.clientX&&(o.canCloseOnClick=!1),y.style.transform=`translate3d(${e.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,y.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function m(){document.removeEventListener("pointermove",T),document.removeEventListener("pointerup",m);const r=c.current;if(o.canDrag&&o.didMove&&r){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return a(!0),e.closeToast(),void e.collapseAll();r.style.transition="transform 0.2s, opacity 0.2s",r.style.removeProperty("transform"),r.style.removeProperty("opacity")}}(w=k.get((I={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||w.setToggle(I.id,I.fn),b.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||u(),window.addEventListener("focus",g),window.addEventListener("blur",u),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",u)}},[e.pauseOnFocusLoss]);const l={onPointerDown:function(r){if(e.draggable===!0||e.draggable===r.pointerType){o.didMove=!1,document.addEventListener("pointermove",T),document.addEventListener("pointerup",m);const y=c.current;o.canCloseOnClick=!0,o.canDrag=!0,y.style.transition="none",e.draggableDirection==="x"?(o.start=r.clientX,o.removalDistance=y.offsetWidth*(e.draggablePercent/100)):(o.start=r.clientY,o.removalDistance=y.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(r){const{top:y,bottom:$,left:z,right:x}=c.current.getBoundingClientRect();r.nativeEvent.type!=="touchend"&&e.pauseOnHover&&r.clientX>=z&&r.clientX<=x&&r.clientY>=y&&r.clientY<=$?u():g()}};return E&&f&&(l.onMouseEnter=u,e.stacked||(l.onMouseLeave=g)),C&&(l.onClick=r=>{d&&d(r),o.canCloseOnClick&&_()}),{playToast:g,pauseToast:u,isRunning:t,preventExitTransition:s,toastRef:c,eventHandlers:l}}function Me(e){let{delay:t,isRunning:n,closeToast:s,type:a="default",hide:c,className:o,style:E,controlledProgress:f,progress:_,rtl:d,isIn:C,theme:I}=e;const w=c||f&&_===0,g={...E,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};f&&(g.transform=`scaleX(${_})`);const u=F("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${I}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":d}),T=M(o)?o({rtl:d,type:a,defaultClassName:u}):F(u,o),m={[f&&_>=1?"onTransitionEnd":"onAnimationEnd"]:f&&_<1?null:()=>{C&&s()}};return v.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":w},v.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${I} Toastify__progress-bar--${a}`}),v.createElement("div",{role:"progressbar","aria-hidden":w?"true":"false","aria-label":"notification timer",className:T,style:g,...m}))}let Ae=1;const _e=()=>""+Ae++;function Be(e){return e&&(W(e.toastId)||Z(e.toastId))?e.toastId:_e()}function K(e,t){return Ie(e,t),t.toastId}function ie(e,t){return{...t,type:t&&t.type||e,toastId:Be(t)}}function oe(e){return(t,n)=>K(t,ie(e,n))}function p(e,t){return K(e,ie("default",t))}p.loading=(e,t)=>K(e,ie("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),p.promise=function(e,t,n){let s,{pending:a,error:c,success:o}=t;a&&(s=W(a)?p.loading(a,n):p.loading(a.render,{...n,...a}));const E={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},f=(d,C,I)=>{if(C==null)return void p.dismiss(s);const w={type:d,...E,...n,data:I},g=W(C)?{render:C}:C;return s?p.update(s,{...w,...g}):p(g.render,{...w,...g}),I},_=M(e)?e():e;return _.then(d=>f("success",o,d)).catch(d=>f("error",c,d)),_},p.success=oe("success"),p.info=oe("info"),p.error=oe("error"),p.warning=oe("warning"),p.warn=p.warning,p.dark=(e,t)=>K(e,ie("default",{theme:"dark",...t})),p.dismiss=function(e){(function(t){var n;if(Te()){if(t==null||W(n=t)||Z(n))k.forEach(a=>{a.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){var s;(s=k.get(t.containerId))!=null&&s.removeToast(t.id)||k.forEach(a=>{a.removeToast(t.id)})}}else ee=ee.filter(a=>t!=null&&a.options.toastId!==t)})(e)},p.clearWaitingQueue=function(e){e===void 0&&(e={}),k.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},p.isActive=be,p.update=function(e,t){t===void 0&&(t={});const n=((s,a)=>{var c;let{containerId:o}=a;return(c=k.get(o||1))==null?void 0:c.toasts.get(s)})(e,t);if(n){const{props:s,content:a}=n,c={delay:100,...s,...t,toastId:t.toastId||e,updateId:_e()};c.toastId!==e&&(c.staleId=e);const o=c.render||a;delete c.render,K(o,c)}},p.done=e=>{p.update(e,{progress:1})},p.onChange=function(e){return pe.add(e),()=>{pe.delete(e)}},p.play=e=>ge(!0,e),p.pause=e=>ge(!1,e);const $e=typeof window<"u"?b.useLayoutEffect:b.useEffect,ae=e=>{let{theme:t,type:n,isLoading:s,...a}=e;return v.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...a})},ue={info:function(e){return v.createElement(ae,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return v.createElement(ae,{...e},v.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return v.createElement(ae,{...e},v.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return v.createElement(ae,{...e},v.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return v.createElement("div",{className:"Toastify__spinner"})}},Pe=e=>{const{isRunning:t,preventExitTransition:n,toastRef:s,eventHandlers:a,playToast:c}=Ne(e),{closeButton:o,children:E,autoClose:f,onClick:_,type:d,hideProgressBar:C,closeToast:I,transition:w,position:g,className:u,style:T,bodyClassName:m,bodyStyle:l,progressClassName:r,progressStyle:y,updateId:$,role:z,progress:x,rtl:i,toastId:h,deleteToast:N,isIn:D,isLoading:R,closeOnClick:Y,theme:j}=e,q=F("Toastify__toast",`Toastify__toast-theme--${j}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":i},{"Toastify__toast--close-on-click":Y}),te=M(u)?u({rtl:i,position:g,type:d,defaultClassName:q}):F(q,u),O=function(X){let{theme:P,type:A,isLoading:B,icon:S}=X,V=null;const G={theme:P,type:A};return S===!1||(M(S)?V=S({...G,isLoading:B}):b.isValidElement(S)?V=b.cloneElement(S,G):B?V=ue.spinner():(xe=>xe in ue)(A)&&(V=ue[A](G))),V}(e),H=!!x||!f,Q={closeToast:I,type:d,theme:j};let U=null;return o===!1||(U=M(o)?o(Q):b.isValidElement(o)?b.cloneElement(o,Q):function(X){let{closeToast:P,theme:A,ariaLabel:B="close"}=X;return v.createElement("button",{className:`Toastify__close-button Toastify__close-button--${A}`,type:"button",onClick:S=>{S.stopPropagation(),P(S)},"aria-label":B},v.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},v.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(Q)),v.createElement(w,{isIn:D,done:N,position:g,preventExitTransition:n,nodeRef:s,playToast:c},v.createElement("div",{id:h,onClick:_,"data-in":D,className:te,...a,style:T,ref:s},v.createElement("div",{...D&&{role:z},className:M(m)?m({type:d}):F("Toastify__toast-body",m),style:l},O!=null&&v.createElement("div",{className:F("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},O),v.createElement("div",null,E)),U,v.createElement(Me,{...$&&!H?{key:`pb-${$}`}:{},rtl:i,theme:j,delay:f,isRunning:t,isIn:D,closeToast:I,hide:C,type:d,style:y,className:r,controlledProgress:H,progress:x||0})))},ce=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Se=le(ce("bounce",!0));le(ce("slide",!0));le(ce("zoom"));const ze=le(ce("flip")),De={position:"top-right",transition:Se,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Oe(e){let t={...De,...e};const n=e.stacked,[s,a]=b.useState(!0),c=b.useRef(null),{getToastToRender:o,isToastActive:E,count:f}=Le(t),{className:_,style:d,rtl:C,containerId:I}=t;function w(u){const T=F("Toastify__toast-container",`Toastify__toast-container--${u}`,{"Toastify__toast-container--rtl":C});return M(_)?_({position:u,rtl:C,defaultClassName:T}):F(T,re(_))}function g(){n&&(a(!0),p.play())}return $e(()=>{if(n){var u;const T=c.current.querySelectorAll('[data-in="true"]'),m=12,l=(u=t.position)==null?void 0:u.includes("top");let r=0,y=0;Array.from(T).reverse().forEach(($,z)=>{const x=$;x.classList.add("Toastify__toast--stacked"),z>0&&(x.dataset.collapsed=`${s}`),x.dataset.pos||(x.dataset.pos=l?"top":"bot");const i=r*(s?.2:1)+(s?0:m*z);x.style.setProperty("--y",`${l?i:-1*i}px`),x.style.setProperty("--g",`${m}`),x.style.setProperty("--s",""+(1-(s?y:0))),r+=x.offsetHeight,y+=.025})}},[s,f,n]),v.createElement("div",{ref:c,className:"Toastify",id:I,onMouseEnter:()=>{n&&(a(!1),p.pause())},onMouseLeave:g},o((u,T)=>{const m=T.length?{...d}:{...d,pointerEvents:"none"};return v.createElement("div",{className:w(u),style:m,key:`container-${u}`},T.map(l=>{let{content:r,props:y}=l;return v.createElement(Pe,{...y,stacked:n,collapseAll:g,isIn:E(y.toastId,y.containerId),style:y.style,key:`toast-${y.key}`},r)}))}))}const Ce=()=>[{open:(n,s)=>{switch(n){case"success":p.success(s,{className:"scl-message",icon:L.jsx(se,{name:"CheckCircle",color:"#52c41a",weight:"fill"})});break;case"error":p.error(s,{className:"scl-message",icon:L.jsx(se,{name:"Warning",color:"#e50000",weight:"fill"})});break;case"warning":p.warn(s,{className:"scl-message",icon:L.jsx(se,{name:"WarningDiamond",color:"#ff7a00",weight:"fill"})});break;case"info":p.info(s,{className:"scl-message",icon:L.jsx(se,{testid:"scl-message-icon-test",name:"Info",color:"#8843ff",weight:"fill"})});break;default:p("Default Notification !");break}}},L.jsx(Oe,{closeButton:!1,position:"top-center",autoClose:3e3,transition:ze,closeOnClick:!0,draggable:!0})];Ce[Symbol.iterator]=function*(){yield*this()};function Re(){return Ce()}const me=()=>L.jsx("div",{children:"Message"});me.useMessage=Re;const je={title:"Simple/Message",component:me,tags:["autodocs"],decorators:[e=>L.jsx("div",{style:{height:200,display:"flex",alignItems:"center",gap:10,justifyContent:"center",width:"100%",paddingTop:40},children:L.jsx(e,{})})]},J=()=>{const[e,t]=me.useMessage(),n=()=>{e.open("info","info message")},s=()=>{e.open("warning","warning message")},a=()=>{e.open("error","error message")},c=()=>{e.open("success","success message")};return L.jsxs(L.Fragment,{children:[t,L.jsx(ne,{size:"sm",onClick:n,children:"Info"}),L.jsx(ne,{size:"sm",onClick:s,children:"Warning"}),L.jsx(ne,{size:"sm",onClick:a,children:"Error"}),L.jsx(ne,{size:"sm",onClick:c,children:"Success"})]})};var ye,ve,he;J.parameters={...J.parameters,docs:{...(ye=J.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.open('info', 'info message');
  };
  const warning = () => {
    messageApi.open('warning', 'warning message');
  };
  const error = () => {
    messageApi.open('error', 'error message');
  };
  const success = () => {
    messageApi.open('success', 'success message');
  };
  return <>\r
            {contextHolder}\r
            <Button size="sm" onClick={info}>\r
                Info\r
            </Button>\r
            <Button size="sm" onClick={warning}>\r
                Warning\r
            </Button>\r
            <Button size="sm" onClick={error}>\r
                Error\r
            </Button>\r
            <Button size="sm" onClick={success}>\r
                Success\r
            </Button>\r
        </>;
}`,...(he=(ve=J.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};const He=["Default"],Ye=Object.freeze(Object.defineProperty({__proto__:null,Default:J,__namedExportsOrder:He,default:je},Symbol.toStringTag,{value:"Module"}));export{J as D,Ye as M};
