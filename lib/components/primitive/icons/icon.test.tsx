import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vitest } from 'vitest'
import { Icon } from './Icon'

describe('Icon component', () => {
    it('renders with default props', () => {
        const { getByTestId } = render(<Icon />)
        const iconElement = getByTestId('scl-icon-element')
        expect(iconElement).toBeInTheDocument()
        expect(iconElement).toHaveClass('scl-icon')
        expect(iconElement).not.toHaveClass('scl-icon__onclick')
        expect(iconElement).toHaveAttribute('fill', 'black')
        expect(iconElement).toHaveStyle({ width: '24px', height: '24px' })
    })

    it('renders with specified props', () => {
        const { getByTestId } = render(
            <Icon
                name="Eye"
                color="red"
                size={32}
                className="custom-icon"
                style={{ fontWeight: 'bold' }}
                onClick={() => console.log('renders')}
            />
        )
        const iconElement = getByTestId('scl-icon-element')
        expect(iconElement).toBeInTheDocument()
        expect(iconElement).toHaveClass('scl-icon')
        expect(iconElement).toHaveClass('custom-icon')
        expect(iconElement).toHaveClass('scl-icon__onclick')
        expect(iconElement).toHaveAttribute('fill', 'red')
        expect(iconElement).toHaveStyle({
            width: '32px',
            height: '32px',
            fontWeight: 'bold',
        })
    })

    it('fires onClick event when clicked', () => {
        const handleClick = vitest.fn()
        const { getByTestId } = render(<Icon onClick={handleClick} />)
        const iconElement = getByTestId('scl-icon-element')
        fireEvent.click(iconElement)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
