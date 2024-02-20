import type { SCL_InputPropsPassword } from '../type'
import { useState } from 'react'
import { Icon } from 'components/primitive/icons'
import cn from 'classnames'
import '../style.scss'

export const Password: React.FC<SCL_InputPropsPassword> = ({
    visibleIcon = false,
    visibleValue = false,
    placeholder = 'password',
    value,
    iconColor = '#000000',
    onChange
}) => {
    const [visible, setVisible] = useState(visibleValue)
    const [inputValue, setInputValue] = useState('')

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
                value={value || inputValue}
                onChange={(e) => {
                    const value = e.target.value
                    setInputValue(value)
                    onChange && onChange(value)
                }}
            />
            {visibleIcon && (
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
