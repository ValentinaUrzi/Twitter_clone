import './index.css'
import { IoHomeOutline, IoSearchOutline, IoNotificationsOutline, IoMailOutline, IoPersonOutline, IoChatbubblesOutline, IoBookmarksOutline, IoWarningOutline } from "react-icons/io5";

const SideMenu = () => {
    return (
        <div className="SideMenu">
            <div className="profile">
                <IoPersonOutline />
                <h3>Profilo</h3>
            </div>
            <div className="profile">
                <IoHomeOutline />
                <h3>Home</h3>
            </div>
            <div className="profile">
                <IoSearchOutline />
                <h3>Cerca</h3>
            </div>
            <div className="profile">
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
            <div className="bugs">
                <IoWarningOutline />
                <h3>Bugs</h3>
            </div>
        </div>
    )
}

export default SideMenu