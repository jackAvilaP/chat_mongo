import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ENV } from '../utils/contants';

export const messagesSlice = createSlice({
    name: 'chatsMessage',
    initialState: {
        lastMessage: [],
    },

    reducers: {
        setLastMe: (state, action) => {
            state.lastMessage = action.payload;
        }
    }
})

export const { setLastMe } = messagesSlice.actions;
export default messagesSlice.reducer;

export const ChatMessageThunk = (chatId) => async (dispatch) => {
    const token = localStorage.getItem("access");
    try {
        const response = await axios.get(`${ENV.API_URL}/${ENV.ENDPOINTS.CHAT_MESSAGE_LAST}/${chatId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.message;
    } catch (error) {
        console.log(error)
    }
}


export const SendTextThunk = (chatId, message) => async (dispatch) => {
    const token = localStorage.getItem("access");
    try {
        let data = JSON.stringify({
            "chat_id": `${chatId}`,
            "message": `${message}`
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:27017/api/chat/message',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`

            },
            data: data
        };

        axios.request(config)
            // .then((response) => {
            //     console.log(JSON.stringify(response.data));
            // })
    } catch (error) {
        console.log(error)
    }
}