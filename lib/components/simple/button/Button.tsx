import type { SCL_ButtonProps } from './type'
import { Typography } from 'components/primitive/typography'
import { Icon } from 'components/primitive/icons'
import cn from 'classnames'
import './style.scss'

const { Text } = Typography

export const Button: React.FC<SCL_ButtonProps> = ({
    type = 'primary',
    size = 'lg',
    children = `I'm button`,
    icon = 'DotsThree',
    shape,
    onClick,
}) => {
    const iconSize = size === 'md' ? 20 : size === 'sm' ? 16 : 24
    const isCircle = shape === 'circle'

    return (
        <button
            onClick={onClick}
            className={cn('scl-button', {
                [`scl-button__type-${type}`]: type,
                [`scl-button__size-${size}`]: size,
                [`scl-button__shape-${shape}`]: shape,
                [`scl-button__shape-${shape}-${type}`]: shape,
                [`scl-button__icon`]: icon,
            })}>
            {!isCircle && (
                <Text
                    type={type === 'primary' ? 'default' : 'secondary'}
                    className={cn({
                        [`scl-button__text-${size}`]: size,
                    })}>
                    {children}
                </Text>
            )}
            {(icon || isCircle) && (
                <Icon
                    name={icon}
                    style={{width: iconSize, height: iconSize}}
                />
            )}
        </button>
    )
}
