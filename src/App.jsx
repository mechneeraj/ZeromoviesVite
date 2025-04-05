import { useState } from 'react'
import './App.css'
import BottomIcon from './Components/BottomNavigation'
import HeroImage from './Components/HeroImage'
import Navbar from './Components/navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroImage />
      <BottomIcon/>
    </>
  )
}

export default App
