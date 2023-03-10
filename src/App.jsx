import './App.css'
import { useState, useRef } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import MainContent from './components/mainContent'
import Modal from './components/modal/Modal'
import Input from './components/input'
import Button from './components/button/Button'

function App() {
  const [menuVisibile, setMenuVisible] = useState(false)
  const [isVisible, setVisibility] = useState({ visible: false, id: null })
  // Esercizio 09-03-2023 - useRef
  // ref su search della sidebar desktop version (icona lente di ingrandimento).
  // Al clic del div del componente Sidebar viene evidenziato (onFocus) 
  // l'input entro il quale si può ricercare un tweet tramite parola chiave.
  // ho scelto di posizionare il Ref qui per essere utilizzato in futuro anche nel componente Footer

  const inputRef = useRef()

  const [value, setValue] = useState("")

  const modifyTweets = () => {
    fetch(`https://dummyjson.com/posts/${isVisible.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: value,
      })
    }).then(closeModal)
  }

  const closeModal = () => {
    setVisibility({ visible: false, id: null })
  }

  return (
    <div className="App">
      <Header setMenuVisible={setMenuVisible} />
      <MainContent inputRef={inputRef} menuVisibile={menuVisibile} setVisibility={setVisibility} />
      <Footer />
      <Modal isVisible={isVisible.visible} setVisibility={closeModal} >
        <h2>Modifica il Tweet selezionato</h2>
        <Input className="MainContent_input"type={"text"} value={value} setValue={setValue} placeholder={"Scrivi il nuovo messaggio"} />
        <Button onClick={modifyTweets} text={"Invia le Modifiche"} />
      </Modal>
    </div>
  )
}

export default App
