import cn from 'classnames'
import { SCL_TypogrphyLinkProps } from '../types'

export const Link: React.FC<SCL_TypogrphyLinkProps> = ({
    href = 'https://www.google.com',
    target = '_blank',
    children = `I'am google`,
    className,
    style,
    strong,
    bold
}) => {
    const fontWeightClasses = {
        'scl-typography-link_strong': strong,
        'scl-typography-link_bold': bold,
    }

    return (
        <a
            href={href}
            target={target}
            className={cn('scl-typography-link', fontWeightClasses, className)}
            style={style}>
                {children}
        </a>
    )
}
