import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{M as l,T as n,C as t,b as e,d as x}from"./index-KzZMSZFI.js";import{I as f,D as a,a as p,P as u,C as c,b as i}from"./Default.stories-9Gl5fkxQ.js";import{useMDXComponents as j}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-vEEOR-Z3.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./Default-pQP_KMwZ.js";import"./Button-BDqmljJF.js";import"./Typography--34a-Zdr.js";import"./index-XNbs-YUW.js";import"./Icon-EbFtFzyR.js";function m(r){return o.jsxs(o.Fragment,{children:[o.jsx(l,{of:f}),`
`,o.jsx(n,{children:"Input"}),`
`,o.jsx(t,{of:a,sourceState:"none"}),`
`,o.jsx(e,{code:`import { Input } from 'star-components-library';

const MyComponents = () => <Input />
`,of:a,language:"tsx"}),`
`,o.jsx(x,{}),`
`,o.jsx(n,{children:"Icon"}),`
`,o.jsx(t,{of:p,sourceState:"none"}),`
`,o.jsx(e,{code:`import { Input } from 'star-components-library';

const MyComponents = () => <Input icon="DownloadDown" iconColor='#f7b63f' />
`,of:p,language:"tsx"}),`
`,o.jsx(n,{children:"Placeholder and value"}),`
`,o.jsx(t,{of:u,sourceState:"none"}),`
`,o.jsx(e,{code:`import { Input } from 'star-components-library';

const MyComponents = () => {
    return (
        <>
            <Input placeholder='Custom placeholder'/>
            <Input value='Custom value'/>
        </>
    )
}
`,of:u,language:"tsx"}),`
`,o.jsx(n,{children:"Click"}),`
`,o.jsx(t,{of:c,sourceState:"none"}),`
`,o.jsx(e,{code:`import { Input } from 'star-components-library';

const MyComponents = () => {
    return (
        <Input
            button
            buttonIcon="Brain"
            onClickButton={(_, value) =>
                alert(value ? \`Вы ввели: "\${value}"\` : 'Вы ничего не ввели')
            }
        />
    )
}
`,of:c,language:"tsx"}),`
`,o.jsx(n,{children:"Change"}),`
`,o.jsx(t,{of:i,sourceState:"none"}),`
`,o.jsx(e,{code:`import { Input } from 'star-components-library';

const MyComponents = () => <Input onChange={(value) => console.log(value)}/>
`,of:i,language:"tsx"})]})}function T(r={}){const{wrapper:s}=Object.assign({},j(),r.components);return s?o.jsx(s,Object.assign({},r,{children:o.jsx(m,r)})):m()}export{T as default};
