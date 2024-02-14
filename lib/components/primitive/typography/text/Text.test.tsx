import { fireEvent, render } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, expect, it, vitest } from 'vitest'
import { Text } from './Text'
import { options } from 'stories/primitive/typography/text/constants'

describe('Typography(Text) components', () => {
    it('renders with default props', () => {
        const { getByText } = render(<Text />)
        const textElement = getByText('default')
        expect(textElement).toBeInTheDocument()
        expect(textElement).toHaveClass('scl-typography-text')
        expect(textElement).not.toHaveClass('scl-typography-text_bold')
        expect(textElement).not.toHaveClass('scl-typography-text__default')
    })

    it('renders with specified props', () => {
        for (let i = 0; i < options.types.length; i++) {
            const { getByText } = render(
                <Text
                    type={options.types[i]}
                    className="scl-typography-test"
                    style={{ fontSize: 24, letterSpacing: '1px' }}
                    strong
                />
            )
            const textElement = getByText(options.types[i])
            expect(textElement).toBeInTheDocument()
            if (options.types[i] === 'default') return
            expect(textElement).toHaveClass(
                `scl-typography-text__${options.types[i]}`
            )
            expect(textElement).toHaveClass('scl-typography-text_strong')
            expect(textElement).toHaveClass('scl-typography-test')
            expect(textElement).not.toHaveClass('scl-typography-text_bold')
            expect(textElement).toHaveStyle({
                fontSize: 24,
                letterSpacing: '1px',
            })
        }
    })

    it('fires onClick event when clicked', () => {
        const handleClick = vitest.fn()
        for (let i = 0; i < options.types.length; i++) {
            const { getByText } = render(<Text type={options.types[i]} onClick={handleClick}/>)
            const textElement = getByText(options.types[i])
            fireEvent.click(textElement)
        }
        expect(handleClick).toHaveBeenCalledTimes(5)
    })
})
