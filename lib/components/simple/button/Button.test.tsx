import React from 'react'
import { render, screen } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
    it('Render components', () => {
        render(<Button>I button</Button>)
        screen.getByText('I button')
    })
})