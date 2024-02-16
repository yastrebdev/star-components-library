import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{I as u}from"./Icon-j9HTkUdV.js";import{c as b}from"./index-XNbs-YUW.js";import{r as g}from"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const t=({visible:s})=>e.jsxs("div",{className:b("scl-message",{"scl-message__animation":s}),children:[e.jsx(u,{name:"Info",weight:"fill",color:"#b3bbfd"}),e.jsx("span",{children:"Copied!"})]});try{t.displayName="Message",t.__docgenInfo={description:"",displayName:"Message",props:{visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}}}}}catch{}const h={title:"Simple/Message",component:t,tags:["autodocs"],decorators:[s=>e.jsx("div",{style:{height:80},children:e.jsx(s,{})})]},r=()=>e.jsx(t,{visible:!0}),a=()=>{const[s,p]=g.useState(!1),d=()=>{p(!s)};return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:d,children:"Click"}),e.jsx(t,{visible:s})]})};var i,o,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:"() => <Message visible={true} />",...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState(false);
  const viewMessage = () => {
    setVisible(!visible);
  };
  return <>\r
            <button onClick={viewMessage}>Click</button>\r
            <Message visible={visible} />\r
        </>;
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const M=["Default","ClickButton"];export{a as ClickButton,r as Default,M as __namedExportsOrder,h as default};
