import { IconName } from "components/primitive/icons"

type SCL_SelectOptionsArray = {
    value: string
    label: string
}

export interface SCL_SelectProps {
    defaultValue?: string | number
    value?: string | number
    iconName?: IconName
    options?: SCL_SelectOptionsArray[]
    onChange?: (value: string | number) => void
}