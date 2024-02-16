import{j as m}from"./jsx-runtime-vNq4Oc-g.js";import{T as u}from"./Typography-mm7W6vQZ.js";const d={levels:[1,2,3,4,5,6]},{Title:c}=u,f={title:"Primitive/Typography/Title",component:c},e={args:{level:1,children:"Title",className:"",style:{},strong:!1,bold:!1,regular:!1}},r=()=>d.levels.map((p,s)=>m.jsx(c,{level:p,children:`h${s+1}. Star Components Library`},s));var t,l,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: 'Title',
    className: '',
    style: {},
    strong: false,
    bold: false,
    regular: false
  }
}`,...(a=(l=e.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var o,n,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"() => options.levels.map((level, i: number) => {\n  return <Title level={level} key={i}>{`h${i + 1}. Star Components Library`}</Title>;\n})",...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const g=["Default","Levels"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Levels:r,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{e as D,r as L,y as T};
