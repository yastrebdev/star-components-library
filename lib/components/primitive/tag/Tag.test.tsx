import React from 'react'
import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, it } from 'vitest'
import { Tag } from './Tag'

describe('Icon', () => {
    it('Render components', () => {
        render(<Tag></Tag>)
        screen.getByText('Im tag')
    })
    it('on click', () => {
        render(<Tag closeIcon preventDefault onClose={() => console.log('ahahahahahah')}>Hello</Tag>)
    })
})
