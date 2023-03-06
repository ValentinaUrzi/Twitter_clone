import './index.css'
import Message from './message'
import { posts } from '../../mocks/posts'

const MainContent = () => {
    return (
        <div className="MainContent">
            {posts.map((post) => (<Message postData={post} />))}
        </div>
    )
}

export default MainContent

