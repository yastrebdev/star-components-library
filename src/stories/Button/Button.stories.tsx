import type { Meta } from '@storybook/react'
import Button from './Button'
import { options } from './constants'

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
}

export default meta

export const Default = () => <Button />

export const Types = () =>
    options.types.map((type, index) => {
        return <Button key={index} type={type} />
    })

export const Sizes = () =>
    options.sizes.map((size, index) => {
        return <Button key={index} size={size} />
    })

export const Icon = () =>
    options.icon.map((i, index) => {
        return <Button key={index} icon={i} />
    })
