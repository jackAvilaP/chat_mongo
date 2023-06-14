import { useEffect, useState } from "react";
import { chat, obtainChat } from "../../api/chat"
import { useSelector } from "react-redux";

const NavBarChats = ({ chatId }) => {


  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    // (async () => {
    //   try {
    //     const response = await obtainChat(chatId);
    //     setUserChat(response.data)


    //     console.log(userChat)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // )()

    //obtainChat(chatId).then(res => setUserChat(res.data))
    //console.log(userChat)
    // const otherUser = localStorage.getItem("id") === userChat.participant_one._id ? userChat.participant_one : userChat.participant_two
    // console.log(otherUser)
  }, [])

  return (
    <nav className="navBarChats">
      <div className="avatar placeholder justify-center items-center gap-3">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
          <span>MX</span>
        </div>
        <p>nockName</p>
      </div>
    </nav>
  )
}

export default NavBarChats