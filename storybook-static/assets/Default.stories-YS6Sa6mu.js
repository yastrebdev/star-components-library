import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{D as a}from"./Default-kepVjBDK.js";const B={title:"Smart/Input/Default",component:a},r={args:{button:!1,buttonIcon:"PaperPlaneRight",className:"",emptyValidation:!0,icon:"",iconColor:"",placeholder:"default",style:{},value:"",onClickButton:(o,l)=>console.log(o==null?void 0:o.target,l)}},t=()=>e.jsx(a,{icon:"DownloadDown",iconColor:"#f7b63f"}),n=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"Custom placeholder"}),e.jsx(a,{value:"Custom value"})]}),s=()=>e.jsx(a,{button:!0,buttonIcon:"Brain",onClickButton:(o,l)=>alert(l?`Вы ввели: "${l}"`:"Вы ничего не ввели")}),u=()=>e.jsx(a,{onChange:o=>console.log(o)});var c,p,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    button: false,
    buttonIcon: 'PaperPlaneRight',
    className: '',
    emptyValidation: true,
    icon: ('' as IconName),
    iconColor: '',
    placeholder: 'default',
    style: {},
    value: '',
    onClickButton: (e, value) => console.log(e?.target, value)
  }
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,d,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => <Input icon="DownloadDown" iconColor='#f7b63f' />`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var C,f,h;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <>\r
            <Input placeholder='Custom placeholder' />\r
            <Input value='Custom value' />\r
        </>;
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var I,b,v;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:'() => <Input button buttonIcon="Brain" onClickButton={(_, value) => alert(value ? `Вы ввели: "${value}"` : \'Вы ничего не ввели\')} />',...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var D,j,x;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:"() => <Input onChange={value => console.log(value)} />",...(x=(j=u.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};const S=["Default","Icon","PlaceholderAndValue","Click","Change"],k=Object.freeze(Object.defineProperty({__proto__:null,Change:u,Click:s,Default:r,Icon:t,PlaceholderAndValue:n,__namedExportsOrder:S,default:B},Symbol.toStringTag,{value:"Module"}));export{s as C,r as D,k as I,n as P,t as a,u as b};
