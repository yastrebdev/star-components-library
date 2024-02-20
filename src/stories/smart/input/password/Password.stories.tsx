import type { Meta, StoryObj } from '@storybook/react'
// import { IconName } from 'components/primitive/icons'
import { Input } from 'components/smart/input'

const Password = Input.Password

const meta: Meta<typeof Password> = {
    title: 'Smart/Input/Password',
    component: Password,
}

export default meta
type Story = StoryObj<typeof Password>

export const Default: Story = {
    args: {
        className: '',
        visibleIcon: false,
        iconColor: '',
        placeholder: 'password',
        style: {}
    },
}

export const VisibleIcon = () => <Password visibleIcon iconColor='#c09' value='Please, click icon'/>

export const VisibleValue = () => <Password visibleValue visibleIcon value='Please, click icon'/>

export const Change = () => <Password onChange={(value) => console.log(value)}/>
