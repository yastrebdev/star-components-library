import type { Meta } from '@storybook/react'
import { Select } from 'components/smart/select'

const meta: Meta<typeof Select> = {
    title: 'Smart/Select',
    component: Select,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ height: 150}}>
                <Story />
            </div>
        ),
    ],
}

export default meta

const opt = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'yiminghe', label: 'Yiminghe' },
]

export const Default = () => {
    const onChange = (value: string | number) => {
        console.log(`selected ${value}`)
    }
    return <Select onChange={onChange} options={opt}/>
}