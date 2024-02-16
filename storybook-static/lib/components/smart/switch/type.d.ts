import { IconName } from '../../../../../../../../../lib/components/primitive/icons';
import { MouseEvent } from "react";
export interface SCL_SwitchProps {
    iconOff?: IconName;
    iconOn?: IconName;
    defaultValue?: boolean;
    value?: boolean;
    onChange?: (event: MouseEvent<HTMLDivElement>) => void;
}
