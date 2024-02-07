import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, it } from 'vitest'
import { Badges } from './Badges'

describe('Badges', () => {
    it('Render components', () => {
        render(<Badges><div>test</div></Badges>)
        screen.getByText('test')
    })
})