import type { Meta, StoryObj } from '@storybook/react'
import { options } from './constants'
import { Icon } from 'components/primitive/icons'

const meta: Meta<typeof Icon> = {
    title: 'Primitive/Icon',
    component: Icon,
    decorators: [
        (Story) => (
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    padding: '0 24px',
                }}>
                <Story />
            </div>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
    args: {
        name: 'User',
        className: '',
        style: {},
        size: Infinity,
    },
    argTypes: {
        weight: {
            control: 'select',
            options: ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'],
        },
    },
}

export const Icons = () =>
    options.icons.map((icon) => {
        const handleClick = () => {
            navigator.clipboard
                .writeText(icon)
                .then(() => {
                    alert(`Copied: ${icon}`)
                })
                .catch((error) => {
                    console.error('Ошибка копирования в буфер обмена:', error)
                    alert(`Not copied: ${icon}`)
                })
        }
        return <Icon name={icon} onClick={handleClick}></Icon>
    })
