import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, it } from 'vitest'
import { Icon } from './Icon'

describe('Icon', () => {
    it('Render components', () => {
        render(<Icon />)
        screen.getByTestId('icon-element')
    })
    it('on click', () => {
        render(<Icon onClick={() => console.log('I click')}/>)
        screen.getByTestId('icon-button-element')
    })
})