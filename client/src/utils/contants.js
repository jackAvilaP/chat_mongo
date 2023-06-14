const SERVER_IP = "localhost:27017"

export const ENV = {
    SERVER_IP: SERVER_IP,
    BASE_PATH: `http://${SERVER_IP}`,
    API_URL: `http://${SERVER_IP}/api`,
    SOCKET_URL: `http://${SERVER_IP}`,
    ENDPOINTS: {
        AUTH: {
            REGISTER: "auth/register",
            LOGIN: "auth/login",
        },
        ME: "user/me",
        USER: "allusers",
        CHAT: "chat",
        CHAT_MESSAGE: "chat/message",
        CHAT_MESSAGE_LAST: "chat/message/last"
    }

}