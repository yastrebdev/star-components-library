import type { Meta } from '@storybook/react'
import { Button } from 'components/simple/button'
import { message } from 'components/simple/message'

const meta: Meta<typeof message> = {
    title: 'Simple/Message',
    component: message,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div
                style={{
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    justifyContent: 'center',
                    width: '100%',
                    paddingTop: 40,
                }}>
                <Story />
            </div>
        ),
    ],
}

export default meta

export const Default = () => {
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
            <Button size="sm" onClick={info}>
                Info
            </Button>
            <Button size="sm" onClick={warning}>
                Warning
            </Button>
            <Button size="sm" onClick={error}>
                Error
            </Button>
            <Button size="sm" onClick={success}>
                Success
            </Button>
        </>
    )
}
