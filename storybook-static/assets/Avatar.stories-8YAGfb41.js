import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{I as D,i as P}from"./Icon-j9HTkUdV.js";import{c as w}from"./index-XNbs-YUW.js";const j=""+new URL("avatar-TcgJinUK.png",import.meta.url).href,a=({src:r=j,icon:s,size:o="lg",circle:A=!0,className:z,style:C,onClick:i})=>e.jsx("div",{className:w("scl-avatar",{[`scl-avatar__size-${o}`]:o,"scl-avatar__circle":A,"scl-avatar__onclick":i,"scl-avatar__icon":s},z),style:C,onClick:i,children:s?e.jsx(D,{testid:"scl-test-avatar-icon",name:s}):e.jsx("img",{src:r,alt:"avatar"})});try{a.displayName="Avatar",a.__docgenInfo={description:"",displayName:"Avatar",props:{src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"DotsThree"'},{value:'"User"'},{value:'"X"'},{value:'"Check"'},{value:'"Moon"'},{value:'"Sun"'},{value:'"CaretDown"'},{value:'"CaretLeft"'},{value:'"ChatCircle"'},{value:'"PaperPlaneRight"'},{value:'"Eye"'},{value:'"EyeSlash"'},{value:'"PencilSimple"'},{value:'"CaretUpDown"'},{value:'"ArrowUpRight"'},{value:'"Brain"'},{value:'"Copy"'},{value:'"DownloadUp"'},{value:'"DownloadDown"'},{value:'"FloppyDisk"'},{value:'"HandPointing"'},{value:'"PageSearch"'},{value:'"Plus"'},{value:'"PokerChip"'},{value:'"Repeat"'},{value:'"Barcode"'},{value:'"SearchEngine"'},{value:'"Setting"'},{value:'"ShareNetwork"'},{value:'"TrashSimple"'},{value:'"Info"'}]}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},circle:{defaultValue:{value:"true"},description:"",name:"circle",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const E={sizes:["sm","md","lg"],icons:[P]},I={title:"Simple/Avatar",component:a,decorators:[r=>e.jsx("div",{style:{display:"flex",flexDirection:"row-reverse",alignItems:"center",gap:"10px"},children:e.jsx(r,{})})]},l={args:{src:j,size:"lg",circle:!0,className:""}},t=()=>E.sizes.map((r,s)=>e.jsx(a,{size:r},s)),n=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{circle:!0}),e.jsx(a,{circle:!1})]}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{icon:"Plus"}),e.jsx(a,{icon:"User"})]});var u,m,p;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    src: Ava,
    size: 'lg',
    circle: true,
    className: ''
  }
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,d,g;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`() => options.sizes.map((size, i: number) => {
  return <Avatar size={size} key={i} />;
})`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,y,_;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <>\r
            <Avatar circle />\r
            <Avatar circle={false} />\r
        </>;
}`,...(_=(y=n.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var S,x,h;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <>\r
            <Avatar icon='Plus' />\r
            <Avatar icon='User' />\r
        </>;
}`,...(h=(x=c.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const N=["Default","Sizes","Circle","Icon"],V=Object.freeze(Object.defineProperty({__proto__:null,Circle:n,Default:l,Icon:c,Sizes:t,__namedExportsOrder:N,default:I},Symbol.toStringTag,{value:"Module"}));export{V as A,n as C,l as D,c as I,t as S};
