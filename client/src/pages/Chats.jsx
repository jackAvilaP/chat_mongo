
import { useDispatch, useSelector } from "react-redux";
import ListChats from "../components/chats/ListChats";
//import ListContacts from "../components/contacts/ListContacts";
import { initSocket } from "../utils/sockets"
import { useEffect } from "react";
import { getAllChatsThunk, getChatByIdThunk } from "../app/chatSlice";
import { v4 as uuid } from 'uuid';
import { getMeThunk } from "../app/userSlice";
import { useNavigate } from "react-router-dom";



initSocket();
const Chats = () => {
    const { chatList } = useSelector(state => state.chats);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getAllChatsThunk())
        dispatch(getMeThunk())
    }, [])

    const dectedChatId = (id) => {
        dispatch(getChatByIdThunk(id))
        navigate("/messages")
    }
    return (
        <div className="w-screen overflow-y-hidden overflow-x-auto">
            {/* <div className="body-chats">
                <aside className="sidebar-chats">
                    <div className="">
                        <div className=" text-xl font-medium ">
                            <h1 className="font-bold text-2xl p-2">Contactos</h1>
                        </div>
                        <div className="">
                            <ListContacts />
                        </div>
                    </div>
                    <div className="">

                        <div className="text-xl font-medium">
                            <h1 className="font-bold text-2xl p-2">Chats</h1>
                        </div>
                        <div className="">
                            <ul>
                                {chatList.map(chat => (
                                    <li key={uuid()}>
                                        <ListChats chat={chat} />
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                </aside>

                <section className="messages-chats">
                    <ViewChat />
                </section>
            </div > */}
            <ul>
                {chatList?.map(chat => (
                    <li key={uuid()} onClick={() => dectedChatId(chat._id)}>
                        <ListChats chat={chat} />
                    </li>
                ))
                }
            </ul>
        </div >
    )
}

export default Chats