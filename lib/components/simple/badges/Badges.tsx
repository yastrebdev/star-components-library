import type { SCL_BadgesProps } from './type'
import { Icon } from 'components/primitive/icons'
import cn from 'classnames'
import './style.scss'

export const Badges: React.FC<SCL_BadgesProps> = ({
    icon,
    className,
    iconName = 'Check',
    children,
    position = 'tr',
}) => {
    return (
        <div className="scl-badges-wrapper">
            <div
                className={cn(
                    'scl-badges',
                    {
                        [`scl-badges__${position}`]: position,
                    },
                    className
                )}>
                {icon || <Icon name={iconName} size={16} />}
            </div>
            {children}
        </div>
    )
}
