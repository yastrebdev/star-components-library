import type { Meta } from '@storybook/react'
import { Card } from 'components/simple/card/Card'

const meta: Meta<typeof Card> = {
    title: 'Simple/Card',
    component: Card,
    tags: ['autodocs'],
}

export default meta

export const Default = () => <Card></Card>