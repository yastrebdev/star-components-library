import type { SCL_CardProps } from './type'
import { Icon } from 'components/primitive/icons'
import cn from 'classnames'
import './style.scss'

export const StaticCard: React.FC<SCL_CardProps> = ({
    className,
    style,
    title = 'This is card',
    subtitle = '01.02.23',
    iconName = 'DotsThree',
    icon,
    onClick,
}) => {
    return (
        <div data-testid="scl-card-test" style={style} className={cn('scl-card', className)}>
            <div className="scl-card__left">
                <span className="scl-card__title">{title}</span>
                <span className="scl-card__subtitle">{subtitle}</span>
            </div>
            <div className="scl-card__right">
                <div data-testid='scl-card-icon-test' className="scl-card__icon" onClick={onClick}>
                    {icon || <Icon name={iconName} />}
                </div>
            </div>
        </div>
    )
}
