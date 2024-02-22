import { fireEvent, render } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, expect, it, vitest } from 'vitest'
import { StaticCard } from './StaticCard'

describe('Card components', () => {
    it('renders with default props', () => {
        const { getByTestId } = render(<StaticCard />)
        const cardElement = getByTestId('scl-card-test')
        expect(cardElement).toBeInTheDocument()
        expect(cardElement).toHaveClass('scl-card')

        const titleElement =
            getByTestId('scl-card-test').querySelector('.scl-card__title')
        expect(titleElement?.textContent).toBe('This is card')

        const subtitleElement = getByTestId('scl-card-test').querySelector(
            '.scl-card__subtitle'
        )
        expect(subtitleElement?.textContent).toBe('01.02.23')
    })
    it('renders with specified props', () => {
        const { getByTestId } = render(
            <StaticCard
                className="test-class"
                iconName="DotsThree"
                style={{ height: 150 }}
                title="Hi my friend"
                subtitle="01 febrory 2024"
            />
        )
        const cardElement = getByTestId('scl-card-test')
        expect(cardElement).toBeInTheDocument()
        expect(cardElement).toHaveClass('test-class')
        expect(cardElement).toHaveStyle({ height: '150px' })

        const titleElement =
            getByTestId('scl-card-test').querySelector('.scl-card__title')
        expect(titleElement?.textContent).toBe('Hi my friend')

        const subtitleElement = getByTestId('scl-card-test').querySelector(
            '.scl-card__subtitle'
        )
        expect(subtitleElement?.textContent).toBe('01 febrory 2024')

        const iconElement = getByTestId('scl-card-icon-test')
        expect(iconElement).toBeInTheDocument()
    })
    it('should call onClick function when icon is clicked', () => {
        const onClickMock = vitest.fn()
        const { getByTestId } = render(<StaticCard onClick={onClickMock} />)

        const iconElement = getByTestId('scl-card-icon-test')
        fireEvent.click(iconElement)

        expect(onClickMock).toHaveBeenCalledTimes(1)
    })
})
