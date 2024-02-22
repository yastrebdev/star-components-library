import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vitest } from 'vitest'
import { Default } from './Default'

describe('Default component tests', () => {
    it('Renders with default props', () => {
        const { getByPlaceholderText } = render(<Default />)
        const inputElement = getByPlaceholderText('default')
        expect(inputElement).toBeInTheDocument()
    })

    it('Renders with provided value', () => {
        const { getByDisplayValue } = render(<Default value="Test value" />)
        const inputElement = getByDisplayValue('Test value')
        expect(inputElement).toBeInTheDocument()
    })

    it('Calls onChange handler on input change', () => {
        const handleChange = vitest.fn()
        const { getByPlaceholderText } = render(
            <Default onChange={handleChange} />
        )
        const inputElement = getByPlaceholderText('default')
        fireEvent.change(inputElement, { target: { value: 'New value' } })
        expect(handleChange).toHaveBeenCalledWith('New value')
    })

    it('Calls onClickButton handler on button click', () => {
        const handleClickButton = vitest.fn()
        const { getByRole } = render(
            <Default button onClickButton={handleClickButton} />
        )
        const buttonElement = getByRole('button')
        fireEvent.click(buttonElement)
        expect(handleClickButton).toHaveBeenCalledWith(expect.anything(), '')
    })

    it('Displays error message on empty field when emptyValidation is true', () => {
        const { getByPlaceholderText, getByTestId, getByRole } = render(
            <Default button emptyValidation />
        )
        const inputElement = getByPlaceholderText('default')
        fireEvent.change(inputElement, { target: { value: '' } })

        const buttonElement = getByRole('button')
        fireEvent.click(buttonElement)

        const errorMessage = getByTestId('scl-validation-text-test')
        expect(errorMessage).toBeInTheDocument()
    })
})
