import type { CSSProperties, MouseEvent } from "react";
import type { IconName } from '../../../../../../../../../lib/components/primitive/icons';
interface SCL_InputCommonProps {
    placeholder?: string;
    iconColor?: string;
    className?: string;
    style?: CSSProperties;
}
export interface SCL_InputProps extends SCL_InputCommonProps {
    value?: string;
    icon?: IconName;
    buttonIcon?: IconName;
    button?: boolean;
    onClickButton?: (e?: MouseEvent<HTMLButtonElement>, value?: string) => void;
    emptyValidation?: boolean;
}
export interface SCL_InputPropsPassword extends SCL_InputCommonProps {
    hideIcon?: boolean;
}
export {};
