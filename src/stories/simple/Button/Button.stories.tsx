import type { Meta, StoryObj } from '@storybook/react'
import type { IconName } from 'components/primitive/icons'
import { Button } from 'components/simple/button'
import { options } from './constants'

const meta: Meta<typeof Button> = {
    title: 'Simple/Button',
    component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        type: 'primary',
        size: 'lg',
        shape: 'rounded',
        icon: '' as IconName,
        className: '',
        style: {},
        onClick: () => {}
    }
}

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

export const Icon = () => <Button icon='Brain'/>

export const OnClick = () => <Button onClick={() => alert('click button')}/>