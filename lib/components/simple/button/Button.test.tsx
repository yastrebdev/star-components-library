import { fireEvent, queryByTestId, render } from '@testing-library/react'
import { describe, expect, it, vitest } from 'vitest'
import { Button } from './Button'

describe('Button components', () => {
    it('renders with default props', () => {
        const { getByRole } = render(<Button />)
        const buttonElement = getByRole('button')

        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveClass('scl-button')
        expect(buttonElement).toHaveClass('scl-button__type-primary')
        expect(buttonElement).not.toHaveClass('scl-button__size-sm')

        const childrenElement = queryByTestId(
            buttonElement,
            'scl-typography-text-test'
        )
        expect(childrenElement).toBeInTheDocument()
        expect(childrenElement).toHaveTextContent(`I'm button`)
    })
    it('renders with specified props', () => {
        const { getByRole } = render(
            <Button
                icon="CaretDown"
                shape="normal"
                size="sm"
                type="secondary"
                style={{ width: 400 }}
                className='test-class'
            />
        )

        const buttonElement = getByRole('button')
        expect(buttonElement).toBeInTheDocument()
        expect(buttonElement).toHaveClass('scl-button__shape-normal')
        expect(buttonElement).toHaveClass('scl-button__size-sm')
        expect(buttonElement).toHaveClass('scl-button__type-secondary')
        expect(buttonElement).toHaveClass('test-class')
        expect(buttonElement).not.toHaveClass('scl-button__shape-circle')
        expect(buttonElement).toHaveStyle({width: '400px'})

        const childrenElement = queryByTestId(buttonElement, 'scl-button-icon')
        expect(childrenElement).toBeInTheDocument()
    })
    it('fires onClick event when clicked', () => {
        const handleClick = vitest.fn()
        const { getByRole } = render(<Button onClick={handleClick} />)
        const buttonElement = getByRole('button')
        fireEvent.click(buttonElement)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
