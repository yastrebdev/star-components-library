import Ava from '../../../../public/avatar.png'
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from 'components/simple/avatar'
import { options } from './constants'

const meta: Meta<typeof Avatar> = {
    title: 'Simple/Avatar',
    component: Avatar,
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: '10px',
                }}>
                <Story />
            </div>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
    args: {
        src: Ava,
        size: 'lg',
        circle: true,
        className: '',
    }
}

export const Sizes = () =>
    options.sizes.map((size, i: number) => {
        return <Avatar size={size} key={i} />
    })

export const Circle = () => {
    return (
        <>
            <Avatar circle />
            <Avatar circle={false} />
        </>
    )
}
export const Icon = () => {
    return (
        <>
            <Avatar icon='Plus' />
            <Avatar icon='User' />
        </>
    )
}