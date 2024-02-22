import { type CSSProperties, MouseEvent } from 'react';
import { type IconName } from './icons';
import { IconWeight } from '@phosphor-icons/react';
export interface SCL_IconProps {
    name?: IconName;
    className?: string;
    testid?: string;
    style?: CSSProperties;
    color?: string;
    weight?: IconWeight;
    size?: number;
    onClick?: (event: MouseEvent<SVGSVGElement>) => void;
}
