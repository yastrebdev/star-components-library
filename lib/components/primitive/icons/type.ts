import { type CSSProperties, MouseEvent } from 'react'
import { type IconName } from './icons'

export interface SCL_IconProps {
    name?: IconName
    className?: string
    style?: CSSProperties
    color?: string
    size?: number
    onClick?: (
        event: MouseEvent<SVGSVGElement>
    ) => void
}