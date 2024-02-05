import type { Meta } from '@storybook/react'
import { Avatar } from 'components/simple/avatar'
import { options } from './constants'

const meta: Meta<typeof Avatar> = {
    title: 'Simple/Avatar',
    component: Avatar,
    tags: ['autodocs'],
}

export default meta

export const Default = () => <Avatar></Avatar>

export const Sizes = () =>
    options.sizes.map((size, i: number) => {
        return <Avatar size={size} key={i} />
    })

export const Icon = () => <Avatar icon='User'></Avatar>