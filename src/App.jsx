import './App.css'
import { useState, useRef } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import MainContent from './components/mainContent'

function App() {
  const [menuVisibile, setMenuVisible] = useState(false)

  // Esercizio 09-03-2023 - useRef
  // ref su search della sidebar desktop version (icona lente di ingrandimento).
  // Al clic del div del componente Sidebar viene evidenziato (onFocus) 
  // l'input entro il quale si può ricercare un tweet tramite parola chiave.
  // ho scelto di posizionare il Ref qui per essere utilizzato in futuro anche nel componente Footer

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
