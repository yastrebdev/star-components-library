import { fireEvent, render } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, expect, it, vitest } from 'vitest'
import { Link } from './Link'

describe('Typography(Link) components', () => {
    it('renders with default props', () => {
        const { getByRole } = render(<Link/>)
        const linkElement = getByRole('link')
        expect(linkElement).toBeInTheDocument()
        expect(linkElement).toHaveClass('scl-typography-link')
        expect(linkElement).not.toHaveClass('scl-typography-link_bold')
        expect(linkElement).toHaveAttribute('target', '_blank')
        expect(linkElement).toHaveTextContent("I'am google")
    })
    it('renders with specified props', () => {
        const { getByRole } = render(
            <Link
                href='https://ant.design/'
                target='_self'
                className='link-class'
                style={{color: '#000000', opacity: .7}}
                bold
            >
                Press me
            </Link>
        )
        const linkElement = getByRole('link')
        expect(linkElement).toBeInTheDocument()
        expect(linkElement).toHaveClass('link-class')
        expect(linkElement).toHaveClass('scl-typography-link_bold')
        expect(linkElement).not.toHaveClass('scl-typography-link_strong')
        expect(linkElement).toHaveAttribute('target', '_self')
        expect(linkElement).toHaveTextContent("Press me")
        expect(linkElement).toHaveStyle({ color: '#000000', opacity: .7 })
    })

    it('fires event when clicked', () => {
        const handleClick = vitest.fn()
        const { getByRole } = render(<Link onClick={handleClick}/>)
        const iconElement = getByRole('link')
        fireEvent.click(iconElement)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})