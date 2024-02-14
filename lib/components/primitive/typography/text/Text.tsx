import type { SCL_TypogrphyTextProps } from '../types'
import cn from 'classnames'

export const Text: React.FC<SCL_TypogrphyTextProps> = ({
    type = 'default',
    children,
    strong,
    bold,
    className,
    style,
    onClick,
}) => {
    const fontWeightClasses = {
        'scl-typography-text_strong': strong,
        'scl-typography-text_bold': bold,
    }

    const TextElement = (type?: string) => {
        return (
            <span
                onClick={onClick}
                className={cn(
                    'scl-typography-text',
                    type && `scl-typography-text__${type}`,
                    fontWeightClasses,
                    className
                )}
                style={style}>
                {children}
            </span>
        )
    }

    const textTypes = {
        secondary: 'secondary',
        success: 'success',
        warning: 'warning',
        danger: 'danger',
        default: 'default',
    }

    switch (type) {
        case textTypes.secondary:
            children = textTypes.secondary
            return TextElement(textTypes.secondary)
        case textTypes.success:
            children = textTypes.success
            return TextElement(textTypes.success)
        case textTypes.warning:
            children = textTypes.warning
            return TextElement(textTypes.warning)
        case textTypes.danger:
            children = textTypes.danger
            return TextElement(textTypes.danger)
        case textTypes.default:
            children = textTypes.default
            return TextElement()
    }
}
