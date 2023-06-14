import axios from "axios";
import { ENV } from "../utils/contants";


export const ChatMessage = async (chat_id) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT_MESSAGE_LAST}/${chat_id}`;

        const result = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access")}`
            }
        })

        return result;
    } catch (error) {
        console.log(error)
    }
}

export const getAllMessages = async (chat_id) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT_MESSAGE}/${chat_id}`;

        const result = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("access")}`
            }
        })

        return result;
    } catch (error) {
        console.log(error)
    }
}