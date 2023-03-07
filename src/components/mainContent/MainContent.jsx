import './index.css'
import Message from './message'
import SideTrends from '../sideTrends'
import SideMenu from '../sideMenu'
import { posts } from '../../mocks/posts'
import { trends } from '../../mocks/trends'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'

const MainContent = ({ menuVisibile }) => {
    return (
        <div className="MainContent">
            <HamburgerMenu menuVisibile={menuVisibile} />
            <SideMenu />
            <div className="MainContent_message-container">
                {posts.map((post) => (<Message postData={post} key={post.id} />))}
            </div>
            <div className="MainContent_sideTrends">
                {trends.map((trend) => (<SideTrends trendsData={trend} key={trend.id} />))}
            </div>
        </div>
    )
}

export default MainContent

