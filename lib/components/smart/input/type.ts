import type { CSSProperties, MouseEvent } from "react"
import type { IconName } from "components/primitive/icons"

interface SCL_InputCommonProps {
    placeholder?: string
    value?: string
    iconColor?: string
    className?: string
    style?: CSSProperties
    onChange?: (value?: string | number) => void
}

export interface SCL_InputProps extends SCL_InputCommonProps {
    icon?: IconName
    buttonIcon?: IconName
    button?: boolean
    onClickButton?: (e?: MouseEvent<HTMLButtonElement>, value?: string) => void
    emptyValidation?: boolean
}

export interface SCL_InputPropsPassword extends SCL_InputCommonProps {
    visibleIcon?: boolean
    visibleValue?: boolean
}