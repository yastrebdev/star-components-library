import { CSSProperties } from "react";
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
}
export interface SCL_TypogrphyTitleProps {
    level?: TytleLevelTypes;
    children?: string;
    className?: string;
    style?: CSSProperties;
    strong?: boolean;
    bold?: boolean;
    regular?: boolean;
}
export interface SCL_TypogrphyLinkProps {
    href?: string;
    target?: LinkTargetTypes;
    className?: string;
    style?: CSSProperties;
    children?: string;
    strong?: boolean;
    bold?: boolean;
}
