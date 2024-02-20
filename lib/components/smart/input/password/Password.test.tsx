import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vitest } from 'vitest'
import { Password } from './Password'

describe('Password Input Component', () => {
    it('renders correctly with default props', () => {
        const { getByPlaceholderText } = render(<Password />)
        expect(getByPlaceholderText('password')).toBeInTheDocument()
    })

    it('renders with provided value', () => {
        const { getByDisplayValue } = render(<Password value="test" />)
        expect(getByDisplayValue('test')).toBeInTheDocument()
    })

    it('toggles visibility when icon is clicked', () => {
        const { getByTestId, getByPlaceholderText } = render(
            <Password visibleIcon={true} />
        )

        const input = getByPlaceholderText('password')
        const icon = getByTestId('password-icon')

        fireEvent.click(icon)

        expect(input).toHaveAttribute('type', 'text')

        fireEvent.click(icon)

        expect(input).toHaveAttribute('type', 'password')
    })

    it('calls onChange callback when input value changes', () => {
        const onChange = vitest.fn()
        const { getByPlaceholderText } = render(
            <Password onChange={onChange} />
        )

        const input = getByPlaceholderText('password')

        fireEvent.change(input, { target: { value: 'new value' } })

        expect(onChange).toHaveBeenCalledWith('new value')
    })
})