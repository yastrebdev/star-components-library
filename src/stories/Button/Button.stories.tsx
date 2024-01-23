import Button from './Button'
import { options } from './constants'

export default {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
}

export const Default = () => <Button />

export const Colors = () =>
    options.types.map((type, index) => {
        return <Button key={index} type={type} />
    })

export const Sizes = () =>
    options.sizes.map((size, index) => {
        return <Button key={index} size={size} />
    })
