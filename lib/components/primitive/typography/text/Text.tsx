import cn from "classnames"
import { SCL_TypogrphyTextProps } from "../types"

export const Text: React.FC<SCL_TypogrphyTextProps> = ({
    type = 'default',
    children = 'Text',
    strong,
    bold,
    className,
    style,
}) => {
    const fontWeightClasses = {
        'scl-typography-text_strong': strong,
        'scl-typography-text_bold': bold,
    }

    switch (type) {
        case 'secondary':
            return (
                <span
                    className={cn(
                        'scl-typography-text scl-typography-text__secondary',
                        fontWeightClasses,
                        className
                    )}
                    style={style}>
                    {children}
                </span>
            )
        case 'success':
            return (
                <span
                    className={cn(
                        'scl-typography-text scl-typography-text__success',
                        fontWeightClasses,
                        className
                    )}
                    style={style}>
                    {children}
                </span>
            )
        case 'warning':
            return (
                <span
                    className={cn(
                        'scl-typography-text scl-typography-text__warning',
                        fontWeightClasses,
                        className
                    )}
                    style={style}>
                    {children}
                </span>
            )
        case 'danger':
            return (
                <span
                    className={cn(
                        'scl-typography-text scl-typography-text__danger',
                        fontWeightClasses,
                        className
                    )}
                    style={style}>
                    {children}
                </span>
            )
        case 'default':
            return (
                <span
                    className={cn(
                        'scl-typography-text',
                        fontWeightClasses,
                        className
                    )}
                    style={style}>
                    {children}
                </span>
            )
    }
}