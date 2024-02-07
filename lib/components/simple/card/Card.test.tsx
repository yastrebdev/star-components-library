import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, it } from 'vitest'
import { Card } from './Card'

describe('Card', () => {
    it('Render components', () => {
        render(<Card />)
        screen.getByText('This is card')
    })
    it('Render components with all props', () => {
        render(
            <Card
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
