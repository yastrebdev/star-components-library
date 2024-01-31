import type { Meta } from '@storybook/react'
import { options } from './constants'
import { Button } from 'components/simple/button'

const meta: Meta<typeof Button> = {
    title: 'Simple/Button',
    component: Button,
    tags: ['autodocs'],
}

export default meta

export const Default = () => <Button></Button>

export const Types = () =>
    options.types.map((type, i: number) => {
        return <Button type={type} key={i}>Button</Button>
    })

export const Sizes = () =>
    options.sizes.map((size, i: number) => {
        return <Button size={size} key={i}>Button</Button>
    })

export const Shapes = () =>
    options.shapes.map((shape, i: number) => {
        return <Button shape={shape} key={i}>Button</Button>
    })