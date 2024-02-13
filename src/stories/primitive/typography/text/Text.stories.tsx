import type { Meta, StoryObj } from '@storybook/react'
import { options } from './constants'
import { Typography } from 'components/primitive/typography'

const { Text } = Typography

const meta: Meta<typeof Text> = {
    title: 'Primitive/Typography/Text',
    component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
    args: {
        children: 'Text',
        className: '',
        style: {},
        strong: false,
        bold: false,
    },
    argTypes: {
        type: {
            defaultValue: 'default',
            options: options.types,
            control: { type: 'select' },
        },
    },
}

export const Types = () =>
    options.types.map((type, i: number) => {
        return <Text type={type} key={i}></Text>
    })