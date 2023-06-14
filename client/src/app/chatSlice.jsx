import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ENV } from '../utils/contants';

export const chatSlice = createSlice({
    name: 'chats',
    initialState: {
        idChat: "",
        chatList: [],
        unitChat: {}
    },

    reducers: {
        setListChat: (state, action) => {
            state.chatList = action.payload;
        },
        setIdChat: (state, action) => {
            state.idChat = action.payload;
        },
        setUnitChat: (state, action) => {
            state.unitChat = action.payload;
        }
    }
})

export const { setListChat, setIdChat, setUnitChat } = chatSlice.actions;
export default chatSlice.reducer;

export const getAllChatsThunk = () => async (dispatch) => {
    const token = localStorage.getItem("access")

    try {
        const response = await axios.get(`${ENV.API_URL}/${ENV.ENDPOINTS.CHAT}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(setListChat(response.data));
    } catch (error) {
        console.log(error)
    }
}

export const getChatByIdThunk = (idChat) => async (dispatch) => {
    dispatch(setIdChat(idChat))
    const token = localStorage.getItem("access")

    try {
        const response = await axios.get(`${ENV.API_URL}/${ENV.ENDPOINTS.CHAT}/${idChat}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(setUnitChat(response.data));
    } catch (error) {
        console.log(error)
    }

}


export const createChatThunk =(user_one, user_two)=> async (dispatch) => {

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

        await axios.request(config).then(res=>console.log(res.data));

        //return result.data;
    } catch (error) {
        console.log(error)
    }
}