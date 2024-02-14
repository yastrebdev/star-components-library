import { IconName } from "components/primitive/icons/icons"
import { CSSProperties, MouseEvent } from "react"

export type AvatarSize = 'sm' | 'md' | 'lg'

export interface SCL_AvatarProps {
    src?: string
    className?: string
    icon?: IconName
    size?: AvatarSize
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
    circle?: boolean
    style?: CSSProperties
}