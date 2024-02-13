import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from 'components/primitive/typography'

const { Link } = Typography

const meta: Meta<typeof Link> = {
    title: 'Primitive/Typography/Link',
    component: Link,
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
    args: {
        href: '',
        target: '_blank',
        children: `I'am google`,
        className: '',
        style: {},
        strong: false,
        bold: false
    },
}