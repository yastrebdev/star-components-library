import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as s}from"./index-4g5l5LRQ.js";import{I as d}from"./Icon-EbFtFzyR.js";import{c}from"./index-XNbs-YUW.js";import"./_commonjsHelpers-4gQjN7DL.js";const a=({iconOff:l,iconOn:r,defaultValue:g=!1,value:u,onChange:C=()=>console.log("chnge")})=>{const[D,i]=s.useState(!1),[o,x]=s.useState(g||u),[y,v]=s.useState(!1),[j,h]=s.useState(!1),P=()=>{i(!0),v(!0),o&&h(!0)},E=N=>{i(!1),v(!1),h(!1),N.button===0&&x(!o||u)};return e.jsxs("div",{className:"scl-switch-wrapper",children:[e.jsxs("div",{onChange:C,className:c("scl-switch"),onMouseDown:P,onMouseUp:E,children:[e.jsx("div",{"data-testid":"scl-switch-icon",className:"scl-switch__icon",children:(l||r)&&e.jsx(d,{name:l})}),e.jsx("div",{className:"scl-switch__icon",children:(l||r)&&e.jsx(d,{name:r})})]}),e.jsx("div",{className:c("scl-switch__hendel",{"scl-switch__hendel_on":o,"scl-switch__hendel_stretch-on":y,"scl-switch__hendel_stretch-off":j}),children:e.jsxs("div",{className:c("scl-switch__hendel__circles",{"scl-switch__hendel__circles_closer":D}),children:[e.jsx("div",{className:"scl-switch__hendel__circles_left"}),e.jsx("div",{className:"scl-switch__hendel__circles_right"})]})})]})};try{a.displayName="Switch",a.__docgenInfo={description:"",displayName:"Switch",props:{iconOff:{defaultValue:null,description:"",name:"iconOff",required:!1,type:{name:"enum",value:[{value:'"DotsThree"'},{value:'"User"'},{value:'"X"'},{value:'"Check"'},{value:'"Moon"'},{value:'"Sun"'},{value:'"CaretDown"'},{value:'"CaretLeft"'},{value:'"ChatCircle"'},{value:'"PaperPlaneRight"'},{value:'"Eye"'},{value:'"EyeSlash"'},{value:'"PencilSimple"'},{value:'"CaretUpDown"'},{value:'"ArrowUpRight"'},{value:'"Brain"'},{value:'"Copy"'},{value:'"DownloadUp"'},{value:'"DownloadDown"'},{value:'"FloppyDisk"'},{value:'"HandPointing"'},{value:'"PageSearch"'},{value:'"Plus"'},{value:'"PokerChip"'},{value:'"Repeat"'},{value:'"Barcode"'},{value:'"SearchEngine"'},{value:'"Setting"'},{value:'"ShareNetwork"'},{value:'"TrashSimple"'},{value:'"Info"'},{value:'"WarningCircle"'}]}},iconOn:{defaultValue:null,description:"",name:"iconOn",required:!1,type:{name:"enum",value:[{value:'"DotsThree"'},{value:'"User"'},{value:'"X"'},{value:'"Check"'},{value:'"Moon"'},{value:'"Sun"'},{value:'"CaretDown"'},{value:'"CaretLeft"'},{value:'"ChatCircle"'},{value:'"PaperPlaneRight"'},{value:'"Eye"'},{value:'"EyeSlash"'},{value:'"PencilSimple"'},{value:'"CaretUpDown"'},{value:'"ArrowUpRight"'},{value:'"Brain"'},{value:'"Copy"'},{value:'"DownloadUp"'},{value:'"DownloadDown"'},{value:'"FloppyDisk"'},{value:'"HandPointing"'},{value:'"PageSearch"'},{value:'"Plus"'},{value:'"PokerChip"'},{value:'"Repeat"'},{value:'"Barcode"'},{value:'"SearchEngine"'},{value:'"Setting"'},{value:'"ShareNetwork"'},{value:'"TrashSimple"'},{value:'"Info"'},{value:'"WarningCircle"'}]}},defaultValue:{defaultValue:{value:"false"},description:"",name:"defaultValue",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"() => console.log('chnge')"},description:"",name:"onChange",required:!1,type:{name:"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}}}}}catch{}const R={title:"Smart/Switch",component:a,tags:["autodocs"]},t=()=>e.jsx(a,{}),n=()=>e.jsx(a,{iconOff:"Sun",iconOn:"Moon"});var p,m,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"() => <Switch />",...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var _,w,S;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:"() => <Switch iconOff='Sun' iconOn='Moon' />",...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const V=["Default","Icons"];export{t as Default,n as Icons,V as __namedExportsOrder,R as default};
