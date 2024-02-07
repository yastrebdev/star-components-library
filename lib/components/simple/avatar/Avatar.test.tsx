import { render } from '@testing-library/react' // (or /dom, /vue, ...)
import { describe, it } from 'vitest'
import { Avatar } from './Avatar'
import Ava from '../../../../public/avatar.png'

describe('Avatar', () => {
    it('Render components', () => {
        render(<Avatar />)
    })
    it('src and icons props', () => {
        render(<Avatar src={Ava} icon='User'/>)
    })
})