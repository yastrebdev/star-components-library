import type { Meta } from '@storybook/react'
import { Badges } from 'components/simple/badges'
import { Button } from 'components/simple/button'

const meta: Meta<typeof Badges> = {
    title: 'Simple/Badges',
    component: Badges,
    tags: ['autodocs'],
}

export default meta

export const Default = () => <Badges />
export const Children = () => <Badges><Button /></Badges>