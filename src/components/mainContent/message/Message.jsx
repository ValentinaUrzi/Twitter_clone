import { IoChatbubbleOutline, IoHeartOutline, IoShareOutline } from "react-icons/io5";
import { BsRepeat } from "react-icons/bs";
import './index.css'

const Message = ({ postData }) => {

    const { image, userName, email, body, message, retweet, like } = postData;
    return (
        <div className="Message">
            <div className="Message__up-container">
                <img src={image} alt={userName} className="Message__profile-icon" />
                <div className="Header__text-container">
                    <span>@{userName.replace(" ", "")}</span>
                    <span> {email}</span>
                    <p>{body}</p>
                </div>
            </div>
            <div className="Message__icon-container">
                <div>
                    <IoChatbubbleOutline />
                    <span>{message}</span>
                </div>
                <div>
                    <BsRepeat />
                    <span>{retweet}</span>
                </div>
                <div>
                    <IoHeartOutline />
                    <span>{like}</span>
                </div>
                <IoShareOutline />
            </div>
        </div>
    )
}

export default Message