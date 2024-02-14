import { fireEvent, render } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, expect, it, vitest } from 'vitest'
import { Title } from './Title'
import { options } from 'stories/primitive/typography/title/constants'

describe('Typography(Title) components', () => {
    it('renders with default props', () => {
        const { getByText } = render(<Title />)
        const titleElement = getByText('Title')
        expect(titleElement).toBeInTheDocument()
        expect(titleElement).toHaveClass('scl-typography-title__h1')
        expect(titleElement).not.toHaveClass('scl-typography-title_bold')
    })

    it('renders with specified props', () => {
        for (let i = 0; i < options.levels.length; i++) {
            const level = options.levels[i]
            const { getByText } = render(
                <Title
                    level={level}
                    bold
                    className="scl-title-test"
                    style={{ lineHeight: 24, border: '1px solid #000' }}>
                    {`Render title h${level}`}
                </Title>
            )
            const titleElement = getByText(`Render title h${level}`)
            expect(titleElement).toBeInTheDocument()
            expect(titleElement).toHaveClass('scl-title-test')
            expect(titleElement).toHaveClass('scl-typography-title_bold')
            expect(titleElement).toHaveClass(`scl-typography-title__h${level}`)
            expect(titleElement).not.toHaveClass('scl-typography-title_regular')
            expect(titleElement).toHaveStyle({
                lineHeight: 24,
                border: '1px solid #000',
            })
        }
    })

    it('fires onClick event when clicked', () => {
        const handleClick = vitest.fn()
        for (let i = 0; i < options.levels.length; i++) {
            const level = options.levels[i]
            const { getByText } = render(
                <Title
                    level={level}
                    onClick={handleClick}>{`Render title h${level}`}</Title>
            )
            const textElement = getByText(`Render title h${level}`)
            fireEvent.click(textElement)
        }
        expect(handleClick).toHaveBeenCalledTimes(6)
    })
})
