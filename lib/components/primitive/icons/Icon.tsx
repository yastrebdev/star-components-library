import type { SCL_IconProps } from './tyoe'
import { getIcon } from './icons'
import cn from 'classnames'
import './style.scss'

export const Icon = ({
    name = 'ArrowVertical',
    stroke = 'black',
    className,
    style,
    onClick,
}: SCL_IconProps) => {
    const SvgIcon = getIcon(name)
    return (
        <>
            {onClick ? (
                <button data-testid="icon-button-element" type="button" className="button" onClick={onClick}>
                    <SvgIcon
                        style={style}
                        className={cn('icon', className)}
                        stroke={stroke}
                    />
                </button>
            ) : (
                <SvgIcon
                    data-testid="icon-element"
                    className={cn('icon', className)}
                    style={style}
                    stroke={stroke}
                />
            )}
        </>
    )
}
