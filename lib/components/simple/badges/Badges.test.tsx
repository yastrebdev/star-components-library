import { queryByTestId, render } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, expect, it } from 'vitest'
import { Badges } from './Badges'

describe('Badges component', () => {
    it('renders with default props', () => {
        const { getByTestId } = render(<Badges />)
        const badgesElement = getByTestId('scl-badges-test')

        expect(badgesElement).toBeInTheDocument()
        expect(badgesElement).toHaveClass('scl-badges')
        expect(badgesElement).toHaveClass('scl-badges__tr')
        expect(badgesElement).not.toHaveClass('scl-badges__tl')

        const childrenElement = queryByTestId(
            badgesElement,
            'scl-badges-icon-test'
        )
        expect(childrenElement).toBeInTheDocument()
    })
    it('renders with specified props', () => {
        const { getByTestId, getByText } = render(
            <Badges
                position="bl"
                iconName="Brain"
                style={{ width: 50, height: 50 }}>
                <div>Children</div>
            </Badges>
        )
        const badgesElement = getByTestId('scl-badges-test')

        expect(badgesElement).toBeInTheDocument()
        expect(badgesElement).toHaveClass('scl-badges__bl')
        expect(badgesElement).toHaveStyle({width: '50px', height: '50px'})

        const childrenElement = getByText('Children')
        expect(childrenElement).toBeInTheDocument()
    })
})
