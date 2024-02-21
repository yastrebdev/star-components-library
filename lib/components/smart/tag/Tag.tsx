import type { SCL_TagProps } from './type'
import { MouseEvent, useState } from 'react'
import { Icon } from '../../primitive/icons/Icon'
import cn from 'classnames'
import './style.scss'

export const Tag: React.FC<SCL_TagProps> = ({
    children = 'Im tag',
    className,
    style,
    closeIcon,
    onClose,
    preventDefault,
}) => {
    const [visible, setVisible] = useState<boolean>(true)

    const handleClose = (e: MouseEvent<SVGSVGElement>) => {
        setVisible(preventDefault ? true : false)
        onClose && onClose(e);
    }

    return (
        <>
            {visible && (
                <div data-testid='scl-tag-test' style={style} className={cn('scl-tag', className)}>
                    <span className="scl-tag__text">{children}</span>
                    {closeIcon && <Icon testid='scl-close-icon-test' size={14} name="X" onClick={handleClose} />}
                </div>
            )}
        </>
    )
}
