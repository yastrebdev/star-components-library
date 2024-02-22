import { IconName } from '../../../../../../../../lib/components/primitive/icons';
import { CSSProperties, MouseEvent } from "react";
export type SCL_StaticCardTypes = 'primary' | 'secondary';
export interface SCL_StaticCardProps {
    type?: SCL_StaticCardTypes;
    iconName?: IconName;
    title?: string;
    subtitle?: string;
    className?: string;
    style?: CSSProperties;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}
