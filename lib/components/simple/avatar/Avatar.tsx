import { SCL_AvatarProps } from './type'
import { Icon } from 'components/primitive/icons'
import Ava from '../../../../public/avatar.png'
import cn from 'classnames'
import './style.scss'

export const Avatar: React.FC<SCL_AvatarProps> = ({
    src = Ava,
    icon,
    size = 'lg',
    onClick,
    circle = true,
    className
}) => {
    return (
        <div
            className={cn('scl-avatar', {
                [`scl-avatar__size-${size}`]: size,
                ['scl-avatar__circle']: circle,
                ['scl-avatar__onclick']: onClick,
                ['scl-avatar__icon']: icon,
            }, className)}
            onClick={onClick}>
            {icon ? <Icon name={icon}/> : <img src={src} />}
        </div>
    )
}
