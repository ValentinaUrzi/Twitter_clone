import './index.css'
import { IoMenu, IoLogoTwitter, IoSparklesOutline } from "react-icons/io5";

const Header = ({ setMenuVisible }) => {
    return (
        <div className="Header">
            <IoMenu onClick={(() => setMenuVisible((prevMenuVisible)=>!prevMenuVisible))} />
            <IoLogoTwitter />
            <IoSparklesOutline />
        </div>
    )
}

export default Header