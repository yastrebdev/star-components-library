import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{A as e,a as z}from"./Avatar-Kqp7wDjw.js";import{i as S}from"./Icon-j9HTkUdV.js";const _={sizes:["sm","md","lg"],icons:[S]},y={title:"Simple/Avatar",component:e,decorators:[c=>r.jsx("div",{style:{display:"flex",flexDirection:"row-reverse",alignItems:"center",gap:"10px"},children:r.jsx(c,{})})]},s={args:{src:z,size:"lg",circle:!0,className:""}},a=()=>_.sizes.map((c,A)=>r.jsx(e,{size:c},A)),t=()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{circle:!0}),r.jsx(e,{circle:!1})]}),o=()=>r.jsxs(r.Fragment,{children:[r.jsx(e,{icon:"Plus"}),r.jsx(e,{icon:"User"})]});var n,i,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    src: Ava,
    size: 'lg',
    circle: true,
    className: ''
  }
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => options.sizes.map((size, i: number) => {
  return <Avatar size={size} key={i} />;
})`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,x,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <>\r
            <Avatar circle />\r
            <Avatar circle={false} />\r
        </>;
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,v,f;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <>\r
            <Avatar icon='Plus' />\r
            <Avatar icon='User' />\r
        </>;
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const b=["Default","Sizes","Circle","Icon"],C=Object.freeze(Object.defineProperty({__proto__:null,Circle:t,Default:s,Icon:o,Sizes:a,__namedExportsOrder:b,default:y},Symbol.toStringTag,{value:"Module"}));export{C as A,t as C,s as D,o as I,a as S};
