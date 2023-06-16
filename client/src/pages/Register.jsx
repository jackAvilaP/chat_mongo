import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk, setMessage } from '../app/userSlice';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { message } = useSelector(state => state.user)
    const [nickName, setNickName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (message === "success") {
            setEmail("")
            setPassword("")
            setNickName("")
            dispatch(setMessage(""))
            navigate("/login")
        } else {
            setEmail("")
            setPassword("")
            setNickName("")
        }
    }, [message])


    const handlesRegister = (e) => {
        e.preventDefault();
        dispatch(registerThunk(nickName, email, password));
    }
    return (
        <div className="flex justify-center items-center">
            <form className=' max-w-sm p-4 shadow-2xl rounded-2xl' onSubmit={handlesRegister}>
                <section className="text-center my-6">
                    <h1 className="font-medium text-3xl">Register now!</h1>
                </section>
                <section className='h-1/2 my-6'>
                    <label className="text-xl">Nickname: </label>
                    <input type="text" placeholder="Nickname" className="input mt-2 input-bordered input-primary w-full" onChange={(e) => setNickName(e.target.value)} />
                </section>
                <section className='h-1/2 my-6'>
                    <label className="text-xl">Email: </label>
                    <input type="email" placeholder="Email" className="input mt-2 input-bordered input-primary w-full" onChange={(e) => setEmail(e.target.value)} />
                </section>
                <section className='h-1/2 my-6'>
                    <label className="text-xl">Password: </label>
                    <input type="password" placeholder="Password" className="input  mt-2 input-bordered input-primary w-full" onChange={(e) => setPassword(e.target.value)} />
                </section>
                <button className='btn btn-primary w-full my-6'>Register</button>
                <div className="flex justify-end">

                    <button
                        className="btn btn-primary btn-outline btn-xs border-none"
                        onClick={() => navigate("/login")}
                    >
                        <p className="text-base mx-1">login</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register