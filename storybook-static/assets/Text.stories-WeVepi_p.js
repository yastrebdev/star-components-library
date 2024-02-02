import{j as y}from"./jsx-runtime-vNq4Oc-g.js";import{T as d}from"./Typography-KZQEgUFr.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-XNbs-YUW.js";const c={types:["default","secondary","success","warning","danger"]},{Text:m}=d,j={title:"Primitive/Typography/Text",component:m,tags:["autodocs"]},e={argTypes:{type:{defaultValue:"default",options:c.types,control:{type:"select"}}}},t=()=>c.types.map((i,u)=>y.jsx(m,{type:i},u));var s,o,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  argTypes: {
    type: {
      defaultValue: 'default',
      options: options.types,
      control: {
        type: 'select'
      }
    }
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var a,p,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => options.types.map((type, i: number) => {
  return <Text type={type} key={i}></Text>;
})`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const h=["Default","Types"];export{e as Default,t as Types,h as __namedExportsOrder,j as default};
