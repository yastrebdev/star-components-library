import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, it } from 'vitest'
import { Text } from './Text'
import { options } from 'stories/primitive/typography/text/constants'

describe('Text', () => {
    it('Render components', () => {
        render(<Text>Hello World</Text>)
        screen.getByText('Hello World')
    })

    it('Cycle check for operability of all types', () => {
        for (let i = 0; i < options.types.length; i++) {
            render(<Text type={options.types[i]}></Text>)
        }
    })

    it('Class name and style', () => {
        render(<Text className="classname" style={{ width: 500 }}></Text>)
    })
})