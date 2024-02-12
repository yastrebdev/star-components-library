import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Default } from './Default'

describe('Default Input Component', () => {
    it('Renders input field with placeholder', () => {
        render(<Default placeholder="Enter text" />)
        const inputElement = screen.getByPlaceholderText('Enter text') as HTMLInputElement
        expect(inputElement).toBeInTheDocument()
    })

    it('Displays error message when field is empty', () => {
        render(<Default emptyValidation={true} />)
        const inputElement = screen.getByPlaceholderText('default') as HTMLInputElement
        fireEvent.change(inputElement, { target: { value: '' } })
        fireEvent.click(screen.getByRole('button'))
        const errorMessage = screen.getByText('Поле не должно быть пустым!')
        expect(errorMessage).toBeInTheDocument()
    })
})