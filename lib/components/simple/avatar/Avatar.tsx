import type { SCL_AvatarProps } from './type'
import { Icon } from 'components/primitive/icons'
import Ava from '../../../../public/avatar.png'
import cn from 'classnames'
import './style.scss'

export const Avatar: React.FC<SCL_AvatarProps> = ({
    src = Ava,
    icon,
    size = 'lg',
    circle = true,
    className,
    style,
    onClick,
}) => {
    return (
        <div
            className={cn('scl-avatar', {
                [`scl-avatar__size-${size}`]: size,
                ['scl-avatar__circle']: circle,
                ['scl-avatar__onclick']: onClick,
                ['scl-avatar__icon']: icon,
            }, className)}
            style={style}
            onClick={onClick}>
            {icon ? <Icon testid='scl-test-avatar-icon' name={icon}/> : <img src={src} alt='avatar' />}
        </div>
    )
}
