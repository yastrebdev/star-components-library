import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{D as R}from"./Default-pQP_KMwZ.js";import{r as p}from"./index-4g5l5LRQ.js";import{I as M}from"./Icon-EbFtFzyR.js";import{c as T}from"./index-XNbs-YUW.js";const i=({visibleIcon:a=!1,visibleValue:_=!1,placeholder:I="password",value:q,iconColor:D="#000000",onChange:c})=>{const[u,k]=p.useState(_),[N,x]=p.useState(""),E=()=>{k(!u)},j=u?"EyeSlash":"Eye",U=u?"text":"password";return e.jsxs("div",{className:"scl-input",children:[e.jsx("input",{className:"scl-input__field",type:U,placeholder:I,value:q||N,onChange:B=>{const d=B.target.value;x(d),c&&c(d)}}),a&&e.jsx("div",{"data-testid":"password-icon",onClick:E,className:T("scl-input__icon scl-input__icon_password"),children:e.jsx(M,{name:j,color:D})})]})};try{i.displayName="Password",i.__docgenInfo={description:"",displayName:"Password",props:{visibleIcon:{defaultValue:{value:"false"},description:"",name:"visibleIcon",required:!1,type:{name:"boolean"}},visibleValue:{defaultValue:{value:"false"},description:"",name:"visibleValue",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"password"},description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},iconColor:{defaultValue:{value:"#000000"},description:"",name:"iconColor",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string | number) => void)"}}}}}catch{}const r=()=>e.jsx(R,{});r.Password=i;try{r.displayName="Input",r.__docgenInfo={description:"",displayName:"Input",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"DotsThree"'},{value:'"User"'},{value:'"X"'},{value:'"Check"'},{value:'"Moon"'},{value:'"Sun"'},{value:'"CaretDown"'},{value:'"CaretLeft"'},{value:'"ChatCircle"'},{value:'"PaperPlaneRight"'},{value:'"Eye"'},{value:'"EyeSlash"'},{value:'"PencilSimple"'},{value:'"CaretUpDown"'},{value:'"ArrowUpRight"'},{value:'"Brain"'},{value:'"Copy"'},{value:'"DownloadUp"'},{value:'"DownloadDown"'},{value:'"FloppyDisk"'},{value:'"HandPointing"'},{value:'"PageSearch"'},{value:'"Plus"'},{value:'"PokerChip"'},{value:'"Repeat"'},{value:'"Barcode"'},{value:'"SearchEngine"'},{value:'"Setting"'},{value:'"ShareNetwork"'},{value:'"TrashSimple"'},{value:'"Info"'},{value:'"WarningCircle"'}]}},buttonIcon:{defaultValue:null,description:"",name:"buttonIcon",required:!1,type:{name:"enum",value:[{value:'"DotsThree"'},{value:'"User"'},{value:'"X"'},{value:'"Check"'},{value:'"Moon"'},{value:'"Sun"'},{value:'"CaretDown"'},{value:'"CaretLeft"'},{value:'"ChatCircle"'},{value:'"PaperPlaneRight"'},{value:'"Eye"'},{value:'"EyeSlash"'},{value:'"PencilSimple"'},{value:'"CaretUpDown"'},{value:'"ArrowUpRight"'},{value:'"Brain"'},{value:'"Copy"'},{value:'"DownloadUp"'},{value:'"DownloadDown"'},{value:'"FloppyDisk"'},{value:'"HandPointing"'},{value:'"PageSearch"'},{value:'"Plus"'},{value:'"PokerChip"'},{value:'"Repeat"'},{value:'"Barcode"'},{value:'"SearchEngine"'},{value:'"Setting"'},{value:'"ShareNetwork"'},{value:'"TrashSimple"'},{value:'"Info"'},{value:'"WarningCircle"'}]}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"boolean"}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"((e?: MouseEvent<HTMLButtonElement, MouseEvent>, value?: string) => void) | undefined"}},emptyValidation:{defaultValue:null,description:"",name:"emptyValidation",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},iconColor:{defaultValue:null,description:"",name:"iconColor",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string | number) => void)"}}}}}catch{}const t=r.Password,H={title:"Smart/Input/Password",component:t},l={args:{className:"",visibleIcon:!1,iconColor:"",placeholder:"password",style:{}}},n=()=>e.jsx(t,{visibleIcon:!0,iconColor:"#c09",value:"Please, click icon"}),s=()=>e.jsx(t,{visibleValue:!0,visibleIcon:!0,value:"Please, click icon"}),o=()=>e.jsx(t,{onChange:a=>console.log(a)});var v,m,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    className: '',
    visibleIcon: false,
    iconColor: '',
    placeholder: 'password',
    style: {}
  }
}`,...(f=(m=l.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,y,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:"() => <Password visibleIcon iconColor='#c09' value='Please, click icon' />",...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var C,V,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:"() => <Password visibleValue visibleIcon value='Please, click icon' />",...(w=(V=s.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var P,b,S;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:"() => <Password onChange={value => console.log(value)} />",...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};const L=["Default","VisibleIcon","VisibleValue","Change"],$=Object.freeze(Object.defineProperty({__proto__:null,Change:o,Default:l,VisibleIcon:n,VisibleValue:s,__namedExportsOrder:L,default:H},Symbol.toStringTag,{value:"Module"}));export{o as C,l as D,$ as I,n as V,s as a};
