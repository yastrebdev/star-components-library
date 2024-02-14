import type { SCL_MessageProps } from './type'
import { Icon } from 'components/primitive/icons'
import './style.scss'
import cn from 'classnames'

export const Message: React.FC<SCL_MessageProps> = ({visible}) => {
    return (
        <div className={cn('scl-message', {
            ['scl-message__animation']: visible
        })}>
            <Icon name='Info' weight='fill' color='#b3bbfd'/>
            <span>Copied!</span>
        </div>
    )
}