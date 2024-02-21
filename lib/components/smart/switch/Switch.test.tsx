import { render, fireEvent } from '@testing-library/react'
import { Switch } from './Switch'
import { describe, expect, it, vitest } from 'vitest'

describe('Switch component', () => {
    it('renders switch with default values', () => {
        const { getByTestId } = render(<Switch />)
        const switchWrapper = getByTestId('scl-switch-test')
        expect(switchWrapper).toBeInTheDocument()

        const hendleElement = switchWrapper.querySelector('.scl-switch__hendel')
        expect(hendleElement).toBeInTheDocument()
        expect(hendleElement).not.toHaveClass('scl-switch__hendel_on')
    })

    it('changes value when mouseDown', () => {
        const { getByTestId } = render(<Switch />)
        const switchElement = getByTestId('scl-switch-test').querySelector('.scl-switch')
        const hendleElement = getByTestId('scl-switch-test').querySelector('.scl-switch__hendel')
        expect(hendleElement).not.toHaveClass('scl-switch__hendel_stretch-on')
        fireEvent.mouseDown(switchElement as HTMLElement)
        expect(hendleElement).toHaveClass('scl-switch__hendel_stretch-on')
    })

    it('changes value when mouseUp', () => {
        const { getByTestId } = render(<Switch />)
        const switchElement = getByTestId('scl-switch-test').querySelector('.scl-switch')
        const hendleElement = getByTestId('scl-switch-test').querySelector('.scl-switch__hendel')
        expect(hendleElement).not.toHaveClass('scl-switch__hendel_on')
        fireEvent.mouseUp(switchElement as HTMLElement)
        expect(hendleElement).toHaveClass('scl-switch__hendel_on')
    })

    it('calls onChange callback when clicked', () => {
        const onChangeMock = vitest.fn()
        const { getByTestId } = render(<Switch onChange={onChangeMock} />)
        const switchElement = getByTestId('scl-switch-test').querySelector('.scl-switch')
        fireEvent.click(switchElement as HTMLElement)
        expect(onChangeMock).toHaveBeenCalledWith(false)
    })
})
