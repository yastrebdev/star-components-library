import { CSSProperties, MouseEvent } from "react";
import { IconName } from '../../../../../../../lib/components/primitive/icons/icons';
export type SCL_ButtonType = 'primary' | 'secondary';
export type SCL_ButtonSize = 'sm' | 'md' | 'lg';
export type SCL_ButtonShape = 'normal' | 'circle' | 'rounded';
export interface SCL_ButtonProps {
    type?: SCL_ButtonType;
    size?: SCL_ButtonSize;
    shape?: SCL_ButtonShape;
    className?: string;
    style?: CSSProperties;
    icon?: IconName;
    children?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
