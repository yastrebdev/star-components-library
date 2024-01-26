// import type { MouseEvent } from 'react'
// import type { IconName } from '../../components/icons/icons'
// import cn from 'classnames'
// import { Icon } from '../../components/icons'
// import { Typography } from '../Typography'
// import './style.scss'

// const { Text } = Typography

// interface ButtonProps {
//     type?: string
//     size?: string
//     icon?: IconName
//     children?: string
//     onClick?: (event: MouseEvent<HTMLButtonElement>) => void
// }

// export const Button: React.FC<ButtonProps> = ({
//     type = 'primary',
//     size = 'lg',
//     icon,
//     children = `I'm button`,
//     onClick,
// }) => {
//     const iconSize = size === 'md' ? 20 : size === 'sm' ? 16 : 24

//     return (
//         <button
//             onClick={onClick}
//             className={cn('button-scl', {
//                 [`button-scl__type-${type}`]: type,
//                 [`button-scl__size-${size}`]: size,
//                 [`button-scl__icon`]: icon,
//             })}>
//             <Text
//                 type="button"
//                 className={cn({
//                     [`text-scl__button_${size}`]: size,
//                 })}>
//                 {children}
//             </Text>
//             {icon && (
//                 <Icon
//                     name={icon}
//                     style={{ width: iconSize, height: iconSize }}
//                 />
//             )}
//         </button>
//     )
// }

// export default Button
