import type { SCL_SelectProps } from './type'
import { useState, useRef, useEffect } from 'react'
import { Icon } from 'components/primitive/icons'
import cn from 'classnames'
import './style.scss'

export const Select: React.FC<SCL_SelectProps> = ({
    options,
    defaultValue = (options && options[0].value) || 'default',
    value,
    iconName = 'CaretDown',
    onChange
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    
    const defaultValueItem = options?.find(item => item.value === defaultValue)
    const [headerValue, setHeaderValue] = useState(defaultValueItem?.label || defaultValue)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setVisible(false)
                console.log(ref.current)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])

    const items = options?.map((item, index) => {
        const active = item.label === headerValue
        return (
            <div
                onClick={() => {
                    setHeaderValue(item.label)
                    setVisible(false)
                    onChange && onChange(item.value)
                }}
                className={cn("scl-select__body__item", {
                    ['scl-select__body__item_active']: active
                })}
                key={index}>
                {item.label}
            </div>
        )
    })

    const onClickHeader = () => {
        setVisible(!visible)
    }

    return (
        <div ref={ref} className={'scl-select scl-select__wrapper'}>
            <div
                data-testid='scl-select-header-test'
                onClick={onClickHeader}
                className={cn('scl-select__header', {
                    ['scl-select__header_active']: visible,
                })}>
                <div className="scl-select__selected-item">{value || headerValue}</div>
                <div>
                    <Icon name={iconName} size={22} color="#a0a0a0" />
                </div>
            </div>
            <div
                data-testid='scl-select-body-test'
                className={cn('scl-select__body', {
                    [`scl-select__body_vivible`]: visible,
                })}>
                {items}
            </div>
        </div>
    )
}
