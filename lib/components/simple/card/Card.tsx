import type { SCL_CardProps } from './type'
import { Icon } from 'components/primitive/icons'
import cn from 'classnames'
import './style.scss'

export const Card: React.FC<SCL_CardProps> = ({
    className,
    style,
    title = 'This is card',
    subtitle = '01.02.23',
    iconName = 'DotsThree',
    icon,
    onClick = () => console.log('click icon card')
}) => {
    return (
        <div style={style} className={cn('scl-card', className)}>
            <div className='scl-card__left'>
                <span className='scl-card__title'>{title}</span>
                <span className='scl-card__subtitle'>{subtitle}</span>
            </div>
            <div className='scl-card__right'>
                <div className='scl-card__icon' onClick={onClick}>
                    {icon ? icon : <Icon name={iconName}/>}
                </div>
            </div>
        </div>
    )
}
