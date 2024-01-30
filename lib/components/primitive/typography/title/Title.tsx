import type { SCL_TypogrphyTitleProps } from '../types'
import cn from 'classnames'

export const Title: React.FC<SCL_TypogrphyTitleProps> = ({
    level = 1,
    children = 'Title',
    className,
    style,
    strong,
    bold,
    regular
}) => {
    const titleWeightClasses = {
        'scl-typography-title_strong': strong,
        'scl-typography-title_bold': bold,
        'scl-typography-title_regular': regular,
    }

    switch (level) {
        case 1:
            return (
                <h1
                    className={cn(
                        'scl-typography-title scl-typography-title__h1',
                        titleWeightClasses,
                        className
                    )}
                    style={style}>
                    {children}
                </h1>
            )
        case 2:
            return (
                <h2
                    className={cn(
                        'scl-typography-title scl-typography-title__h2',
                        titleWeightClasses,
                        className
                    )}
                    style={style}>
                    {children}
                </h2>
            )
        case 3:
            return (
                <h3
                    className={cn(
                        'scl-typography-title scl-typography-title__h3',
                        titleWeightClasses,
                        className
                    )}
                    style={style}>
                    {children}
                </h3>
            )
        case 4:
            return (
                <h4
                    className={cn(
                        'scl-typography-title scl-typography-title__h4',
                        titleWeightClasses,
                        className
                    )}
                    style={style}>
                    {children}
                </h4>
            )
        case 5:
            return (
                <h5
                    className={cn(
                        'scl-typography-title scl-typography-title__h5',
                        titleWeightClasses,
                        className
                    )}
                    style={style}>
                    {children}
                </h5>
            )
        case 6:
            return (
                <h6
                    className={cn(
                        'scl-typography-title scl-typography-title__h6',
                        titleWeightClasses,
                        className
                    )}
                    style={style}>
                    {children}
                </h6>
            )
    }
}
