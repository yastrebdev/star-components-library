import type { Meta } from '@storybook/react'
// import { Message } from 'components/simple/message'
import { Button } from 'components/simple/button'
// import { useState } from 'react'
import { message } from 'components/simple/message'

const meta: Meta<typeof message> = {
    title: 'Simple/Message',
    component: message,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ height: 80}}>
                <Story />
            </div>
        ),
    ],
}

export default meta

export const Default = () => {
    const [messageApi, contextHolder] = message.useMessage()
    
    return (
        <>
            {contextHolder}
            <Button onClick={() => messageApi.error('Error')}>Error</Button>
        </>
    )
}

// export const Default = () => <Message visible={true} />

// export const ClickButton = () => {
//     const [ visible, setVisible ] = useState(false)
//     const viewMessage = () => {
//         setVisible(!visible)
//     }

//     return (
//         <>
//             <button onClick={viewMessage}>Click</button>
//             <Message visible={visible}/>
//         </>
//     )
// }