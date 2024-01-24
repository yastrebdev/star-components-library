import { type CSSProperties, MouseEvent } from 'react'
import cn from 'classnames'
import { getIcon, type IconName } from './icons'
import mod from './style.module.scss'

interface IconProps {
    name?: IconName
    className?: string
    style?: CSSProperties
    onClick?: (
        event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLElement>
    ) => void
}

export const Icon = ({
    name = 'ArrowVertical',
    className,
    style,
    onClick,
}: IconProps) => {
    const SvgIcon = getIcon(name)
    return (
        <>
            {onClick ? (
                <button type="button" className={mod.button} onClick={onClick}>
                    <SvgIcon
                        style={style}
                        className={cn(mod.icon, className)}
                    />
                </button>
            ) : (
                <SvgIcon className={cn(mod.icon, className)} style={style} />
            )}
        </>
    )
}
