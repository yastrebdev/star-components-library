import type { Meta, StoryObj } from '@storybook/react'
import { Badges } from 'components/simple/badges'
import { Avatar } from 'components/simple/avatar'

const meta: Meta<typeof Badges> = {
    title: 'Simple/Badges',
    component: Badges,
}

export default meta
type Story = StoryObj<typeof Badges>

export const Default: Story = {
    args: {
        iconName: 'Check',
        className: '',
        style: {},
        position: 'tr',
    },
    argTypes: {
        icon: {
            control: false
        },
    },
}

export const Children = () => <Badges><Avatar /></Badges>
export const Position = () => <Badges position='bl'><Avatar /></Badges>
