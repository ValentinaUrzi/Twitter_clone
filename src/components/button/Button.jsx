import './index.css'

const Button = ({ text, onClick, style }) => {
    return (
        <button className='Button' onClick={onClick} style={style}>{text}</button>
    )
}

export default Button