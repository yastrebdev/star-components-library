import React, { useState } from 'react';

type MessageType = 'success' | 'error' | 'warning' | 'info';

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
    
    console.log('1', messages)
    
    const openMessage = (type: MessageType, content: string) => {
        const newMessage: Message = { type, content };
        console.log('2', messages)
        setMessages([...messages, newMessage]);

        setTimeout(() => {
            setVisible(true)
            console.log('3', messages)
        }, 0);

        setTimeout(() => {
            setVisible(false)
            console.log('4', messages)
        }, 3000);

        for (let i = 0; i < messages.length; i++) {
            setTimeout(() => {
                setMessages(messages.filter(message => message !== newMessage));
            }, 3200);
            console.log('5', messages)
        }
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