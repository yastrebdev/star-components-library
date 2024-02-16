import type { Meta } from '@storybook/react'
import { ClickableCard } from 'components/simple/card/clickable-card'

const meta: Meta<typeof ClickableCard> = {
    title: 'Simple/Card/ClickableCard',
    component: ClickableCard,
    tags: ['autodocs'],
}

export default meta

export const Default = () => <ClickableCard></ClickableCard>