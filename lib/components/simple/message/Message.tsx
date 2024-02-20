// import type { SCL_MessageProps } from './type'
// import { Icon } from 'components/primitive/icons'
// import cn from 'classnames'
import './style.scss'
import useMessage from './utils/useMessage'

// export const Message: React.FC<SCL_MessageProps> = ({visible, title = 'Copied!'}) => {
//     return (
//         <div className={cn('scl-message', {
//             ['scl-message__animation']: visible
//         })}>
//             <Icon name='Info' weight='fill' color='#b3bbfd'/>
//             <span>{title}</span>
//         </div>
//     )
// }

export const message = () => null

message.useMessage = useMessage