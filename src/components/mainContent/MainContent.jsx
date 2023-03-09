import './index.css'
import { useState, useEffect } from 'react'
import Message from './message'
import SideTrends from '../sideTrends'
import SideMenu from '../sideMenu'
import { trends } from '../../mocks/trends'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import Header from '../header'
import { IoSettingsOutline } from 'react-icons/io5'
import Input from '../input'

const MainContent = ({ menuVisibile, inputRef }) => {

    const [postsList, setPostsList] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const [value, setValue] = useState("")

    useEffect(() => {
        fetch('https://dummyjson.com/posts?limit=20').then((res) => res.json()).then(({ posts }) => { setPostsList(posts); setFilteredPosts(posts) })
    }, [])

    useEffect(() => {
        postsList && setFilteredPosts(postsList.filter(post => post.body.toLowerCase().includes(value.toLowerCase())))
    }, [value])

    return (
        <div className="MainContent">
            <HamburgerMenu menuVisibile={menuVisibile} />
            <SideMenu inputRef={inputRef} />
            <div className="MainContent_message-container">
                <Header isDesktop />
                {filteredPosts && filteredPosts.lenght ? filteredPosts.map((post) => (<Message userId={post.userId} body={post.body} key={post.id} />)) : <p className='no_result'>Non ci sono risultati</p>}
            </div>
            <div className="Input_wrapper">
                <Input inputRef={inputRef} value={value} setValue={setValue} />
                <div className="MainContent_sideTrends">
                    <div className="SideTrends_wrapper"><h2>Trend per te</h2><IoSettingsOutline /></div>
                    {trends.map((trend) => (<SideTrends trendsData={trend} key={trend.id} />))}
                </div>
            </div>
        </div>
    )
}

export default MainContent

