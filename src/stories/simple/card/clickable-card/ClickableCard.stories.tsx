import type { Meta, StoryObj } from '@storybook/react'
import { Card } from 'components/simple/card'
import { options } from './constants'

const { ClickableCard } = Card

const meta: Meta<typeof ClickableCard> = {
    title: 'Simple/Card/ClickableCard',
    component: ClickableCard,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    padding: '0 24px',
                }}>
                <Story />
            </div>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof ClickableCard>

export const Default: Story = {
    args: {
        type: 'primary',
        iconName: 'ChatCircle',
        title: 'Text Writer',
        subtitle: 'Youre scenario',
        className: '',
        style: {}
    }
}

export const Types = () =>
    options.types.map((type, i) => {
        return <ClickableCard key={i} type={type}/>
    })