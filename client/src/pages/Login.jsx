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
                <div className="flex justify-end">

                    <button
                        className="btn btn-primary btn-outline btn-xs border-none"
                        onClick={() => navigate('/register')}
                    >
                        <p className="text-base mx-1">register</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>

                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login