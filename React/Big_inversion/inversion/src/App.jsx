import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/PersonCard'



function App() {
  const [count, setCount] = useState(0)
  
  const person = [
    { firstName: "bechir", lastname: "berraies", age: 23, hairColor: "blue" },
    { firstName: "bechir", lastname: "berraies", age: 23, hairColor: "blue" },
    { firstName: "bechir", lastname: "berraies", age: 23, hairColor: "blue" },
    { firstName: "bechir", lastname: "berraies", age: 23, hairColor: "blue" },
  ];


  return (
    <>
    
    <PersonCard people={person} />

    </>
  )
}

export default App
