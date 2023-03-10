import './index.css'

const Input = ({ className, type, placeholder, value, setValue, inputRef }) => {
    return (
        <div className="Input">
            <input className={className} type={type} ref={inputRef} value={value} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} />
        </div>)
}

export default Input