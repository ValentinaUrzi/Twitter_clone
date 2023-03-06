import mess from '../../../assets/icons/mess.png'
import retweet from '../../../assets/icons/retweet.png'
import pref from '../../../assets/icons/pref.png'
import share from '../../../assets/icons/share.png'
import './index.css'

const Message = ({ postData }) => {

    const { image, userName, email, body } = postData;
    return (
        <div className="Message">
            <div className="Message__up-container">
                <img src={image} alt={userName} className="Message__profile-icon" />
                <div className="Header__text-container">
                    <span>@{userName.replace(" ", "")}</span>
                    <span> {email}</span>
                    <p>{body.substring(0, 100)}</p>
                </div>
            </div>
            <div className="Message__icon-container">
                <div>
                    <img src={mess} alt="message" />
                    <span>{parseInt(Math.random() * 20)}</span>
                </div>
                <div>
                    <img src={retweet} alt="retweet" />
                    <span>{parseInt(Math.random() * 20)}</span>
                </div>
                <div>
                    <img src={pref} alt="pref" />
                    <span>{parseInt(Math.random() * 20)}</span>
                </div>
                <img src={share} alt="share" />
            </div>
        </div>
    )
}

export default Message