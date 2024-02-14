import { fireEvent, render } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, expect, it, vitest } from 'vitest'
import { Avatar } from './Avatar'

const avatarURL =
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

describe('Avatar component', () => {
    it('renders with default props', () => {
        const { container, getByAltText } = render(<Avatar />)

        const avatarElement = getByAltText('avatar')
        expect(avatarElement).toBeInTheDocument()
        expect(avatarElement).toHaveAttribute('src', '/public/avatar.png')

        const avatarContainer = container.firstChild
        expect(avatarContainer).toBeInTheDocument()
        expect(avatarContainer).toHaveClass('scl-avatar')
        expect(avatarContainer).toHaveClass('scl-avatar__size-lg')
        expect(avatarContainer).not.toHaveClass('scl-avatar__icon')
    })
    it('renders container with specified props', () => {
        const { container, getByAltText } = render(
            <Avatar
                src={avatarURL}
                circle={false}
                className='scl-avatar-test'
                size='sm'
                style={{width: 100, height: 100}}
            />
        )

        const avatarContainer = container.firstChild
        expect(avatarContainer).toBeInTheDocument()
        expect(avatarContainer).toHaveClass('scl-avatar__size-sm')
        expect(avatarContainer).toHaveClass('scl-avatar-test')
        expect(avatarContainer).not.toHaveClass('scl-avatar__circle')
        expect(avatarContainer).toHaveStyle({width: '100px', height: '100px'})

        const avatarElement = getByAltText('avatar')
        expect(avatarElement).toBeInTheDocument()
        expect(avatarElement).toHaveAttribute('src', avatarURL)
    })
    it('renders with icon props', () => {
        const { container, getByTestId } = render(<Avatar icon='User'/>)
        const avatarIconElement = getByTestId('scl-test-avatar-icon')
        expect(avatarIconElement).toBeInTheDocument()

        const avatarContainer = container.firstChild
        expect(avatarContainer).toHaveClass('scl-avatar__icon')
    })
    it('fires onClick event when clicked', () => {
        const handleClick = vitest.fn()
        const { container } = render(<Avatar onClick={handleClick} />)
        const avatarContainer = container.firstChild
        fireEvent.click(avatarContainer as ChildNode)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
