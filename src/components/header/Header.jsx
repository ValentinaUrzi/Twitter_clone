import './index.css'
import menu from '../../assets/icons/menu.png'
import spark from '../../assets/icons/spark.png'

const Header = () => {
    return (
        <div className="Header">
            <img src={menu} alt='menu'/>
            <img src="https://img.icons8.com/fluency/256/twitter.png" alt="twitter logo" />
            <img src={spark} alt="sparkling icon" />
        </div>
    )
}

export default Header