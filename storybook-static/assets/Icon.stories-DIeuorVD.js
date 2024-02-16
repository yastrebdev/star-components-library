import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{i as g,I as u}from"./Icon-j9HTkUdV.js";const p=[],h={icons:p},f=Object.keys(g);f.forEach(e=>{p.push(`${e}`)});const x={title:"Primitive/Icon",component:u,decorators:[e=>r.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",padding:"0 24px"},children:r.jsx(e,{})})]},o={args:{name:"User",className:"",style:{},size:1/0},argTypes:{weight:{control:"select",options:["thin","light","regular","bold","fill","duotone"]}}},n=()=>h.icons.map(e=>{const d=()=>{navigator.clipboard.writeText(e).then(()=>{alert(`Copied: ${e}`)}).catch(m=>{console.error("Ошибка копирования в буфер обмена:",m),alert(`Not copied: ${e}`)})};return r.jsx(u,{name:e,onClick:d})});var t,s,a;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'User',
    className: '',
    style: {},
    size: Infinity
  },
  argTypes: {
    weight: {
      control: 'select',
      options: ['thin', 'light', 'regular', 'bold', 'fill', 'duotone']
    }
  }
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var c,i,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => options.icons.map(icon => {
  const handleClick = () => {
    navigator.clipboard.writeText(icon).then(() => {
      alert(\`Copied: \${icon}\`);
    }).catch(error => {
      console.error('Ошибка копирования в буфер обмена:', error);
      alert(\`Not copied: \${icon}\`);
    });
  };
  return <Icon name={icon} onClick={handleClick}></Icon>;
})`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const y=["Default","Icons"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Icons:n,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{o as D,j as I,n as a};
