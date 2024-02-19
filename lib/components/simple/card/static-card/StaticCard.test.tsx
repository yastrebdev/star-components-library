import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, it } from 'vitest'
import { StaticCard } from './StaticCard'

describe('Card', () => {
    it('Render components', () => {
        render(<StaticCard />)
        screen.getByText('This is card')
    })
    it('Render components with all props', () => {
        render(
            <StaticCard
                className="icon-icon"
                iconName="DotsThree"
                onClick={() => console.log('test click')}
                title="I am title"
                subtitle='I am subtitle'
                style={{width: '100%'}}
            />
        )
    })
})
