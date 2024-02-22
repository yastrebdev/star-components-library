import { render, fireEvent } from '@testing-library/react'
import { message } from './message'
import { describe, expect, it } from 'vitest'
import { Button } from '../button'

export const Message = () => {
    const [messageApi, contextHolder] = message.useMessage()

    const info = () => {
        messageApi.open('info', 'info message')
    }

    return (
        <>
            {contextHolder}
            <Button size='sm' onClick={info}>Info</Button>
        </>
    )
}

describe('message component', () => {
    it('call notification', () => {
        const { getByTestId, getByRole } = render(<Message />)
        const button = getByRole('button')
        expect(button).toBeInTheDocument()
        fireEvent.click(button)
        const icon = getByTestId('scl-message-icon-test')
        expect(icon).toBeInTheDocument()
    })
})
