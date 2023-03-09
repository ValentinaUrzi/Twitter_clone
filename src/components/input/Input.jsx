import './index.css'

const Input = ({value, setValue, inputRef}) => {
    return(
    <div className="Input">
        <input type="text" ref={inputRef} value={value} onChange={(e)=>setValue(e.target.value)} placeholder="🔍 Cerca un Tweet"/>
    </div>)
}

export default Input