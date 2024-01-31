import { type CSSProperties, MouseEvent } from 'react'
import { type IconName } from './icons'

export interface SCL_IconProps {
    name?: IconName
    className?: string
    style?: CSSProperties
    stroke?: string
    onClick?: (
        event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLElement>
    ) => void
}