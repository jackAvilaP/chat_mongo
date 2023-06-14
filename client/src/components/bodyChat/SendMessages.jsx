

const SendMessages = () => {
    return (
        <div className="sendMessages">
            <form>
                <div className="flex justify-center items-center">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-full m-2 "
                    />
                    <button className="rounded-full bg-primary p-4">
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
    )
}

export default SendMessages