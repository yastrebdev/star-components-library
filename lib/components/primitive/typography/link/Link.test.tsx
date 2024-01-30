import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, it } from 'vitest'
import { Link } from './Link'

describe('Link', () => {
    it('Render components', () => {
        render(<Link>Go to google</Link>)
        screen.getByText('Go to google')
    })

    it('Class name and style', () => {
        render(<Link className="classname" style={{ width: 500 }}></Link>)
    })
})