import { useState, useEffect } from 'react'
import { IoChatbubbleOutline, IoHeartOutline, IoShareOutline, IoEllipsisHorizontalOutline } from "react-icons/io5";
import { BsRepeat } from "react-icons/bs";
import './index.css'

const Message = ({ userId, body, setVisibility, id }) => {

    const [userData, setUserData] = useState({})

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${userId}`).then((res) => res.json()).then((data) => setUserData(data))
    }, [])

    const messageModModal = () => setVisibility({visible:true, id})

return (
    <div className="Message">
        <div className="Message__up-container">
            <img src={userData.image} alt={userData.username} className="Message__profile-icon" />
            <div className="Header__text-container">
                <span>@{userData.username}</span>
                <span> {userData.email}</span>
                <p>{body}</p>
            </div>
            <div onClick={messageModModal} className='Message__option'>
                <IoEllipsisHorizontalOutline />
            </div>
        </div>
        <div className="Message__icon-container">
            <div>
                <IoChatbubbleOutline />
            </div>
            <div>
                <BsRepeat />
            </div>
            <div>
                <IoHeartOutline />
            </div>
            <IoShareOutline />
        </div>
    </div>
)
}

export default Message