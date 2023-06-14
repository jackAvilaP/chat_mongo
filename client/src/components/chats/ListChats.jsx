import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatMessage } from "../../api/chatMessage";
import { socket } from "../../utils/sockets";



const ListChats = ({ chat }) => {
    const dispatch = useDispatch();
    const { id } = useSelector(state => state.user);
    const [message, setMessage] = useState("")
    const { participant_one, participant_two } = chat;



    const userChat = id === participant_one?._id ? participant_two : participant_one;

    useEffect(() => {
        socket.emit("subscribe", `${chat._id}_notify`);
        socket.on("message_notify", newMessage)
    }, [chat._id])

    useEffect(() => {
        ChatMessage(chat._id).then(res => setMessage(res.data.message))
    }, [chat._id])

    const newMessage = (newMessage) => {
        if (newMessage.user._id !== id) {
            if (chat._id === newMessage.chat) {
                setMessage(newMessage.message)

            }
        }
    }


    return (
        <div>
            {
                chat ? (
                    <div className="cardChatsMessage"  >
                        <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                <p className="text-primary font-extrabold"> {userChat?.email.slice(0, 2).toUpperCase()} </p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-semibold">{userChat?.email}</p>
                            <p className="text-primary">{message || " "}</p>
                        </div>
                    </div>
                ) : (
                    <div className="cardChatsMessage">
                        <p>no tienes ningun chat, selecciona un contacto para empezar chat</p>
                    </div >
                )
            }
        </div >
    )
}

export default ListChats