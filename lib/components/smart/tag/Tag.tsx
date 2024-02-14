import type { SCL_TagProps } from './type'
import { useState } from 'react'
import { Icon } from '../../primitive/icons/Icon'
import cn from 'classnames'
import './style.scss'

export const Tag: React.FC<SCL_TagProps> = ({
    children = 'Im tag',
    className,
    closeIcon,
    onClose,
    preventDefault
}) => {
    const [visible, setVisible] = useState<boolean>(true)

    onClose = () => {
        !preventDefault && setVisible(false)
    }

    return (
        <>
            {visible && (
                <div className={cn('scl-tag', className)}>
                    <span className="scl-tag__text">{children}</span>
                    {closeIcon && (
                        <Icon
                            size={14}
                            name="X"
                            onClick={onClose}
                        />
                    )}
                </div>
            )}
        </>
    )
}
