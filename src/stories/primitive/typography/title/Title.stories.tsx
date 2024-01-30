import type { Meta } from '@storybook/react'
import { options } from './constants'
import { Typography } from 'components/primitive/typography'

const { Title } = Typography

const meta: Meta<typeof Title> = {
    title: 'Primitive/Typography/Title',
    component: Title,
    tags: ['autodocs'],
}

export default meta

export const Default = () => <Title></Title>
export const Levels = () =>
    options.levels.map((level, i: number) => {
        return <Title level={level} key={i}>{`h${i + 1}. Star Components Library`}</Title>
    })
