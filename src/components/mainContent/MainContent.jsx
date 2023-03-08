import './index.css'
import { useState, useEffect } from 'react'
import Message from './message'
import SideTrends from '../sideTrends'
import SideMenu from '../sideMenu'
import { trends } from '../../mocks/trends'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'

const MainContent = ({ menuVisibile }) => {

    const [postsList, setPostsList] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=20').then((res) => res.json()).then(({ posts }) => setPostsList(posts))
    }, [])

    return (
        <div className="MainContent">
            <HamburgerMenu menuVisibile={menuVisibile} />
            <SideMenu />
            <div className="MainContent_message-container">
                {postsList.map((post) => (<Message userId={post.userId} body={post.body} key={post.id} />))}
            </div>
            <div className="MainContent_sideTrends">
                {trends.map((trend) => (<SideTrends trendsData={trend} key={trend.id} />))}
            </div>
        </div>
    )
}

export default MainContent

