import type { ReactElement } from "react";
import type { IconName } from '../../../../../../../../../lib/components/primitive/icons';
export interface SCL_BadgesProps {
    icon?: ReactElement;
    iconName?: IconName;
    className?: string;
    children?: ReactElement;
    position?: 'tr' | 'tl' | 'br' | 'bl';
}
