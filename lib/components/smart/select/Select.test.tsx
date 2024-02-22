import { render, fireEvent } from '@testing-library/react'
import { describe, expect, it, vitest } from 'vitest'
import { Select } from './Select'

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
]

describe('Select Input Component', () => {
    it('renders with default value', () => {
    const { getByTestId } = render(<Select options={options} />)
    const defaultOption = getByTestId('scl-select-header-test')
    expect(defaultOption).toBeInTheDocument()
    })

    it('renders with provided value', () => {
    const { getByText } = render(<Select options={options} value="option2" />)
    const selectedOption = getByText('Option 2')
    expect(selectedOption).toBeInTheDocument()
    })

    it('changes value when an option is clicked', () => {
    const handleChange = vitest.fn()
    const { getByText } = render(<Select options={options} onChange={handleChange} />)
    const option = getByText('Option 2')
    fireEvent.click(option)
    expect(handleChange).toHaveBeenCalledWith('option2')
    })

    it('dropdown opens when header is clicked', () => {
    const { getByTestId } = render(<Select options={options} />)
    const header = getByTestId('scl-select-header-test')
    const dropdown = getByTestId('scl-select-body-test')
    expect(dropdown).not.toHaveClass('scl-select__body_vivible')
    fireEvent.click(header)
    expect(dropdown).toBeInTheDocument()
    expect(dropdown).toHaveClass('scl-select__body_vivible')
    })

    it('dropdown closes when clicking outside', () => {
    const { getByTestId } = render(<Select options={options} />)
    const header = getByTestId('scl-select-header-test')
    const dropdown = getByTestId('scl-select-body-test')
    fireEvent.click(header)
    expect(dropdown).toHaveClass('scl-select__body_vivible')
    fireEvent.mouseDown(document.body)
    expect(dropdown).not.toHaveClass('scl-select__body_vivible')
    })
})