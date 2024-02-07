import type { CSSProperties, MouseEvent, ReactElement } from "react"
import { IconName } from "components/primitive/icons"

export interface SCL_CardProps {
    className?: string
    style?: CSSProperties
    title?: string
    subtitle?: string
    iconName?: IconName
    icon?: ReactElement
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
}