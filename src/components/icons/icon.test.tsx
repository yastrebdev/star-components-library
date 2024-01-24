import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Icon } from '.'
import mod from './style.module.scss'

describe('Button', () => {
    // default
    it('default', () => {
        render(<Icon />)
    })
    // name
    it('name', () => {
        render(<Icon name="Brain" />)
    })
    // fill
    it('fill', () => {
        render(<Icon fill="#4f4f4f" />)
    })
    // style
    it('style', () => {
        render(<Icon style={{ width: 50, height: 50 }} />)
    })
    // className
    it('className', () => {
        render(<Icon className={mod.icon} />)
    })
    // onClick
    // it('onClick', () => {
    //     render(<Icon onClick={() => alert('click icon')} />)
    // })
    // all props
    it('all props', () => {
        render(
            <Icon
                name="Brain"
                // onClick={() => alert('click icon')}
                fill="#4f4f4f"
                style={{ width: 50, height: 50 }}
                className={mod.icon}
            />
        )
        screen.debug()
    })
})
