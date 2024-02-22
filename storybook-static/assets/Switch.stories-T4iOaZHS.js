import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as c}from"./index-4g5l5LRQ.js";import{I as _}from"./Icon-TQ-jYXSw.js";import{c as o}from"./index-XNbs-YUW.js";const a=({className:l,style:k,iconOff:i,iconOn:d,defaultValue:E=!1,value:v,onChange:p})=>{const[I,h]=c.useState(!1),[u,U]=c.useState(E||v||!1),[b,m]=c.useState(!1),[q,f]=c.useState(!1),M=()=>{h(!0),m(!0),u&&f(!0)},R=B=>{h(!1),m(!1),f(!1),B.button===0&&U(!u||v||!1)};return e.jsxs("div",{"data-testid":"scl-switch-test",className:o("scl-switch-wrapper",l),style:k,children:[e.jsxs("div",{onClick:()=>p&&p(u),className:"scl-switch",onMouseDown:M,onMouseUp:R,children:[e.jsx("div",{"data-testid":"scl-switch-icon",className:"scl-switch__icon",children:i&&e.jsx(_,{name:i})}),e.jsx("div",{className:"scl-switch__icon",children:d&&e.jsx(_,{name:d})})]}),e.jsx("div",{className:o("scl-switch__hendel",{"scl-switch__hendel_on":u,"scl-switch__hendel_stretch-on":b,"scl-switch__hendel_stretch-off":q}),children:e.jsxs("div",{className:o("scl-switch__hendel__circles",{"scl-switch__hendel__circles_closer":I}),children:[e.jsx("div",{className:"scl-switch__hendel__circles_left"}),e.jsx("div",{className:"scl-switch__hendel__circles_right"})]})})]})};try{a.displayName="Switch",a.__docgenInfo={description:"",displayName:"Switch",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},iconOff:{defaultValue:null,description:"",name:"iconOff",required:!1,type:{name:"enum",value:[{value:'"DotsThree"'},{value:'"User"'},{value:'"X"'},{value:'"Check"'},{value:'"Moon"'},{value:'"Sun"'},{value:'"CaretDown"'},{value:'"CaretLeft"'},{value:'"ChatCircle"'},{value:'"PaperPlaneRight"'},{value:'"Eye"'},{value:'"EyeSlash"'},{value:'"PencilSimple"'},{value:'"CaretUpDown"'},{value:'"ArrowUpRight"'},{value:'"Brain"'},{value:'"Copy"'},{value:'"DownloadUp"'},{value:'"DownloadDown"'},{value:'"FloppyDisk"'},{value:'"HandPointing"'},{value:'"PageSearch"'},{value:'"Plus"'},{value:'"PokerChip"'},{value:'"Repeat"'},{value:'"Barcode"'},{value:'"SearchEngine"'},{value:'"Setting"'},{value:'"ShareNetwork"'},{value:'"TrashSimple"'},{value:'"Info"'},{value:'"WarningDiamond"'},{value:'"Warning"'},{value:'"CheckCircle"'}]}},iconOn:{defaultValue:null,description:"",name:"iconOn",required:!1,type:{name:"enum",value:[{value:'"DotsThree"'},{value:'"User"'},{value:'"X"'},{value:'"Check"'},{value:'"Moon"'},{value:'"Sun"'},{value:'"CaretDown"'},{value:'"CaretLeft"'},{value:'"ChatCircle"'},{value:'"PaperPlaneRight"'},{value:'"Eye"'},{value:'"EyeSlash"'},{value:'"PencilSimple"'},{value:'"CaretUpDown"'},{value:'"ArrowUpRight"'},{value:'"Brain"'},{value:'"Copy"'},{value:'"DownloadUp"'},{value:'"DownloadDown"'},{value:'"FloppyDisk"'},{value:'"HandPointing"'},{value:'"PageSearch"'},{value:'"Plus"'},{value:'"PokerChip"'},{value:'"Repeat"'},{value:'"Barcode"'},{value:'"SearchEngine"'},{value:'"Setting"'},{value:'"ShareNetwork"'},{value:'"TrashSimple"'},{value:'"Info"'},{value:'"WarningDiamond"'},{value:'"Warning"'},{value:'"CheckCircle"'}]}},defaultValue:{defaultValue:{value:"false"},description:"",name:"defaultValue",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}}}}}catch{}const T={title:"Smart/Switch",component:a,decorators:[l=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:10},children:e.jsx(l,{})})]},s={args:{className:"",style:{},defaultValue:!1,iconOff:void 0,iconOn:void 0}},n=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultValue:!0}),e.jsx(a,{value:!0})]}),t=()=>e.jsx(a,{iconOff:"Sun",iconOn:"Moon"}),r=()=>e.jsx(a,{onChange:l=>alert(`Вы установили значение ${l}`)});var S,w,g;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    className: '',
    style: {},
    defaultValue: false,
    iconOff: undefined,
    iconOn: undefined
  }
}`,...(g=(w=s.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var C,y,x;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <>\r
            <Switch defaultValue />\r
            <Switch value />\r
        </>;
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var D,j,O;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:'() => <Switch iconOff="Sun" iconOn="Moon" />',...(O=(j=t.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var N,P,V;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:"() => <Switch onChange={value => alert(`Вы установили значение ${value}`)} />",...(V=(P=r.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const W=["Default","Values","Icons","Change"],X=Object.freeze(Object.defineProperty({__proto__:null,Change:r,Default:s,Icons:t,Values:n,__namedExportsOrder:W,default:T},Symbol.toStringTag,{value:"Module"}));export{r as C,s as D,t as I,X as S,n as V};