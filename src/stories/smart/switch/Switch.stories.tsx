import type { Meta } from '@storybook/react'
import { Switch } from 'components/smart/switch'

const meta: Meta<typeof Switch> = {
    title: 'Smart/Switch',
    component: Switch,
    tags: ['autodocs'],
}

export default meta

export const Default = () => <Switch />
export const Icons = () => <Switch iconOff='Sun' iconOn='Moon' />