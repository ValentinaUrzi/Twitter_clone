import './App.css'
import { useState, useRef } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import MainContent from './components/mainContent'

function App() {
  const [menuVisibile, setMenuVisible] = useState(false)

  // esercizio del 09/03/3023 - UseRef -
  // ref su search della sidebar desktop version (icona lente di ingrandimento).
  // Al clic del div del componente Sidebar viene evidenziato (onFocus) 
  // l'input entro il quale si può ricercare un tweet tramite parola chiave.

  const inputRef = useRef()

  return (
    <div className="App">
      <Header setMenuVisible={setMenuVisible} />
      <MainContent inputRef={inputRef} menuVisibile={menuVisibile} />
      <Footer />
    </div>
  )
}

export default App
