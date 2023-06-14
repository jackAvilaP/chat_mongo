
const ListMessages = ({ messageList, id }) => {
    
    return (
        <div className={`chat chat-${id===messageList.user._id?"end":"start"} flex justify-${id===messageList.user._id?"end":"start"} p-4`}>
            <div className={`chat-bubble chat-bubble-${id===messageList?.user?._id?"primary":""}`}>{messageList.message}</div>
        </div>
    )
}

export default ListMessages