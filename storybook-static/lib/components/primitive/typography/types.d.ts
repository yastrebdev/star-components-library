import { CSSProperties, MouseEvent } from "react";
export type TextTypes = 'default' | 'secondary' | 'success' | 'warning' | 'danger';
export type TytleLevelTypes = 1 | 2 | 3 | 4 | 5 | 6;
export type LinkTargetTypes = '_blank' | '_self' | '_parent' | '_top';
export interface SCL_TypogrphyTextProps {
    type?: TextTypes;
    children?: string;
    strong?: boolean;
    bold?: boolean;
    className?: string;
    style?: CSSProperties;
    onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
}
export interface SCL_TypogrphyTitleProps {
    level?: TytleLevelTypes;
    children?: string;
    className?: string;
    style?: CSSProperties;
    strong?: boolean;
    bold?: boolean;
    regular?: boolean;
    onClick?: (event: MouseEvent<HTMLHeadElement>) => void;
}
export interface SCL_TypogrphyLinkProps {
    children?: string;
    href?: string;
    target?: LinkTargetTypes;
    className?: string;
    style?: CSSProperties;
    strong?: boolean;
    bold?: boolean;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
}
