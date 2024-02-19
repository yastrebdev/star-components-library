import type { CSSProperties, ReactElement } from "react";
import type { IconName } from "components/primitive/icons";

export interface SCL_BadgesProps {
    icon?: ReactElement
    iconName?: IconName
    className?: string
    style?: CSSProperties
    children?: ReactElement
    position?: 'tr' | 'tl' | 'br' | 'bl'
}