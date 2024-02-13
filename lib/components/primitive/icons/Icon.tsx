import type { SCL_IconProps } from './type'
import { getIcon } from './icons'
import cn from 'classnames'
import './style.scss'

export const Icon = ({
    name = 'User',
    color = 'black',
    weight,
    className,
    style,
    size = 24,
    onClick,
}: SCL_IconProps) => {
    const SvgIcon = getIcon(name)
    return (
        <>
            <SvgIcon
                onClick={onClick}
                className={cn('scl-icon', {
                    ['scl-icon__onclick']: onClick,
                }, className)}
                color={color}
                weight={weight}
                style={{ width: size, height: size, ...style }}
                
                data-testid="icon-element"
            />
        </>
    )
}
