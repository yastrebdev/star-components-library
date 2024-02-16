import { MouseEvent } from "react";
export interface SCL_TagProps {
    children?: string;
    className?: string;
    onClose?: (event: MouseEvent<SVGSVGElement>) => void;
    closeIcon?: boolean;
    preventDefault?: boolean;
}
