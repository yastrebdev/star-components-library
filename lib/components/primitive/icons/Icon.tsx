import type { SCL_IconProps } from './type'
import { getIcon } from './icons'
import cn from 'classnames'
import './style.scss'

export const Icon = ({
    name = 'User',
    color = 'black',
    className,
    style,
    size,
    onClick,
}: SCL_IconProps) => {
    const SvgIcon = getIcon(name)
    return (
        <>
            <SvgIcon
                onClick={onClick}
                data-testid="icon-element"
                className={cn('scl-icon', {
                    ['scl-icon__onclick']: onClick,
                }, className)}
                color={color}
                style={{ width: size, height: size, ...style }}
            />
        </>
    )
}
