import cn from "classnames"
import { SCL_TypogrphyTextProps } from "../types"

export const Text: React.FC<SCL_TypogrphyTextProps> = ({
    type = 'default',
    children,
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
            children = 'secondary'
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
            children = 'success'
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
            children = 'warning'
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
            children = 'danger'
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
            {children = 'default'}
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