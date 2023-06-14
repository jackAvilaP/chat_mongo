import { useEffect } from "react"
import { getAllUsers, getMeThunk } from "../../app/userSlice"
import { useDispatch, useSelector } from "react-redux";
import { createChatThunk } from "../../app/chatSlice";
import { useNavigate } from "react-router-dom";

const ListContacts = () => {
    const { allUsers, id } = useSelector(state => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("access")
        if (token != "") {
            dispatch(getAllUsers(token))
        }
        dispatch(getMeThunk())
    }, [])

    // crear chats
    const handlesContact = (idTwo) => {
        dispatch(createChatThunk(id, idTwo))
    }

    return (
        <ul className="containerChats">
            {allUsers?.map(user => (
                <li className="cardChatsMessage" key={user?._id} onClick={() => {
                    navigate("/chats")
                    handlesContact(user._id)
                }
                }>
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                            <span className="text-primary font-extrabold">{user?.email.slice(0, 2).toUpperCase()}</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <p className="font-semibold">{user?.email}</p>
                        </div>
                    </div>
                </li>

            ))


            }

        </ul>
    )
}

export default ListContacts