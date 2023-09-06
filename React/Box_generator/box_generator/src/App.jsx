import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Thebox from './assets/components/Thebox'
import Boxes from './assets/components/Boxes'



function App() {
  const [count, setCount] = useState(0)


  const boxes = [
    { color: "danger" },
    {color: "primary" },
    {color: "secondary" },
  ]
  const [boxesstate, setboxes] = useState([...boxes])

  const addbox = (newcolor) => {
    setboxes([...boxesstate,{color: newcolor}])
  }


  return (
    <>
    <fieldset>
    <legend>Box Creation</legend>
    <Thebox addbox={addbox}/>
    <Boxes boxes={boxesstate}/>

    </fieldset >
    </>
  )
}

export default App
