import { SCL_InputProps } from './type'
import { Default } from './default/Default'
import { Password } from './password/Password'
import './style.scss'

export const Input: React.FC<SCL_InputProps> & {
    Password: typeof Password
} = () => {
    return <Default />
}

Input.Password = Password
