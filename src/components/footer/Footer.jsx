import './index.css'
import home from '../../assets/icons/home.png'
import search from '../../assets/icons/search.png'
import bell from '../../assets/icons/bell.png'
import letter from '../../assets/icons/letter.png'

const Footer = () => {
    return (
        <div className="Footer">
            <img src={home} alt="home" />
            <img src={search} alt="search" />
            <img src={bell} alt="bell" />
            <img src={letter} alt="letter" />
        </div>
    )
}

export default Footer