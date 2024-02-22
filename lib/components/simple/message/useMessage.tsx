import { Icon } from 'components/primitive/icons'
import { Flip, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './style.scss'

type MessageType = 'success' | 'error' | 'warning' | 'info'

interface MessageApi {
    open: (type: MessageType, content: string) => void
}

const useMessage = (): [MessageApi, React.ReactNode] => {
    const messageApi: MessageApi = {
        open: (type, content) => {
            switch (type) {
                case 'success':
                    toast.success(content, {
                        className: 'scl-message',
                        icon: (
                            <Icon
                                name="CheckCircle"
                                color="#52c41a"
                                weight="fill"
                            />
                        ),
                    })
                    break
                case 'error':
                    toast.error(content, {
                        className: 'scl-message',
                        icon: (
                            <Icon
                                name="Warning"
                                color="#e50000"
                                weight="fill"
                            />
                        ),
                    })
                    break
                case 'warning':
                    toast.warn(content, {
                        className: 'scl-message',
                        icon: (
                            <Icon
                                name="WarningDiamond"
                                color="#ff7a00"
                                weight="fill"
                            />
                        ),
                    })
                    break
                case 'info':
                    toast.info(content, {
                        className: 'scl-message',
                        icon: (
                            <Icon testid='scl-message-icon-test' name="Info" color="#8843ff" weight="fill" />
                        ),
                    })
                    break
                default:
                    toast('Default Notification !')
                    break
            }
        },
    }

    const contextHolder = (
        <ToastContainer
            closeButton={false}
            position="top-center"
            autoClose={3000}
            transition={Flip}
            closeOnClick
            draggable
        />
    )

    return [messageApi, contextHolder]
}

export default useMessage
