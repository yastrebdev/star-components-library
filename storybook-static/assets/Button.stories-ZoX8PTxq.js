import{j as i}from"./jsx-runtime-vNq4Oc-g.js";import{B as e}from"./Button-BDqmljJF.js";import{i as T}from"./Icon-EbFtFzyR.js";const u={types:["primary","secondary"],sizes:["sm","md","lg"],shapes:["rounded","normal","circle"],icons:[T]},D={title:"Simple/Button",component:e},o={args:{type:"primary",size:"lg",shape:"rounded",icon:"",className:"",style:{},onClick:()=>{}}},t=()=>u.types.map((s,r)=>i.jsx(e,{type:s,children:"Button"},r)),a=()=>u.sizes.map((s,r)=>i.jsx(e,{size:s,children:"Button"},r)),n=()=>u.shapes.map((s,r)=>i.jsx(e,{shape:s,children:"Button"},r)),c=()=>i.jsx(e,{icon:"Brain"}),p=()=>i.jsx(e,{onClick:()=>alert("click button")});var m,l,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    size: 'lg',
    shape: 'rounded',
    icon: ('' as IconName),
    className: '',
    style: {},
    onClick: () => {}
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var y,B,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`() => options.types.map((type, i: number) => {
  return <Button type={type} key={i}>Button</Button>;
})`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var g,h,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => options.sizes.map((size, i: number) => {
  return <Button size={size} key={i}>Button</Button>;
})`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var z,j,x;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`() => options.shapes.map((shape, i: number) => {
  return <Button shape={shape} key={i}>Button</Button>;
})`,...(x=(j=n.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var b,f,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:"() => <Button icon='Brain' />",...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var O,_,I;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:"() => <Button onClick={() => alert('click button')} />",...(I=(_=p.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};const N=["Default","Types","Sizes","Shapes","Icon","OnClick"],P=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Icon:c,OnClick:p,Shapes:n,Sizes:a,Types:t,__namedExportsOrder:N,default:D},Symbol.toStringTag,{value:"Module"}));export{P as B,o as D,c as I,p as O,a as S,t as T,n as a};
