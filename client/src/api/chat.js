import axios from "axios";
import { ENV } from "../utils/contants";

export const chat = async (user_one, user_two) => {

    try {
        let data = JSON.stringify({
            "participant_id_one": user_one,
            "participant_id_two": user_two
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access')}`
            },
            data: data
        };

        const result = await axios.request(config);

        return result;
    } catch (error) {
        console.log(error)
    }
}

export const getAllChats = async () => {
    try {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT}`;

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

export const obtainChat = async (chat_id) => {
    try {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHAT}/${chat_id}`;

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