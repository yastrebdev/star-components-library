import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, it } from 'vitest'
import { Switch } from './Switch'

describe('Switch', () => {
    it('Render components', () => {
        render(<Switch />)
    })
    it('Add icons', () => {
        render(<Switch iconOff='Sun' iconOn='Moon'/>)
        screen.getByTestId('scl-switch-icon')
    })
})