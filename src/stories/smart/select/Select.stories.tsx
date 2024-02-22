import type { Meta, StoryObj } from '@storybook/react'
import { Select } from 'components/smart/select'

const meta: Meta<typeof Select> = {
    title: 'Smart/Select',
    component: Select,
    decorators: [
        (Story) => (
            <div style={{ height: 150, display: 'flex', alignItems: 'start', gap: 10}}>
                <Story />
            </div>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof Select>

const opt = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'yiminghe', label: 'Yiminghe' },
]

export const Default: Story = {
    args: {
        defaultValue: 'jack',
        iconName: 'CaretDown',
        value: '',
        options: opt
    }
}

export const Icon = () => <Select iconName='Check' options={opt}/>

export const Values = () => {
    return (
        <>
            <Select defaultValue='yiminghe' options={opt}/>
            <Select value='Jack' options={opt}/>
        </>
    )
}