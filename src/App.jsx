import './App.css'
import { useState } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import MainContent from './components/mainContent'

function App() {
  const [menuVisibile, setMenuVisible] = useState(false)


  return (
    <div className="App">
      <Header setMenuVisible={setMenuVisible}/>
      <MainContent menuVisibile={menuVisibile}/>
      <Footer />
    </div>
  )
}

export default App
