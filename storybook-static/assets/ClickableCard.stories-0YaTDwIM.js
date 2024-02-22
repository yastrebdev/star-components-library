import{j as a}from"./jsx-runtime-vNq4Oc-g.js";import{C as d}from"./Card-cyfQIDqr.js";const y={types:["primary","secondary"]},{ClickableCard:l}=d,u={title:"Simple/Card/ClickableCard",component:l,tags:["autodocs"],decorators:[t=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",padding:"0 24px"},children:a.jsx(t,{})})]},e={args:{type:"primary",iconName:"ChatCircle",title:"Text Writer",subtitle:"Youre scenario",className:"",style:{}}},r=()=>y.types.map((t,m)=>a.jsx(l,{type:t},m));var s,o,p;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    iconName: 'ChatCircle',
    title: 'Text Writer',
    subtitle: 'Youre scenario',
    className: '',
    style: {}
  }
}`,...(p=(o=e.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var i,c,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => options.types.map((type, i) => {
  return <ClickableCard key={i} type={type} />;
})`,...(n=(c=r.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const C=["Default","Types"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Types:r,__namedExportsOrder:C,default:u},Symbol.toStringTag,{value:"Module"}));export{f as C,e as D,r as T};
