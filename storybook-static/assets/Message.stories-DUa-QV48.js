import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{B as j}from"./Button-BDqmljJF.js";import{r as g,R as u}from"./index-4g5l5LRQ.js";import"./Typography--34a-Zdr.js";import"./index-XNbs-YUW.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Icon-EbFtFzyR.js";const v=()=>{const[e,o]=g.useState([]),[f,l]=g.useState(!1);console.log("1",e);const n=(s,a)=>{const i={type:s,content:a};console.log("2",e),o([...e,i]),setTimeout(()=>{l(!0),console.log("3",e)},0),setTimeout(()=>{l(!1),console.log("4",e)},3e3);for(let m=0;m<e.length;m++)setTimeout(()=>{o(e.filter(h=>h!==i))},3200),console.log("5",e)},E={success:s=>n("success",s),error:s=>n("error",s),warning:s=>n("warning",s)},M=u.createElement("div",null,e.map((s,a)=>u.createElement("div",{key:a,className:`scl-message ${s.type} ${f&&"scl-message__animation"}`},s.content)));return[E,M]},A=v,c=()=>null;c.useMessage=A;const R={title:"Simple/Message",component:c,tags:["autodocs"],decorators:[e=>t.jsx("div",{style:{height:80},children:t.jsx(e,{})})]},r=()=>{const[e,o]=c.useMessage();return t.jsxs(t.Fragment,{children:[o,t.jsx(j,{onClick:()=>e.error("Error"),children:"Error"})]})};var p,d,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [messageApi, contextHolder] = message.useMessage();
  return <>\r
            {contextHolder}\r
            <Button onClick={() => messageApi.error('Error')}>Error</Button>\r
        </>;
}`,...(x=(d=r.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,R as default};
