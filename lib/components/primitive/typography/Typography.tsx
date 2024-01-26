import type { CSSProperties } from 'react';
import cn from 'classnames'
import './style.scss'

interface SCL_TypogrphyTextProps {
    type?: 'default' | 'secondary';
    children?: string;
    strong?: boolean;
    bold?: boolean;
    className?: string;
    style?: CSSProperties
}

export const Typography: {
    Text: React.FC<SCL_TypogrphyTextProps>
} = {
    Text: ({ type = 'default', children = 'Text', strong, bold, className, style }) => {
        const fontWeightClasses = {
            'scl-typograpgy-text_strong': strong,
            'scl-typograpgy-text_bold': bold,
        }

        switch (type) {
            case 'secondary':
                return (
                    <span className={cn('scl-typography-text__secondary', fontWeightClasses, className)} style={style}>
                        {children}
                    </span>
                )
            case 'default':
                return (
                    <span className={cn('scl-typography-text', fontWeightClasses, className)} style={style}>
                        {children}
                    </span>
                )
        }
    }
}