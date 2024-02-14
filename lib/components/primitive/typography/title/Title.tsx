import type { SCL_TypogrphyTitleProps } from '../types'
import React from 'react';
import cn from 'classnames'

export const Title: React.FC<SCL_TypogrphyTitleProps> = ({
    level = 1,
    children = 'Title',
    className,
    style,
    strong,
    bold,
    regular,
    onClick
}) => {
    const titleWeightClasses = {
        'scl-typography-title_strong': strong,
        'scl-typography-title_bold': bold,
        'scl-typography-title_regular': regular,
    }

    const titleElement = (level = 1) => {
        const element = React.createElement(
            `h${level}`,
            {className: cn(
                'scl-typography-title',
                `scl-typography-title__h${level}`,
                titleWeightClasses,
                className),
            style: style,
            onClick: onClick
            },
            children
        )
        return element
    }

    switch (level) {
        case 1:
            return titleElement()
        case 2:
            return titleElement(2)
        case 3:
            return titleElement(3)
        case 4:
            return titleElement(4)
        case 5:
            return titleElement(5)
        case 6:
            return titleElement(6)
    }
}
