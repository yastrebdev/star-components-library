import { fireEvent, render } from '@testing-library/react'
import { describe, expect, it, vitest } from 'vitest'
import { ClickableCard } from './ClickableCard'

describe('Card.ClickableCard components', () => {
    it('renders with default props', () => {
        const { getByTestId, getByText } = render(<ClickableCard />)
        const cardElement = getByTestId('scl-card-test')
        expect(cardElement).toBeInTheDocument()
        expect(cardElement).toHaveClass('scl-clickable-card')
        expect(cardElement).not.toHaveClass(
            'scl-clickable-card__type-secondary'
        )

        const titleElement = getByText('Text Writer')
        expect(titleElement).toBeInTheDocument()
        const subtitleElement = getByText('Youre scenario')
        expect(subtitleElement).toBeInTheDocument()
    })
    it('renders with specified props', () => {
        const { getByTestId, getByText } = render(
            <ClickableCard
                className="test-class"
                iconName="Brain"
                style={{ width: 100 }}
                type='secondary'
                title='Hellow Test'
                subtitle='click me please'
            />
        )
        const cardElement = getByTestId('scl-card-test')
        expect(cardElement).toBeInTheDocument()
        expect(cardElement).toHaveClass('scl-clickable-card')
        expect(cardElement).not.toHaveClass(
            'scl-clickable-card__type-primary'
        )
        expect(cardElement).toHaveStyle({width: '100px'})

        const titleElement = getByText('Hellow Test')
        expect(titleElement).toBeInTheDocument()
        const subtitleElement = getByText('click me please')
        expect(subtitleElement).toBeInTheDocument()
    })
    it('fires onClick event when clicked', () => {
        const handleClick = vitest.fn()
        const { getByTestId } = render(<ClickableCard onClick={handleClick} />)
        const cardElement = getByTestId('scl-card-test')
        fireEvent.click(cardElement)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
