import type { SCL_InputPropsPassword } from '../type'
import { useState } from 'react'
import { Icon } from 'components/primitive/icons'
import cn from 'classnames'
import '../style.scss'

export const Password: React.FC<SCL_InputPropsPassword> = ({
    hideIcon = true,
    placeholder = 'password',
    iconColor = '#000000',
}) => {
    const [visible, setVisible] = useState(false)
    const [inputValue, setInputValue] = useState('')

    console.log(inputValue)

    const onClickIcon = () => {
        setVisible(!visible)
    }

    const icon = visible ? 'EyeSlash' : 'Eye'
    const type = visible ? 'text' : 'password'

    return (
        <div className="scl-input">
            <input
                className="scl-input__field"
                type={type}
                placeholder={placeholder}
                onChange={(e) => setInputValue(e.target.value)}
            />
            {hideIcon && (
                <div
                    data-testid='password-icon'
                    onClick={onClickIcon}
                    className={cn('scl-input__icon scl-input__icon_password')}>
                    <Icon name={icon} color={iconColor} />
                </div>
            )}
        </div>
    )
}
