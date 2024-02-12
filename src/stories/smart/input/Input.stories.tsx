import type { Meta } from '@storybook/react'
import { Input } from 'components/smart/input/Input'

const meta: Meta<typeof Input> = {
    title: 'Smart/Input',
    component: Input,
    tags: ['autodocs'],
}

export default meta

export const Default = () => <Input onClickButton={(e, value) => console.log(e?.currentTarget, value)}/>
export const Password = () => <Input.Password />