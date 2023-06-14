import { ENV } from "../utils/contants";
import axios from "axios";

export const register = async (email, password) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.REGISTER}`;

        await axios.post(url, { email, password }).then(res => console.log(res.data))

    } catch (error) {
        console.log(error);
    }
}

export const login = async (email, password) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.AUTH.LOGIN}`;

        await axios.post(url, { email, password }).then(res => {
            localStorage.setItem("access", res.data.access)
        })

    } catch (error) {
        console.log(error);
    }
}

export const getMe = async (token) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ME}`;

        const result = await axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        localStorage.setItem("id", result.data._id)
        return result;

    } catch (error) {
        console.log(error);
    }
}

export const getAllUsers = async () => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER}`;
        
          await axios.get(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access")}`
            }
        }).then(res => res.data)

         
    } catch (error) {
        console.log(error)
    }
}


