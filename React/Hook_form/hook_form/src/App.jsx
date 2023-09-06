import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonForm from './assets/components/PersonForm'


function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
    <PersonForm/>
    </>
  )
}

export default App
