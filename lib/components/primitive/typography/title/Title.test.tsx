import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, it } from 'vitest'
import { Title } from './Title'
import { options } from 'stories/primitive/typography/title/constants'

describe('Text', () => {
    it('Render components', () => {
        render(<Title>I'm title</Title>)
        screen.getByText(`I'm title`)
    })

    it('Cycle check for operability of all levels', () => {
        for (let i = 0; i < options.levels.length; i++) {
            render(<Title level={options.levels[i]}></Title>)
        }
    })

    it('Class name and style', () => {
        render(<Title className="classname" style={{ width: 500 }}></Title>)
    })
})
