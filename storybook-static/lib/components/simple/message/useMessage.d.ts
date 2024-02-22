type MessageType = 'success' | 'error' | 'warning' | 'info';
export interface MessageApi {
    open: (type: MessageType, content: string) => void;
}
export default function useMessage(): [MessageApi, import("react").ReactNode];
export {};
