import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './components/IDform'
import { Route,Routes } from 'react-router-dom'
import Hero from './components/Display'
import Hero2 from './components/Display2'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <fieldset>
      <legend>The Form : </legend>
    <div style={{display:'flex'}}>

    <div>
      <FormComponent/>
    </div>

  <Routes>

<Route path='/people/:heroID' element={<Hero/>}/>
<Route path='/planets/:heroID' element={<Hero2/>}/>

</Routes>

    </div>

    
    
    </fieldset>
    </>
  )
}

export default App
