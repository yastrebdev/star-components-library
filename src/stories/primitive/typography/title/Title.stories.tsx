import type { Meta, StoryObj } from '@storybook/react'
import { options } from './constants'
import { Typography } from 'components/primitive/typography'

const { Title } = Typography

const meta: Meta<typeof Title> = {
    title: 'Primitive/Typography/Title',
    component: Title,
}

export default meta
type Story = StoryObj<typeof Title>

export const Default: Story = {
    args: {
        level: 1,
        children: 'Title',
        className: '',
        style: {},
        strong: false,
        bold: false,
        regular: false
    }
}

export const Levels = () =>
    options.levels.map((level, i: number) => {
        return <Title level={level} key={i}>{`h${i + 1}. Star Components Library`}</Title>
    })
