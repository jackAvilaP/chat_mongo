import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ENV } from '../utils/contants';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        allUsers: [],
        message: '',
        lastMessage: '',
        id: '',
    },

    reducers: {
        setAllUser: (state, action) => {
            state.allUsers = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        setLastMessage: (state, action) => {
            state.lastMessage = action.payload;
        },
        setId: (state, action) => {
            state.id = action.payload;
        }
    }
})

export const { setAllUser, setMessage, setId } = userSlice.actions;

export default userSlice.reducer;


export const getMeThunk = () => async (dispatch) => {
    const token = localStorage.getItem("access")
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ME}`;

        const result = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        dispatch(setId(result.data._id))
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;

        await axios.post(url, { email, password }).then((res) => {
            dispatch(setMessage(res.data.message))
            localStorage.setItem("access", res.data?.access)
        })

    } catch (error) {
        console.log(error);
    }
}

export const registerThunk = (nickName, email, password) => async (dispatch) => {
    try {

        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;

        await axios.post(url, { nickName, email, password }).then((res) => {
            dispatch(setMessage(res.data.message))
        })

    } catch (error) {
        console.log(error);
    }
}

export const getAllUsers = () => async (dispatch) => {
    const token = localStorage.getItem("access")
    try {
        const response = await axios.get(`${ENV.API_URL}/${ENV.ENDPOINTS.USER}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch(setAllUser(response.data.users));
    } catch (error) {
        console.log(error);
    }

}

