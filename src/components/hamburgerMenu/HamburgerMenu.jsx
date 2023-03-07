import './index.css'
import { IoPersonOutline, IoChatbubblesOutline, IoBookmarksOutline, IoWarningOutline } from "react-icons/io5";

const HamburgerMenu = ({ menuVisibile }) => {
    return (
        <div className={`HamburgerMenu ${menuVisibile ? "menu-visible" : ""}`}>
            <div className="profile">
                <IoPersonOutline />
                <h3>Profilo</h3>
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

export default HamburgerMenu