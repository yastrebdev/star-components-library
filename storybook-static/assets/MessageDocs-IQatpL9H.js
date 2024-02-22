import{j as s}from"./jsx-runtime-vNq4Oc-g.js";import{M as r,T as i,C as a,b as m,d as c}from"./index-66fl4erD.js";import{M as p,D as t}from"./Message.stories-dTowuYnU.js";import{useMDXComponents as u}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-hpzbHwON.js";import"../sb-preview/runtime.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./Button-ZU2cXClP.js";import"./Typography--34a-Zdr.js";import"./index-XNbs-YUW.js";import"./Icon-TQ-jYXSw.js";function n(o){return s.jsxs(s.Fragment,{children:[s.jsx(r,{of:p}),`
`,s.jsx(i,{children:"Messages"}),`
`,s.jsx(a,{of:t,sourceState:"none"}),`
`,s.jsx(m,{code:`import { message, Button } from 'star-components-library';

const MyComponents = () => {
        const [messageApi, contextHolder] = message.useMessage()

    const info = () => {
        messageApi.open('info', 'info message')
    }
    const warning = () => {
        messageApi.open('warning', 'warning message')
    }
    const error = () => {
        messageApi.open('error', 'error message')
    }
    const success = () => {
        messageApi.open('success', 'success message')
    }

    return (
        <>
            {contextHolder}
            <Button size='sm' onClick={info}>Info</Button>
            <Button size='sm' onClick={warning}>Warning</Button>
            <Button size='sm' onClick={error}>Error</Button>
            <Button size='sm' onClick={success}>Success</Button>
        </>
    )
}
`,of:t,language:"tsx"}),`
`,s.jsx(c,{})]})}function h(o={}){const{wrapper:e}=Object.assign({},u(),o.components);return e?s.jsx(e,Object.assign({},o,{children:s.jsx(n,o)})):n()}export{h as default};
