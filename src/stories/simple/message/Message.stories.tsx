import type { Meta } from '@storybook/react'
import { Message } from 'components/simple/message'
import { useState } from 'react'

const meta: Meta<typeof Message> = {
    title: 'Simple/Message',
    component: Message,
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

export const Default = () => <Message visible={true} />

export const ClickButton = () => {
    const [ visible, setVisible ] = useState(false)
    const viewMessage = () => {
        setVisible(!visible)
    }

    return (
        <>
            <button onClick={viewMessage}>Click</button>
            <Message visible={visible}/>
        </>
    )
}