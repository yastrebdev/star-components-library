import React, { useState } from 'react';

type MessageType = 'success' | 'error' | 'warning';

interface Message {
    type: MessageType;
    content: string;
}

interface MessageApi {
    success: (content: string) => void;
    error: (content: string) => void;
    warning: (content: string) => void;
}

const useMessage = (): [MessageApi, React.ReactNode] => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [visible, setVisible] = useState(false);

    const openMessage = (type: MessageType, content: string) => {
        setTimeout(() => {
            setVisible(true)
        }, 0);

        const newMessage: Message = { type, content };
        setMessages([...messages, newMessage]);

        setTimeout(() => {
            setVisible(false)
        }, 3000);
        setTimeout(() => {
            setMessages(messages.filter(message => message !== newMessage));
        }, 3500);
    };

    const messageApi: MessageApi = {
        success: (content: string) => openMessage('success', content),
        error: (content: string) => openMessage('error', content),
        warning: (content: string) => openMessage('warning', content),
    };

    const contextHolder: React.ReactNode = React.createElement(
        'div',
        null,
        messages.map((message, index) =>
                React.createElement(
                'div',
                {
                    key: index,
                    className: `scl-message ${message.type} ${visible && 'scl-message__animation'}`
                },
                message.content
            )
        )
    );

    return [messageApi, contextHolder];
};

export default useMessage;