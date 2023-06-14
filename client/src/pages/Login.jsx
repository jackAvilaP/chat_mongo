import { useEffect, useState } from "react";
import { loginUser } from "../app/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handlesLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    }

    useEffect(() => {
        if (message === "success") {
            setTimeout(() => {
                navigate('/contact');
            }, 1000)
        } else {
            navigate('/login');
        }
    }, [message])


    return (
        <div className="flex justify-center items-center">
            <form className=' max-w-sm p-4 shadow-2xl rounded-2xl' onSubmit={handlesLogin}>
                <section className="text-center my-6">
                    <h1 className="font-medium text-3xl">Login now!</h1>
                </section>
                <section className='h-1/2 my-6'>
                    <label className="text-xl">Email: </label>
                    <input type="email" placeholder="Email" className="input mt-2 input-bordered input-primary w-full" onChange={(e) => setEmail(e.target.value)} />
                </section>
                <section className='h-1/2 my-6'>
                    <label className="text-xl">Password: </label>
                    <input type="password" placeholder="Password" className="input  mt-2 input-bordered input-primary w-full" onChange={(e) => setPassword(e.target.value)} />
                </section>
                <button className='btn btn-primary w-full my-6'>Sign in</button>
            </form>
        </div>
    )
}

export default Login