import './index.css'

const Modal = ({ children, isVisible, setVisibility }) => {
    return (
        <div className= {`Modal ${isVisible ? "Modal-visible" : ""}`}>
            <div className="Modal__overlay" onClick={setVisibility}></div>
            <div className="Modal__content">
                {children}
            </div>
        </div >
    )
}

export default Modal