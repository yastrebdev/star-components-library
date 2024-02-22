import type { SCL_InputProps } from '../type'
import { MouseEvent, useState } from 'react'
import { Button } from 'components/simple/button'
import { Icon } from 'components/primitive/icons'
import cn from 'classnames'
import '../style.scss'

export const Default: React.FC<SCL_InputProps> = ({
    className,
    style,
    placeholder = 'default',
    value,
    icon,
    iconColor = '#a0a0a0',
    buttonIcon = 'PaperPlaneRight',
    button,
    onClickButton,
    onChange,

    emptyValidation = true,
}) => {
    const [inputValue, setInputValue] = useState('')
    const [emptyField, setEmptyField] = useState(false)

    const handleButtonClick = (
        e: MouseEvent<HTMLButtonElement>,
        value: string
    ) => {
        if (inputValue === '') {
            setEmptyField(true)
        }
        onClickButton && onClickButton(e, value)
        setInputValue('')
    }

    return (
        <div className="scl-input">
            <input
                type="text"
                className={cn('scl-input__field', className, {
                    ['scl-input__field_icon']: icon,
                    ['scl-input__field_emptyField']:
                        emptyValidation && emptyField,
                })}
                style={style}
                placeholder={placeholder}
                value={value || inputValue}
                onChange={(e) => {
                    const value = e.target.value
                    setInputValue(value)
                    onChange && onChange(value)
                    setEmptyField(false)
                }}
            />
            {emptyValidation && emptyField && (
                <div data-testid='scl-validation-text-test' className="scl-input__empty-error">
                    Поле не должно быть пустым!
                </div>
            )}
            {icon && (
                <div className="scl-input__icon">
                    <Icon name={icon} color={iconColor} />
                </div>
            )}
            {button && (
                <div className="scl-input__button">
                    <Button
                        onClick={(e) => {
                            handleButtonClick(e, inputValue)
                        }}
                        size="sm"
                        shape="circle"
                        icon={buttonIcon}
                    />
                </div>
            )}
        </div>
    )
}
