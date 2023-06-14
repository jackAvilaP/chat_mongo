
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { ChatMessage, getAllMessages } from '../api/chatMessage';
import { getChatByIdThunk } from '../app/chatSlice';
import ListMessages from '../components/chats/ListMessages';
import { SendTextThunk } from '../app/messageSlice';
import { socket } from '../utils/sockets';

const Messages = () => {
    const { idChat, unitChat } = useSelector(state => state.chats);
    const dispatch = useDispatch();
    const { id } = useSelector(state => state.user);
    const [lastMessage, setLastMessage] = useState("")
    const [allMessages, setAllMessages] = useState([])
    const [sendMessage, setSendMessage] = useState("")

    const userChat = id === unitChat.participant_one?._id ? unitChat.participant_two : unitChat.participant_one;

    useEffect(() => {
        ChatMessage(idChat).then(res => setLastMessage(res.data.message));
        dispatch(getChatByIdThunk(idChat))
    }, [idChat])


    const newMessage = (newMessage) => {
        setLastMessage(newMessage)
    }

    useEffect(() => {
        socket.on("message_notify", newMessage)
    }, [sendMessage])

    useEffect(() => {
        getAllMessages(idChat).then(res => {

            setAllMessages(res.data.messages)
        })
    }, [lastMessage])

    const send = (e) => {
        e.preventDefault();
        dispatch(SendTextThunk(idChat, sendMessage));
        setSendMessage("");
    }


    return (
        <div className='w-screen h-screen overflow-x-hidden overflow-y-hidden'>
            <nav className="navBarChats">
                <div className="avatar placeholder justify-center items-center gap-3">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                        <p className="text-primary font-extrabold"> {userChat?.email.slice(0, 2).toUpperCase()} </p>
                    </div>
                    <p>{userChat?.email}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hover:scale-105 hover:text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </nav>

            <div className="h-[66%]  justify-end overflow-y-scroll my-2 scroll-smooth">
                {
                    allMessages.map(item => (
                        <div key={uuid()}>
                            <ListMessages messageList={item} id={id} />
                        </div>
                    ))
                }

            </div>

            <div className="">
                <form onSubmit={send}>
                    <div className="flex justify-center items-center">
                        <input
                            type="text"
                            placeholder="Send me a message"
                            className="input input-bordered input-primary w-full mx-2"
                            onChange={(e) => setSendMessage(e.target.value)}
                            value={sendMessage}
                        />
                        <button className="rounded-full bg-primary p-3 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Messages