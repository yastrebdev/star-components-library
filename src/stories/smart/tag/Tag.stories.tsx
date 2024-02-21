import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from 'components/smart/tag'

const meta: Meta<typeof Tag> = {
    title: 'Smart/Tag',
    component: Tag,
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = {
    args: {
        className: '',
        closeIcon: false,
        preventDefault: false,
        style: {},
    },
}
export const Close = () => (
    <Tag closeIcon onClose={() => alert('you closed the tag')}>
        Close me
    </Tag>
)

export const PreventDefault = () => (
    <Tag
        closeIcon
        preventDefault
        onClose={() => alert("you won't shut me out")}>
        Close me
    </Tag>
)
