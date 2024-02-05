import type { Meta } from '@storybook/react'
import { Tag } from 'components/smart/tag'

const meta: Meta<typeof Tag> = {
    title: 'Primitive/Tag',
    component: Tag,
    tags: ['autodocs'],
}

export default meta

export const Default = () => <Tag></Tag>
export const Close = () => <Tag closeIcon onClose={() => console.log('ahahahahahah')}></Tag>
export const PreventDefault = () => <Tag closeIcon preventDefault onClose={() => console.log('ahahahahahah')}></Tag>