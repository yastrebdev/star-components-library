// import { options } from './constants'

export const Button = ({
    type = 'primary',
    size = 'lg',
    children = `I'm button`
}) => {
    return <div>{children || type || size}</div>
}

export default Button
