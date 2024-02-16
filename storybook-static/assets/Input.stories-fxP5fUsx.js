import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as d}from"./index-4g5l5LRQ.js";import{B}from"./Button-uAnxZcKV.js";import{I as E}from"./Icon-j9HTkUdV.js";import{c as I}from"./index-XNbs-YUW.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Typography-mm7W6vQZ.js";const h=({className:a,style:t,placeholder:v="default",value:u,icon:n,iconColor:m="#a0a0a0",buttonIcon:f="PaperPlaneRight",button:y=!0,onClickButton:s,emptyValidation:i=!0})=>{const[r,C]=d.useState(""),[_,S]=d.useState(!1),N=(o,x)=>{r===""&&S(!0),s&&s(o,x),C("")};return e.jsxs("div",{className:"scl-input",children:[e.jsx("input",{type:"text",className:I("scl-input__field",a,{"scl-input__field_icon":n,"scl-input__field_emptyField":i&&_}),style:t,placeholder:v,value:u||r,onChange:o=>{C(o.target.value),S(!1)}}),i&&_&&e.jsx("div",{className:"scl-input__empty-error",children:"Поле не должно быть пустым!"}),n&&e.jsx("div",{className:"scl-input__icon",children:e.jsx(E,{name:n,color:m})}),y&&e.jsx("div",{className:"scl-input__button",children:e.jsx(B,{onClick:o=>{N(o,r)},size:"sm",shape:"circle",icon:f})})]})};try{h.displayName="Default",h.__docgenInfo={description:"",displayName:"Default",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"DotsThree"'},{value:'"User"'},{value:'"X"'},{value:'"Check"'},{value:'"Moon"'},{value:'"Sun"'},{value:'"CaretDown"'},{value:'"CaretLeft"'},{value:'"ChatCircle"'},{value:'"PaperPlaneRight"'},{value:'"Eye"'},{value:'"EyeSlash"'},{value:'"PencilSimple"'},{value:'"CaretUpDown"'},{value:'"ArrowUpRight"'},{value:'"Brain"'},{value:'"Copy"'},{value:'"DownloadUp"'},{value:'"DownloadDown"'},{value:'"FloppyDisk"'},{value:'"HandPointing"'},{value:'"PageSearch"'},{value:'"Plus"'},{value:'"PokerChip"'},{value:'"Repeat"'},{value:'"Barcode"'},{value:'"SearchEngine"'},{value:'"Setting"'},{value:'"ShareNetwork"'},{value:'"TrashSimple"'},{value:'"Info"'}]}},buttonIcon:{defaultValue:{value:"PaperPlaneRight"},description:"",name:"buttonIcon",required:!1,type:{name:"enum",value:[{value:'"DotsThree"'},{value:'"User"'},{value:'"X"'},{value:'"Check"'},{value:'"Moon"'},{value:'"Sun"'},{value:'"CaretDown"'},{value:'"CaretLeft"'},{value:'"ChatCircle"'},{value:'"PaperPlaneRight"'},{value:'"Eye"'},{value:'"EyeSlash"'},{value:'"PencilSimple"'},{value:'"CaretUpDown"'},{value:'"ArrowUpRight"'},{value:'"Brain"'},{value:'"Copy"'},{value:'"DownloadUp"'},{value:'"DownloadDown"'},{value:'"FloppyDisk"'},{value:'"HandPointing"'},{value:'"PageSearch"'},{value:'"Plus"'},{value:'"PokerChip"'},{value:'"Repeat"'},{value:'"Barcode"'},{value:'"SearchEngine"'},{value:'"Setting"'},{value:'"ShareNetwork"'},{value:'"TrashSimple"'},{value:'"Info"'}]}},button:{defaultValue:{value:"true"},description:"",name:"button",required:!1,type:{name:"boolean"}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"((e?: MouseEvent<HTMLButtonElement, MouseEvent>, value?: string) => void) | undefined"}},emptyValidation:{defaultValue:{value:"true"},description:"",name:"emptyValidation",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"default"},description:"",name:"placeholder",required:!1,type:{name:"string"}},iconColor:{defaultValue:{value:"#a0a0a0"},description:"",name:"iconColor",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const g=({hideIcon:a=!0,placeholder:t="password",iconColor:v="#000000"})=>{const[u,n]=d.useState(!1),[m,f]=d.useState("");console.log(m);const y=()=>{n(!u)},s=u?"EyeSlash":"Eye",i=u?"text":"password";return e.jsxs("div",{className:"scl-input",children:[e.jsx("input",{className:"scl-input__field",type:i,placeholder:t,onChange:r=>f(r.target.value)}),a&&e.jsx("div",{"data-testid":"password-icon",onClick:y,className:I("scl-input__icon scl-input__icon_password"),children:e.jsx(E,{name:s,color:v})})]})};try{g.displayName="Password",g.__docgenInfo={description:"",displayName:"Password",props:{hideIcon:{defaultValue:{value:"true"},description:"",name:"hideIcon",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"password"},description:"",name:"placeholder",required:!1,type:{name:"string"}},iconColor:{defaultValue:{value:"#000000"},description:"",name:"iconColor",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const l=()=>e.jsx(h,{});l.Password=g;try{l.displayName="Input",l.__docgenInfo={description:"",displayName:"Input",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"DotsThree"'},{value:'"User"'},{value:'"X"'},{value:'"Check"'},{value:'"Moon"'},{value:'"Sun"'},{value:'"CaretDown"'},{value:'"CaretLeft"'},{value:'"ChatCircle"'},{value:'"PaperPlaneRight"'},{value:'"Eye"'},{value:'"EyeSlash"'},{value:'"PencilSimple"'},{value:'"CaretUpDown"'},{value:'"ArrowUpRight"'},{value:'"Brain"'},{value:'"Copy"'},{value:'"DownloadUp"'},{value:'"DownloadDown"'},{value:'"FloppyDisk"'},{value:'"HandPointing"'},{value:'"PageSearch"'},{value:'"Plus"'},{value:'"PokerChip"'},{value:'"Repeat"'},{value:'"Barcode"'},{value:'"SearchEngine"'},{value:'"Setting"'},{value:'"ShareNetwork"'},{value:'"TrashSimple"'},{value:'"Info"'}]}},buttonIcon:{defaultValue:null,description:"",name:"buttonIcon",required:!1,type:{name:"enum",value:[{value:'"DotsThree"'},{value:'"User"'},{value:'"X"'},{value:'"Check"'},{value:'"Moon"'},{value:'"Sun"'},{value:'"CaretDown"'},{value:'"CaretLeft"'},{value:'"ChatCircle"'},{value:'"PaperPlaneRight"'},{value:'"Eye"'},{value:'"EyeSlash"'},{value:'"PencilSimple"'},{value:'"CaretUpDown"'},{value:'"ArrowUpRight"'},{value:'"Brain"'},{value:'"Copy"'},{value:'"DownloadUp"'},{value:'"DownloadDown"'},{value:'"FloppyDisk"'},{value:'"HandPointing"'},{value:'"PageSearch"'},{value:'"Plus"'},{value:'"PokerChip"'},{value:'"Repeat"'},{value:'"Barcode"'},{value:'"SearchEngine"'},{value:'"Setting"'},{value:'"ShareNetwork"'},{value:'"TrashSimple"'},{value:'"Info"'}]}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"boolean"}},onClickButton:{defaultValue:null,description:"",name:"onClickButton",required:!1,type:{name:"((e?: MouseEvent<HTMLButtonElement, MouseEvent>, value?: string) => void) | undefined"}},emptyValidation:{defaultValue:null,description:"",name:"emptyValidation",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},iconColor:{defaultValue:null,description:"",name:"iconColor",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const H={title:"Smart/Input",component:l,tags:["autodocs"]},p=()=>e.jsx(l,{onClickButton:(a,t)=>console.log(a==null?void 0:a.currentTarget,t)}),c=()=>e.jsx(l.Password,{});var P,w,D;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:"() => <Input onClickButton={(e, value) => console.log(e?.currentTarget, value)} />",...(D=(w=p.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var V,k,q;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:"() => <Input.Password />",...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const L=["Default","Password"];export{p as Default,c as Password,L as __namedExportsOrder,H as default};