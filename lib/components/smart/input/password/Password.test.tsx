import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Password } from './Password'

describe('Password Input Component', () => {
    it('Renders input field with placeholder', () => {
        render(<Password placeholder="Enter password" />)
        const inputElement = screen.getByPlaceholderText('Enter password') as HTMLInputElement
        expect(inputElement).toBeInTheDocument()
    })

    it('Toggles visibility of password on icon click', () => {
        render(<Password />)
        const inputElement = screen.getByPlaceholderText('password') as HTMLInputElement
        const iconElement = screen.getByTestId('password-icon')
        fireEvent.click(iconElement)
        expect(inputElement.getAttribute('type')).toBe('text')
        fireEvent.click(iconElement)
        expect(inputElement.getAttribute('type')).toBe('password')
    })
})