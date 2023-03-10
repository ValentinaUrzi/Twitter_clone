import './index.css'
import { useState, useEffect } from 'react'
import Message from './message'
import SideTrends from '../sideTrends'
import SideMenu from '../sideMenu'
import { trends } from '../../mocks/trends'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import Header from '../header'
import { IoSettingsOutline, IoPersonCircleOutline, IoImageOutline, IoBarChartOutline, IoHappyOutline } from 'react-icons/io5'
import { AiOutlineGif } from "react-icons/ai";
import Input from '../input'
import Button from '../button/Button'

const MainContent = ({ menuVisibile, inputRef, setVisibility }) => {

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
                <div className="Header_input">
                    <div className="Header_input-top">
                        <IoPersonCircleOutline />
                        <Input className="H_input" type='text' placeholder='Cosa succede?' />
                    </div>
                    <div className="Header_input-bottom">
                        <div className="Header_input-icons">
                            <IoImageOutline />
                            <AiOutlineGif />
                            <IoBarChartOutline />
                            <IoHappyOutline />
                        </div>
                        <Button text='Tweet' />
                    </div>
                </div>
                {filteredPosts && filteredPosts.length ? filteredPosts.map((post) => (<Message setVisibility={setVisibility} userId={post.userId} body={post.body} key={post.id} id={post.id} />)) : <p className='no_result'>Non ci sono risultati</p>}
            </div>
            <div className="Input_wrapper">
                <Input className="MainContent_input" inputRef={inputRef} type="text" value={value} placeholder="🔍 Cerca un Tweet" setValue={setValue} />
                <div className="MainContent_sideTrends">
                    <div className="SideTrends_wrapper"><h2>Trend per te</h2><IoSettingsOutline /></div>
                    {trends.map((trend) => (<SideTrends trendsData={trend} key={trend.id} />))}
                </div>
            </div>
        </div>
    )
}

export default MainContent

