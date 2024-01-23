// import { options } from './constants'
import cn from 'classnames'
import './Button.scss'

interface ButtonProps {
    type?: string;
    size?: string;
    children?: string;
}

export const Button: React.FC<ButtonProps> = ({
    type = 'primary',
    size = 'lg',
    children = `I'm button`,
}) => {
    return <div className={cn("button", {
        [`button__type-${type}`]: type,
        [`button__size-${size}`]: size,
    })}>{children}</div>
}

export default Button
