import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


const NavBar = () => {
    const navigate = useNavigate();
    const [change, setChange] = useState(1);

    const active = "active";

    let location = useLocation();

    useEffect(() => {
        if (`/contact` === location.pathname) {
            setChange(1)

        }

        if (`/chats` === location.pathname) {
            setChange(2)

        }
        if (`/messages` === location.pathname) {
            setChange(3)
        }
    }, [location.pathname])


    const handlesClick = (data) => {
        if (data === "contact") {
            setChange(1)
            navigate("/contact")
        }

        if (data === "chats") {
            setChange(2)
            navigate("/chats")
        }
        if (data === "messages") {
            setChange(3)
            navigate("/messages")
        }

    }
    return (
        <div className="btm-nav">
            <button name="contact" className={`${change == 1 ? active : ''}`} id="contact" onClick={() => { handlesClick("contact") }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <span className="btm-nav-label">Contactos</span>
            </button>
            <button className={`${change == 2 ? active : ''}`} onClick={() => handlesClick("chats")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="btm-nav-label">Chats</span>
            </button>
            <button name="mensaje" className={`${change == 3 ? active : ''}`} onClick={() => handlesClick("messages")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
                <span className="btm-nav-label">Mensajes</span>
            </button>
        </div>
    )
}

export default NavBar;