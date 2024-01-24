// import { options } from './constants'
import cn from 'classnames'
import './Button.scss'
import { Icon } from '../../components/icons'

interface ButtonProps {
    type?: string
    size?: string
    icon?: boolean
    children?: string
}

export const Button: React.FC<ButtonProps> = ({
    type = 'primary',
    size = 'lg',
    icon = true,
    children = `I'm button`,
}) => {
    return (
        <div
            className={cn('button', {
                [`button__type-${type}`]: type,
                [`button__size-${size}`]: size,
                [`button__icon`]: icon,
            })}>
            <div>{children}</div>
            {icon && <Icon style={{width: size === 'md' ? 20 : size === 'sm' ? 16 : 24}}/>}
        </div>
    )
}

export default Button
