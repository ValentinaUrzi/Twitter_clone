import './index.css'
import { IoMenu, IoLogoTwitter, IoSparklesOutline } from "react-icons/io5";

const Header = ({ setMenuVisible, isDesktop }) => {
    return (
        <div className={`${isDesktop ? "header_desktop" : 'Header'}`}>
            {!isDesktop && <>
                <IoMenu onClick={(() => setMenuVisible((prevMenuVisible) => !prevMenuVisible))} />
                <IoLogoTwitter />
            </>}
            {isDesktop && <h2>Home</h2>} 
            <IoSparklesOutline />
        </div>
    )
}

export default Header