import type { Meta } from '@storybook/react'
import { options } from './constants'
import { Icon } from 'components/primitive/icons'

const meta: Meta<typeof Icon> = {
    title: 'Primitive/Icon',
    component: Icon,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <Story />
            </div>
        ),
    ],
}

export default meta

export const Default = () => <Icon></Icon>

export const Icons = () =>
    options.icons.map((icon) => {
        return <Icon name={icon}></Icon>
    })
