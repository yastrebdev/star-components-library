import type { SCL_StaticCardProps } from './type'
import { Icon } from 'components/primitive/icons'
import cn from 'classnames'
import './style.scss'

export const ClickableCard: React.FC<SCL_StaticCardProps> = ({
    type = 'secondary',
    iconName = 'ChatCircle',
    title = 'Text Writer',
    subtitle = 'Youre scenario',
    className,
    style,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            style={style}
            className={cn(
                'scl-clickable-card',
                {
                    [`scl-clickable-card__type-${type}`]: type,
                },
                className
            )}>
            <div className="scl-clickable-card__top">
                <div className="scl-clickable-card__top_icon scl-clickable-card__top_icon-fill">
                    <Icon name={iconName} />
                </div>
                <div className="scl-clickable-card__top_icon scl-clickable-card__top_icon-border">
                    <Icon name="ArrowUpRight" />
                </div>
            </div>
            <div>
                <div className="scl-clickable-card__title">{title}</div>
                <div className="scl-clickable-card__subtitle">{subtitle}</div>
            </div>
        </div>
    )
}
