import { configureStore } from "@reduxjs/toolkit";
import useReducer from './userSlice';
import chatReducer from './chatSlice';
import messageReducer from "./messageSlice";
export const store = configureStore({
    reducer: {
        user: useReducer,
        chats: chatReducer,
        messages: messageReducer
    }
})