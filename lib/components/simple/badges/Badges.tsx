import type { SCL_BadgesProps } from './type'
import { Icon } from 'components/primitive/icons'
import cn from 'classnames'
import './style.scss'

export const Badges: React.FC<SCL_BadgesProps> = ({
    icon,
    className,
    style,
    iconName = 'Check',
    children,
    position = 'tr',
}) => {
    return (
        <div className="scl-badges-wrapper">
            <div
                data-testid='scl-badges-test'
                style={style}
                className={cn(
                    'scl-badges',
                    {
                        [`scl-badges__${position}`]: position,
                    },
                    className
                )}>
                {icon || <Icon testid='scl-badges-icon-test' name={iconName} size={16} />}
            </div>
            {children}
        </div>
    )
}
