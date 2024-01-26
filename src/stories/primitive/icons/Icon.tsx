import { type CSSProperties, MouseEvent } from 'react'
import cn from 'classnames'
import { getIcon, type IconName } from './icons'
import './style.scss'

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
                <button type="button" className='button' onClick={onClick}>
                    <SvgIcon
                        style={style}
                        className={cn('icon', className)}
                    />
                </button>
            ) : (
                <SvgIcon className={cn('icon', className)} style={style} />
            )}
        </>
    )
}
