import { IconName } from "components/primitive/icons";
import { CSSProperties } from "react";

export interface SCL_SwitchProps {
    className?: string
    style?: CSSProperties
    iconOff?: IconName
    iconOn?: IconName
    defaultValue?: boolean
    value?: boolean
    onChange?: (value: boolean) => void
}