import { fireEvent, render } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, expect, it, vitest } from 'vitest'
import { Tag } from './Tag'

describe('Icon', () => {
    describe('Tag component', () => {
        it('renders children correctly', () => {
            const { getByText } = render(<Tag>Test Tag</Tag>)
            expect(getByText('Test Tag')).toBeInTheDocument()
        })

        it('renders close icon if closeIcon prop is provided', () => {
            const { getByTestId } = render(<Tag closeIcon />)
            expect(getByTestId('scl-close-icon-test')).toBeInTheDocument()
        })

        it('calls onClose when close icon is clicked', () => {
            const handleClose = vitest.fn()
            const { getByTestId } = render(
                <Tag closeIcon onClose={handleClose} />
            )
            fireEvent.click(getByTestId('scl-close-icon-test'))
            expect(handleClose).toHaveBeenCalledTimes(1)
        })

        it('hides tag when close icon is clicked and preventDefault is false', () => {
            const { getByTestId } = render(<Tag closeIcon />)
            const tagElement = getByTestId('scl-tag-test')
            fireEvent.click(getByTestId('scl-close-icon-test'))
            expect(tagElement).not.toBeInTheDocument()
        })

        it('does not hide tag when close icon is clicked and preventDefault is true', () => {
            const { getByTestId } = render(<Tag closeIcon preventDefault />)
            fireEvent.click(getByTestId('scl-close-icon-test'))
            expect(getByTestId('scl-tag-test')).not.toHaveStyle({ display: 'none' })
        })
    })
})
