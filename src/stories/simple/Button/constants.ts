import { icons } from "components/primitive/icons/icons";
import { SCL_ButtonShape, SCL_ButtonSize, SCL_ButtonType } from "components/simple/button/type";

export const options = {
    types: ['primary', 'secondary'] as SCL_ButtonType[],
    sizes: ['sm', 'md', 'lg'] as SCL_ButtonSize[],
    shapes: ['rounded', 'normal', 'circle'] as SCL_ButtonShape[],
    icons: [icons],
}