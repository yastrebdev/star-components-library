import type { SCL_SwitchProps } from './type'
import { useState } from 'react'
import { Icon } from 'components/primitive/icons'
import cn from 'classnames'
import './style.scss'

export const Switch: React.FC<SCL_SwitchProps> = ({
    iconOff,
    iconOn,
    defaultValue = false,
    value,
    onChange = () => console.log('chnge'),
}) => {
    const [gap, isGap] = useState(false)
    const [on, isOn] = useState(defaultValue || value)
    const [stretchOn, isStretchOn] = useState(false)
    const [stretchOff, isStretchOff] = useState(false)

    const onMouseDown = () => {
        isGap(true)
        isStretchOn(true)
        if (on) {
            isStretchOff(true)
        }
    }

    const onMouseUp = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        isGap(false)
        isStretchOn(false)
        isStretchOff(false)
        if (event.button !== 0) return
        isOn(!on || value)
    }

    return (
        <div className="scl-switch-wrapper">
            <div
                onChange={onChange}
                className={cn('scl-switch')}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}>
                <div data-testid="scl-switch-icon" className="scl-switch__icon">
                    {(iconOff || iconOn) && (
                        <Icon name={iconOff} />
                    )}
                </div>
                <div className="scl-switch__icon">
                    {(iconOff || iconOn) && (
                        <Icon name={iconOn} />
                    )}
                </div>
            </div>
            <div
                className={cn('scl-switch__hendel', {
                    [`scl-switch__hendel_on`]: on,
                    [`scl-switch__hendel_stretch-on`]: stretchOn,
                    [`scl-switch__hendel_stretch-off`]: stretchOff,
                })}>
                <div
                    className={cn('scl-switch__hendel__circles', {
                        [`scl-switch__hendel__circles_closer`]: gap,
                    })}>
                    <div className="scl-switch__hendel__circles_left"></div>
                    <div className="scl-switch__hendel__circles_right"></div>
                </div>
            </div>
        </div>
    )
}
