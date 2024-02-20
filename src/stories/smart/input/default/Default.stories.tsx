import type { Meta, StoryObj } from '@storybook/react'
import { IconName } from 'components/primitive/icons'
import { Default as Input } from 'components/smart/input/default'

const meta: Meta<typeof Input> = {
    title: 'Smart/Input/Default',
    component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
    args: {
        button: false,
        buttonIcon: 'PaperPlaneRight',
        className: '',
        emptyValidation: true,
        icon: '' as IconName,
        iconColor: '',
        placeholder: 'default',
        style: {},
        value: '',
        onClickButton: (e, value) => console.log(e?.target, value),
    },
}

export const Icon = () => <Input icon="DownloadDown" iconColor='#f7b63f'/>

export const PlaceholderAndValue = () => {
    return (
        <>
            <Input placeholder='Custom placeholder'/>
            <Input value='Custom value'/>
        </>
    )
}

export const Click = () => (
    <Input
        button
        buttonIcon="Brain"
        onClickButton={(_, value) =>
            alert(value ? `Вы ввели: "${value}"` : 'Вы ничего не ввели')
        }
    />
)
export const Change = () => <Input onChange={(value) => console.log(value)}/>