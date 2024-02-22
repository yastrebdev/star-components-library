import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from 'components/smart/switch'

const meta: Meta<typeof Switch> = {
    title: 'Smart/Switch',
    component: Switch,
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10}}>
                <Story />
            </div>
        ),
    ],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
    args: {
        className: '',
        style: {},
        defaultValue: false,
        iconOff: undefined,
        iconOn: undefined,
    },
}

export const Values = () => {
    return (
        <>
            <Switch defaultValue />
            <Switch value />
        </>
    )
}

export const Icons = () => <Switch iconOff="Sun" iconOn="Moon" />

export const Change = () => (
    <Switch onChange={(value) => alert(`Вы установили значение ${value}`)} />
)
