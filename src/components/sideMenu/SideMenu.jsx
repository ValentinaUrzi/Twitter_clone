import './index.css'
import { IoLogoTwitter, IoHomeOutline, IoSearchOutline, IoNotificationsOutline, IoMailOutline, IoPersonOutline, IoChatbubblesOutline, IoBookmarksOutline, IoWarningOutline } from "react-icons/io5";
import Button from '../button/Button';

const SideMenu = ({ inputRef }) => {
    const clickSearch = () => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <div className="SideMenu">
            <IoLogoTwitter className='twitter_logo' />
            <div className="home">
                <IoHomeOutline />
                <h3>Home</h3>
            </div>
            <div className="search" onClick={clickSearch}>
                <IoSearchOutline />
                <h3>Cerca</h3>
            </div>
            <div className="notify">
                <IoNotificationsOutline />
                <h3>Notifiche</h3>
            </div>
            <div className="profile">
                <IoMailOutline />
                <h3>Messaggi</h3>
            </div>
            <div className="chat">
                <IoChatbubblesOutline />
                <h3>Argomenti</h3>
            </div>
            <div className="mark">
                <IoBookmarksOutline />
                <h3>Segnalibri</h3>
            </div>
            <div className="profile">
                <IoPersonOutline />
                <h3>Profilo</h3>
            </div>
            <div className="bugs">
                <IoWarningOutline />
                <h3>Bugs</h3>
            </div>
            <Button text={"Tweet"} />
        </div>
    )
}

export default SideMenu