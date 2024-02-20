import{j as u}from"./jsx-runtime-vNq4Oc-g.js";import{T as m}from"./Typography--34a-Zdr.js";const l={types:["secondary","success","warning","danger","default"]},{Text:c}=m,d={title:"Primitive/Typography/Text",component:c},e={args:{children:"Text",className:"",style:{},strong:!1,bold:!1},argTypes:{type:{defaultValue:"default",options:l.types,control:{type:"select"}}}},t=()=>l.types.map((y,i)=>u.jsx(c,{type:y},i));var s,r,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Text',
    className: '',
    style: {},
    strong: false,
    bold: false
  },
  argTypes: {
    type: {
      defaultValue: 'default',
      options: options.types,
      control: {
        type: 'select'
      }
    }
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var a,n,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => options.types.map((type, i: number) => {
  return <Text type={type} key={i}></Text>;
})`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const f=["Default","Types"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Types:t,__namedExportsOrder:f,default:d},Symbol.toStringTag,{value:"Module"}));export{e as D,x as T,t as a};
