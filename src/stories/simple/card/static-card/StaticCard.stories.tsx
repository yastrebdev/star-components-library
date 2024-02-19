import type { Meta, StoryObj } from '@storybook/react'
import { Card } from 'components/simple/card'

const { StaticCard } = Card

const meta: Meta<typeof StaticCard> = {
    title: 'Simple/Card/StaticCard',
    component: StaticCard,
}

export default meta
type Story = StoryObj<typeof StaticCard>

export const Default: Story = {
    args: {
        title: 'This is card',
        subtitle: '01.02.23',
        iconName: 'DotsThree',
        className: '',
        style: {},
    },
    argTypes: {
        icon: {
            control: false
        },
    },
}

export const Click = () => <StaticCard onClick={() => alert('click StaticCard')}/>