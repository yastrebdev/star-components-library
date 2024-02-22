import { CSSProperties, MouseEvent } from "react";
export interface SCL_TagProps {
    children?: string;
    className?: string;
    style?: CSSProperties;
    onClose?: (event: MouseEvent<SVGSVGElement>) => void;
    closeIcon?: boolean;
    preventDefault?: boolean;
}
